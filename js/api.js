const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.protocol === 'file:';
const BASE_URL = isLocal ? 'http://localhost:5000' : window.location.origin;
const API_URL = `${BASE_URL}/api`;

const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    return {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : ''
    };
};

window.MovieAPI = {
    getAssetUrl(path) {
        if (!path) return '';
        // If it's already an absolute URL or a special protocol, return as is
        if (path.startsWith('http') || path.startsWith('data:') || path.startsWith('blob:') || path.startsWith('indexeddb://')) {
            return path;
        }
        // If it's a relative path starting with /uploads, prepend BASE_URL
        if (path.startsWith('/uploads')) {
            return `${BASE_URL}${path}`;
        }
        // Default: return path as is (might be relative to current page)
        return path;
    },
    async getAllMovies(params = {}) {
        const query = new URLSearchParams(params).toString();
        const response = await fetch(`${API_URL}/movies?${query}`);
        return await response.json();
    },

    async getMovieById(id) {
        const response = await fetch(`${API_URL}/movies/${id}`);
        if (!response.ok) return null;
        return await response.json();
    },

    async createMovie(movieData) {
        const response = await fetch(`${API_URL}/movies`, {
            method: 'POST',
            headers: getAuthHeaders(),
            body: JSON.stringify(movieData)
        });
        return await response.json();
    },

    async updateMovie(id, movieData) {
        const response = await fetch(`${API_URL}/movies/${id}`, {
            method: 'PUT',
            headers: getAuthHeaders(),
            body: JSON.stringify(movieData)
        });
        return await response.json();
    },

    async deleteMovie(id) {
        const response = await fetch(`${API_URL}/movies/${id}`, {
            method: 'DELETE',
            headers: getAuthHeaders()
        });
        return await response.json();
    },

    // Auth
    async login(email, password) {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        return await response.json();
    },

    async register(username, email, password) {
        const response = await fetch(`${API_URL}/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password })
        });
        return await response.json();
    },

    // User Data (Watchlist & Reviews)
    async getWatchlist() {
        const response = await fetch(`${API_URL}/users/watchlist`, {
            headers: getAuthHeaders()
        });
        return await response.json();
    },

    async addToWatchlist(movieId) {
        const response = await fetch(`${API_URL}/users/watchlist/${movieId}`, {
            method: 'POST',
            headers: getAuthHeaders()
        });
        return await response.json();
    },

    async removeFromWatchlist(movieId) {
        const response = await fetch(`${API_URL}/users/watchlist/${movieId}`, {
            method: 'DELETE',
            headers: getAuthHeaders()
        });
        return await response.json();
    },

    async submitReview(reviewData) {
        const response = await fetch(`${API_URL}/users/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(reviewData)
        });
        return response.json();
    },

    async updateReview(reviewId, reviewData) {
        const response = await fetch(`${API_URL}/users/reviews/${reviewId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(reviewData)
        });
        return response.json();
    },

    async deleteReview(reviewId) {
        const response = await fetch(`${API_URL}/users/reviews/${reviewId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.json();
    },

    async toggleLikeReview(reviewId) {
        const response = await fetch(`${API_URL}/users/reviews/${reviewId}/like`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.json();
    },

    async getMovieReviews(movieId) {
        const response = await fetch(`${API_URL}/users/reviews/${movieId}`);
        return await response.json();
    },

    // Upload
    async uploadFile(file) {
        const formData = new FormData();
        formData.append('file', file);
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_URL}/upload/single`, {
            method: 'POST',
            headers: { 'Authorization': token ? `Bearer ${token}` : '' },
            body: formData
        });
        return await response.json();
    }
};
