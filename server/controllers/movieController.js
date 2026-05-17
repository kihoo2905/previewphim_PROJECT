const Movie = require('../models/Movie');
const mongoose = require('mongoose');

// GET all movies
exports.getAllMovies = async (req, res) => {
    try {
        const { genre, region, type, isTrending, search, movieGroup } = req.query;
        let query = {};
        
        if (genre) query.genre = genre;
        if (region) query.region = region;
        if (type) query.type = type;
        if (movieGroup) query.movieGroup = movieGroup;
        if (isTrending) query.isTrending = isTrending === 'true';
        if (search) query.title = { $regex: search, $options: 'i' };

        const sortBy = req.query.sortBy || 'id';
        const order = req.query.order === 'desc' ? -1 : 1;

        // Use aggregation to get real-time average rating
        const movies = await Movie.aggregate([
            { $match: query },
            {
                $lookup: {
                    from: 'reviews',
                    localField: '_id',
                    foreignField: 'movie',
                    as: 'movie_reviews'
                }
            },
            {
                $addFields: {
                    rating: {
                        $cond: [
                            { $gt: [{ $size: '$movie_reviews' }, 0] },
                            { $round: [{ $avg: '$movie_reviews.rating' }, 1] },
                            { $ifNull: ['$rating', 0] }
                        ]
                    },
                    reviewCount: { $size: '$movie_reviews' }
                }
            },
            { $project: { movie_reviews: 0 } },
            { $sort: { [sortBy]: order, id: 1 } }
        ]);

        res.json(movies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET single movie
exports.getMovieById = async (req, res) => {
    try {
        // Use aggregation to get real-time average rating for single movie
        const movies = await Movie.aggregate([
            { 
                $match: mongoose.Types.ObjectId.isValid(req.params.id) 
                    ? { _id: new mongoose.Types.ObjectId(req.params.id) }
                    : { id: parseInt(req.params.id) }
            },
            {
                $lookup: {
                    from: 'reviews',
                    localField: '_id',
                    foreignField: 'movie',
                    as: 'movie_reviews'
                }
            },
            {
                $addFields: {
                    rating: {
                        $cond: [
                            { $gt: [{ $size: '$movie_reviews' }, 0] },
                            { $round: [{ $avg: '$movie_reviews.rating' }, 1] },
                            { $ifNull: ['$rating', 0] }
                        ]
                    },
                    reviewCount: { $size: '$movie_reviews' }
                }
            },
            { $project: { movie_reviews: 0 } }
        ]);

        if (!movies || movies.length === 0) return res.status(404).json({ message: 'Movie not found' });
        res.json(movies[0]);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// POST create movie
exports.createMovie = async (req, res) => {
    // Map 'collection' from frontend to 'movieGroup' in backend if needed
    const movieData = { ...req.body };
    if (movieData.collection) {
        movieData.movieGroup = movieData.collection;
        delete movieData.collection;
    }

    const movie = new Movie(movieData);
    try {
        const newMessage = await movie.save();
        res.status(201).json(newMessage);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// PUT update movie
exports.updateMovie = async (req, res) => {
    try {
        const movieData = { ...req.body };
        if (movieData.collection) {
            movieData.movieGroup = movieData.collection;
            delete movieData.collection;
        }

        const query = mongoose.Types.ObjectId.isValid(req.params.id) 
            ? { _id: req.params.id } 
            : { id: parseInt(req.params.id) };

        const updatedMovie = await Movie.findOneAndUpdate(
            query,
            movieData,
            { new: true }
        );
        
        if (!updatedMovie) return res.status(404).json({ message: 'Movie not found' });
        res.json(updatedMovie);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// DELETE movie
exports.deleteMovie = async (req, res) => {
    try {
        const query = mongoose.Types.ObjectId.isValid(req.params.id) 
            ? { _id: req.params.id } 
            : { id: parseInt(req.params.id) };

        const deletedMovie = await Movie.findOneAndDelete(query);
        if (!deletedMovie) return res.status(404).json({ message: 'Movie not found' });
        
        res.json({ message: 'Movie deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
