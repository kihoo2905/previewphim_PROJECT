window.translations = {
    'en': {
        'nav_home': 'Home',
        'nav_movies': 'Movies',
        'nav_movies_all': 'Movies/Series',
        'nav_top_rated': 'Top Rated',
        'search_placeholder': 'Search movies...',
        'watchlist': 'Watchlist',
        'login': 'Log In',
        'signup': 'Sign Up',
        'logout': 'Logout',
        'trending_now': 'Trending Now',
        'featured': 'Featured',
        'view_all': 'View All',
        'footer_desc': 'Premium movie review and trailer platform built with modern web technologies.',
        'genre_action': 'Action',
        'genre_scifi': 'Sci-Fi',
        'genre_drama': 'Drama',
        'director': 'Director',
        'original_creator': 'Original Creator',
        'episodes': 'Episodes',
        'links': 'Links',
        'subscribe': 'Subscribe',
        'join': 'Join',
        'add_watchlist': 'Add to Watchlist',
        'added': 'Added',
        'genre_anime': 'Anime',
        'genre_horror': 'Horror',
        'genre_comedy': 'Comedy',
        'genre_romance': 'Romance',
        'genre_adventure': 'Adventure',
        'seasons': 'Seasons',
        'movies': 'Movies',
        'section_discover': 'Discover',
        'section_regions': 'Regions',
        'section_collections': 'Collections',
        'region_hollywood': 'Hollywood',
        'region_kdrama': 'K-Drama',
        'region_chinese': 'C-Drama',
        'coll_liveaction': 'Live-action',
        'coll_lgbtq': 'LGBTQ+',
        'genre': 'Genres',
        'nav_series': 'Series',
        'genre_school': 'School',
        'genre_teen': 'Teen',
        'genre_coming_of_age': 'Coming-of-age',
        'genre_bromance': 'Bromance',
        'genre_mystery': 'Mystery',
        'genre_thriller': 'Thriller',
        'genre_fantasy': 'Fantasy',
        'genre_animation': 'Animation',
        'genre_family': 'Family'
    },
    'vi': {
        'nav_home': 'Home',
        'nav_movies': 'Movies',
        'nav_movies_all': 'Movies/Series',
        'nav_top_rated': 'Top Rated',
        'search_placeholder': 'Search...',
        'watchlist': 'Watchlist',
        'login': 'Log In',
        'signup': 'Sign Up',
        'logout': 'Logout',
        'trending_now': 'Trending Now',
        'featured': 'Featured',
        'view_all': 'View All',
        'footer_desc': 'Premium movie review and trailer platform built with modern web technologies.',
        'genre_action': 'Action',
        'genre_scifi': 'Sci-Fi',
        'genre_drama': 'Drama',
        'director': 'Director',
        'original_creator': 'Original Creator',
        'episodes': 'Episodes',
        'links': 'Links',
        'subscribe': 'Subscribe',
        'join': 'Join',
        'add_watchlist': 'Add to Watchlist',
        'added': 'Added',
        'genre_anime': 'Anime',
        'genre_horror': 'Horror',
        'genre_comedy': 'Comedy',
        'genre_romance': 'Romance',
        'genre_adventure': 'Adventure',
        'seasons': 'Seasons',
        'movies': 'Movies',
        'section_discover': 'Discover',
        'section_regions': 'Regions',
        'section_collections': 'Collections',
        'region_hollywood': 'Hollywood',
        'region_kdrama': 'K-Drama',
        'region_chinese': 'C-Drama',
        'coll_liveaction': 'Live-action',
        'coll_lgbtq': 'LGBTQ+',
        'genre': 'Genres',
        'nav_series': 'Series',
        'genre_school': 'School',
        'genre_teen': 'Teen',
        'genre_coming_of_age': 'Coming-of-age',
        'genre_bromance': 'Bromance',
        'genre_mystery': 'Mystery',
        'genre_thriller': 'Thriller',
        'genre_fantasy': 'Fantasy',
        'genre_animation': 'Animation',
        'genre_family': 'Family'
    }
};

window.currentLang = localStorage.getItem('cinematic_lang') || 'en';

window.applyLanguage = function(lang) {
    window.currentLang = lang;
    localStorage.setItem('cinematic_lang', lang);
    $('#lang-btn').text(lang.toUpperCase());
    
    $('[data-i18n]').each(function() {
        const key = $(this).data('i18n');
        if (window.translations[lang][key]) {
            if ($(this).is('input')) {
                $(this).attr('placeholder', window.translations[lang][key]);
            } else {
                $(this).text(window.translations[lang][key]);
            }
        }
    });

    if (typeof window.updateNavbarAuth === 'function') {
        window.updateNavbarAuth();
    }
};

$(document).on('click', '.lang-switch', function(e) {
    e.preventDefault();
    const lang = $(this).data('lang');
    window.applyLanguage(lang);
});

