const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User');
const Movie = require('../models/Movie');
const Review = require('../models/Review');
const auth = require('../middleware/auth');

// --- WATCHLIST ---

// Lấy danh sách Watchlist của User hiện tại
router.get('/watchlist', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).populate('watchlist');
        res.json(user.watchlist);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Thêm phim vào Watchlist
router.post('/watchlist/:movieId', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        const movieId = req.params.movieId;
        if (user.watchlist.some(id => id.toString() === movieId)) {
            return res.status(400).json({ message: 'Phim đã có trong Watchlist' });
        }
        user.watchlist.push(movieId);
        await user.save();
        res.json({ message: 'Đã thêm vào Watchlist', watchlist: user.watchlist });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Xóa phim khỏi Watchlist
router.delete('/watchlist/:movieId', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        user.watchlist = user.watchlist.filter(id => id.toString() !== req.params.movieId);
        await user.save();
        res.json({ message: 'Đã xóa khỏi Watchlist', watchlist: user.watchlist });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// --- REVIEWS ---

// Gửi bình luận và đánh giá
router.post('/reviews', auth, async (req, res) => {
    try {
        let { movieId, rating, title, text } = req.body;
        
        // Nếu movieId không phải là ObjectId hợp lệ, thử tìm theo id cũ
        if (!mongoose.Types.ObjectId.isValid(movieId)) {
            const movie = await Movie.findOne({ id: movieId });
            if (movie) {
                movieId = movie._id;
            } else {
                return res.status(404).json({ message: 'Không tìm thấy phim để đánh giá' });
            }
        }
        
        // Kiểm tra xem user đã review phim này chưa
        const existingReview = await Review.findOne({ user: req.user.id, movie: movieId });
        if (existingReview) {
            return res.status(400).json({ message: 'You have already reviewed this movie!' });
        }
        
        const review = new Review({
            user: req.user.id,
            movie: movieId,
            rating,
            title,
            text
        });
        
        await review.save();

        // Cập nhật lại điểm trung bình vào Model Movie
        const allReviews = await Review.find({ movie: movieId });
        if (allReviews.length > 0) {
            const totalRating = allReviews.reduce((sum, r) => sum + r.rating, 0);
            const newAvg = (totalRating / allReviews.length).toFixed(1);
            await Movie.findByIdAndUpdate(movieId, { rating: parseFloat(newAvg) });
        }
        
        res.status(201).json(review);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Lấy reviews cho 1 phim
router.get('/reviews/:movieId', async (req, res) => {
    try {
        let movieId = req.params.movieId;
        if (!mongoose.Types.ObjectId.isValid(movieId)) {
            const movie = await Movie.findOne({ id: movieId });
            if (movie) movieId = movie._id;
            else return res.status(404).json({ message: 'Không tìm thấy phim' });
        }

        const reviews = await Review.find({ movie: movieId })
            .populate('user', 'username avatar')
            .sort({ createdAt: -1 });
        
        // Tính toán điểm trung bình và tổng số lượng
        let averageRating = 0;
        if (reviews.length > 0) {
            const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
            averageRating = (sum / reviews.length).toFixed(1);
        }

        res.json({
            reviews,
            averageRating: parseFloat(averageRating),
            reviewCount: reviews.length
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Sửa review (Chỉ chủ nhân mới được sửa)
router.put('/reviews/:id', auth, async (req, res) => {
    try {
        const { rating, title, text } = req.body;
        const review = await Review.findById(req.params.id);
        
        if (!review) return res.status(404).json({ message: 'Không tìm thấy đánh giá' });
        
        // Check owner
        if (review.user.toString() !== req.user.id) {
            return res.status(403).json({ message: 'Bạn không có quyền sửa đánh giá này' });
        }

        review.rating = rating || review.rating;
        review.title = title || review.title;
        review.text = text || review.text;
        
        await review.save();

        // Cập nhật lại điểm trung bình của phim
        const allReviews = await Review.find({ movie: review.movie });
        const totalRating = allReviews.reduce((sum, r) => sum + r.rating, 0);
        const newAvg = (totalRating / allReviews.length).toFixed(1);
        await Movie.findByIdAndUpdate(review.movie, { rating: parseFloat(newAvg) });

        res.json(review);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Xóa review (Chủ nhân hoặc Admin)
router.delete('/reviews/:id', auth, async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);
        if (!review) return res.status(404).json({ message: 'Không tìm thấy đánh giá' });

        // Phải là chủ nhân HOẶC là Admin
        const user = await User.findById(req.user.id);
        if (review.user.toString() !== req.user.id && (!user || user.role !== 'admin')) {
            return res.status(403).json({ message: 'Bạn không có quyền xóa đánh giá này' });
        }

        const movieId = review.movie;
        await Review.findByIdAndDelete(req.params.id);

        // Cập nhật lại điểm trung bình của phim
        const allReviews = await Review.find({ movie: movieId });
        let newAvg = 0;
        if (allReviews.length > 0) {
            const totalRating = allReviews.reduce((sum, r) => sum + r.rating, 0);
            newAvg = (totalRating / allReviews.length).toFixed(1);
        }
        await Movie.findByIdAndUpdate(movieId, { rating: parseFloat(newAvg) });

        res.json({ message: 'Đã xóa đánh giá thành công' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Like/Unlike review
router.post('/reviews/:id/like', auth, async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);
        if (!review) return res.status(404).json({ message: 'Không tìm thấy đánh giá' });

        const index = review.likes.indexOf(req.user.id);
        if (index === -1) {
            // Like
            review.likes.push(req.user.id);
        } else {
            // Unlike
            review.likes.splice(index, 1);
        }

        await review.save();
        res.json({ likes: review.likes.length, isLiked: index === -1 });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
