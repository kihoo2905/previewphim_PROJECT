const mongoose = require('mongoose');

const EpisodeSchema = new mongoose.Schema({
    id: Number,
    title: String,
    thumb: String,
    desc: String,
    rating: Number,
    date: String,
    embed: String,
    cast: [{ name: String, role: String }]
});

const SeasonSchema = new mongoose.Schema({
    id: Number,
    title: String,
    year: Number,
    poster: String,
    banner: String,
    description: String,
    episodes: [EpisodeSchema]
});

const MovieSchema = new mongoose.Schema({
    id: { type: Number, unique: true },
    title: { type: String, required: true },
    subtitle: String,
    poster: String,
    banner: String,
    genre: String,
    region: String,
    badge: String,
    type: { type: String, enum: ['Movie', 'Series'], default: 'Movie' },
    movieGroup: String,
    rating: { type: Number, default: 0 },
    year: Number,
    director: String,
    duration: String,
    trailerEmbed: String,
    description: String,
    preview: String,
    isTrending: { type: Boolean, default: false },
    isNetflixExclusive: { type: Boolean, default: false },
    tags: [String],
    cast: [{
        name: String,
        role: String,
        photo: String
    }],
    photos: [String],
    seasons: [SeasonSchema]
}, { 
    timestamps: true,
    suppressReservedKeysWarning: true 
});

module.exports = mongoose.model('Movie', MovieSchema);