const defaultMoviesData = [
    {
        id: 1,
        title: "Dune: Part One",
        poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
        banner: "https://image.tmdb.org/t/p/original/jYEW5xZkZk2WTrdbMGAPFuBqbDc.jpg",
        genre: "Sci-Fi",
        region: "Hollywood",
        rating: 8.0,
        year: 2021,
        director: "Denis Villeneuve",
        trailerEmbed: "https://www.youtube.com/embed/n9xhJrPXop4",
        description: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people.",
        isTrending: true,
        preview: "A mythic and emotionally charged hero's journey, Dune tells the story of Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, who must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence—a commodity capable of unlocking humanity's greatest potential—only those who can conquer their fear will survive.",
        cast: [
            { name: "Timothée Chalamet", role: "Paul Atreides", photo: "https://image.tmdb.org/t/p/w200/BE29y5o68uYv97897987.jpg" },
            { name: "Rebecca Ferguson", role: "Lady Jessica", photo: "https://image.tmdb.org/t/p/w200/7V9879879879879.jpg" },
            { name: "Oscar Isaac", role: "Duke Leto Atreides", photo: "https://image.tmdb.org/t/p/w200/987987987987.jpg" },
            { name: "Jason Momoa", role: "Duncan Idaho", photo: "https://image.tmdb.org/t/p/w200/987987987.jpg" }
        ],
        photos: [
            "https://image.tmdb.org/t/p/original/jYEW5xZkZk2WTrdbMGAPFuBqbDc.jpg",
            "https://image.tmdb.org/t/p/original/fm6KqXpk3M2HVveHwCrBRoOoA02.jpg",
            "https://image.tmdb.org/t/p/original/14QbnygCuTO0vl7CAFmZ7noaMNC.jpg",
            "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"
        ],
        seasons: [
            {
                id: 1,
                title: "Dune: Part One",
                year: 2021,
                poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
                banner: "https://image.tmdb.org/t/p/original/jYEW5xZkZk2WTrdbMGAPFuBqbDc.jpg",
                description: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding...",
                episodes: []
            },
            {
                id: 2,
                title: "Dune: Part Two",
                year: 2024,
                poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
                banner: "https://image.tmdb.org/t/p/original/fm6KqXpk3M2HVveHwCrBRoOoA02.jpg",
                description: "Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.",
                episodes: []
            }
        ]
    },
    {
        id: 2,
        title: "Interstellar",
        poster: "https://image.tmdb.org/t/p/w500/gEU2QlsUUHXjNpeMacBj4kSpBq0.jpg",
        banner: "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
        genre: "Sci-Fi",
        rating: 8.6,
        duration: "2h 49m",
        year: 2014,
        director: "Christopher Nolan",
        trailerEmbed: "https://www.youtube.com/embed/zSWdZVtXT7E",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        isTrending: true,
        cast: [
            { name: "Matthew McConaughey", role: "Cooper", photo: "https://image.tmdb.org/t/p/w200/gEU2QlsUUHXjNpeMacBj4kSpBq0.jpg" },
            { name: "Anne Hathaway", role: "Brand", photo: "https://image.tmdb.org/t/p/w200/o987987987.jpg" },
            { name: "Jessica Chastain", role: "Murph", photo: "https://image.tmdb.org/t/p/w200/vDxlS8v8S0E9oP9X9v9YvYvC9iE.jpg" },
            { name: "Ellen Burstyn", role: "Murph (older)", photo: "https://image.tmdb.org/t/p/w200/987987987987.jpg" }
        ],
        photos: [
            "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
            "https://image.tmdb.org/t/p/original/69Sns8WoetA6u6jJpY7YvYvC9iE.jpg"
        ]
    },
    {
        id: 3,
        title: "The Batman",
        poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50rSQT21A5M.jpg",
        banner: "https://image.tmdb.org/t/p/original/b0PlSNiZ3eDAnz247oK5t6yP12F.jpg",
        genre: "Action",
        rating: 7.8,
        year: 2022,
        director: "Matt Reeves",
        trailerEmbed: "https://www.youtube.com/embed/mqqft2x_Aa4",
        description: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
        isTrending: true
    },
    {
        id: 4,
        title: "Inception",
        poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        banner: "https://image.tmdb.org/t/p/original/s3TBrRGB1inv7Ero9kk2XN6XOE4.jpg",
        genre: "Sci-Fi",
        rating: 8.8,
        year: 2010,
        director: "Christopher Nolan",
        trailerEmbed: "https://www.youtube.com/embed/YoHD9XEInc0",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
        isTrending: false
    },
    {
        id: 5,
        title: "Oppenheimer",
        poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        banner: "https://image.tmdb.org/t/p/original/fm6KqXpk3M2HVveHwCrBRoOoA02.jpg",
        genre: "Drama",
        rating: 8.3,
        year: 2023,
        director: "Christopher Nolan",
        trailerEmbed: "https://www.youtube.com/embed/uYPbbksJxIg",
        description: "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",
        isTrending: true
    },
    {
        id: 6,
        title: "Spider-Man: No Way Home",
        poster: "https://image.tmdb.org/t/p/w500/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg",
        banner: "https://image.tmdb.org/t/p/original/14QbnygCuTO0vl7CAFmZ7noaMNC.jpg",
        genre: "Action",
        rating: 8.2,
        year: 2021,
        director: "Jon Watts",
        trailerEmbed: "https://www.youtube.com/embed/JfVOs4VSpmA",
        description: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
        isTrending: false
    },
    {
        id: 7,
        title: "Avatar",
        poster: "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
        banner: "https://image.tmdb.org/t/p/original/vL5LR6WdxWPjOUXyjzAMgP5kX1v.jpg",
        genre: "Sci-Fi",
        rating: 7.9,
        year: 2009,
        director: "James Cameron",
        trailerEmbed: "https://www.youtube.com/embed/d9MyW72ELq0",
        description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        isTrending: false
    },
    {
        id: 8,
        title: "Joker",
        poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfpt8NcCGOWxZ1toeg2.jpg",
        banner: "https://image.tmdb.org/t/p/original/n6bUvigpRFqSwmwpde2QYpdH2B2.jpg",
        genre: "Drama",
        rating: 8.4,
        year: 2019,
        director: "Todd Phillips",
        trailerEmbed: "https://www.youtube.com/embed/zAGVQLHvwOY",
        description: "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
        isTrending: false
    },
    {
        id: 9,
        title: "Your Name",
        poster: "https://image.tmdb.org/t/p/w500/q719jsmZvqbB7V4TMaHllNmcQ3f.jpg",
        banner: "https://image.tmdb.org/t/p/original/69Sns8WoetA6u6jJpY7YvYvC9iE.jpg",
        genre: "Anime",
        rating: 8.5,
        year: 2016,
        director: "Makoto Shinkai",
        trailerEmbed: "https://www.youtube.com/embed/s0wTdCQoc2k",
        description: "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
        isTrending: true
    },
    {
        id: 10,
        title: "The Conjuring",
        poster: "https://image.tmdb.org/t/p/w500/w9Vgu98YFm6960pZp579Y9mY0mZ.jpg",
        banner: "https://image.tmdb.org/t/p/original/7No99p2p7v96Zp6Y3Y7YvYvC9iE.jpg",
        genre: "Horror",
        rating: 7.5,
        year: 2013,
        director: "James Wan",
        trailerEmbed: "https://www.youtube.com/embed/k10ETZba3q8",
        description: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
        isTrending: false
    },
    {
        id: 11,
        title: "Superbad",
        poster: "https://image.tmdb.org/t/p/w500/vDxlS8v8S0E9oP9X9v9YvYvC9iE.jpg",
        banner: "https://image.tmdb.org/t/p/original/vDxlS8v8S0E9oP9X9v9YvYvC9iE.jpg",
        genre: "Comedy",
        rating: 7.6,
        year: 2007,
        director: "Greg Mottola",
        trailerEmbed: "https://www.youtube.com/embed/4eaZ_48ZH0k",
        description: "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.",
        isTrending: false,
        tags: ["School", "Teen"]
    },
    {
        id: 12,
        title: "Attack on Titan",
        subtitle: "Shingeki no Kyojin",
        poster: "https://image.tmdb.org/t/p/w500/hTP1DtL71h98v3QEIDhJ9thms4V.jpg",
        banner: "https://image.tmdb.org/t/p/original/yDqiY7pY6HkS6Y1uXh9YvYvC9iE.jpg",
        genre: "Anime",
        rating: 9.1,
        year: 2013,
        director: "Hajime Isayama",
        trailerEmbed: "https://www.youtube.com/embed/MGRm4IzK1SQ",
        description: "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
        isTrending: true,
        seasons: [
            {
                id: 1,
                title: "Season 1",
                episodes: [
                    { 
                        id: 1, 
                        title: "To You, in 2000 Years: The Fall of Shiganshina, Part 1", 
                        thumb: "https://image.tmdb.org/t/p/w300/69Sns8WoetA6u6jJpY7YvYvC9iE.jpg",
                        desc: "In a walled city besieged by fear of Titans, impulsive Eren dreams of the world beyond the walls - until a sudden attack shatters the fragile peace.",
                        rating: 9.2,
                        date: "Sep 28, 2013",
                        embed: "https://www.youtube.com/embed/MGRm4IzK1SQ",
                        cast: [
                            { name: "Yuki Kaji", role: "Eren Jaeger (Voice)" },
                            { name: "Yui Ishikawa", role: "Mikasa Ackerman (Voice)" },
                            { name: "Marina Inoue", role: "Armin Arlert (Voice)" }
                        ]
                    },
                    { 
                        id: 2, 
                        title: "That Day: The Fall of Shiganshina, Part 2", 
                        thumb: "https://image.tmdb.org/t/p/w300/69Sns8WoetA6u6jJpY7YvYvC9iE.jpg",
                        desc: "As Titans overrun Shiganshina, Eren, Mikasa, and Armin flee for their lives while the fall of their home thrusts them into a harsh new reality.",
                        rating: 8.5,
                        date: "May 10, 2014",
                        embed: "https://www.youtube.com/embed/MGRm4IzK1SQ",
                        cast: [
                            { name: "Yuki Kaji", role: "Eren Jaeger (Voice)" },
                            { name: "Yui Ishikawa", role: "Mikasa Ackerman (Voice)" }
                        ]
                    }
                ]
            },
            {
                id: 2,
                title: "Season 2",
                episodes: [
                    { 
                        id: 3, 
                        title: "A Dim Light Amid Despair: Humanity's Comeback, Part 1", 
                        thumb: "https://image.tmdb.org/t/p/w300/69Sns8WoetA6u6jJpY7YvYvC9iE.jpg",
                        desc: "As Eren begins Cadet Corps training, a difficult maneuvering test threatens his dream of joining humanity's fight against the Titans.",
                        rating: 8.1,
                        date: "May 17, 2014",
                        embed: "https://www.youtube.com/embed/MGRm4IzK1SQ",
                        cast: [
                            { name: "Hiroshi Kamiya", role: "Levi (Voice)" },
                            { name: "Daisuke Ono", role: "Erwin Smith (Voice)" }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 13,
        title: "Crash Landing on You",
        subtitle: "Hạ Cánh Nơi Anh",
        poster: "https://image.tmdb.org/t/p/w500/vX9YHoNreIpsZp6Y3Y7YvYvC9iE.jpg",
        banner: "https://image.tmdb.org/t/p/original/vX9YHoNreIpsZp6Y3Y7YvYvC9iE.jpg",
        genre: "Romance",
        region: "K-Drama",
        rating: 8.7,
        year: 2019,
        director: "Lee Jeong-hyo",
        description: "A paragliding mishap drops a South Korean heiress in North Korea - and into the life of an army officer, who decides he will help her hide.",
        isTrending: true
    },
    {
        id: 14,
        title: "Hidden Love",
        subtitle: "Vụng Trộm Không Thể Giấu",
        poster: "https://image.tmdb.org/t/p/w500/vX9YHoNreIpsZp6Y3Y7YvYvC9iE.jpg",
        banner: "https://image.tmdb.org/t/p/original/vX9YHoNreIpsZp6Y3Y7YvYvC9iE.jpg",
        genre: "Romance",
        region: "C-Drama",
        rating: 8.8,
        year: 2023,
        director: "Sha Wei Qi",
        description: "Sang Zhi falls in love with Duan Jia Xu, a boy who often comes to her house to play games in her older brother's room.",
        isTrending: true
    },
    {
        id: 15,
        title: "One Piece",
        subtitle: "Live Action",
        poster: "https://image.tmdb.org/t/p/w500/vX9YHoNreIpsZp6Y3Y7YvYvC9iE.jpg",
        banner: "https://image.tmdb.org/t/p/original/vX9YHoNreIpsZp6Y3Y7YvYvC9iE.jpg",
        genre: "Adventure",
        region: "Hollywood",
        collection: "Live-action",
        rating: 8.5,
        year: 2023,
        director: "Various",
        description: "In a seafaring world, a young pirate captain sets out with his crew to attain the title of Pirate King, and to discover the mythical treasure known as 'One Piece'.",
        isTrending: true
    },
    {
        id: 16,
        title: "Sex Education",
        poster: "https://image.tmdb.org/t/p/w500/8Jv6SOfp8T7S707t5Cof6S86Z7.jpg",
        banner: "https://image.tmdb.org/t/p/original/9v35pXG9pX8mX9mX9mX9mX9mX9m.jpg",
        genre: "School",
        type: "Series",
        rating: 8.3,
        year: 2019,
        director: "Laurie Nunn",
        description: "A teenage boy with a sex therapist mother teams up with a high school classmate to set up an underground sex therapy clinic at school.",
        isTrending: true,
        duration: "45m / ep",
        tags: ["School", "Teen", "LGBTQ+"],
        seasons: [
            { id: 1, title: "Season 1", year: 2019, episodes: [] }
        ]
    },
    {
        id: 17,
        title: "Mean Girls",
        poster: "https://image.tmdb.org/t/p/w500/fX9YHoNreIpsZp6Y3Y7YvYvC9iE.jpg",
        banner: "https://image.tmdb.org/t/p/original/fX9YHoNreIpsZp6Y3Y7YvYvC9iE.jpg",
        genre: "Teen",
        rating: 7.1,
        year: 2004,
        director: "Mark Waters",
        description: "Cady Heron is a hit with The Plastics, the A-list girl clique at her new school, until she makes the mistake of falling for Aaron Samuels, the ex-boyfriend of alpha Plastic Regina George.",
        isTrending: false,
        tags: ["School", "Teen"]
    },
    {
        id: 101,
        title: "Attack on Titan: Live Action",
        subtitle: "Shingeki no Kyojin",
        poster: "https://image.tmdb.org/t/p/w500/yDqiY7pY6HkS6Y1uXh9YvYvC9iE.jpg",
        banner: "https://image.tmdb.org/t/p/original/yDqiY7pY6HkS6Y1uXh9YvYvC9iE.jpg",
        genre: "Action",
        region: "C-Drama",
        collection: "Live-action",
        rating: 6.5,
        year: 2015,
        director: "Shinji Higuchi",
        trailerEmbed: "https://www.youtube.com/embed/InM_SHe8HNo",
        description: "In a world where giant humanoids called Titans prey on humans, Eren Jaeger joins the scout regiment to fight back after witnessing the destruction of his home.",
        isTrending: false,
        tags: ["Live-action", "Fantasy", "Action"]
    }
];

// Tải dữ liệu từ LocalStorage
// ---- DATA MIGRATION: Convert 'Chinese' to 'C-Drama' ----
let savedMovies = JSON.parse(localStorage.getItem('cinematic_movies'));
if (savedMovies && Array.isArray(savedMovies)) {
    let migrated = false;
        savedMovies.forEach(m => {
            if (m.region === "Chinese") {
                m.region = "C-Drama";
                migrated = true;
            }
            // Cleanup: Remove "Live-action" from the Anime Series (id 12) if present
            if (m.id == 12 && m.tags && m.tags.includes("Live-action")) {
                m.tags = m.tags.filter(t => t !== "Live-action");
                migrated = true;
            }
            // Migration: Clear out season genres that are just "Drama" or empty
            if (m.seasons && Array.isArray(m.seasons)) {
                m.seasons.forEach(s => {
                    if (s.genre === "Drama" || s.genre === "") {
                        delete s.genre;
                        migrated = true;
                    }
                });
            }
        });
        
        // Versioned Migration to avoid re-adding deleted movies
        const CURRENT_VERSION = '1.1';
        let dataVersion = localStorage.getItem('cinematic_data_version');
        
        if (dataVersion !== CURRENT_VERSION) {
            // Force Add Live Action Movie if missing (Only run once per version)
            if (!savedMovies.find(m => m.id == 101)) {
                savedMovies.push({
                    id: 101,
                    title: "Attack on Titan: Live Action",
                    subtitle: "Shingeki no Kyojin",
                    poster: "https://image.tmdb.org/t/p/w500/yDqiY7pY6HkS6Y1uXh9YvYvC9iE.jpg",
                    banner: "https://image.tmdb.org/t/p/original/yDqiY7pY6HkS6Y1uXh9YvYvC9iE.jpg",
                    genre: "Action",
                    region: "C-Drama",
                    collection: "Live-action",
                    rating: 6.5,
                    year: 2015,
                    director: "Shinji Higuchi",
                    trailerEmbed: "https://www.youtube.com/embed/InM_SHe8HNo",
                    description: "In a world where giant humanoids called Titans prey on humans, Eren Jaeger joins the scout regiment to fight back after witnessing the destruction of his home.",
                    isTrending: false,
                    tags: ["Live-action", "Fantasy", "Action"]
                });
                migrated = true;
            }
            localStorage.setItem('cinematic_data_version', CURRENT_VERSION);
        }
    if (migrated) {
        localStorage.setItem('cinematic_movies', JSON.stringify(savedMovies));
    }
}

let moviesData = savedMovies || defaultMoviesData;

if (!moviesData || moviesData.length === 0) {
    moviesData = defaultMoviesData;
    localStorage.setItem('cinematic_movies', JSON.stringify(moviesData));
} else {
    // Merge new fields like director, episodes, and seasons into existing data
    moviesData = moviesData.map(m => {
        const def = defaultMoviesData.find(d => d.id === m.id);
        if (def) {
            return { 
                ...m, 
                director: m.director || def.director, 
                episodes: m.episodes || def.episodes || [],
                seasons: m.seasons || def.seasons || [],
                cast: (m.cast && m.cast.length > 0) ? m.cast : (def.cast || []),
                photos: (m.photos && m.photos.length > 0) ? m.photos : (def.photos || []),
                preview: m.preview || def.preview || ""
            };
        }
        return m;
    });
    localStorage.setItem('cinematic_movies', JSON.stringify(moviesData));
}

// ---- YÊU CẦU: INDEXEDDB CHO VIDEO LOCAL ----
const DB_NAME = 'CinematicVideoDB';
const STORE_NAME = 'videos';

function openVideoDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, 1);
        request.onupgradeneeded = function(e) {
            const db = e.target.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME);
            }
        };
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

function getVideoFromDB(id) {
    return openVideoDB().then(db => {
        return new Promise((resolve, reject) => {
            const tx = db.transaction(STORE_NAME, 'readonly');
            const store = tx.objectStore(STORE_NAME);
            const req = store.get(id);
            req.onsuccess = () => resolve(req.result);
            req.onerror = () => reject(req.error);
        });
    });
}

let watchlistCount = 0;

$(document).ready(function () {
    // ---- YÊU CẦU JQUERY 1: Navbar Scroll Effect ----
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled liquid-glass-strong').removeClass('bg-transparent');
        } else {
            $('.navbar').removeClass('scrolled liquid-glass-strong').addClass('bg-transparent');
        }
    });

    // ---- HÀM RENDER THẺ PHIM (DÙNG CHUNG) ----
    function renderMovieCard(movie, specialClass = '') {
        let badgeHtml = '';
        if (movie.badge) {
            let badgeClass = 'badge-liquid-new'; 
            if (movie.badge === 'HOT') badgeClass = 'badge-liquid-hot';
            if (movie.badge === 'TOP') badgeClass = 'badge-liquid-top';
            if (movie.badge === 'HD') badgeClass = 'badge-liquid-hd';
            if (movie.badge === '4K') badgeClass = 'badge-liquid-4k';
            if (movie.badge === 'RED' || movie.badge === 'COMING SOON') badgeClass = 'badge-liquid-red';
            
            badgeHtml = `<span class="badge badge-liquid ${badgeClass} position-absolute top-0 end-0 m-3 shadow-sm" style="z-index: 5;">${movie.badge}</span>`;
        }

        return `
            <div class="col movie-card-item">
                <div class="card h-100 movie-card bg-transparent border-0 ${specialClass}">
                    <a href="detail.html?id=${movie.id}" class="text-decoration-none">
                        <div class="poster-wrapper position-relative overflow-hidden rounded-4">
                            ${badgeHtml}
                            <img src="${movie.poster}" class="card-img-top" alt="${movie.title}">
                            <div class="poster-overlay d-flex flex-column justify-content-center align-items-center p-3 text-center">
                                <button class="btn btn-link play-trailer-btn mb-auto mt-auto p-0" data-embed="${movie.trailerEmbed}" data-local="${movie.localVideo || ''}">
                                    <i class="bi bi-play-circle text-white opacity-75" style="font-size: 3.5rem; transition: all 0.3s;"></i>
                                </button>
                                <div class="w-100 d-flex flex-column align-items-start mt-auto">
                                    <span class="badge text-bg-warning mb-2"><i class="bi bi-star-fill"></i> ${movie.rating}</span>
                                    <h5 class="card-title text-white mb-0 text-truncate font-heading w-100 text-start">${movie.title}</h5>
                                    <p class="card-text text-light small mb-0 w-100 text-start">${movie.year} • ${movie.genre}</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <div class="card-footer bg-transparent border-0 pt-3 px-0 d-grid">
                        <button class="btn btn-outline-light rounded-pill btn-watchlist liquid-glass" data-id="${movie.id}" data-title="${movie.title}">
                            <i class="bi bi-plus-lg"></i> <span data-i18n="add_watchlist">${window.translations[window.currentLang]['add_watchlist']}</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    function renderVerticalRankCard(movie, index) {
        return `
            <a href="detail.html?id=${movie.id}" class="text-decoration-none d-block mb-2">
                <div class="liquid-glass-rank-card">
                    <div class="rank-card-inner">
                        <div class="rank-num font-heading fw-bold text-white fs-4 opacity-25" style="min-width: 32px; letter-spacing: -1px;">${(index + 1).toString().padStart(2, '0')}</div>
                        <div class="position-relative">
                             <img src="${movie.poster}" class="rounded-2 shadow-lg" style="width: 42px; height: 60px; object-fit: cover; border: 1px solid rgba(255,255,255,0.1);">
                             <div class="position-absolute top-0 start-0 w-100 h-100 rounded-2 shadow-inset" style="box-shadow: inset 0 0 8px rgba(0,0,0,0.5);"></div>
                        </div>
                        <div class="overflow-hidden flex-grow-1">
                            <h6 class="text-white fw-bold m-0 text-truncate font-heading" style="font-size: 0.85rem; letter-spacing: 0.2px;">${movie.title}</h6>
                            <div class="d-flex align-items-center gap-2 mt-1">
                                <span class="text-warning fw-bold" style="font-size: 0.75rem;"><i class="bi bi-star-fill me-1"></i> ${movie.rating}</span>
                                <span class="text-white-50 opacity-25" style="font-size: 0.65rem;">|</span>
                                <span class="text-white-50" style="font-size: 0.7rem;">${movie.year}</span>
                            </div>
                            <p class="text-white-50 extra-small mb-0 opacity-75" style="font-size: 0.65rem;">${movie.genre}</p>
                        </div>
                    </div>
                </div>
            </a>
        `;
    }

    function renderFeaturedCard(movie) {
        const castPhoto = (movie.cast && movie.cast.length > 0) ? movie.cast[0].photo : movie.poster;
        
        return `
            <div class="featured-iqiyi-container">
                <!-- Left: Video Area (70%) -->
                <div class="featured-iqiyi-left">
                    ${movie.trailer && movie.trailer.endsWith('.mp4') ? 
                        `<video src="${movie.trailer}" autoplay muted loop playsinline></video>` :
                        `<img src="${movie.banner || movie.poster}" alt="background">`
                    }
                    <div class="diagonal-mask"></div>
                </div>

                <!-- Right: Character & Info Area (40%) -->
                <div class="featured-iqiyi-right">
                    <!-- Character Image (Overlapping) -->
                    <div class="featured-char-wrapper">
                        <img src="${castPhoto}" class="featured-char-img" alt="character">
                    </div>

                    <!-- Content -->
                    <div class="featured-iqiyi-content">
                        
                        <!-- Fallback logo if no logo image -->
                        <div class="featured-iqiyi-logo-area mb-4">
                            <h1 class="featured-iqiyi-title m-0">${movie.title}</h1>
                        </div>

                        <p class="text-white-50 fs-5 mb-2 fw-bold opacity-75">${movie.year} &bull; ${movie.genre}</p>
                        <p class="text-white-50 fs-6 mb-5 d-none d-lg-block featured-iqiyi-desc">
                            ${movie.preview || movie.description || ''}
                        </p>

                        <div class="d-flex gap-3 featured-iqiyi-actions">
                            <button class="btn liquid-glass rounded-pill px-4 py-3 text-white btn-watchlist transition-all hover-scale" 
                                    data-id="${movie.id}" data-title="${movie.title}">
                                <i class="bi bi-plus-lg me-1"></i> Watchlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    function renderCastCircle(person) {
        const photo = person.photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(person.name)}&background=random&color=fff`;
        return `
            <div class="text-center flex-shrink-0" style="width: 140px;">
                <div class="position-relative mb-3 mx-auto" style="width: 110px; height: 110px;">
                    <div class="position-absolute inset-0 rounded-circle border border-warning border-opacity-25" style="transform: scale(1.1);"></div>
                    <img src="${photo}" class="rounded-circle w-100 h-100 object-fit-cover shadow-lg border border-white border-opacity-20">
                </div>
                <h6 class="text-white fw-bold mb-1 small text-truncate">${person.name}</h6>
                <p class="text-white-50 extra-small mb-0 text-truncate">${person.role || 'Actor'}</p>
            </div>
        `;
    }

    function renderAwardCard(award) {
        return `
            <div class="flex-shrink-0" style="width: 320px;">
                <div class="p-4 liquid-glass rounded-4 border border-warning border-opacity-10 h-100 d-flex align-items-center gap-4">
                    <div class="award-icon fs-1 text-warning">
                        <i class="bi ${award.icon || 'bi-trophy-fill'}"></i>
                    </div>
                    <div>
                        <h6 class="text-white fw-bold mb-1">${award.title}</h6>
                        <p class="text-white-50 small mb-2">${award.category}</p>
                        <div class="badge bg-black bg-opacity-50 text-warning border border-warning border-opacity-25">${award.winner}</div>
                    </div>
                </div>
            </div>
        `;
    }

    // Global scroll function
    window.scrollRow = function(rowId, direction) {
        const scroller = document.getElementById(`scroller-${rowId}`);
        if (scroller) {
            const scrollAmount = scroller.clientWidth * 0.8;
            scroller.scrollBy({
                left: scrollAmount * direction,
                behavior: 'smooth'
            });
        }
    };

    // ---- SEARCH FUNCTIONALITY ----
    const $searchInput = $('input[type="search"]');
    
    $searchInput.on('input', function() {
        const query = $(this).val().toLowerCase().trim();
        const $trendingSection = $('.trending-section'); // Section to show results
        const $trendingGrid = $('#trending-grid');
        const $sectionTitle = $trendingSection.find('.section-heading');

        if (query === '') {
            $sectionTitle.text(window.currentLang === 'vi' ? 'Phim Thịnh Hành' : 'Trending Now');
            renderMovies(moviesData);
            return;
        }

        const queryWords = query.split(' ').filter(w => w.length > 0);
        
        const filtered = moviesData.filter(m => {
            // Check if ALL words in the query are found somewhere in the movie data
            return queryWords.every(word => {
                const inTitle = m.title.toLowerCase().includes(word);
                const inGenre = m.genre.toLowerCase().includes(word);
                const inRegion = m.region && m.region.toLowerCase().includes(word);
                const inCollection = m.collection && m.collection.toLowerCase().includes(word);
                const inTags = m.tags && m.tags.some(t => t.toLowerCase().includes(word));
                
                // Deep search in seasons and episodes
                let inSeasons = false;
                if (m.seasons) {
                    inSeasons = m.seasons.some(s => 
                        (s.title && s.title.toLowerCase().includes(word)) ||
                        (s.episodes && s.episodes.some(ep => ep.title && ep.title.toLowerCase().includes(word)))
                    );
                }
                
                return inTitle || inGenre || inRegion || inCollection || inTags || inSeasons;
            });
        });

        $sectionTitle.text(window.currentLang === 'vi' ? `Kết quả cho "${query}"` : `Results for "${query}"`);
        
        let searchHtml = '';
        if (filtered.length > 0) {
            filtered.forEach(movie => {
                searchHtml += renderMovieCard(movie);
            });
        } else {
            searchHtml = `<div class="col-12 py-5 text-center text-white-50">
                            <i class="bi bi-search fs-1 mb-3 d-block"></i>
                            <p>${window.currentLang === 'vi' ? 'Không tìm thấy phim nào khớp với từ khóa.' : 'No movies found matching your search.'}</p>
                          </div>`;
        }
        $trendingGrid.html(searchHtml);
        
        // Scroll to results
        if ($trendingSection.length > 0) {
            $('html, body').animate({
                scrollTop: $trendingSection.offset().top - 100
            }, 500);
        }
    });

    function renderMovies(data) {
        if ($('#trending-grid').length > 0) {
            let trendingHtml = '';
            data.forEach(movie => {
                trendingHtml += renderMovieCard(movie);
            });
            $('#trending-grid').html(trendingHtml);
            
            // Re-apply "Show More" logic if search cleared
            const $trendingItems = $('#trending-grid .movie-card-item');
            if ($trendingItems.length > 4) {
                $trendingItems.slice(4).addClass('d-none');
                $('#show-more-trending').show();
            } else {
                $('#show-more-trending').hide();
            }
        }
    }

    function renderHomePage() {
        // 1. Trending Now (with "Show More")
        const trendingMovies = moviesData.filter(m => m.isTrending);
        let trendingHtml = '';
        trendingMovies.forEach((movie, idx) => {
            trendingHtml += renderMovieCard(movie);
        });
        $('#trending-grid').html(trendingHtml);
        
        // Initial hide for show more
        const $trendingItems = $('#trending-grid .movie-card-item');
        if ($trendingItems.length > 4) {
            $trendingItems.slice(4).addClass('d-none');
            $('#show-more-trending').show();
        } else {
            $('#show-more-trending').hide();
        }

        // 2. Top 10 This Week (Vertical)
        const topRated = [...moviesData].sort((a, b) => b.rating - a.rating).slice(0, 10);
        let top10Html = '';
        topRated.forEach((movie, idx) => {
            top10Html += renderVerticalRankCard(movie, idx);
        });
        $('#top-10-vertical-list').html(top10Html);

        // 3. Featured Spotlight
        async function renderSpotlightSection() {
            const hasCustom = localStorage.getItem('has_custom_spotlight') === 'true';
            if (hasCustom) {
                const dataStr = localStorage.getItem('custom_spotlight_banner_data');
                if (dataStr) {
                    try {
                        const data = JSON.parse(dataStr);
                        let videoUrl = '';
                        let logoUrl = '';
                        let charUrl = '';

                        if (localStorage.getItem('has_custom_spotlight_video') === 'true') {
                            const blob = await getVideoFromDB('custom_spotlight_video');
                            if (blob) videoUrl = URL.createObjectURL(blob);
                        }
                        if (localStorage.getItem('has_custom_spotlight_logo') === 'true') {
                            const blob = await getVideoFromDB('custom_spotlight_logo');
                            if (blob) logoUrl = URL.createObjectURL(blob);
                        }
                        if (localStorage.getItem('has_custom_spotlight_char') === 'true') {
                            const blob = await getVideoFromDB('custom_spotlight_char');
                            if (blob) charUrl = URL.createObjectURL(blob);
                        }

                        const html = `
                            <div class="featured-iqiyi-container">
                                <div class="featured-iqiyi-left">
                                    ${videoUrl ? `<video src="${videoUrl}" autoplay muted loop playsinline></video>` : `<div class="bg-dark w-100 h-100"></div>`}
                                    <div class="diagonal-mask"></div>
                                </div>
                                <div class="featured-iqiyi-right">
                                    <div class="featured-char-wrapper">
                                        ${charUrl ? `<img src="${charUrl}" class="featured-char-img" alt="character">` : ''}
                                    </div>
                                    <div class="featured-iqiyi-content">
                                        <div class="featured-iqiyi-logo-area mb-4">
                                            ${logoUrl ? `<img src="${logoUrl}" class="featured-iqiyi-logo" alt="logo">` : `<h1 class="featured-iqiyi-title m-0">${data.title}</h1>`}
                                        </div>
                                        <p class="text-white-50 fs-5 mb-2 fw-bold opacity-75">${data.meta || ''}</p>
                                        <p class="text-white-50 fs-6 mb-5 d-none d-lg-block featured-iqiyi-desc">
                                            ${data.desc || ''}
                                        </p>
                                        <div class="d-flex gap-3 featured-iqiyi-actions">
                                            <!-- Watch Now removed per user request -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                        $('#featured-content').html(html);
                        return;
                    } catch (e) { console.error("Error loading custom spotlight", e); }
                }
            }

            // Fallback to default
            const featuredMovie = moviesData.find(m => m.isFeatured) || moviesData.find(m => m.rating >= 8.5) || moviesData[0];
            if (featuredMovie) {
                $('#featured-content').html(renderFeaturedCard(featuredMovie));
            }
        }
        
        renderSpotlightSection();

        // 4. Coming Soon
        const comingSoon = moviesData.filter(m => m.isComingSoon || m.year >= 2024).slice(0, 8);
        let csHtml = '';
        comingSoon.forEach(movie => {
            csHtml += renderMovieCard(movie, 'liquid-glass-red');
        });
        $('#scroller-coming-soon').html(csHtml || '<p class="text-white-50 py-4">Stay tuned for new releases!</p>');

        // 5. Star Cast
        let allCast = [];
        moviesData.forEach(m => {
            if (m.cast) allCast = allCast.concat(m.cast);
        });
        // Unique by name
        const uniqueCast = Array.from(new Map(allCast.map(item => [item['name'], item])).values()).slice(0, 15);
        let castHtml = '';
        uniqueCast.forEach(person => {
            castHtml += renderCastCircle(person);
        });
        $('#scroller-home-cast').html(castHtml);

        // 6. Award Winning
        const awardsData = [
            { title: "Academy Awards", category: "Best Picture", winner: "Oppenheimer", icon: "bi-trophy-fill" },
            { title: "Golden Globes", category: "Best Screenplay", winner: "Anatomy of a Fall", icon: "bi-award-fill" },
            { title: "BAFTA Games", category: "Best Animation", winner: "Spider-Man: Across the Spider-Verse", icon: "bi-stars" },
            { title: "Cannes Festival", category: "Palme d'Or", winner: "Winter Sleep", icon: "bi-gem" },
            { title: "Emmy Awards", category: "Outstanding Drama", winner: "Succession", icon: "bi-lightning-fill" }
        ];
        let awardsHtml = '';
        awardsData.forEach(award => {
            awardsHtml += renderAwardCard(award);
        });
        $('#scroller-home-awards').html(awardsHtml);
    }

    // "Show More" functionality for Trending Now
    $(document).on('click', '#show-more-trending', function() {
        const $hiddenItems = $('#trending-grid .movie-card-item.d-none');
        $hiddenItems.slice(0, 4).removeClass('d-none').addClass('animate__animated animate__fadeInUp');
        
        if ($('#trending-grid .movie-card-item.d-none').length === 0) {
            $(this).fadeOut();
        }
    });

    // ---- RENDER TRANG CHỦ (index.html) ----
    if ($('#trending-grid').length > 0) {
        renderHomePage();
    }

    // ---- RENDER TRANG DANH SÁCH (movies.html) ----
    if ($('#tab-content-area').length > 0) {
        let currentType = 'Movie'; // Default tab
        let currentSearchQuery = '';

        const categories = {
            'Movie': [
                { id: 'trending', title: 'Trending This Week', filter: m => m.isTrending },
                { id: 'top-rated', title: 'Top 10 Movies', filter: m => m.rating >= 8.5, isTop10: true },
                { id: 'romance', title: 'Romance Movies', filter: m => m.genre === 'Romance' || (m.tags && m.tags.includes('Romance')) },
                { id: 'horror', title: 'Horror Movies', filter: m => m.genre === 'Horror' || (m.tags && m.tags.includes('Horror')) },
                { id: 'action', title: 'Action & Adventure', filter: m => ['Action', 'Adventure'].includes(m.genre) },
                { id: 'scifi', title: 'Sci-Fi & Fantasy', filter: m => ['Sci-Fi', 'Fantasy'].includes(m.genre) },
                { id: 'comedy', title: 'Comedy', filter: m => m.genre === 'Comedy' }
            ],
            'Series': [
                { id: 'trending-series', title: 'New Release Series', filter: m => m.isTrending },
                { id: 'top-rated-series', title: 'Top 10 Series', filter: m => m.rating >= 8.5, isTop10: true },
                { id: 'kdrama', title: 'Exciting K-Dramas', filter: m => m.region === 'K-Drama' },
                { id: 'cdrama', title: 'Captivating C-Dramas', filter: m => m.region === 'C-Drama' },
                { id: 'anime', title: 'Featured Anime', filter: m => m.genre === 'Anime' },
                { id: 'school', title: 'School & Youth', filter: m => m.genre === 'School' || (m.tags && m.tags.includes('School')) }
            ]
        };

        function renderMovieRow(category, movies) {
            if (movies.length === 0) return '';

            let cardsHtml = '';
            movies.forEach((movie, index) => {
                let badgeHtml = '';
                if (movie.badge) {
                    let badgeClass = 'badge-liquid-new'; 
                    if (movie.badge === 'HOT') badgeClass = 'badge-liquid-hot';
                    if (movie.badge === 'TOP') badgeClass = 'badge-liquid-top';
                    badgeHtml = `<span class="badge badge-liquid ${badgeClass} position-absolute top-0 end-0 m-2 shadow-sm" style="z-index: 5;">${movie.badge}</span>`;
                }

                let rankHtml = category.isTop10 ? `<span class="rank-number">${index + 1}</span>` : '';

                cardsHtml += `
                    <div class="movie-card position-relative ${category.isTop10 ? 'top-10-card' : ''}">
                        ${rankHtml}
                        <a href="detail.html?id=${movie.id}" class="text-decoration-none">
                            <div class="poster-wrapper position-relative overflow-hidden rounded-4">
                                ${badgeHtml}
                                <img src="${movie.poster}" class="card-img-top" alt="${movie.title}">
                                <div class="poster-overlay d-flex flex-column justify-content-end p-3">
                                    <span class="badge text-bg-warning mb-2 w-fit" style="width: fit-content;"><i class="bi bi-star-fill"></i> ${movie.rating}</span>
                                    <h6 class="text-white mb-0 text-truncate font-heading">${movie.title}</h6>
                                    <p class="text-light extra-small mb-0 opacity-75">${movie.year} • ${movie.genre}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                `;
            });

            return `
                <div class="movie-row-container ${category.isTop10 ? 'top-10-row' : ''}" id="row-${category.id}">
                    <h3 class="movie-row-title">${category.title}</h3>
                    <div class="scroll-btn scroll-left" onclick="scrollRow('${category.id}', -1)">
                        <i class="bi bi-chevron-left"></i>
                    </div>
                    <div class="movie-row-scroller" id="scroller-${category.id}">
                        ${cardsHtml}
                    </div>
                    <div class="scroll-btn scroll-right" onclick="scrollRow('${category.id}', 1)">
                        <i class="bi bi-chevron-right"></i>
                    </div>
                </div>
            `;
        }


        async function loadTabHero(type) {
            const isMovieTab = type === 'Movie';
            const storageKey = isMovieTab ? 'custom_movie_tab_banner_data' : 'custom_series_tab_banner_data';
            const hasVideoKey = isMovieTab ? 'has_custom_movie_tab_video' : 'has_custom_series_tab_video';
            const hasLogoKey = isMovieTab ? 'has_custom_movie_tab_logo' : 'has_custom_series_tab_logo';
            const logoStoreId = isMovieTab ? 'custom_movie_tab_banner_logo' : 'custom_series_tab_banner_logo';
            const videoStoreId = isMovieTab ? 'custom_movie_tab_banner_video' : 'custom_series_tab_banner_video';

            const savedDataStr = localStorage.getItem(storageKey);
            const hasVideo = localStorage.getItem(hasVideoKey) === 'true';
            const hasLogo = localStorage.getItem(hasLogoKey) === 'true';

            let banner = null;
            if (savedDataStr) banner = JSON.parse(savedDataStr);

            // Find fallback content
            const moviesOfType = moviesData.filter(m => {
                const isSeries = (m.type === 'Series' || (m.seasons && m.seasons.length > 0));
                const isMovie = (m.type === 'Movie' || (!m.type && !(m.seasons && m.seasons.length > 0)));
                return type === 'Series' ? isSeries : isMovie;
            });
            const trending = moviesOfType.filter(m => m.isTrending);
            const fallbackMovie = trending.length > 0 ? trending[0] : (moviesOfType.length > 0 ? moviesOfType[0] : null);

            // 1. Text Info
            const title = banner?.title || fallbackMovie?.title || (isMovieTab ? 'MOVIES' : 'TV SERIES');
            const desc = banner?.desc || fallbackMovie?.description || fallbackMovie?.preview || '';
            const topBadge = banner?.topBadge || (isMovieTab ? 'PHIM LẺ ĐẶC SẮC' : 'PHIM BỘ MỚI NHẤT');

            $('#moviesTopBadge').text(topBadge).show();
            $('#moviesDesc').text(desc).show();
            
            // Set global current hero for buttons
            window.currentTabHeroMovie = fallbackMovie;

            // 2. Logo / Title
            if (hasLogo) {
                try {
                    const logoBlob = await getVideoFromDB(logoStoreId);
                    if (logoBlob) {
                        const url = URL.createObjectURL(logoBlob);
                        const size = banner?.logoSize || 500;
                        $('#moviesLogoContainer').html(`<img src="${url}" class="tr-hero-logo" style="max-height: ${size}px;">`);
                    } else throw new Error();
                } catch (e) {
                    $('#moviesLogoContainer').html(`<h1 class="tr-hero-title">${title}</h1>`);
                }
            } else {
                $('#moviesLogoContainer').html(`<h1 class="tr-hero-title">${title}</h1>`);
            }

            // 3. Video / Background
            const videoEl = document.getElementById('moviesHeroVideo');
            const heroSection = document.getElementById('moviesHero');
            let videoLoaded = false;

            if (hasVideo) {
                try {
                    const videoBlob = await getVideoFromDB(videoStoreId);
                    if (videoBlob) {
                        videoEl.src = URL.createObjectURL(videoBlob);
                        videoEl.load();
                        videoLoaded = true;
                    }
                } catch (e) {}
            }

            if (!videoLoaded) {
                if (fallbackMovie?.banner) {
                    $(heroSection).css({
                        'background-image': `url(${fallbackMovie.banner})`,
                        'background-size': 'cover',
                        'background-position': 'center'
                    });
                } else {
                    $(heroSection).css('background-image', 'none');
                }
                if (videoEl) videoEl.src = "";
            } else {
                $(heroSection).css('background-image', 'none');
            }

            // Animation
            $('#moviesHeroContent').removeClass('visible');
            setTimeout(() => $('#moviesHeroContent').addClass('visible'), 100);
        }

        // Global functions for hero buttons
        window.playCurrentHeroTrailer = function() {
            if (window.currentTabHeroMovie) {
                window.location.href = `detail.html?id=${window.currentTabHeroMovie.id}&autoplay=true`;
            }
        };

        window.openCurrentHeroDetail = function() {
            if (window.currentTabHeroMovie) {
                window.location.href = `detail.html?id=${window.currentTabHeroMovie.id}`;
            }
        };

        function renderTabContent(type, query = '') {
            const container = $('#movie-rows-container');
            container.empty();

            const moviesOfType = moviesData.filter(m => {
                const isSeries = (m.type === 'Series' || (m.seasons && m.seasons.length > 0));
                const isMovie = (m.type === 'Movie' || (!m.type && !(m.seasons && m.seasons.length > 0)));
                return type === 'Series' ? isSeries : isMovie;
            });

            if (query) {
                // Search Mode
                const filtered = moviesOfType.filter(m => m.title.toLowerCase().includes(query.toLowerCase()));
                if (filtered.length > 0) {
                    container.append(renderMovieRow({ id: 'search-results', title: `Kết quả tìm kiếm cho "${query}"` }, filtered));
                } else {
                    container.append(`<div class="text-center py-5 opacity-50"><i class="bi bi-search fs-1 d-block mb-3"></i><p>Không tìm thấy phim nào khớp với "${query}"</p></div>`);
                }
                return;
            }

            categories[type].forEach(cat => {
                const filtered = moviesOfType.filter(cat.filter);
                if (filtered.length > 0) {
                    container.append(renderMovieRow(cat, filtered));
                }
            });
        }

        // Function to populate Genres in Hero
        function populateHeroGenres() {
            const genres = [...new Set(moviesData.map(m => m.genre))].sort();
            const container = $('#hero-genre-list');
            if (container.length) {
                container.empty();
                genres.forEach(g => {
                    const i18nKey = `genre_${g.toLowerCase().replace(/[^a-z]/g, '')}`;
                    const translated = (window.translations[window.currentLang] && window.translations[window.currentLang][i18nKey]) || g;
                    container.append(`
                        <div class="col">
                            <li><a class="dropdown-item hero-genre-item" href="#" data-genre="${g}">${translated}</a></li>
                        </div>
                    `);
                });
            }
        }

        populateHeroGenres();

        // Handle Genre Selection from Hero
        $(document).on('click', '.hero-genre-item', function(e) {
            e.preventDefault();
            const selectedGenre = $(this).data('genre');
            
            // Render specific genre row in results
            const container = $('#movie-rows-container');
            container.empty();
            
            const filtered = moviesData.filter(m => m.genre === selectedGenre);
            const title = window.currentLang === 'vi' ? `Thể loại: ${selectedGenre}` : `Genre: ${selectedGenre}`;
            
            container.append(renderMovieRow({ id: 'genre-filter', title: title }, filtered));
            
            // Scroll to content
            $('html, body').animate({
                scrollTop: $('#moviesHero').height() - 150
            }, 500);
        });

        // Initialize
        loadTabHero(currentType);
        renderTabContent(currentType);

        // Function to update sliding indicator
        function updateTabIndicator() {
            const activeBtn = $('.tab-btn.active');
            const indicator = $('.tab-sliding-indicator');
            if (activeBtn.length && indicator.length) {
                const btnPos = activeBtn.position();
                const btnWidth = activeBtn.outerWidth();
                indicator.css({
                    'left': btnPos.left + 'px',
                    'width': btnWidth + 'px'
                });
            }
        }

        // Initialize indicator
        setTimeout(updateTabIndicator, 300);
        $(window).on('resize', updateTabIndicator);

        // Tab Switching
        $('.tab-btn').click(function() {
            $('.tab-btn').removeClass('active text-white').addClass('text-white-50');
            $(this).addClass('active text-white').removeClass('text-white-50');
            currentType = $(this).data('type');
            
            // Move indicator
            updateTabIndicator();
            
            loadTabHero(currentType);
            renderTabContent(currentType, currentSearchQuery);
            
            // Scroll to top of page
            $('html, body').animate({
                scrollTop: 0
            }, 500);
        });

        // Search
        $('#movieSearch').on('input', function() {
            currentSearchQuery = $(this).val().trim();
            renderTabContent(currentType, currentSearchQuery);
        });

        // Mute Toggle
        $('#tr-mute-btn').click(function() {
            const video = document.getElementById('moviesHeroVideo');
            if (video) {
                video.muted = !video.muted;
                $(this).find('i').toggleClass('bi-volume-mute-fill bi-volume-up-fill');
            }
        });
    }

    // ---- RENDER TRANG CHI TIẾT (detail.html) ----
    if ($('#movie-detail-container').length > 0) {
        // Lấy tham số id trên URL
        const urlParams = new URLSearchParams(window.location.search);
        let movieId = urlParams.get('id');
        
        if (!movieId) {
            movieId = 1; // Mặc định là phim đầu tiên nếu không có tham số
        }

        const movie = moviesData.find(m => m.id == movieId);
        if (movie) {
            window.currentMovieData = movie;
            $('#detail-hero').css('background-image', `url(${movie.banner})`);
            $('#detail-poster').attr('src', movie.poster);
            $('#detail-title').text(movie.title);
            if (movie.subtitle) {
                $('#detail-subtitle').text(movie.subtitle.toUpperCase()).removeClass('d-none');
            } else {
                $('#detail-subtitle').addClass('d-none');
            }
            $('#detail-year').text(movie.year);
            $('#detail-genre').text(movie.genre);
            
            if (movie.duration) {
                $('#detail-duration-container').removeClass('d-none');
                $('#detail-duration').text(movie.duration);
            } else {
                $('#detail-duration-container').addClass('d-none');
            }

            $('#detail-rating').text(movie.rating);
            $('#detail-desc').text(movie.description);
            $('#detail-director').text(movie.director || 'N/A');
            
            if (movie.creator) {
                $('#detail-creator-row').removeClass('d-none');
                $('#detail-creator').text(movie.creator);
            } else {
                $('#detail-creator-row').addClass('d-none');
            }
            
            // Render episodes/seasons if exists
            const hasSeasons = movie.seasons && movie.seasons.length > 0;
            const isSeries = (movie.type === 'Series' || hasSeasons);

            if (isSeries && hasSeasons) {
                $('#episodes-section').removeClass('d-none');
                
                let currentSeasonId = movie.seasons[0].id;

                function renderSeasonUI() {
                    const t = window.translations[window.currentLang];
                    const $heading = $('#episodes-section h3');
                    
                    const seasonsOnly = movie.seasons.filter(s => !s.type || s.type === 'season');
                    const moviesOnly = movie.seasons.filter(s => s.type === 'movie');
                    
                    // Determine which view to show
                    let activeTab = window.currentSeasonView;
                    if (!activeTab) {
                        activeTab = seasonsOnly.length > 0 ? 'seasons' : 'movies';
                    }

                    // Update Heading Text based on Tab
                    const hasSeasons = seasonsOnly.length > 0;
                    const hasMovies = moviesOnly.length > 0;

                    if (activeTab === 'movies') {
                        $heading.text(window.currentLang === 'vi' ? 'Danh Sách Phim' : 'Movie Collection');
                    } else if (activeTab === 'top-rated') {
                        $heading.text(window.currentLang === 'vi' ? 'Đánh Giá Cao Nhất' : 'Top Rated');
                    } else {
                        if (hasSeasons) {
                            $heading.text(window.currentLang === 'vi' ? 'Danh Sách Tập' : 'Episodes');
                        } else if (hasMovies) {
                            $heading.text(window.currentLang === 'vi' ? 'Danh Sách Phim' : 'Movie Collection');
                        } else {
                            $heading.text(window.currentLang === 'vi' ? 'Nội Dung' : 'Content');
                        }
                    }

                    // Fix: Sync currentSeasonId with the active tab type
                    const isCurrentValid = activeTab === 'seasons' 
                        ? seasonsOnly.some(s => s.id == currentSeasonId)
                        : moviesOnly.some(m => m.id == currentSeasonId);

                    if (!isCurrentValid) {
                        if (activeTab === 'seasons' && seasonsOnly.length > 0) {
                            currentSeasonId = seasonsOnly[0].id;
                        } else if (activeTab === 'movies' && moviesOnly.length > 0) {
                            currentSeasonId = moviesOnly[0].id;
                        }
                    }



                    // If only one type exists, don't show the switcher
                    const showSwitcher = seasonsOnly.length > 0 && moviesOnly.length > 0;
                    
                    let seasonTabsHtml = `<div class="col-12 mb-4">`;
                    
                    if (showSwitcher) {
                        seasonTabsHtml += `
                            <div class="liquid-glass rounded-pill p-1 px-4 d-inline-flex align-items-center gap-3 mb-4 border border-white border-opacity-10 shadow-lg">
                                <span class="tab-switch ${activeTab === 'seasons' ? 'text-warning fw-bold border-bottom border-warning border-2' : 'text-white-50'} py-2" style="cursor:pointer" data-view="seasons">${t['seasons']}</span>
                                <span class="tab-switch ${activeTab === 'movies' ? 'text-warning fw-bold border-bottom border-warning border-2' : 'text-white-50'} py-2" style="cursor:pointer" data-view="movies">${t['movies']}</span>
                                <span class="tab-switch ${activeTab === 'top-rated' ? 'text-warning fw-bold border-bottom border-warning border-2' : 'text-white-50'} py-2" style="cursor:pointer" data-view="top-rated">Top-rated</span>
                            </div>
                        `;
                    } else {
                        const originalView = seasonsOnly.length > 0 ? 'seasons' : 'movies';
                        const singleTitle = activeTab === 'top-rated' ? (window.currentLang === 'vi' ? 'Đánh Giá Cao Nhất' : 'Top Rated') : (originalView === 'seasons' ? t['seasons'] : t['movies']);
                        const switchText = activeTab === 'top-rated' ? `<i class="bi bi-arrow-left me-1"></i> ${window.currentLang === 'vi' ? 'Quay lại' : 'Back to'} ${originalView === 'seasons' ? t['seasons'] : t['movies']}` : `Top-rated <i class="bi bi-arrow-right ms-1"></i>`;
                        const targetView = activeTab === 'top-rated' ? originalView : 'top-rated';

                        seasonTabsHtml += `
                            <div class="liquid-glass rounded-4 p-3 d-flex align-items-center justify-content-between mb-4 border border-white border-opacity-10 shadow-lg">
                                <h5 class="text-white fw-bold m-0"><i class="bi bi-collection-play me-2 text-warning"></i>${singleTitle}</h5>
                                <span class="tab-switch ${activeTab === 'top-rated' ? 'text-warning fw-bold' : 'text-white-50'} small hover-white" style="cursor:pointer" data-view="${targetView}">${switchText}</span>
                            </div>
                        `;
                    }

                    seasonTabsHtml += `<div id="season-selector-content" class="mb-4">`;

                    if (activeTab === 'seasons') {
                        seasonTabsHtml += `<div class="d-flex gap-2 flex-wrap">`;
                        seasonsOnly.forEach(s => {
                            const activeClass = s.id === currentSeasonId ? 'btn-warning' : 'btn-outline-light';
                            const displayText = s.displayNumber || s.id;
                            const isLong = displayText.toString().length > 2;
                            const shapeClass = isLong ? 'rounded-pill px-3' : 'rounded-circle';
                            const style = isLong ? 'height:40px;' : 'width:40px; height:40px; padding:0;';
                            
                            seasonTabsHtml += `<button class="btn ${activeClass} ${shapeClass} fw-bold season-select-btn" style="${style}" data-id="${s.id}">${displayText}</button>`;
                        });
                        seasonTabsHtml += `</div>`;
                    } else if (activeTab === 'movies') {
                        seasonTabsHtml += `<div class="row row-cols-2 row-cols-md-4 row-cols-lg-5 g-3">`;
                        moviesOnly.forEach(s => {
                            const activeClass = s.id === currentSeasonId ? 'border-primary border-3' : 'border-secondary border-opacity-25';
                            const poster = s.poster || movie.poster;
                            seasonTabsHtml += `
                                <div class="col">
                                    <div class="season-movie-card liquid-glass rounded-3 overflow-hidden season-select-btn ${activeClass}" style="cursor:pointer; transition: transform 0.2s;" data-id="${s.id}">
                                        <img src="${poster}" class="w-100 h-100 object-fit-cover" style="aspect-ratio: 2/3;">
                                        <div class="p-2">
                                            <div class="text-white small fw-bold text-truncate">${s.title || 'Part ' + s.id}</div>
                                            <div class="text-white-50" style="font-size: 0.7rem;">${s.year || movie.year}</div>
                                        </div>
                                    </div>
                                </div>
                            `;
                        });
                        seasonTabsHtml += `</div>`;
                    }

                    if (activeTab === 'top-rated') {
                        seasonTabsHtml += `</div></div><div id="top-rated-chart-area"></div><div id="episodes-list-content" class="row row-cols-1 g-3"></div>`;
                        $('#episodes-list').html(seasonTabsHtml);
                        renderTopRatedView();
                        return;
                    }

                    seasonTabsHtml += `</div></div><div id="episodes-list-content" class="row row-cols-1 g-3"></div>`;
                    $('#episodes-list').html(seasonTabsHtml);
                    renderEpisodesForSeason(currentSeasonId);
                }

                $(document).off('click', '.tab-switch').on('click', '.tab-switch', function() {
                    window.currentSeasonView = $(this).data('view');
                    renderSeasonUI();
                    
                    // Scroll to episodes section if top-rated clicked
                    if (window.currentSeasonView === 'top-rated') {
                        $('html, body').animate({
                            scrollTop: $("#episodes-section").offset().top - 100
                        }, 500);
                    }
                });

                function renderTopRatedView() {
                    let allItems = [];
                    movie.seasons.forEach(s => {
                        if (s.episodes && s.episodes.length > 0) {
                            s.episodes.forEach((ep, idx) => {
                                allItems.push({
                                    ...ep,
                                    sId: s.id,
                                    sTitle: s.title || 'S' + s.id,
                                    displayLabel: (s.displayNumber || s.id) + 'E' + (idx + 1)
                                });
                            });
                        } else if (s.type === 'movie') {
                            allItems.push({
                                ...s,
                                isStandalone: true,
                                displayLabel: s.title
                            });
                        }
                    });

                    // Sort by rating descending
                    allItems.sort((a, b) => (parseFloat(b.rating) || 0) - (parseFloat(a.rating) || 0));
                    
                    // Top 15 for chart
                    const chartItems = allItems.slice(0, 15);
                    const avgRating = (allItems.reduce((acc, curr) => acc + (parseFloat(curr.rating) || 0), 0) / allItems.length).toFixed(1);

                    let html = `
                        <div class="rating-chart-summary">
                            <div class="chart-avg-value">${avgRating}</div>
                            <div class="chart-avg-text">
                                <div class="fw-bold text-white">${window.currentLang === 'vi' ? 'Điểm trung bình' : 'Average Rating'}</div>
                                <div>${window.currentLang === 'vi' ? `Dựa trên ${allItems.length} tập phim & bản lẻ` : `Based on ${allItems.length} episodes & specials`}</div>
                            </div>
                        </div>
                        <div class="rating-chart-container mb-5">
                    `;

                    chartItems.forEach((item, i) => {
                        const r = parseFloat(item.rating) || 0;
                        const heightPercent = Math.max(r * 10, 10);
                        const activeClass = i === 0 ? 'active' : '';
                        html += `
                            <div class="rating-bar-item ${activeClass}" data-index="${i}">
                                <div class="rating-bar-value" style="height: ${heightPercent}%;">
                                    ${r}
                                </div>
                                <div class="rating-bar-label">${item.displayLabel}</div>
                            </div>
                        `;
                    });

                    html += `</div><div id="top-rated-selected-item"></div>`;
                    $('#top-rated-chart-area').html(html);

                    // Function to render the selected episode card
                    function renderSelectedTopItem(index) {
                        const item = chartItems[index];
                        let cardHtml = '';
                        
                        if (item.isStandalone) {
                            // Standalone movie card
                            cardHtml = `
                                <div class="top-rated-card-highlight liquid-glass rounded-4 p-4 border border-warning border-opacity-25">
                                    <div class="row g-4 align-items-center">
                                        <div class="col-md-4 d-flex flex-column align-items-center gap-4">
                                            <img src="${item.poster || movie.poster}" class="w-100 rounded-3 shadow-lg border border-white border-opacity-10">
                                            <button class="btn btn-primary-custom w-100 py-2 rounded-pill fw-bold season-select-btn" style="font-size: 0.85rem;" data-id="${item.id}">
                                                <i class="bi bi-play-fill me-1"></i> Watch Movie
                                            </button>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="badge bg-warning text-dark mb-2 fw-bold">TOP ${index + 1} RATED</div>
                                            <h4 class="text-white fw-bold mb-1">${item.title}</h4>
                                            <div class="text-warning mb-3 small"><i class="bi bi-star-fill me-1"></i> ${item.rating}/10</div>
                                            <p class="text-white-50 small mb-0">${item.description || movie.description}</p>
                                        </div>
                                    </div>
                                </div>
                            `;
                        } else {
                            // Episode card
                            const thumb = item.thumb || movie.poster;
                            cardHtml = `
                                <div class="top-rated-card-highlight episode-rich-card liquid-glass p-4 rounded-4 d-flex flex-column flex-md-row gap-4 border border-warning border-opacity-25">
                                    <div class="d-flex flex-column align-items-center" style="min-width: 280px;">
                                        <div class="ep-thumb-wrapper position-relative overflow-hidden rounded-3 shadow-lg mb-4" style="height: 160px; width: 100%; cursor:pointer;" onclick="window.openEpisodeDetail(window.currentMovieData, ${item.sId}, ${item.id})">
                                            <img src="${thumb}" class="w-100 h-100 object-fit-cover">
                                            <div class="ep-play-overlay">
                                                <div class="bg-white rounded-circle d-flex align-items-center justify-content-center" style="width: 50px; height: 50px;">
                                                    <i class="bi bi-play-fill text-dark fs-3"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-center gap-3 w-100">
                                            <button class="btn btn-sm btn-light rounded-pill px-4 fw-bold" style="font-size: 0.75rem; padding-top: 8px; padding-bottom: 8px;" onclick="window.openEpisodeDetail(window.currentMovieData, ${item.sId}, ${item.id})">Watch Now</button>
                                            <button class="btn btn-sm btn-outline-light rounded-pill px-4" style="font-size: 0.75rem; padding-top: 8px; padding-bottom: 8px;" onclick="openQuickEpReview(${movie.id}, ${item.sId}, ${item.id})">Rate</button>
                                        </div>
                                    </div>
                                    <div class="ep-content flex-grow-1">
                                        <div class="badge bg-warning text-dark mb-2 fw-bold">TOP ${index + 1} EPISODE</div>
                                        <h5 class="text-white fw-bold mb-1" style="font-size: 1.1rem;">${item.sTitle} &bull; ${item.title}</h5>
                                        <div class="text-warning mb-2 small"><i class="bi bi-star-fill me-1"></i> ${item.rating}/10</div>
                                        <p class="text-white-50 small mb-0 lh-base" style="font-size: 0.85rem;">${item.desc || 'No description available for this episode.'}</p>
                                    </div>
                                </div>
                            `;
                        }
                        $('#top-rated-selected-item').html(cardHtml);
                    }

                    // Initial render
                    renderSelectedTopItem(0);

                    // Click event for bars
                    $('.rating-bar-item').on('click', function() {
                        $('.rating-bar-item').removeClass('active');
                        $(this).addClass('active');
                        renderSelectedTopItem($(this).data('index'));
                    });
                }

                function renderEpisodesForSeason(sId) {
                    const season = movie.seasons.find(s => s.id == sId);
                    if (!season) return;
                    
                    // Smooth transition effect
                    $('.detail-content-area, #trailer-section').stop().animate({ opacity: 0 }, 300, function() {
                        // Fallback to main movie info if season info is missing
                        const posterUrl = season.poster || movie.poster;
                        const bannerUrl = season.banner || movie.banner;
                        const descText = season.description || movie.description;
                        const trailerUrl = season.trailer || movie.trailerEmbed;

                        function updateTrailerPlayer(url) {
                            if (url && url.startsWith('indexeddb://')) {
                                const videoId = url.replace('indexeddb://', '');
                                getVideoFromDB(videoId).then(blob => {
                                    if (blob) {
                                        const objectUrl = URL.createObjectURL(blob);
                                        $('#trailer-iframe').replaceWith(`<video id="trailer-iframe" src="${objectUrl}" controls class="w-100 h-100 object-fit-cover"></video>`);
                                    } else {
                                        $('#trailer-iframe').replaceWith(`<div id="trailer-iframe" class="w-100 h-100 d-flex justify-content-center align-items-center bg-black"><p class="text-white">Video not found in local storage.</p></div>`);
                                    }
                                });
                            } else if (url && url.length > 5) {
                                if ($('#trailer-iframe').prop('tagName') === 'VIDEO') {
                                    $('#trailer-iframe').attr('src', url);
                                } else {
                                    // Check if it looks like an embed link or a direct video link
                                    if (url.includes('youtube.com') || url.includes('vimeo.com') || url.includes('embed')) {
                                        $('#trailer-iframe').replaceWith(`<iframe id="trailer-iframe" src="${url}" allowfullscreen class="w-100 h-100 border-0"></iframe>`);
                                    } else {
                                        $('#trailer-iframe').replaceWith(`<video id="trailer-iframe" src="${url}" controls class="w-100 h-100 object-fit-cover"></video>`);
                                    }
                                }
                            } else {
                                $('#trailer-iframe').replaceWith(`<div id="trailer-iframe" class="w-100 h-100 d-flex justify-content-center align-items-center bg-black"><p class="text-white">Trailer not available.</p></div>`);
                            }
                        }

                        // Update Page Metadata
                        $('#detail-poster').attr('src', posterUrl);
                        $('#detail-hero').css('background-image', `url('${bannerUrl}')`);
                        $('#detail-desc').text(descText);
                        $('#detail-year').text(season.year || movie.year);
                        $('#detail-genre').text(season.genre || movie.genre);
                        
                        const displayDuration = season.duration || movie.duration;
                        if (displayDuration) {
                            $('#detail-duration-container').removeClass('d-none');
                            $('#detail-duration').text(displayDuration);
                        } else {
                            $('#detail-duration-container').addClass('d-none');
                        }

                        $('#detail-rating').text(season.rating || movie.rating);
                        $('#detail-director').text(season.director || movie.director || 'N/A');
                        updateTrailerPlayer(trailerUrl);
                        
                        // Update Titles
                        const mainTitle = season.title || movie.title;
                        const subTitle = season.subtitle || movie.subtitle;
                        
                        $('#detail-title').text(mainTitle);
                        if (subTitle) {
                            $('#detail-subtitle').text(subTitle.toUpperCase()).removeClass('d-none');
                        } else {
                            $('#detail-subtitle').addClass('d-none');
                        }
                        
                        // Update trailer section title
                        const seasonTitle = season.title || `Season ${sId}`;
                        const displayTrailerLabel = season.trailerLabel || `${seasonTitle} Trailer`;
                        $('#trailer-section h3').text(displayTrailerLabel);
                        
                        // Update Cast, Photos, Preview for the season
                        renderCast(season.cast && season.cast.length > 0 ? season : movie);
                        renderPhotos(season.photos && season.photos.length > 0 ? season : movie);
                        renderPreview(season.preview || season.description ? season : movie);

                        $(this).animate({ opacity: 1 }, 300);
                    });
                    
                    let epHtml = '';
                    season.episodes.forEach((ep, index) => {
                        // Better fallback for episode thumbnails
                        const defaultThumb = 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1000&auto=format&fit=crop';
                        const thumbUrl = ep.thumb || movie.poster || defaultThumb;

                        epHtml += `
                            <div class="col-12">
                                <div class="episode-rich-card liquid-glass p-3 rounded-4 d-flex gap-4 mb-3" style="cursor: pointer;" data-id="${ep.id}" data-embed="${ep.embed}" data-season="${sId}">
                                    <div class="ep-thumb-wrapper position-relative overflow-hidden rounded-3 shadow" style="width: 240px; min-width: 240px; aspect-ratio: 16/9; background: #222;">
                                        <img src="${thumbUrl}" class="w-100 h-100 object-fit-cover" alt="${ep.title}" onerror="this.src='${defaultThumb}'">
                                        <div class="ep-play-overlay">
                                            <i class="bi bi-play-fill text-white fs-1"></i>
                                        </div>
                                    </div>
                                    <div class="ep-content flex-grow-1">
                                        <div class="d-flex justify-content-between align-items-start mb-1">
                                            <h5 class="text-white fw-bold m-0 fs-6">${season.title || 'S' + sId}.E${index + 1} &bull; ${ep.title}</h5>
                                            <small class="text-white-50">${ep.date || ''}</small>
                                        </div>
                                        <p class="text-white-50 small mb-3 fw-light" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
                                            ${ep.desc || 'No description available for this episode.'}
                                        </p>
                                        <div class="d-flex align-items-center gap-3">
                                            <div class="text-warning small fw-bold">
                                                <i class="bi bi-star-fill me-1"></i> ${ep.rating || 'N/A'}/10
                                            </div>
                                            <button class="btn btn-sm btn-link text-primary text-decoration-none p-0 small" onclick="event.stopPropagation(); openQuickEpReview(${movie.id}, ${sId}, ${ep.id})">
                                                <i class="bi bi-star"></i> Rate
                                            </button>
                                            <button class="btn btn-sm btn-link text-white-50 text-decoration-none p-0 small ms-auto">Watch options</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    });
                    $('#episodes-list-content').html(epHtml);
                }

                renderSeasonUI();

                $(document).on('click', '.season-select-btn', function() {
                    currentSeasonId = $(this).data('id');
                    renderSeasonUI();
                });

                // Click episode -> Open Detailed View
                $(document).off('click', '.episode-rich-card').on('click', '.episode-rich-card', function() {
                    const epId = $(this).data('id');
                    const sId = $(this).data('season');
                    openEpisodeDetail(movie, sId, epId);
                });

                window.openEpisodeDetail = function(movie, sId, epId) {
                    const season = movie.seasons.find(s => s.id == sId);
                    const ep = season.episodes.find(e => e.id == epId);
                    if (!ep) return;

                    $('#ep-detail-title').text(ep.title);
                    $('#ep-detail-meta').html(`S${sId}.E${season.episodes.indexOf(ep) + 1} &bull; ${ep.date || ''}`);
                    
                    // Handle Player: YouTube Embed vs Local IndexedDB Video
                    const playerContainer = $('#ep-video-iframe').parent();
                    if (ep.embed && ep.embed.startsWith('indexeddb://')) {
                        const videoId = ep.embed.replace('indexeddb://', '');
                        getVideoFromDB(videoId).then(blob => {
                            if (blob) {
                                const videoUrl = URL.createObjectURL(blob);
                                playerContainer.html(`<video id="ep-video-player" src="${videoUrl}" controls class="w-100 h-100 object-fit-cover"></video>`);
                            }
                        });
                    } else {
                        playerContainer.html(`<iframe id="ep-video-iframe" src="${ep.embed}" allowfullscreen class="w-100 h-100 border-0"></iframe>`);
                    }

                    $('#ep-detail-directors').text(ep.directors || 'N/A');
                    $('#ep-detail-writers').text(ep.writers || 'N/A');
                    $('#ep-detail-composer').text(ep.composer || 'N/A');
                    $('#ep-detail-studio').text(ep.studio || 'N/A');
                    $('#ep-detail-creator').text(ep.creator || 'N/A');
                    $('#ep-detail-rating').text(ep.rating || '9.0');
                    $('#ep-summary-rating-avg').text(ep.rating || '9.0');

                    // Storyline
                    $('#ep-detail-storyline').text(ep.desc || 'No description available for this episode.');

                    // Render Cast (Slider)
                    let castHtml = '';
                    (ep.cast || []).forEach(c => {
                        const photo = c.photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(c.name)}&background=random&color=fff`;
                        castHtml += `
                            <div class="flex-shrink-0" style="width: 280px;">
                                <div class="d-flex align-items-center gap-3 p-3 liquid-glass rounded-4 border border-white border-opacity-10 h-100 shadow-sm">
                                    <img src="${photo}" class="rounded-circle shadow" style="width: 65px; height: 65px; object-fit: cover; border: 1px solid rgba(255, 255, 255, 0.15);">
                                    <div class="overflow-hidden">
                                        <h6 class="text-white fw-bold m-0 text-truncate" style="font-size: 0.95rem;">${c.name}</h6>
                                        <small class="text-white-50 text-truncate d-block" style="font-size: 0.8rem;">${c.role}</small>
                                    </div>
                                </div>
                            </div>
                        `;
                    });
                    $('#ep-cast-slider').html(castHtml || '<p class="text-white-50">No cast information available.</p>');
                    $('#ep-cast-count').text((ep.cast || []).length);

                    // Render Gallery
                    let photoHtml = '';
                    (ep.photos || []).forEach(p => {
                        photoHtml += `
                            <div style="min-width: 300px; height: 170px;">
                                <div class="ratio ratio-16x9 rounded-3 overflow-hidden shadow-sm border border-white border-opacity-10 hover-scale h-100" style="cursor: pointer;">
                                    <img src="${p}" class="w-100 h-100 object-fit-cover" alt="Episode Photo">
                                </div>
                            </div>
                        `;
                    });
                    $('#ep-gallery-slider').html(photoHtml || '<p class="text-white-50">No photos available.</p>');
                    $('#ep-photo-count').text((ep.photos || []).length + ' Photos');

                    // Render Episode Reviews
                    window.renderEpReviews = function(mId, sId, eId) {
                        const key = `cinematic_ep_reviews_${mId}_${sId}_${eId}`;
                        const reviews = JSON.parse(localStorage.getItem(key)) || [];
                        let html = '';
                        
                        if (reviews.length > 0) {
                            reviews.forEach(r => {
                                const dateStr = new Date(r.date).toLocaleDateString();
                                // Create star rating string
                                let stars = '';
                                for(let i=1; i<=10; i++) {
                                    stars += `<i class="bi bi-star${i <= r.rating ? '-fill' : ''} small"></i>`;
                                }

                                html += `
                                    <div class="p-4 rounded-4 border border-white border-opacity-5 mb-3" style="background: rgba(255,255,255,0.02);">
                                        <div class="d-flex justify-content-between align-items-start mb-3">
                                            <div class="d-flex align-items-center gap-3">
                                                <div class="bg-secondary bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center text-white-50 fw-bold" style="width: 42px; height: 42px; border: 1px solid rgba(255,255,255,0.1);">${r.username.charAt(0).toUpperCase()}</div>
                                                <div>
                                                    <div class="text-white fw-medium" style="font-size: 0.95rem;">${r.username}</div>
                                                    <div class="text-white-50" style="font-size: 0.75rem;">${dateStr}</div>
                                                </div>
                                            </div>
                                            <div class="text-warning d-flex flex-column align-items-end">
                                                <div class="d-flex gap-1 mb-1" style="font-size: 0.7rem;">${stars}</div>
                                                <span class="fw-bold" style="font-size: 0.9rem;">${r.rating}<small class="opacity-50">/10</small></span>
                                            </div>
                                        </div>
                                        <h6 class="text-white fw-bold mb-2" style="font-size: 1rem; letter-spacing: 0.3px;">${r.title}</h6>
                                        <p class="text-white-50 small mb-0 fw-light lh-base" style="font-size: 0.88rem; letter-spacing: 0.2px;">${r.text}</p>
                                    </div>
                                `;
                            });
                        } else {
                            html = `
                                <div class="text-white-50 py-5 text-center">
                                    <i class="bi bi-chat-dots fs-1 mb-3 d-block opacity-25"></i>
                                    <p class="fw-light">No reviews yet. Be the first to share your thoughts!</p>
                                </div>
                            `;
                        }
                        $('#ep-reviews-list').html(html);
                    };

                    window.renderEpReviews(movie.id, sId, epId);

                    // Review Modal logic for episodes
                    window.openEpReviewModal = function() {
                        window.currentEpForReview = { mId: movie.id, sId: sId, eId: epId };
                        const modal = new bootstrap.Modal(document.getElementById('review-form-modal'));
                        
                        // Override form submit for episode
                        $('#review-form').off('submit').on('submit', function(e) {
                            e.preventDefault();
                            const rating = $('#review-rating-value').val();
                            const title = $('#review-title').val();
                            const text = $('#review-text').val();
                            
                            if (rating == 0) { alert('Please select a rating!'); return; }
                            
                            const key = `cinematic_ep_reviews_${window.currentEpForReview.mId}_${window.currentEpForReview.sId}_${window.currentEpForReview.eId}`;
                            let reviews = JSON.parse(localStorage.getItem(key)) || [];
                            
                            reviews.unshift({
                                username: window.currentUser || 'Anonymous',
                                rating: parseInt(rating),
                                title: title || 'Episode Review',
                                text: text,
                                date: new Date().toISOString()
                            });
                            
                            localStorage.setItem(key, JSON.stringify(reviews));
                            $('#review-form-modal').modal('hide');
                            window.renderEpReviews(window.currentEpForReview.mId, window.currentEpForReview.sId, window.currentEpForReview.eId);
                            
                            // Reset form
                            $('#review-title').val('');
                            $('#review-text').val('');
                            $('#review-rating-value').val(0);
                            $('.star-item').removeClass('bi-star-fill').addClass('bi-star');
                        });
                        
                        modal.show();
                    };

                    $('#episode-detail-view').removeClass('d-none').hide().fadeIn(300);
                    $('body').css('overflow', 'hidden'); // Prevent background scroll
                };

                window.closeEpisodeDetail = function() {
                    $('#episode-detail-view').fadeOut(300, function() {
                        $(this).addClass('d-none');
                        $('#ep-video-iframe').attr('src', ''); // Stop video
                        $('body').css('overflow', 'auto');
                    });
                };
            } else {
                $('#episodes-section').addClass('d-none');
            }

            function updateTrailerPlayer(url) {
                if (url && url.startsWith('indexeddb://')) {
                    const videoId = url.replace('indexeddb://', '');
                    getVideoFromDB(videoId).then(blob => {
                        if (blob) {
                            const objectUrl = URL.createObjectURL(blob);
                            $('#trailer-iframe').replaceWith(`<video id="trailer-iframe" src="${objectUrl}" controls class="w-100 h-100 object-fit-cover"></video>`);
                        } else {
                            $('#trailer-iframe').replaceWith(`<div id="trailer-iframe" class="w-100 h-100 d-flex justify-content-center align-items-center bg-black"><p class="text-white">Video not found in local storage.</p></div>`);
                        }
                    });
                } else if (url && url.length > 5) {
                    if (url.includes('youtube.com') || url.includes('vimeo.com') || url.includes('embed')) {
                        $('#trailer-iframe').replaceWith(`<iframe id="trailer-iframe" src="${url}" allowfullscreen class="w-100 h-100 border-0"></iframe>`);
                    } else {
                        $('#trailer-iframe').replaceWith(`<video id="trailer-iframe" src="${url}" controls class="w-100 h-100 object-fit-cover"></video>`);
                    }
                } else {
                    $('#trailer-iframe').replaceWith(`<div id="trailer-iframe" class="w-100 h-100 d-flex justify-content-center align-items-center bg-black"><p class="text-white">Trailer not available.</p></div>`);
                }
            }

            if (movie.localVideo && movie.localVideo.startsWith('indexeddb://')) {
                updateTrailerPlayer(movie.localVideo);
            } else if (movie.localVideo && movie.localVideo.length > 5) {
                updateTrailerPlayer(movie.localVideo);
            } else {
                updateTrailerPlayer(movie.trailerEmbed);
            }
            
            $('#btn-add-watchlist').attr('data-id', movie.id).attr('data-title', movie.title);

            // Render phim liên quan (cùng thể loại, khác phim hiện tại)
            let relatedHtml = '';
            let relatedCount = 0;
            moviesData.forEach(m => {
                if (m.genre === movie.genre && m.id !== movie.id && relatedCount < 4) {
                    relatedHtml += renderMovieCard(m);
                    relatedCount++;
                }
            });
            $('#related-movies-grid').html(relatedHtml);

            // ---- YÊU CẦU: REVIEW & RATING SYSTEM ----
            let currentEpisodeId = null; // null means movie review, otherwise episode ID
            
            function getReviewKey() {
                return currentEpisodeId ? `cinematic_reviews_${movieId}_ep${currentEpisodeId}` : `cinematic_reviews_${movieId}`;
            }

            function renderReviews() {
                const reviewsKey = getReviewKey();
                let reviewsData = JSON.parse(localStorage.getItem(reviewsKey)) || [];
                
                // Add some dummy featured reviews if empty for visual demo
                if (reviewsData.length === 0) {
                    reviewsData = [
                        { id: 101, username: "Patterson13", rating: 10, title: "Best movie I have seen in my life", text: "This movie was the best written, acted, visual effected, etc. movie. This movie was the best movie I have ever seen. I am a huge Christopher Nolan fan and this is his best work yet.", date: new Date().toISOString() },
                        { id: 102, username: "e-jackson1985", rating: 10, title: "Masterpiece", text: "Amongst the best movies of all time. The story, the acting, the script, the cinematography, the effects, the sound and the production as a whole were just amazing.", date: new Date().toISOString() },
                        { id: 103, username: "MovieCritic99", rating: 9, title: "Stunning Visuals", text: "A visual treat from start to finish. The pacing is a bit slow for some, but it adds to the atmosphere. Definitely worth watching on the biggest screen possible.", date: new Date().toISOString() }
                    ];
                }

                let html = '';
                reviewsData.forEach(review => {
                    html += `
                        <div class="review-modern-card">
                            <div class="user-meta">
                                <div class="user-img">
                                    <i class="bi bi-person-fill"></i>
                                </div>
                                <div>
                                    <h6 class="username">${review.username}</h6>
                                    <div class="rating-badge">
                                        <i class="bi bi-star-fill"></i> ${review.rating} / 10
                                    </div>
                                </div>
                            </div>
                            <span class="review-title">${review.title || 'Great Movie'}</span>
                            <p class="review-content">${review.text || 'No text provided for this review.'}</p>
                        </div>
                    `;
                });
                $('#reviews-container').html(html);
            }

            // Render Cast
            function renderCast(dataObj) {
                const target = dataObj || movie;
                const cast = target.cast || [
                    { name: "Matthew McConaughey", role: "Cooper", photo: "https://image.tmdb.org/t/p/w200/gEU2QlsUUHXjNpeMacBj4kSpBq0.jpg" },
                    { name: "Anne Hathaway", role: "Brand", photo: "https://image.tmdb.org/t/p/w200/o987987987.jpg" },
                    { name: "Jessica Chastain", role: "Murph", photo: "https://image.tmdb.org/t/p/w200/vDxlS8v8S0E9oP9X9v9YvYvC9iE.jpg" },
                    { name: "Ellen Burstyn", role: "Murph (older)", photo: "https://image.tmdb.org/t/p/w200/987987987987.jpg" },
                    { name: "Michael Caine", role: "Professor Brand", photo: "https://image.tmdb.org/t/p/w200/987987987.jpg" }
                ];
                let html = '';
                cast.forEach(c => {
                    html += `
                        <div class="cast-slider-item">
                            <div class="d-flex align-items-center gap-3">
                                <img src="${c.photo}" class="cast-photo-thumb" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(c.name)}&background=random'">
                                <div class="overflow-hidden">
                                    <h6 class="text-white fw-bold m-0 text-truncate" style="font-size: 0.9rem;">${c.name}</h6>
                                    <small class="text-white-50 text-truncate d-block" style="font-size: 0.75rem;">${c.role}</small>
                                </div>
                            </div>
                        </div>
                    `;
                });
                $('#cast-slider').html(html);
                $('#cast-count').text((cast.length > 0 ? cast.length : ''));
            }

            // Render Photos
            function renderPhotos(dataObj) {
                const target = dataObj || movie;
                const photos = target.photos || [
                    "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
                    "https://image.tmdb.org/t/p/original/jYEW5xZkZk2WTrdbMGAPFuBqbDc.jpg",
                    "https://image.tmdb.org/t/p/original/fm6KqXpk3M2HVveHwCrBRoOoA02.jpg",
                    "https://image.tmdb.org/t/p/original/14QbnygCuTO0vl7CAFmZ7noaMNC.jpg",
                    "https://image.tmdb.org/t/p/original/b0PlSNiZ3eDAnz247oK5t6yP12F.jpg",
                    "https://image.tmdb.org/t/p/original/s3TBrRGB1inv7Ero9kk2XN6XOE4.jpg"
                ];
                let html = '';
                photos.forEach(p => {
                    html += `
                        <div class="photo-slider-item">
                            <img src="${p}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1000&auto=format&fit=crop'">
                        </div>
                    `;
                });
                $('#photo-slider').html(html);
                $('#photo-count').text((photos.length > 0 ? photos.length : ''));
            }

            // Render Preview
            function renderPreview(dataObj) {
                const target = dataObj || movie;
                const preview = target.preview || target.description;
                $('#preview-content').text(preview);
            }

            renderReviews();
            renderCast();
            renderPhotos();
            renderPreview();

            // Xử lý chọn sao
            $('.star-item').hover(
                function() {
                    const val = $(this).data('value');
                    $('.star-item').each(function() {
                        if ($(this).data('value') <= val) {
                            $(this).removeClass('bi-star').addClass('bi-star-fill');
                        } else {
                            $(this).removeClass('bi-star-fill').addClass('bi-star');
                        }
                    });
                },
                function() {
                    const currentVal = $('#review-rating-value').val();
                    $('.star-item').each(function() {
                        if ($(this).data('value') <= currentVal) {
                            $(this).removeClass('bi-star').addClass('bi-star-fill');
                        } else {
                            $(this).removeClass('bi-star-fill').addClass('bi-star');
                        }
                    });
                }
            );

            function requireLoginInteractive() {
                // Tạm thời cho phép review không cần đăng nhập để dễ test
                return false;
                /*
                if (!window.currentUser) {
                    openLoginModal();
                    $('#toast-body-text').text('Vui lòng đăng nhập để thao tác!');
                    const toast = new bootstrap.Toast(document.getElementById('watchlistToast'));
                    toast.show();
                    return true;
                }
                return false;
                */
            }

            $('.star-item').click(function() {
                if (requireLoginInteractive()) return;
                const val = $(this).data('value');
                $('#review-rating-value').val(val);
                $('.star-item').each(function() {
                    if ($(this).data('value') <= val) {
                        $(this).removeClass('bi-star').addClass('bi-star-fill');
                    } else {
                        $(this).removeClass('bi-star-fill').addClass('bi-star');
                    }
                });
            });

            $('#review-text').on('focus', function() {
                if (requireLoginInteractive()) {
                    $(this).blur();
                }
            });

            // Gửi review
            $('#review-form').submit(function(e) {
                e.preventDefault();
                
                if (requireLoginInteractive()) return;

                const rating = $('#review-rating-value').val();
                const title = $('#review-title').val().trim();
                const text = $('#review-text').val().trim();
                
                if (rating == 0) {
                    alert('Please select a star rating.');
                    return;
                }

                const reviewsKey = getReviewKey();
                let reviewsData = JSON.parse(localStorage.getItem(reviewsKey)) || [];

                const newReview = {
                    id: Math.floor(Math.random() * 10000),
                    username: currentUser || "Anonymous",
                    rating: parseInt(rating),
                    title: title,
                    text: text,
                    date: new Date().toISOString()
                };

                reviewsData.unshift(newReview); // Thêm lên đầu
                localStorage.setItem(reviewsKey, JSON.stringify(reviewsData));
                
                // Reset form
                $('#review-title').val('');
                $('#review-text').val('');
                $('#review-rating-value').val(0);
                $('.star-item').removeClass('bi-star-fill').addClass('bi-star');
                
                // Hide modal
                $('#review-form-modal').modal('hide');
                
                renderReviews();
                
                // Hiện toast thông báo
                $('#toast-body-text').text('Cảm ơn bạn đã gửi đánh giá!');
                const toast = new bootstrap.Toast(document.getElementById('watchlistToast'));
                toast.show();
            });
        }
    }

    // ---- YÊU CẦU JQUERY 3: Add to Watchlist (Click) ----
    // Sử dụng event delegation vì nút có thể được render động
    $(document).on('click', '.btn-watchlist', function(e) {
        e.preventDefault(); // Tránh reload nếu bọc trong the <a>
        
        let movieTitle = $(this).data('title');
        
        // Đổi icon và màu nút
        $(this).html('<i class="bi bi-check-lg"></i> Added');
        $(this).removeClass('btn-outline-light').addClass('btn-success');
        $(this).prop('disabled', true);

        // Tăng badge
        watchlistCount++;
        $('#watchlist-badge').text(watchlistCount);

        // Hiện Toast
        $('#toast-body-text').text(`Đã thêm "${movieTitle}" vào Watchlist thành công!`);
        const toastElement = document.getElementById('watchlistToast');
        const toast = new bootstrap.Toast(toastElement);
        toast.show();
    });

    // ---- YÊU CẦU: GLOBAL TRAILER MODAL ----
    const trailerModalHtml = `
    <div class="modal fade" id="globalTrailerModal" tabindex="-1" data-bs-theme="dark">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content bg-transparent border-0">
                <div class="modal-header border-0 pb-0">
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-0">
                    <div class="ratio ratio-16x9 rounded-4 overflow-hidden shadow-lg bg-black" id="globalTrailerContainer">
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    $('body').append(trailerModalHtml);

    $(document).on('click', '.play-trailer-btn', async function(e) {
        e.preventDefault();
        e.stopPropagation();
        const embedUrl = $(this).data('embed');
        const localVideo = $(this).data('local');
        
        let mediaHtml = '';
        if (localVideo && localVideo.startsWith('indexeddb://')) {
            const videoId = localVideo.replace('indexeddb://', '');
            const blob = await getVideoFromDB(videoId);
            if (blob) {
                const objectUrl = URL.createObjectURL(blob);
                mediaHtml = `<video src="${objectUrl}" controls autoplay class="w-100 h-100 object-fit-contain"></video>`;
            } else {
                mediaHtml = `<div class="w-100 h-100 d-flex justify-content-center align-items-center bg-black"><p class="text-white">Video không tìm thấy trong Database.</p></div>`;
            }
        } else if (localVideo && localVideo.length > 5) {
            mediaHtml = `<video src="${localVideo}" controls autoplay class="w-100 h-100 object-fit-contain"></video>`;
        } else {
            mediaHtml = `<iframe src="${embedUrl}?autoplay=1" allowfullscreen allow="autoplay"></iframe>`;
        }
        
        $('#globalTrailerContainer').html(mediaHtml);
        const modal = new bootstrap.Modal(document.getElementById('globalTrailerModal'));
        modal.show();
    });

    $(document).on('hidden.bs.modal', '#globalTrailerModal', function () {
        $('#globalTrailerContainer').empty();
    });

    // ---- YÊU CẦU: AUTHENTICATION (LOGIN/SIGNUP) ----
    const loginModalHtml = `
    <div class="modal fade" id="loginModal" tabindex="-1" data-bs-theme="dark">
        <div class="modal-dialog modal-sm modal-dialog-centered">
            <div class="modal-content bg-dark border-secondary border-opacity-50">
                <div class="modal-header border-0 pb-0">
                    <h5 class="modal-title font-heading fw-bold">Sign In</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label class="form-label text-white-50 small">Username</label>
                        <input type="text" id="loginUsername" class="form-control bg-transparent text-white border-secondary" placeholder="Enter your name...">
                    </div>
                    <button class="btn btn-primary-custom w-100 rounded-pill" onclick="handleLogin()">Login</button>
                    <p class="text-white-50 small text-center mt-3 mb-0">For demo, just enter any name to login.</p>
                </div>
            </div>
        </div>
    </div>
    `;
    $('body').append(loginModalHtml);

    window.currentUser = localStorage.getItem('cinematic_user');

    window.updateNavbarAuth = function() {
        const t = window.translations[window.currentLang];
        if (window.currentUser) {
            $('.auth-buttons').html(`
                <span class="text-white fw-medium d-none d-md-inline-block px-2"><i class="bi bi-person-circle"></i> Hi, ${window.currentUser}</span>
                <button class="btn btn-outline-danger btn-sm rounded-pill px-3 ms-2" onclick="handleLogout()">${t.logout}</button>
            `);
        } else {
            $('.auth-buttons').html(`
                <button class="btn text-white fw-medium rounded-pill px-3" onclick="openLoginModal()">${t.login}</button>
                <button class="btn btn-light text-dark rounded-pill px-4 fw-bold shadow-sm" onclick="openLoginModal()">${t.signup}</button>
            `);
        }
    }

    window.openLoginModal = function() {
        const modal = new bootstrap.Modal(document.getElementById('loginModal'));
        modal.show();
    };

    window.handleLogin = function() {
        const username = $('#loginUsername').val().trim();
        if (username) {
            localStorage.setItem('cinematic_user', username);
            window.currentUser = username;
            window.updateNavbarAuth();
            $('#loginModal').modal('hide');
        }
    };

    window.handleLogout = function() {
        localStorage.removeItem('cinematic_user');
        window.currentUser = null;
        window.updateNavbarAuth();
    };

    // ---- YÊU CẦU: EMOJI REACTIONS (Youtube Style) ----
    $(document).on('click', '.emoji-btn', function() {
        const countSpan = $(this).find('span');
        if (countSpan.length > 0) {
            let currentCount = parseInt(countSpan.text());
            countSpan.text(currentCount + 1);
        }
        $(this).css('transform', 'scale(1.2)');
        setTimeout(() => $(this).css('transform', 'scale(1)'), 200);
    });

    // Run auth update on init
    window.updateNavbarAuth();
    window.applyLanguage(window.currentLang);
    window.openQuickEpReview = function(mId, sId, eId) {
        window.currentEpForReview = { mId: mId, sId: sId, eId: eId };
        const modal = new bootstrap.Modal(document.getElementById('review-form-modal'));
        
        // Override form submit for episode
        $('#review-form').off('submit').on('submit', function(e) {
            e.preventDefault();
            const rating = $('#review-rating-value').val();
            const title = $('#review-title').val();
            const text = $('#review-text').val();
            
            if (rating == 0) { alert('Please select a rating!'); return; }
            
            const key = `cinematic_ep_reviews_${mId}_${sId}_${eId}`;
            let reviews = JSON.parse(localStorage.getItem(key)) || [];
            
            reviews.unshift({
                username: window.currentUser || 'Anonymous',
                rating: parseInt(rating),
                title: title || 'Episode Review',
                text: text,
                date: new Date().toISOString()
            });
            
            localStorage.setItem(key, JSON.stringify(reviews));
            $('#review-form-modal').modal('hide');
            
            // If the review list inside episode detail is open, re-render it
            if (window.renderEpReviews) {
                window.renderEpReviews(mId, sId, eId);
            } else {
                alert('Đánh giá của bạn đã được ghi nhận!');
            }
            
            // Reset form
            $('#review-title').val('');
            $('#review-text').val('');
            $('#review-rating-value').val(0);
            $('.star-item').removeClass('bi-star-fill').addClass('bi-star');
        });
        
        modal.show();
    };



    // Hero Mute Toggle (Global)
    $(document).on('click', '#hero-mute-btn', function() {
        const $videos = $('.hero-video-bg');
        const $icon = $(this).find('i');
        
        const isMuted = $videos.prop('muted');
        $videos.prop('muted', !isMuted);
        
        if (isMuted) {
            $icon.removeClass('bi-volume-mute-fill').addClass('bi-volume-up-fill');
        } else {
            $icon.removeClass('bi-volume-up-fill').addClass('bi-volume-mute-fill');
        }
    });

    // Force Play Hero Videos on slide
    $('#heroCarousel').on('slid.bs.carousel', function () {
        const activeVideo = $(this).find('.carousel-item.active video')[0];
        if (activeVideo) {
            activeVideo.play().catch(e => console.warn("Hero video play error:", e));
        }
    });
    
    // Auto play first slide on load
    const firstVideo = $('.carousel-item.active video')[0];
    if (firstVideo) firstVideo.play().catch(e => {});
    // --- LOAD CUSTOM HERO BANNER ---
    async function loadCustomHeroBanner() {
        const hasCustomBanner = localStorage.getItem('has_custom_hero_video');
        const customDataStr = localStorage.getItem('custom_hero_banner_data');
        const hasCustomLogo = localStorage.getItem('has_custom_hero_logo');
        
        if (!hasCustomBanner || !customDataStr) return;

        try {
            const customData = JSON.parse(customDataStr);
            const DB_NAME = 'CinematicVideoDB';
            const STORE_NAME = 'videos';
            
            const dbRequest = indexedDB.open(DB_NAME, 1);
            dbRequest.onsuccess = function(e) {
                const db = e.target.result;
                const tx = db.transaction(STORE_NAME, 'readonly');
                const store = tx.objectStore(STORE_NAME);
                
                // Fetch Video
                const getReqVideo = store.get('custom_hero_banner_video');
                
                getReqVideo.onsuccess = function() {
                    if (getReqVideo.result) {
                        const videoUrl = URL.createObjectURL(getReqVideo.result);
                        
                        // Default title is text
                        let titleHtml = `<h1 class="display-1 fw-black text-white lh-1 mb-4 hero-title" style="font-size: 5rem; letter-spacing: -2px; text-shadow: 2px 2px 8px rgba(0,0,0,0.8);">${customData.title}</h1>`;
                        
                        // Check if Logo exists
                        if (hasCustomLogo) {
                            const getReqLogo = store.get('custom_hero_banner_logo');
                            getReqLogo.onsuccess = function() {
                                if (getReqLogo.result) {
                                    const logoUrl = URL.createObjectURL(getReqLogo.result);
                                    const logoMaxWidth = customData.logoSize ? `${customData.logoSize}px` : '500px';
                                    titleHtml = `<img src="${logoUrl}" alt="${customData.title}" class="hero-custom-logo mb-3" style="width: auto; height: auto; max-width: ${logoMaxWidth}; max-height: 250px; display: block; filter: drop-shadow(0px 8px 12px rgba(0,0,0,0.8));">`;
                                }
                                renderBanner(videoUrl, titleHtml, customData);
                            };
                            getReqLogo.onerror = () => renderBanner(videoUrl, titleHtml, customData);
                        } else {
                            renderBanner(videoUrl, titleHtml, customData);
                        }
                    }
                };
            };
        } catch (err) {
            console.warn("Failed to load custom hero banner:", err);
        }
    }
    
    function renderBanner(videoUrl, titleHtml, customData) {
        const customSlideHtml = `
            <div class="carousel-item active" data-bs-interval="10000">
                <div class="hero-video-wrapper">
                    <video autoplay muted loop playsinline class="hero-video-bg">
                        <source src="${videoUrl}" type="video/mp4">
                    </video>
                    <div class="hero-video-overlay"></div>
                </div>
                <div class="container h-100 position-relative d-flex align-items-center">
                    <div class="hero-content-clean">
                        <span class="badge bg-danger rounded-1 mb-3 px-3 py-1 fw-bold text-uppercase" style="letter-spacing: 2px;">${customData.topBadge || 'NỔI BẬT'}</span>
                        ${titleHtml}
                        
                        <div class="d-flex align-items-center gap-3 mb-3 text-white-50 small fw-bold">
                            <span class="text-warning"><i class="bi bi-star-fill me-1"></i>${customData.rating}</span>
                            <span>${customData.year}</span>
                            <span class="border border-secondary rounded px-2 text-white">${customData.badge}</span>
                        </div>
                        
                        ${customData.desc ? `<p class="lead text-light fs-6 mb-0" style="max-width: 600px; text-shadow: 1px 1px 4px rgba(0,0,0,0.8);">${customData.desc}</p>` : ''}
                    </div>
                </div>
            </div>
        `;
        
        const $carouselInner = $('#heroCarousel .carousel-inner');
        if ($carouselInner.length > 0) {
            $carouselInner.html(customSlideHtml);
            $('.carousel-indicators').hide();
            $('.carousel-control-prev, .carousel-control-next').hide();
        }
    }

    loadCustomHeroBanner();
});

// Helper for slider scrolling
window.scrollSlider = function(id, amount) {
    const slider = document.getElementById(id);
    if (slider) {
        slider.scrollBy({ left: amount, behavior: 'smooth' });
    }
};

window.selectInlineRating = function(rating) {
    window.currentSelectedRating = rating;
    $('.rating-bar-wrapper').removeClass('selected');
    $(`.rating-bar-wrapper:nth-child(${rating})`).addClass('selected');
    $('#selected-rating-text').text(rating);
    $('#inline-review-form').fadeIn();
    
    // Scroll to form smoothly
    $('html, body').animate({
        scrollTop: $("#inline-review-form").offset().top - 150
    }, 500);
};

window.submitInlineReview = function() {
    const name = $('#inlineReviewName').val().trim() || 'Anonymous';
    const text = $('#inlineReviewText').val().trim();
    const rating = window.currentSelectedRating || 10;

    if (!text) {
        alert('Please write your review before submitting!');
        return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('id');
    
    if (movieId) {
        // Use the same key as renderReviews
        const reviewsKey = `cinematic_reviews_${movieId}`;
        let reviewsData = JSON.parse(localStorage.getItem(reviewsKey)) || [];
        
        // Add new review to the end
        reviewsData.push({
            username: name,
            rating: rating,
            title: 'User Review',
            text: text,
            date: new Date().toISOString()
        });
        
        localStorage.setItem(reviewsKey, JSON.stringify(reviewsData));
        
        // Success feedback and reset
        $('#inlineReviewName').val('');
        $('#inlineReviewText').val('');
        $('#inline-review-form').fadeOut();
        
        location.reload(); 
    }
};
