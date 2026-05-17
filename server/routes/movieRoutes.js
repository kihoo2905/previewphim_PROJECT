const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

// GET all movies (Public)
router.get('/', movieController.getAllMovies);

// GET single movie (Public)
router.get('/:id', movieController.getMovieById);

// Protected Admin Routes
router.post('/', auth, admin, movieController.createMovie);
router.put('/:id', auth, admin, movieController.updateMovie);
router.delete('/:id', auth, admin, movieController.deleteMovie);

module.exports = router;
