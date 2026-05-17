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
        'genre_detective': 'Detective',
        'genre_supernatural': 'Supernatural',
        'genre_psychological': 'Psychological',
        'genre_thriller': 'Thriller',
        'genre_fantasy': 'Fantasy',
        'genre_animation': 'Animation',
        'genre_family': 'Family',
        'genre_crime': 'Crime',
        'genre_documentary': 'Documentary',
        'genre_music': 'Music',
        'genre_history': 'History',
        'genre_war': 'War',
        'genre_western': 'Western',
        'genre_youth': 'Youth',
        'region_uk': 'UK',
        'coll_netflix': 'Only on Netflix'
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
        'genre_action': 'Hành động',
        'genre_scifi': 'Viễn tưởng',
        'genre_drama': 'Chính kịch',
        'director': 'Đạo diễn',
        'original_creator': 'Tác giả',
        'episodes': 'Tập phim',
        'links': 'Liên kết',
        'subscribe': 'Đăng ký',
        'join': 'Tham gia',
        'add_watchlist': 'Thêm vào danh sách',
        'added': 'Đã thêm',
        'genre_anime': 'Anime',
        'genre_horror': 'Kinh dị',
        'genre_comedy': 'Hài hước',
        'genre_romance': 'Lãng mạn',
        'genre_adventure': 'Phiêu lưu',
        'seasons': 'Phần phim',
        'movies': 'Phim lẻ',
        'section_discover': 'Khám phá',
        'section_regions': 'Khu vực',
        'section_collections': 'Bộ sưu tập',
        'region_hollywood': 'Hollywood',
        'region_kdrama': 'Phim Hàn',
        'region_chinese': 'Phim Trung',
        'coll_liveaction': 'Live-action',
        'coll_lgbtq': 'LGBTQ+',
        'genre': 'Thể loại',
        'nav_series': 'Phim bộ',
        'genre_school': 'Học đường',
        'genre_teen': 'Tuổi teen',
        'genre_coming_of_age': 'Trưởng thành',
        'genre_bromance': 'Bromance',
        'genre_mystery': 'Bí ẩn',
        'genre_detective': 'Trinh thám',
        'genre_supernatural': 'Siêu nhiên',
        'genre_psychological': 'Tâm lý',
        'genre_thriller': 'Giật gân',
        'genre_fantasy': 'Fantasay',
        'genre_animation': 'Hoạt hình',
        'genre_family': 'Gia đình',
        'genre_crime': 'Tâm lý tội phạm',
        'genre_documentary': 'Tài liệu',
        'genre_music': 'Âm nhạc',
        'genre_history': 'Lịch sử',
        'genre_war': 'Chiến tranh',
        'genre_western': 'Miền viễn tây',
        'genre_youth': 'Thanh xuân',
        'region_uk': 'Anh Quốc',
        'coll_netflix': 'Chỉ có trên Netflix'
    }
};

window.currentLang = localStorage.getItem('cinematic_lang') || 'en';
window.userWatchlist = [];

window.initWatchlist = async function() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        try {
            const list = await MovieAPI.getWatchlist();
            if (Array.isArray(list)) {
                window.userWatchlist = list.map(m => (m._id || m.id).toString());
                const badge = document.getElementById('watchlist-badge');
                if (badge) badge.textContent = window.userWatchlist.length;
            }
        } catch (e) {
            console.error("Watchlist initialization failed", e);
        }
    }
};

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
    
    // Cập nhật hiển thị nút Admin Settings
    window.updateAdminUI();
};

window.updateAdminUI = function() {
    const adminBtn = document.getElementById('admin-settings-btn');
    if (adminBtn) {
        adminBtn.style.setProperty('display', 'none', 'important');
    }
};

$(document).on('click', '.lang-switch', function(e) {
    e.preventDefault();
    const lang = $(this).data('lang');
    window.applyLanguage(lang);
});

window.getTranslatedGenre = function(genre) {
    if (!genre) return '';
    const key = `genre_${genre.toLowerCase().replace(/[^a-z]/g, '')}`;
    return (window.translations[window.currentLang] && window.translations[window.currentLang][key]) || genre;
};

let moviesData = [];

// Function to fetch and update data from Backend
window.initBackendData = async function() {
    try {
        const backendMovies = await MovieAPI.getAllMovies();
        if (backendMovies && Array.isArray(backendMovies) && backendMovies.length > 0) {
            console.log(`🚀 Loaded ${backendMovies.length} movies from Backend`);
            moviesData = backendMovies;
            
            // Sync to local storage for local-storage-based components
            try {
                localStorage.setItem('cinematic_movies', JSON.stringify(backendMovies));
            } catch (storageErr) {
                console.warn('⚠️ Syncing to localStorage failed', storageErr);
            }
            
            // Re-render only if we are not on the admin page
            if (window.location.pathname.includes('detail.html')) {
                if (typeof window.renderMovieDetail === 'function') window.renderMovieDetail();
            } else if (!window.location.pathname.includes('admin.html')) {
                if (typeof window.renderHomePage === 'function') window.renderHomePage();
                if (typeof window.renderMoviesPage === 'function') window.renderMoviesPage();
                if (typeof window.renderTopRatedPage === 'function') window.renderTopRatedPage();
            }
        }
    } catch (e) {
        console.warn('⚠️ Backend offline or error. Using empty data.', e);
    }
};

// ---- HÀM TÌM KIẾM TOÀN CỤC (NAVBAR) ----
$(document).ready(function() {
    $('form[role="search"]').on('submit', function(e) {
        e.preventDefault();
        const query = $(this).find('input[type="search"]').val().trim();
        if (query) {
            window.location.href = `movies.html?search=${encodeURIComponent(query)}`;
        }
    });

    // Nếu đang ở trang movies.html, kiểm tra xem có tham số search trên URL không
    if (window.location.pathname.includes('movies.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const searchQuery = urlParams.get('search');
        if (searchQuery) {
            $('#movieSearch').val(searchQuery);
            // Kích hoạt render tìm kiếm sau khi dữ liệu đã load xong
            setTimeout(() => {
                if (typeof renderTabContent === 'function') {
                    renderTabContent(currentType, searchQuery);
                }
            }, 500);
        }
    }
});

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

// Global variables for logos
window.globalNetflixTagLogoUrl = null;
// Default fallback logo path (dùng khi chưa upload qua Admin)
window.defaultNetflixTagLogoPath = 'images/logoNnhantraicard.png';

// Function to fetch all global logos on every page
window.fetchGlobalLogos = async function() {
    const DB_NAME = 'CinematicVideoDB';
    const STORE_NAME = 'videos';

    return new Promise((resolve) => {
        const request = indexedDB.open(DB_NAME, 1);
        request.onsuccess = async (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) return resolve();

            const tx = db.transaction(STORE_NAME, 'readonly');
            const store = tx.objectStore(STORE_NAME);

            // Fetch Netflix Tag Logo
            if (localStorage.getItem('has_global_tag_logo_netflix') === 'true') {
                const req = store.get('global_tag_logo_netflix');
                req.onsuccess = () => {
                    if (req.result) {
                        // Revoke old URL if exists to prevent memory leaks
                        if (window.globalNetflixTagLogoUrl) URL.revokeObjectURL(window.globalNetflixTagLogoUrl);
                        window.globalNetflixTagLogoUrl = URL.createObjectURL(req.result);
                    }
                    resolve(); // Resolve only after data is fetched
                };
                req.onerror = () => resolve();
            } else {
                resolve();
            }
        };
        request.onerror = () => resolve();
    });
}

let watchlistCount = 0;

// Helper for Netflix Badge
window.getNetflixBadge = function(movie) {
    if (!movie) return '';
    const isNetflix = movie.isNetflixExclusive || (movie.tags && movie.tags.includes('Only on Netflix'));
    if (isNetflix) {
        // Ưu tiên: logo từ Admin (IndexedDB) > logo file mặc định > SVG fallback
        const logoSrc = window.globalNetflixTagLogoUrl || window.defaultNetflixTagLogoPath;
        if (logoSrc) {
            return `<div class="position-absolute top-0 start-0 m-3 shadow-sm netflix-badge" style="z-index: 5;"><img src="${logoSrc}" style="height: 22px; width: auto; object-fit: contain;" class="netflix-logo-img"></div>`;
        } else {
            return `
                <div class="position-absolute top-0 start-0 m-3 shadow-sm d-flex align-items-center justify-content-center bg-danger rounded-2 netflix-badge" style="z-index: 5; width: 28px; height: 28px; padding: 5px;">
                    <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%;">
                        <path d="M7 2v20l10-20v20L7 2z"/>
                    </svg>
                </div>`;
        }
    }
    return '';
}

// Initial fetch for global logos
window.fetchGlobalLogos().catch(e => console.error("Logo fetch failed", e));

// ---- HÀM RENDER THẺ PHIM (DÙNG CHUNG) ----
window.renderMovieCardHTML = function(movie, specialClass = '') {
    let badgeHtml = '';
    
    // Determine badge content: prioritize m.badge, fallback to "NEW" if tags contain "New Movie", "New Series", etc.
    let displayBadge = movie.badge;
    if (!displayBadge && movie.tags) {
        const newTags = ['NEW', 'NEW MOVIE', 'NEW SERIES', 'HOT', 'TOP', 'SOON', 'COMING SOON'];
        const tag = movie.tags.find(t => newTags.includes(t.toUpperCase()));
        if (tag) {
            displayBadge = tag.toUpperCase();
        }
    }

    if (displayBadge) {
        let badgeClass = 'badge-liquid-new'; 
        const upperBadge = displayBadge.toString().toUpperCase().trim();
        if (upperBadge === 'HOT') badgeClass = 'badge-liquid-hot';
        if (upperBadge === 'TOP') badgeClass = 'badge-liquid-top';
        if (upperBadge === 'HD') badgeClass = 'badge-liquid-hd';
        if (upperBadge === '4K') badgeClass = 'badge-liquid-4k';
        if (upperBadge === 'RED' || upperBadge === 'COMING SOON' || upperBadge === 'SOON' || upperBadge === 'NEW SERIES') badgeClass = 'badge-liquid-red';
        
        // Cố định z-index cực cao để không bị overlay che khuất
        badgeHtml = `<span class="badge badge-liquid ${badgeClass} position-absolute top-0 end-0 m-2 shadow-sm" style="z-index: 20 !important; pointer-events: none;">${displayBadge}</span>`;
    }

    let netflixBadge = getNetflixBadge(movie);
    
    const movieId = (movie._id || movie.id || '').toString();
    const isAdded = window.userWatchlist && window.userWatchlist.includes(movieId);
    
    const btnText = isAdded ? 'Added' : (window.translations[window.currentLang] ? window.translations[window.currentLang]['add_watchlist'] : 'Add to Watchlist');
    const btnClass = isAdded ? 'btn-warning text-dark fw-bold' : 'btn-outline-light liquid-glass';
    const btnIcon = isAdded ? 'bi-check-lg' : 'bi-plus-lg';
    const btnDisabled = isAdded ? 'disabled' : '';

    return `
        <div class="card h-100 movie-card bg-transparent border-0 ${specialClass}">
            <a href="detail.html?id=${movie._id || movie.id}" class="text-decoration-none">
                <div class="poster-wrapper position-relative overflow-hidden rounded-4">
                    ${netflixBadge}
                    ${badgeHtml}
                    <img src="${MovieAPI.getAssetUrl(movie.poster)}" class="card-img-top" alt="${movie.title}">
                    <div class="poster-overlay d-flex flex-column justify-content-center align-items-center p-3 text-center">
                        <button class="btn btn-link play-trailer-btn mb-auto mt-auto p-0" data-embed="${movie.trailerEmbed}" data-local="${movie.localVideo || ''}">
                            <i class="bi bi-play-circle text-white opacity-75" style="font-size: 3.5rem; transition: all 0.3s;"></i>
                        </button>
                        <div class="w-100 d-flex flex-column align-items-start mt-auto">
                            <span class="badge text-bg-warning mb-2"><i class="bi bi-star-fill"></i> ${movie.rating ? parseFloat(movie.rating).toFixed(1) : '0.0'}</span>
                            <h5 class="card-title text-white mb-0 text-truncate font-heading w-100 text-start">${movie.title}</h5>
                            <p class="card-text text-light small mb-0 w-100 text-start">${movie.year} • ${window.getTranslatedGenre(movie.genre)}</p>
                        </div>
                    </div>
                </div>
            </a>
            <div class="card-footer bg-transparent border-0 pt-3 px-0 d-grid">
                <button class="btn ${btnClass} rounded-pill btn-watchlist" data-id="${movie._id || movie.id}" data-title="${movie.title}" ${btnDisabled}>
                    <i class="bi ${btnIcon}"></i> <span>${btnText}</span>
                </button>
            </div>
        </div>
    `;
};

window.renderMovieCard = function(movie, specialClass = '') {
    return `
        <div class="col movie-card-item">
            ${window.renderMovieCardHTML(movie, specialClass)}
        </div>
    `;
}

window.renderMovieCardLandscape = function(movie) {
    let netflixBadge = getNetflixBadge(movie);
    return `
        <div class="flex-shrink-0" style="width: 300px;">
            <div class="landscape-card liquid-glass rounded-4 overflow-hidden position-relative h-100 shadow-lg border border-white border-opacity-10">
                <a href="detail.html?id=${movie._id || movie.id}" class="text-decoration-none">
                    <div class="landscape-banner-wrapper position-relative" style="height: 210px;">
                        ${netflixBadge}
                        <img src="${MovieAPI.getAssetUrl(movie.banner || movie.poster)}" class="w-100 h-100 object-fit-cover" alt="${movie.title}">
                        <div class="landscape-overlay"></div>
                        <div class="landscape-play-btn">
                            <i class="bi bi-play-fill"></i>
                        </div>
                    </div>
                    <div class="p-3">
                        <div class="d-flex justify-content-between align-items-center mb-1">
                            <h6 class="text-white fw-bold m-0 text-truncate font-heading" style="font-size: 0.95rem;">${movie.title}</h6>
                            <span class="text-warning small fw-bold"><i class="bi bi-star-fill me-1"></i>${parseFloat(movie.rating).toFixed(1)}</span>
                        </div>
                        <p class="text-white-50 extra-small mb-0 opacity-75" style="font-size: 0.7rem;">${movie.year} &bull; ${window.getTranslatedGenre(movie.genre)}</p>
                    </div>
                </a>
            </div>
        </div>
    `;
}

window.renderVerticalRankCard = function(movie, index, extraClass = 'liquid-glass-rank-card') {
    let netflixBadge = getNetflixBadge(movie);
    // For rank cards, maybe a smaller version of the badge
    if (netflixBadge) {
        netflixBadge = netflixBadge.replace('m-3', 'm-1').replace('width: 28px; height: 28px;', 'width: 18px; height: 18px;');
    }

    return `
        <a href="detail.html?id=${movie._id || movie.id}" class="text-decoration-none d-block mb-2">
            <div class="${extraClass}">
                <div class="rank-card-inner">
                    <div class="rank-num font-heading fw-bold text-white fs-4 opacity-25" style="min-width: 32px; letter-spacing: -1px;">${(index + 1).toString().padStart(2, '0')}</div>
                    <div class="position-relative">
                         ${netflixBadge}
                         <img src="${MovieAPI.getAssetUrl(movie.poster)}" class="rounded-2 shadow-lg" style="width: 42px; height: 60px; object-fit: cover; border: 1px solid rgba(255,255,255,0.1);">
                         <div class="position-absolute top-0 start-0 w-100 h-100 rounded-2 shadow-inset" style="box-shadow: inset 0 0 8px rgba(0,0,0,0.5);"></div>
                    </div>
                    <div class="overflow-hidden flex-grow-1">
                        <h6 class="text-white fw-bold m-0 text-truncate font-heading" style="font-size: 0.85rem; letter-spacing: 0.2px;">${movie.title}</h6>
                        <div class="d-flex align-items-center gap-2 mt-1">
                            <span class="text-warning fw-bold" style="font-size: 0.75rem;"><i class="bi bi-star-fill me-1"></i> ${parseFloat(movie.rating).toFixed(1)}</span>
                            <span class="text-white-50 opacity-25" style="font-size: 0.65rem;">|</span>
                            <span class="text-white-50" style="font-size: 0.7rem;">${movie.year}</span>
                        </div>
                        <p class="text-white-50 extra-small mb-0 opacity-75" style="font-size: 0.65rem;">${window.getTranslatedGenre(movie.genre)}</p>
                    </div>
                </div>
            </div>
        </a>
    `;
}

window.renderMiniRankCard = function(movie, index) {
    let netflixBadge = getNetflixBadge(movie);
    if (netflixBadge) {
        netflixBadge = netflixBadge.replace('m-3', 'm-1').replace('width: 28px; height: 28px;', 'width: 14px; height: 14px;');
    }

    return `
        <div class="mini-rank-card liquid-glass" onclick="window.location.href='detail.html?id=${movie._id || movie.id}'">
            <div class="mini-rank-num">${index + 1}</div>
            <div class="position-relative">
                ${netflixBadge}
                <img src="${MovieAPI.getAssetUrl(movie.poster)}" class="mini-rank-img" alt="${movie.title}">
            </div>
            <div class="mini-rank-info">
                <div class="mini-rank-title text-truncate">${movie.title}</div>
                <div class="mini-rank-meta"><i class="bi bi-star-fill text-warning"></i> ${movie.rating ? parseFloat(movie.rating).toFixed(1) : '0.0'}</div>
            </div>
        </div>
    `;
}

// Helper for Spotlight Badge
window.getSpotlightBadge = function(badgeText, isInline = false) {
    if (!badgeText) return '';
    const upperText = badgeText.toString().toUpperCase().trim();
    let badgeClass = 'badge-glass-white'; 
    
    if (upperText === 'HOT') badgeClass = 'badge-liquid-hot';
    if (upperText === 'TOP') badgeClass = 'badge-liquid-top';
    if (upperText === 'NEW' || upperText === 'NEW SERIES') badgeClass = 'badge-liquid-new';
    if (upperText === 'RED' || upperText === 'COMING SOON' || upperText === 'SOON') badgeClass = 'badge-liquid-red';
    if (upperText === 'HD') badgeClass = 'badge-liquid-hd';
    if (upperText === '4K') badgeClass = 'badge-liquid-4k';

    const badgeHtml = `<span class="badge ${badgeClass} shadow-sm">${upperText}</span>`;
    
    if (upperText === 'COMING SOON' || upperText === 'RED' || upperText === 'SOON') {
        return `<div class="mb-5 spotlight-badge-container" style="margin-top: -140px; position: relative; z-index: 100;">${badgeHtml}</div>`;
    }
    
    if (isInline) return badgeHtml;
    return `<div class="mb-4" style="margin-top: -30px;">${badgeHtml}</div>`;
}

window.renderFeaturedCard = function(movie) {
    const castPhoto = (movie.cast && movie.cast.length > 0) ? MovieAPI.getAssetUrl(movie.cast[0].photo) : MovieAPI.getAssetUrl(movie.poster);
    
    return `
        <div class="featured-iqiyi-container">
            <!-- Left: Video Area (70%) -->
            <div class="featured-iqiyi-left">
                ${movie.trailer && movie.trailer.endsWith('.mp4') ? 
                    `<video src="${MovieAPI.getAssetUrl(movie.trailer)}" autoplay muted loop playsinline class="spotlight-video-el"></video>
                     <div class="spotlight-mute-btn">
                         <i class="bi bi-volume-mute-fill"></i>
                     </div>` :
                    `<img src="${MovieAPI.getAssetUrl(movie.banner || movie.poster)}" alt="background">`
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
                    ${(() => {
                        const b = (movie.badge || '').toUpperCase();
                        if (['COMING SOON', 'RED', 'HOT', 'TOP', 'NEW', 'SOON', 'NEW SERIES'].includes(b)) {
                            return getSpotlightBadge(movie.badge);
                        }
                        return '';
                    })()}
                    
                    <!-- Fallback logo if no logo image -->
                    <div class="featured-iqiyi-logo-area mb-4">
                        <h1 class="featured-iqiyi-title m-0">${movie.title}</h1>
                    </div>

                    <div class="d-flex align-items-center gap-3 mb-3" style="font-size: 0.85rem; margin-left: 10px;">
                        <span class="text-warning fw-bold d-flex align-items-center"><i class="bi bi-star-fill me-1" style="font-size: 0.75rem;"></i>${movie.rating ? parseFloat(movie.rating).toFixed(1) : '0.0'}</span>
                        <span class="fw-bold" style="color: rgba(255, 255, 255, 0.6);">${movie.year}</span>
                        ${(() => {
                            const mId = (movie._id || movie.id || '').toString();
                            const isAdded = window.userWatchlist && window.userWatchlist.includes(mId);
                            const btnClass = isAdded ? 'btn-warning text-dark fw-bold' : 'liquid-glass text-white';
                            const btnText = isAdded ? 'Added' : 'Watchlist';
                            const btnIcon = isAdded ? 'bi-check-lg' : 'bi-plus-lg';
                            const btnDisabled = isAdded ? 'disabled' : '';
                            
                            return `
                                <button class="btn ${btnClass} rounded-pill px-4 py-3 btn-watchlist transition-all hover-scale" 
                                        data-id="${movie._id || movie.id}" data-title="${movie.title}" ${btnDisabled}>
                                    <i class="bi ${btnIcon} me-1"></i> ${btnText}
                                </button>
                            `;
                        })()}
                        <a href="detail.html?id=${movie._id || movie.id}" class="btn btn-light rounded-pill px-5 py-3 fw-bold transition-all hover-scale">
                            <i class="bi bi-info-circle me-1"></i> More Info
                        </a>
                    </div>
                    <p class="text-white-50 fs-6 mb-5 d-none d-lg-block featured-iqiyi-desc">
                        ${movie.preview || movie.description || ''}
                    </p>

                    <div class="d-flex gap-3 featured-iqiyi-actions">
                        <button class="btn liquid-glass rounded-pill px-4 py-3 text-white btn-watchlist transition-all hover-scale" 
                                data-id="${movie._id || movie.id}" data-title="${movie.title}">
                            <i class="bi bi-plus-lg me-1"></i> Watchlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

window.renderCastCircle = function(person) {
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

window.renderAwardCard = function(award) {
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

$(document).ready(async function () {
    // Phím tắt bí mật cho Admin: Ctrl + Shift + A
    $(document).on('keydown', function(e) {
        if (e.ctrlKey && e.shiftKey && e.code === 'KeyA') {
            e.preventDefault();
            window.location.href = 'admin-login.html';
        }
    });

    // Cập nhật giao diện Admin ngay khi tải trang
    window.updateAdminUI();

    // Ensure logos are loaded before rendering
    await fetchGlobalLogos();
    // ---- YÊU CẦU JQUERY 1: Navbar Scroll Effect ----
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled liquid-glass-strong').removeClass('bg-transparent');
        } else {
            $('.navbar').removeClass('scrolled liquid-glass-strong').addClass('bg-transparent');
        }
    });

    // Move functions outside of ready block below

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
            if ($trendingItems.length > 12) {
                $trendingItems.slice(12).addClass('d-none');
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
        if ($trendingItems.length > 12) {
            $trendingItems.slice(12).addClass('d-none');
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
                        
                        // Sync with live moviesData if possible
                        const liveMovie = moviesData.find(m => (m.title === data.title) || (m.id == data.id));
                        if (liveMovie && liveMovie.rating) {
                            data.rating = liveMovie.rating;
                        }

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
                                    ${videoUrl ? 
                                        `<video src="${videoUrl}" autoplay muted loop playsinline class="spotlight-video-el"></video>
                                         <div class="spotlight-mute-btn">
                                             <i class="bi bi-volume-mute-fill"></i>
                                         </div>` : 
                                        `<div class="bg-dark w-100 h-100"></div>`
                                    }
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
                                        <div class="d-flex align-items-center gap-3 mb-3" style="font-size: 0.85rem; margin-left: 10px;">
                                            ${data.rating ? `<span class="text-warning fw-bold d-flex align-items-center"><i class="bi bi-star-fill me-1" style="font-size: 0.75rem;"></i>${data.rating}</span>` : ''}
                                            <span class="fw-bold" style="color: rgba(255, 255, 255, 0.6);">${data.year || ''}</span>
                                            ${window.getSpotlightBadge(data.badge, true)}
                                        </div>
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

            // Fallback to default: dùng file local nếu có
            const localSpotlightData = {
                videoSrc: 'Videos/videospotlightHome.mp4',
                logoSrc:  'images/logoYourname.png',
                charSrc:  'images/logoSpotlightHome.png',
                rating:   '8.7',
                year:     '2016',
                badge:    'C13',
                desc:     'Two high school students, Mitsuha and Taki, suddenly swap bodies, leading to magical changes in both of their lives.'
            };

            $('#featured-content').html(`
                <div class="featured-iqiyi-container">
                    <!-- Left: Video Area -->
                    <div class="featured-iqiyi-left">
                        <video src="${localSpotlightData.videoSrc}" autoplay muted loop playsinline class="spotlight-video-el"></video>
                        <div class="spotlight-mute-btn"><i class="bi bi-volume-mute-fill"></i></div>
                        <div class="diagonal-mask"></div>
                    </div>
                    <!-- Right: Character & Info -->
                    <div class="featured-iqiyi-right">
                        <div class="featured-char-wrapper">
                            <img src="${localSpotlightData.charSrc}" class="featured-char-img" alt="character">
                        </div>
                        <div class="featured-iqiyi-content">
                            <div class="featured-iqiyi-logo-area mb-4">
                                <img src="${localSpotlightData.logoSrc}" class="featured-iqiyi-logo" alt="logo">
                            </div>
                            <div class="d-flex align-items-center gap-3 mb-3" style="font-size: 0.85rem; margin-left: 10px;">
                                <span class="text-warning fw-bold d-flex align-items-center">
                                    <i class="bi bi-star-fill me-1" style="font-size: 0.75rem;"></i>${localSpotlightData.rating}
                                </span>
                                <span class="fw-bold" style="color: rgba(255,255,255,0.6);">${localSpotlightData.year}</span>
                                <span class="badge py-1 px-2" style="background:transparent; border:1px solid rgba(255,255,255,0.3); border-radius:6px; color:#fff; font-size:0.8rem;">${localSpotlightData.badge}</span>
                            </div>
                            <p class="text-white-50 fs-6 mb-5 d-none d-lg-block featured-iqiyi-desc">${localSpotlightData.desc}</p>
                        </div>
                    </div>
                </div>
            `);



        }
        
        renderSpotlightSection();

        // 4. Coming Soon
        const comingSoon = moviesData
            .filter(m => m.isComingSoon || m.year >= 2024)
            .sort((a, b) => {
                // Ưu tiên phim vừa thêm mới nhất lên đầu (dựa _id MongoDB hoặc createdAt)
                const idA = a._id ? String(a._id) : '';
                const idB = b._id ? String(b._id) : '';
                // MongoDB ObjectId: 4 bytes timestamp đầu → so sánh lexicographically là đủ
                if (idA && idB && idA !== idB) return idB.localeCompare(idA);
                // Fallback: updatedAt timestamp (admin save)
                const timeA = a.updatedAt || a.id || 0;
                const timeB = b.updatedAt || b.id || 0;
                return timeB - timeA;
            })
            .slice(0, 10);
        let csHtml = '';
        comingSoon.forEach(movie => {
            csHtml += renderMovieCard(movie, 'liquid-glass-red');
        });
        $('#scroller-coming-soon').html(csHtml || '<p class="text-white-50 py-4">Stay tuned for new releases!</p>');

        // 5. New Movies
        const newMovies = moviesData
            .filter(m => {
                const isMovie = (m.type === 'Movie' || (!m.type && !(m.seasons && m.seasons.length > 0)));
                const hasNewBadge = m.badge && m.badge.toString().toUpperCase() === 'NEW';
                return isMovie && (hasNewBadge || m.year >= 2024);
            })
            .sort((a, b) => (b.updatedAt || b.id) - (a.updatedAt || a.id))
            .slice(0, 10);
            
        let newMoviesHtml = '';
        newMovies.forEach(movie => {
            newMoviesHtml += renderMovieCard(movie);
        });
        $('#scroller-new-movies').html(newMoviesHtml || '<p class="text-white-50 py-4">New movies coming soon!</p>');

        // 5a. Most Liked
        const mostLiked = moviesData.filter(m => m.rating >= 8.5).sort((a, b) => b.rating - a.rating).slice(0, 10);
        let mlHtml = '';
        mostLiked.forEach((movie, idx) => {
            mlHtml += `
                <div class="card-most-liked-wrapper" onclick="window.location.href='detail.html?id=${movie.id}'">
                    <div class="card-most-liked-glow"></div>
                    <div class="card-most-liked-inner">
                        <div class="card-most-liked-bg-clip">
                            <div class="card-most-liked-rank">${idx + 1}</div>
                        </div>
                        <div class="card-most-liked-poster-box">
                            <img src="${MovieAPI.getAssetUrl(movie.poster)}" class="card-most-liked-img" alt="${movie.title}">
                        </div>
                        <div class="card-most-liked-content">
                            <div class="card-most-liked-badge">
                                <i class="bi bi-stars text-warning"></i> TOP ${idx + 1} CHOICE
                            </div>
                            <h5 class="card-most-liked-title">${movie.title}</h5>
                            <p class="card-most-liked-desc">${movie.preview || movie.description || ''}</p>
                            <div class="card-most-liked-footer">
                                <span class="rating-score"><i class="bi bi-star-fill me-1"></i>${movie.rating ? parseFloat(movie.rating).toFixed(1) : '0.0'}</span>
                                <span class="meta-item">${movie.year}</span>
                                <span class="meta-item">${window.getTranslatedGenre(movie.genre)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        $('#scroller-most-liked').html(mlHtml || '<p class="text-white-50 py-4">Check back for fan favorites!</p>');

        // 5b. New Series
        const newSeries = moviesData
            .filter(m => {
                const isSeries = (m.type === 'Series' || (m.seasons && m.seasons.length > 0));
                const hasNewBadge = m.badge && m.badge.toString().toUpperCase().includes('NEW');
                const hasNewTag = m.tags && m.tags.some(t => t.toUpperCase().includes('NEW'));
                return isSeries && (hasNewBadge || hasNewTag || m.year >= 2025);
            })
            .sort((a, b) => {
                // 1. Phim có nhãn NEW / tag NEW luôn được xếp lên đầu
                const aNew = (a.badge && a.badge.toString().toUpperCase().includes('NEW')) || (a.tags && a.tags.some(t => t.toUpperCase().includes('NEW')));
                const bNew = (b.badge && b.badge.toString().toUpperCase().includes('NEW')) || (b.tags && b.tags.some(t => t.toUpperCase().includes('NEW')));
                
                if (aNew && !bNew) return -1;
                if (!aNew && bNew) return 1;
                
                // 2. Nếu cùng trạng thái NEW (hoặc cùng không có), xếp theo phim vừa thêm mới nhất lên đầu
                const idA = a._id ? String(a._id) : '';
                const idB = b._id ? String(b._id) : '';
                if (idA && idB && idA !== idB) return idB.localeCompare(idA);
                
                // Fallback: ngày cập nhật hoặc ID
                const timeA = a.updatedAt ? new Date(a.updatedAt).getTime() : (parseInt(a.id) || 0);
                const timeB = b.updatedAt ? new Date(b.updatedAt).getTime() : (parseInt(b.id) || 0);
                return timeB - timeA;
            })
            .slice(0, 10);
        
        if (newSeries.length > 0) {
            // Render Spotlight (Latest one)
            const spotlight = newSeries[0];
            const spotlightHtml = `
                <div class="series-spotlight-card" onclick="window.location.href='detail.html?id=${spotlight.id}'" style="cursor: pointer;">
                    <div class="series-spotlight-badge">NEW SERIES</div>
                    <img src="${MovieAPI.getAssetUrl(spotlight.banner || spotlight.poster)}" class="series-spotlight-img" alt="${spotlight.title}">
                    <div class="series-spotlight-overlay">
                        <h3 class="series-spotlight-title">${spotlight.title}</h3>
                        <div class="series-spotlight-meta">
                            <span><i class="bi bi-star-fill text-warning me-1"></i>${parseFloat(spotlight.rating).toFixed(1)}</span>
                            <span>${spotlight.year}</span>
                            <span>${spotlight.genre}</span>
                        </div>
                        <p class="series-spotlight-desc">${spotlight.description || spotlight.preview || ''}</p>
                    </div>
                </div>
            `;
            $('#new-series-spotlight-container').show().html(spotlightHtml);
            $('#row-new-series').closest('.col-12').removeClass('col-12').addClass('col-lg-7');

            // Render others in scroller
            let newSeriesHtml = '';
            newSeries.slice(1).forEach(series => {
                newSeriesHtml += renderMovieCard(series);
            });
            $('#scroller-new-series').html(newSeriesHtml || '<p class="text-white-50 py-4">More series coming soon!</p>');
        } else {
            $('#new-series-spotlight-container').hide();
            $('#row-new-series').closest('.col-lg-7').removeClass('col-lg-7').addClass('col-12');
            $('#scroller-new-series').html('<p class="text-white-50 py-4">New series coming soon!</p>');
        }

        // --- DYNAMIC SPOTLIGHT RENDERING HELPER ---
        async function renderSectionSpotlight(type, defaultMovie, containerId) {
            const hasVideo = localStorage.getItem(`has_spotlight_video_${type}`) === 'true';
            const hasLogo = localStorage.getItem(`has_spotlight_logo_${type}`) === 'true';
            const hasMiniLogo = localStorage.getItem(`has_spotlight_mini_logo_${type}`) === 'true';
            const hasTagLogo = localStorage.getItem(`has_spotlight_tag_logo_${type}`) === 'true';
            let customDataStr = localStorage.getItem(`custom_spotlight_data_${type}`);

            let movie = { ...(defaultMovie || {}) };
            if (customDataStr) {
                const customData = JSON.parse(customDataStr);
                movie = { ...movie, ...customData };
            }

            // Sync with live moviesData for real-time rating
            const liveM = moviesData.find(m => (m.title === movie.title) || (movie.id && m.id == movie.id));
            if (liveM && liveM.rating) {
                movie.rating = liveM.rating;
            }

            // If still no movie data OR uploaded content, show empty placeholder
            const hasAnyCustomContent = movie.title || movie.youtubeId || hasVideo || hasLogo;
            
            if (!hasAnyCustomContent) {
                const emptyHtml = `
                    <div class="${type}-spotlight-card h-100" style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.1); border-radius: 2rem; position: relative; overflow: hidden; min-height: 520px; display: flex; align-items: center; justify-content: center;">
                        <div class="exclusive-badge-container">
                            <div class="exclusive-text">EXCLUSIVE</div>
                        </div>
                        <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 100%);"></div>
                        <div class="opacity-25">
                            <i class="bi bi-plus-circle fs-1 text-white"></i>
                        </div>
                    </div>
                `;
                $(`#${containerId}`).html(emptyHtml).show();
                return;
            }

            let bgHtml = (movie.banner || movie.poster) 
                ? `<img src="${MovieAPI.getAssetUrl(movie.banner || movie.poster)}" class="${type}-spotlight-img" alt="${movie.title || ''}">`
                : `<div class="${type}-spotlight-img" style="background: #111;"></div>`;
            
            // Background Priority:
            // 1. Custom YouTube ID (from Admin)
            // 2. Custom MP4 File (from Admin/IndexedDB)
            // 3. NO fallback to default YouTube trailers (to avoid errors and respect user preference)
            
            let youtubeId = movie.youtubeId;
            let isUsingLocalVideo = false;

            if (youtubeId) {
                bgHtml = `
                    <div class="spotlight-video-bg">
                        <iframe src="https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${youtubeId}&rel=0&showinfo=0&modestbranding=1" 
                                frameborder="0" allow="autoplay; encrypted-media" style="width: 100%; height: 100%; pointer-events: none; transform: scale(1.4);"></iframe>
                    </div>
                `;
            } else if (hasVideo) {
                isUsingLocalVideo = true;
            }

            let titleHtml = movie.title ? `<h3 class="${type}-spotlight-title" style="font-family: 'Outfit', sans-serif; font-weight: 900; font-size: 3.5rem; letter-spacing: -2px; text-transform: uppercase; margin-bottom: 1.5rem; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.8));">${movie.title}</h3>` : '';

            const hasSecondaryLogo = localStorage.getItem(`has_section_secondary_logo_${type}`) === 'true';

            if (hasVideo || hasLogo || isUsingLocalVideo || hasMiniLogo || hasSecondaryLogo || hasTagLogo) {
                try {
                    const db = await openVideoDB();
                    
                    // Helper to get from store independently
                    const getFromStore = (key) => {
                        return new Promise((resolve) => {
                            const tx = db.transaction(STORE_NAME, 'readonly');
                            const store = tx.objectStore(STORE_NAME);
                            const req = store.get(key);
                            req.onsuccess = () => resolve(req.result);
                            req.onerror = () => resolve(null);
                        });
                    };

                    // Load Video
                    if (isUsingLocalVideo) {
                        const vRes = await getFromStore(`spotlight_video_${type}`);
                        if (vRes) {
                            const vUrl = URL.createObjectURL(vRes);
                            bgHtml = `
                                <div class="spotlight-video-bg">
                                    <video autoplay muted loop playsinline><source src="${vUrl}" type="video/mp4"></video>
                                </div>
                            `;
                        }
                    }

                    // Load Main Logo
                    if (hasLogo) {
                        const lRes = await getFromStore(`spotlight_logo_${type}`);
                        if (lRes) {
                            const lUrl = URL.createObjectURL(lRes);
                            titleHtml = `<img src="${lUrl}" alt="${movie.title || ''}" class="spotlight-logo-img animate__animated animate__fadeIn">`;
                        }
                    }

                    // Load Mini Logo
                    if (hasMiniLogo) {
                        const mlRes = await getFromStore(`spotlight_mini_logo_${type}`);
                        if (mlRes) {
                            const mlUrl = URL.createObjectURL(mlRes);
                            movie.customMiniLogoUrl = mlUrl;
                        }
                    }

                    // Load Secondary Logo
                    if (hasSecondaryLogo) {
                        const slRes = await getFromStore(`section_secondary_logo_${type}`);
                        if (slRes) {
                            const slUrl = URL.createObjectURL(slRes);
                            window[`spotlight_secondary_logo_${type}`] = slUrl;
                        }
                    }

                    // Load Tag Logo (The label in top-left)
                    if (hasTagLogo) {
                        const tRes = await getFromStore(`spotlight_tag_logo_${type}`);
                        if (tRes) {
                            const tUrl = URL.createObjectURL(tRes);
                            movie.customTagLogoUrl = tUrl;
                        }
                    }
                } catch (e) { 
                    console.error(`Error loading dynamic spotlight ${type}:`, e);
                }
            }

            const isNetflixStyle = (type === 'netflix' || type === 'action');
            const badgeHtml = isNetflixStyle ? `
                <div class="exclusive-badge-container">
                    <div class="exclusive-text">${movie.exclusiveText || 'EXCLUSIVE'}</div>
                </div>
            ` : '';


            const html = `
                <div class="${type}-spotlight-card h-100" onclick="window.location.href='detail.html?id=${movie.id || 0}'" style="cursor: pointer; position: relative;">
                    ${badgeHtml}
                    ${bgHtml}
                    
                    <!-- Volume Toggle Button -->
                    <div class="spotlight-volume-toggle" onclick="event.stopPropagation(); toggleSpotlightVolume(this);">
                        <i class="bi bi-volume-mute-fill"></i>
                    </div>

                    <div class="${type}-spotlight-overlay">
                        ${titleHtml}
                        <div class="${type}-spotlight-meta">
                            <span><i class="bi bi-star-fill text-warning me-1"></i>${movie.rating || '8.5'}</span>
                            <span>${movie.year || '2024'}</span>
                            ${movie.customMiniLogoUrl ? `<img src="${movie.customMiniLogoUrl}" style="height: 20px; width: auto; object-fit: contain; margin-left: 5px;">` : (isNetflixStyle ? '' : '<span><i class="bi bi-fire text-warning"></i> HOT</span>')}
                        </div>
                        <p class="${type}-spotlight-desc">${movie.desc || movie.description || movie.preview || ''}</p>
                    </div>
                </div>
            `;
            $(`#${containerId}`).html(html).show();
        }

        // --- VOLUME TOGGLE FOR SPOTLIGHT ---
        window.toggleSpotlightVolume = function(btn) {
            const card = btn.closest('.netflix-spotlight-card, .action-spotlight-card');
            if (!card) return;
            const video = card.querySelector('video');
            const icon = btn.querySelector('i');
            if (video) {
                video.muted = !video.muted;
                if (video.muted) {
                    icon.className = 'bi bi-volume-mute-fill';
                    btn.classList.remove('active');
                } else {
                    icon.className = 'bi bi-volume-up-fill';
                    btn.classList.add('active');
                }
            }
        };

        // Inject Spotlight Volume Button CSS (only once)
        if (!document.getElementById('spotlight-volume-css')) {
            $('<style id="spotlight-volume-css">')
                .html(`
                    .spotlight-volume-toggle {
                        position: absolute;
                        bottom: 20px;
                        right: 20px;
                        width: 42px;
                        height: 42px;
                        background: rgba(0,0,0,0.45);
                        backdrop-filter: blur(10px);
                        -webkit-backdrop-filter: blur(10px);
                        border: 1px solid rgba(255,255,255,0.15);
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: white;
                        font-size: 1.15rem;
                        z-index: 30;
                        cursor: pointer;
                        opacity: 0;
                        visibility: hidden;
                        transform: translateY(8px);
                        transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease,
                                    background 0.2s ease, border-color 0.2s ease;
                    }
                    .netflix-spotlight-card:hover .spotlight-volume-toggle,
                    .action-spotlight-card:hover .spotlight-volume-toggle {
                        opacity: 1;
                        visibility: visible;
                        transform: translateY(0);
                    }
                    .spotlight-volume-toggle:hover {
                        background: rgba(229, 9, 20, 0.8) !important;
                        border-color: rgba(229, 9, 20, 0.6);
                        transform: scale(1.1) translateY(0) !important;
                    }
                    .spotlight-volume-toggle.active {
                        background: rgba(229, 9, 20, 0.75);
                        border-color: rgba(229, 9, 20, 0.5);
                        box-shadow: 0 0 15px rgba(229, 9, 20, 0.4);
                    }
                `)
                .appendTo('head');
        }

        // 6. Only on Netflix (Netflix Exclusive)
        const netflixExclusives = moviesData
            .filter(m => m.isNetflixExclusive || (m.tags && m.tags.includes('Only on Netflix')))
            .sort((a, b) => (b.updatedAt || b.id) - (a.updatedAt || a.id));
        
        if (netflixExclusives.length > 0) {
            // Để trống mặc định cho Spotlight Netflix
            renderSectionSpotlight('netflix', null, 'netflix-spotlight-container');

            // Render others in scroller
            let nHtml = '';
            netflixExclusives.slice(1).forEach(movie => {
                nHtml += renderMovieCardLandscape(movie);
            });
            $('#scroller-netflix-exclusive').html(nHtml || '<p class="text-white-50 py-4 w-100 text-center">More Netflix originals coming!</p>');
            $('#row-netflix-exclusive').closest('.mb-5').show();
        } else {
            $('#netflix-spotlight-container').hide();
            $('#row-netflix-exclusive').closest('.mb-5').hide();
        }

        // 7. Only on Netflix (Action/Adventure row in UI)
        const actionAdv = moviesData.filter(m => m.isNetflixExclusive || (m.tags && m.tags.includes('Only on Netflix'))).sort((a, b) => b.rating - a.rating);
        
        if (actionAdv.length > 0) {
            // Kiểm tra nếu có custom data từ Admin (IndexedDB) → dùng hàm renderSectionSpotlight
            const hasAdminVideo = localStorage.getItem('has_spotlight_video_action') === 'true';
            const hasAdminLogo  = localStorage.getItem('has_spotlight_logo_action')  === 'true';

            if (hasAdminVideo || hasAdminLogo || localStorage.getItem('custom_spotlight_data_action')) {
                // Admin đã cài → dùng hàm gốc
                const squidGame = moviesData.find(m => m.id == 112) || actionAdv[0];
                renderSectionSpotlight('action', squidGame, 'action-spotlight-container');
            } else {
                // Fallback local: dùng file video + logo đã thêm vào thư mục
                const squidGame = moviesData.find(m => m.id == 112) || actionAdv[0];
                const localVideo = 'Videos/videoSpotlightNetfilx.mp4';
                const localLogo  = 'images/logoVideoNetfilx.png';

                const html = `
                    <div class="action-spotlight-card h-100" onclick="window.location.href='detail.html?id=${squidGame.id || 0}'" style="cursor:pointer; position:relative;">
                        <div class="exclusive-badge-container">
                            <div class="exclusive-text">${squidGame.exclusiveText || 'EXCLUSIVE'}</div>
                        </div>
                        <div class="spotlight-video-bg">
                            <video autoplay muted loop playsinline><source src="${localVideo}" type="video/mp4"></video>
                        </div>
                        <!-- Volume Toggle -->
                        <div class="spotlight-volume-toggle" onclick="event.stopPropagation(); toggleSpotlightVolume(this);">
                            <i class="bi bi-volume-mute-fill"></i>
                        </div>
                        <div class="action-spotlight-overlay">
                            <img src="${localLogo}" alt="${squidGame.title || ''}" class="spotlight-logo-img animate__animated animate__fadeIn">
                            <div class="action-spotlight-meta">
                                <span><i class="bi bi-star-fill text-warning me-1"></i>${squidGame.rating || '8.3'}</span>
                                <span>${squidGame.year || '2024'}</span>
                                <img src="images/logoNetflix.png" style="height:20px; width:auto; object-fit:contain; margin-left:5px;">
                            </div>
                            <p class="action-spotlight-desc">${squidGame.description || squidGame.preview || 'Hundreds of cash-strapped players accept a strange invitation to compete in children\'s games. Inside, a tempting prize awaits with deadly high stakes.'}</p>
                        </div>
                    </div>
                `;
                $('#action-spotlight-container').html(html).show();
            }

            // Render others in scroller (exclude Squid Game)
            let aaHtml = '';
            actionAdv.filter(m => m.id != 112).forEach(movie => {
                aaHtml += renderMovieCardLandscape(movie);
            });
            $('#scroller-action-adv').html(aaHtml || '<p class="text-white-50 py-4 w-100 text-center">Explosive action awaits!</p>');
            $('#row-action-adv').closest('.mt-lg-5').show();

            // Render Section Secondary Logo (Right Side)
            async function renderSectionSecondaryLogo(type, containerId) {
                const hasLogo = localStorage.getItem(`has_section_secondary_logo_${type}`) === 'true';

                if (hasLogo) {
                    try {
                        const db = await openVideoDB();
                        const tx = db.transaction(STORE_NAME, 'readonly');
                        const store = tx.objectStore(STORE_NAME);
                        const req = store.get(`section_secondary_logo_${type}`);
                        const res = await new Promise((resolve, reject) => {
                            req.onsuccess = () => resolve(req.result);
                            req.onerror = () => reject(req.error);
                        });
                        if (res) {
                            const url = URL.createObjectURL(res);
                            $(`#${containerId}`).html(`<img src="${url}" style="max-height: 50px; width: auto; object-fit: contain;" class="animate__animated animate__fadeIn">`);
                        }
                    } catch (e) {
                        console.error('Error rendering section secondary logo:', e);
                    }
                } else {
                    $(`#${containerId}`).html('<img src="images/logoNetflix.png" style="max-height: 90px; width: auto; object-fit: contain; opacity: 0.75;" class="animate__animated animate__fadeIn">');
                }
            }
            renderSectionSecondaryLogo('action', 'netflix-section-logo');

            // Render Mini Ranking
            let miniRankHtml = '';
            actionAdv.forEach((movie, idx) => {
                miniRankHtml += renderMiniRankCard(movie, idx);
            });
            $('#netflix-mini-ranking').html(miniRankHtml);
        } else {
            $('#action-spotlight-container').hide();
            $('#row-action-adv').closest('.mt-lg-5').hide();
        }

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

        // 7. Cinema Insights Spotlight
        async function renderCinemaInsightsSpotlight() {
            const container = $('#insights-spotlight-container');
            if (!container.length) return;

            const hasCustom = localStorage.getItem('has_custom_insights_spotlight') === 'true';
            let html = '';
            
            if (hasCustom) {
                try {
                    const data = JSON.parse(localStorage.getItem('custom_insights_spotlight_data') || '{}');
                    let videoUrl = '';
                    let logoUrl = '';
                    
                    if (localStorage.getItem('has_custom_insights_spotlight_video') === 'true') {
                        const blob = await getVideoFromDB('insights_spotlight_video');
                        if (blob) videoUrl = URL.createObjectURL(blob);
                    }
                    if (localStorage.getItem('has_custom_insights_spotlight_logo') === 'true') {
                        const blob = await getVideoFromDB('insights_spotlight_logo');
                        if (blob) logoUrl = URL.createObjectURL(blob);
                    }
                    
                    html = `
                        <div class="row g-0 h-100">
                            <div class="col-md-7 col-lg-7 h-100">
                                <div class="h-100 bg-black position-relative overflow-hidden insights-video-wrapper">
                                    ${videoUrl ? `<video src="${videoUrl}" autoplay muted loop playsinline class="w-100 h-100 object-fit-cover" style="transform: scale(1.02);"></video>` : `<div class="w-100 h-100 d-flex align-items-center justify-content-center text-white-50 small">No Trailer Video</div>`}
                                    <div class="position-absolute bottom-0 end-0 m-3 d-flex gap-2 insights-controls d-none" style="z-index: 10;">
                                        <button class="btn btn-sm btn-dark rounded-circle insights-play-toggle" style="width: 40px; height: 40px; background: rgba(0,0,0,0.6); border: 1px solid rgba(255,255,255,0.2); backdrop-filter: blur(5px); display: flex; align-items: center; justify-content: center;" title="Play/Pause">
                                            <i class="bi bi-pause-fill fs-5"></i>
                                        </button>
                                        <button class="btn btn-sm btn-dark rounded-circle insights-volume-toggle" style="width: 40px; height: 40px; background: rgba(0,0,0,0.6); border: 1px solid rgba(255,255,255,0.2); backdrop-filter: blur(5px); display: flex; align-items: center; justify-content: center;" title="Mute/Unmute">
                                            <i class="bi bi-volume-mute-fill fs-5"></i>
                                        </button>
                                    </div>
                                </div>
                                <style>
                                    .insights-video-wrapper:hover .insights-controls { display: flex !important; }
                                </style>
                            </div>
                            <div class="col-md-5 col-lg-5 d-flex align-items-center" style="position: relative; z-index: 5; margin-left: -2px; box-shadow: -10px 0 20px rgba(0,0,0,0.8), -2px 0 5px rgba(0,0,0,0.5); background: linear-gradient(to right, rgba(0,0,0,0.3) 0%, transparent 10px);">
                                <div class="p-4 p-lg-4 w-100">
                                    <!-- <div class="badge bg-warning text-dark mb-4 fw-bold">EXCLUSIVE PREVIEW</div> -->
                                    <div class="mb-4">
                                        ${logoUrl ? `<img src="${logoUrl}" style="max-height: 100px; max-width: 100%; width: auto; object-fit: contain;" alt="Logo">` : `<h2 class="text-white fw-bold font-heading mb-0">${data.title || 'Behind the Scenes'}</h2>`}
                                    </div>
                                    <p class="text-white mb-4 fs-6">
                                        ${data.desc || "Explore the untold behind-the-scenes secrets of the cinematic masterpiece 'The Avengers', from groundbreaking CGI visual effects to hilarious candid moments on set with Earth's Mightiest Heroes."}
                                        <br><br>
                                        <span class="small opacity-75 text-white">Copyright belongs to Marvel.</span>
                                    </p>
                                    <div class="d-flex align-items-center gap-2 text-white small mt-auto flex-nowrap">
                                        <span class="text-nowrap">May 9, 2024</span>
                                        <span>&bull;</span>
                                        <span class="text-nowrap">By UniCenima Editorial</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                } catch (e) { console.error("Error loading insights spotlight", e); }
            }

            // Fallback: dung file local
            if (!html) {
                html = `
                    <div class="row g-0 h-100">
                        <div class="col-md-7 col-lg-7 h-100">
                            <div class="h-100 bg-black position-relative overflow-hidden insights-video-wrapper">
                                <video src="Videos/videoBTSAvenger.mp4" autoplay muted loop playsinline class="w-100 h-100 object-fit-cover" style="transform: scale(1.02);"></video>
                                <div class="position-absolute bottom-0 end-0 m-3 d-flex gap-2 insights-controls d-none" style="z-index: 10;">
                                    <button class="btn btn-sm btn-dark rounded-circle insights-play-toggle" style="width:40px;height:40px;background:rgba(0,0,0,0.6);border:1px solid rgba(255,255,255,0.2);backdrop-filter:blur(5px);display:flex;align-items:center;justify-content:center;" title="Play/Pause">
                                        <i class="bi bi-pause-fill fs-5"></i>
                                    </button>
                                    <button class="btn btn-sm btn-dark rounded-circle insights-volume-toggle" style="width:40px;height:40px;background:rgba(0,0,0,0.6);border:1px solid rgba(255,255,255,0.2);backdrop-filter:blur(5px);display:flex;align-items:center;justify-content:center;" title="Mute/Unmute">
                                        <i class="bi bi-volume-mute-fill fs-5"></i>
                                    </button>
                                </div>
                            </div>
                            <style>.insights-video-wrapper:hover .insights-controls { display: flex !important; }</style>
                        </div>
                        <div class="col-md-5 col-lg-5 d-flex align-items-center" style="position:relative;z-index:5;margin-left:-2px;box-shadow:-10px 0 20px rgba(0,0,0,0.8),-2px 0 5px rgba(0,0,0,0.5);background:linear-gradient(to right,rgba(0,0,0,0.3) 0%,transparent 10px);">
                            <div class="p-4 p-lg-4 w-100">
                                <div class="mb-4">
                                    <img src="images/logoAvenger.png" style="max-height:100px;max-width:100%;width:auto;object-fit:contain;" alt="Avengers Logo">
                                </div>
                                <p class="text-white mb-4 fs-6">
                                    Explore the untold behind-the-scenes secrets of the cinematic masterpiece 'The Avengers', from groundbreaking CGI visual effects to hilarious candid moments on set with Earth's Mightiest Heroes.
                                    <br><br>
                                    <span class="small opacity-75 text-white">Copyright belongs to Marvel.</span>
                                </p>
                                <div class="d-flex align-items-center gap-2 text-white small mt-auto flex-nowrap">
                                    <span class="text-nowrap">May 9, 2024</span>
                                    <span>&bull;</span>
                                    <span class="text-nowrap">By UniCenima Editorial</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }
            
            container.html(html);
        }
        
        renderCinemaInsightsSpotlight();
        
        async function renderHotNewsSpotlight() {
            const container = $('#sidebar-character-spotlight');
            if (!container.length) return;

            const hasCustom = localStorage.getItem('has_custom_hot_news') === 'true';
            if (hasCustom) {
                try {
                    const data = JSON.parse(localStorage.getItem('custom_hot_news_data') || '{}');
                    let charUrl = '';
                    let logoUrl = '';

                    if (localStorage.getItem('has_custom_hot_news_char') === 'true') {
                        const blob = await getVideoFromDB('hot_news_char');
                        if (blob) charUrl = URL.createObjectURL(blob);
                    }
                    if (localStorage.getItem('has_custom_hot_news_logo') === 'true') {
                        const blob = await getVideoFromDB('hot_news_logo');
                        if (blob) logoUrl = URL.createObjectURL(blob);
                    }

                    if (!charUrl) charUrl = 'images/logoCharacterSpiderman.png';
                    if (!logoUrl) logoUrl = 'images/logoSpiderman.png';

                    const html = renderSidebarCharacterHTML(charUrl, logoUrl, data);
                    container.html(html);

                    const actionBox = $('#hot-news-spotlight-container');
                    if (data.title) actionBox.find('h6').text(data.title);
                    if (data.desc) actionBox.find('#hn-sidebar-desc').text(data.desc);
                    return;
                } catch (e) { console.error("Error loading hot news spotlight", e); }
            }

            // Fallback local: luon hien thi neu chua co Admin data
            const defaultHtml = renderSidebarCharacterHTML(
                'images/logoCharacterSpiderman.png',
                'images/logoSpiderman.png',
                { rating: '8.5', year: '2021' }
            );
            container.html(defaultHtml);
        }

        function renderSidebarCharacterHTML(charUrl, logoUrl, data) {
            return `
                <div class="mt-0 position-relative" style="min-height: 400px; margin-left: -1.5rem; margin-bottom: -1.5rem;">
                    ${charUrl ? `<img src="${charUrl}" class="position-absolute bottom-0 start-0 h-100 w-auto object-fit-contain" style="max-width: 150%; z-index: 1;">` : ""}
                    <div class="position-absolute top-50 end-0 translate-middle-y d-flex flex-column align-items-center text-center" style="margin-right: -1rem; z-index: 2;">
                        ${logoUrl ? `<img src="${logoUrl}" style="max-height: 160px; max-width: 250px; width: auto; object-fit: contain;">` : ""}
                        <div class="mt-2 text-white d-flex align-items-center gap-3 fw-bold" style="text-shadow: 0 2px 10px rgba(0,0,0,1);">
                            ${data && data.rating ? `<span class="badge bg-warning text-dark px-2 py-1 shadow-sm"><i class="bi bi-star-fill me-1"></i>${data.rating}</span>` : ""}
                            ${data && data.year ? `<span class="text-white" style="font-size: 0.9rem; letter-spacing: 1px; opacity: 0.7;">${data.year}</span>` : ""}
                        </div>
                    </div>
                </div>
            `;
        }
        
        renderHotNewsSpotlight();

        async function renderCinemaTrivia() {
            const data = JSON.parse(localStorage.getItem('custom_cinema_trivia_data') || '{}');
            const hasLogo = localStorage.getItem('has_custom_trivia_logo') === 'true';
            
            if (data.title) $('#trivia-title').text(data.title);
            if (data.fact) $('#trivia-desc').html(data.fact);
            
            if (hasLogo) {
                try {
                    const blob = await getVideoFromDB('custom_trivia_logo');
                    if (blob) {
                        const url = URL.createObjectURL(blob);
                        $('#trivia-logo-area').html(`<img src="${url}" class="img-fluid" style="max-height: 250px;">`);
                    } else {
                        $('#trivia-logo-area').html(`<img src="images/logoCenimaTriVia.png" class="img-fluid" style="max-height: 250px;">`);
                    }
                } catch (e) {
                    console.error("Error loading trivia logo", e);
                    $('#trivia-logo-area').html(`<img src="images/logoCenimaTriVia.png" class="img-fluid" style="max-height: 250px;">`);
                }
            } else {
                $('#trivia-logo-area').html(`<img src="images/logoCenimaTriVia.png" class="img-fluid" style="max-height: 250px;">`);
            }
        }
        renderCinemaTrivia();

        $(document).on('click', '.insights-play-toggle', function(e) {
            e.stopPropagation();
            const video = $(this).closest('.insights-video-wrapper').find('video')[0];
            if (video) {
                if (video.paused) {
                    video.play();
                    $(this).find('i').removeClass('bi-play-fill').addClass('bi-pause-fill');
                } else {
                    video.pause();
                    $(this).find('i').removeClass('bi-pause-fill').addClass('bi-play-fill');
                }
            }
        });

        $(document).on('click', '.insights-volume-toggle', function(e) {
            e.stopPropagation();
            const video = $(this).closest('.insights-video-wrapper').find('video')[0];
            if (video) {
                video.muted = !video.muted;
                const icon = $(this).find('i');
                if (video.muted) {
                    icon.removeClass('bi-volume-up-fill').addClass('bi-volume-mute-fill');
                } else {
                    icon.removeClass('bi-volume-mute-fill').addClass('bi-volume-up-fill');
                }
            }
        });

    }

    // "Show More" functionality for Trending Now
    $(document).on('click', '#show-more-trending', function() {
        const $hiddenItems = $('#trending-grid .movie-card-item.d-none');
        $hiddenItems.slice(0, 12).removeClass('d-none').addClass('animate__animated animate__fadeInUp');
        
        if ($('#trending-grid .movie-card-item.d-none').length === 0) {
            $(this).fadeOut();
        }
    });

    window.renderHomePage = renderHomePage;

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
                { id: 'detective', title: 'Detective Movies', filter: m => m.genre === 'Detective' || (m.tags && m.tags.includes('Detective')) },
                { id: 'supernatural', title: 'Supernatural', filter: m => m.genre === 'Supernatural' || (m.tags && m.tags.includes('Supernatural')) },
                { id: 'psychological', title: 'Psychological', filter: m => m.genre === 'Psychological' || (m.tags && m.tags.includes('Psychological')) },
                { id: 'zombie', title: 'Zombie Horror', filter: m => m.tags && m.tags.includes('Zombie') },
                { id: 'action', title: 'Action & Adventure', filter: m => ['Action', 'Adventure'].includes(m.genre) },
                { id: 'marvel', title: 'Marvel Universe', filter: m => m.tags && m.tags.includes('Marvel') },
                { id: 'scifi', title: 'Sci-Fi & Fantasy', filter: m => ['Sci-Fi', 'Fantasy'].includes(m.genre) },
                { id: 'crime', title: 'Psychological Crime', filter: m => m.genre === 'Crime' || (m.tags && m.tags.includes('Crime')) },
                { id: 'comedy', title: 'Comedy', filter: m => m.genre === 'Comedy' || (m.tags && m.tags.includes('Comedy')) },
                { id: 'anime', title: 'Featured Anime', filter: m => m.genre === 'Anime' && (m.isFeatured || (m.tags && m.tags.includes('Featured'))) },
                { id: 'uk-movies', title: 'UK Movies', filter: m => m.region === 'UK' },
                { id: 'chinese-movies', title: 'Chinese Language Movies', filter: m => (m.type === 'Movie' || (!m.type && !(m.seasons && m.seasons.length > 0))) && m.region === 'C-Drama' }
            ],
            'Series': [
                { id: 'trending-series', title: 'New Release Series', filter: m => m.isTrending },
                { id: 'top-rated-series', title: 'Top 10 Series', filter: m => m.rating >= 8.5, isTop10: true },
                { id: 'kdrama', title: 'Exciting K-Drama Series', filter: m => (m.type === 'Series' || (m.seasons && m.seasons.length > 0)) && m.region === 'K-Drama' },
                { id: 'cdrama', title: 'Captivating C-Drama Series', filter: m => (m.type === 'Series' || (m.seasons && m.seasons.length > 0)) && m.region === 'C-Drama' },
                { id: 'detective-series', title: 'Detective Series', filter: m => m.genre === 'Detective' || (m.tags && m.tags.includes('Detective')) },
                { id: 'supernatural-series', title: 'Supernatural Series', filter: m => m.genre === 'Supernatural' || (m.tags && m.tags.includes('Supernatural')) },
                { id: 'psychological-series', title: 'Psychological Series', filter: m => m.genre === 'Psychological' || (m.tags && m.tags.includes('Psychological')) },
                { id: 'school', title: 'School & Youth Series', filter: m => (m.type === 'Series' || (m.seasons && m.seasons.length > 0)) && (m.genre === 'School' || m.genre === 'Youth' || (m.tags && (m.tags.includes('School') || m.tags.includes('Youth')))) },
                { id: 'zombie', title: 'Zombie Horror Series', filter: m => (m.type === 'Series' || (m.seasons && m.seasons.length > 0)) && m.tags && m.tags.includes('Zombie') },
                { id: 'marvel', title: 'Marvel Universe Series', filter: m => (m.type === 'Series' || (m.seasons && m.seasons.length > 0)) && m.tags && m.tags.includes('Marvel') },
                { id: 'anime-series', title: 'Featured Anime Series', filter: m => (m.type === 'Series' || (m.seasons && m.seasons.length > 0)) && m.genre === 'Anime' && (m.isFeatured || (m.tags && m.tags.includes('Featured'))) },
                { id: 'thriller-series', title: 'Crime & Thriller Series', filter: m => (m.type === 'Series' || (m.seasons && m.seasons.length > 0)) && (['Thriller', 'Crime'].includes(m.genre) || (m.tags && (m.tags.includes('Thriller') || m.tags.includes('Crime')))) },
                { id: 'fantasy-series', title: 'Fantasy World Series', filter: m => (m.type === 'Series' || (m.seasons && m.seasons.length > 0)) && (m.genre === 'Fantasy' || (m.tags && m.tags.includes('Fantasy'))) },
                { id: 'netflix-originals', title: 'Only on Netflix Series', filter: m => (m.type === 'Series' || (m.seasons && m.seasons.length > 0)) && m.tags && m.tags.includes('Only on Netflix') }
            ]
        };

        function renderMovieRow(category, movies) {
            if (movies.length === 0) return '';

            let cardsHtml = '';
            movies.forEach((movie, index) => {
                let rankHtml = category.isTop10 ? `<span class="rank-number">${index + 1}</span>` : '';

                cardsHtml += `
                    <div class="movie-card position-relative ${category.isTop10 ? 'top-10-card' : ''}">
                        ${rankHtml}
                        ${window.renderMovieCardHTML(movie)}
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
            const defaultDesc = isMovieTab 
                ? "Jake Sully and Neytiri fight to protect their family and homeland as a new threat rises on Pandora. A breathtaking journey of survival, love, and the deep bond between nature and family."
                : "A mysterious murder case from the past resurfaces, uncovering dark secrets hidden beneath a seemingly peaceful town. As the truth slowly comes to light, no one is truly innocent.";

            const title = banner?.title || fallbackMovie?.title || (isMovieTab ? 'AVATAR: THE WAY OF WATER' : 'MYSTERY TOWN');
            const desc = banner?.desc || defaultDesc;
            const topBadge = banner?.topBadge || (isMovieTab ? 'FEATURED MOVIE' : 'NEW TV SERIES');

            const rating = banner?.rating || (isMovieTab ? '8.5' : (fallbackMovie?.rating || '8.8'));
            const year = banner?.year || (isMovieTab ? '2022' : '2024');
            const badge = banner?.badge || (isMovieTab ? 'T13' : (fallbackMovie?.badge || 'T16'));

            const metaHtml = `
                <div class="d-flex align-items-center gap-3" style="font-size: 0.85rem;">
                    ${rating ? `<span class="text-warning fw-bold d-flex align-items-center"><i class="bi bi-star-fill me-1" style="font-size: 0.75rem;"></i>${rating}</span>` : ''}
                    <span class="fw-bold" style="color: rgba(255, 255, 255, 0.6);">${year}</span>
                    ${getSpotlightBadge(badge, true)}
                </div>
            `;
            $('#moviesMetaRow').html(metaHtml).show();

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
                // Fallback local logo
                const localLogo = isMovieTab ? 'images/logoMovie.png' : 'images/logoSeries.png';
                $('#moviesLogoContainer').html(`<img src="${localLogo}" class="tr-hero-logo" style="max-height: 200px;">`);
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
                // Fallback: dùng file local
                const localVideo = isMovieTab ? 'Videos/videoMovie.mp4' : 'Videos/videoSeries.mp4';
                videoEl.src = localVideo;
                videoEl.load();
                $(heroSection).css('background-image', 'none');
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
                window.location.href = `detail.html?id=${window.currentTabHeroMovie._id || window.currentTabHeroMovie.id}&autoplay=true`;
            }
        };

        window.openCurrentHeroDetail = function() {
            if (window.currentTabHeroMovie) {
                window.location.href = `detail.html?id=${window.currentTabHeroMovie._id || window.currentTabHeroMovie.id}`;
            }
        };

        function renderTabContent(type, query = '') {
            const container = $('#movie-rows-container');
            container.empty();

            const moviesOfType = moviesData.filter(m => {
                const isExplicitSeries = m.type === 'Series' || (m.seasons && m.seasons.length > 0);
                const isExplicitMovie = m.type === 'Movie';
                
                let isSeries = isExplicitSeries;
                let isMovie = isExplicitMovie;
                
                if (!m.type && !isExplicitSeries && !isExplicitMovie) {
                    // Fallback to region for untyped content
                    isSeries = (m.region === 'K-Drama' || m.region === 'C-Drama');
                    isMovie = !isSeries;
                }
                
                return type === 'Series' ? isSeries : isMovie;
            });

            if (query) {
                // Search Mode - Hiển thị dạng lưới giống như Home (Trending)
                const filtered = moviesOfType.filter(m => m.title.toLowerCase().includes(query.toLowerCase()));
                
                if (filtered.length > 0) {
                    container.append(`
                        <div class="mb-5 animate__animated animate__fadeIn">
                            <h2 class="font-heading fw-bold text-white mb-4 section-heading">Kết quả tìm kiếm cho "${query}"</h2>
                            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 g-4">
                                ${filtered.map(m => renderMovieCard(m)).join('')}
                            </div>
                        </div>
                    `);
                } else {
                    container.append(`<div class="text-center py-5 opacity-50"><i class="bi bi-search fs-1 d-block mb-3"></i><p>Không tìm thấy phim nào khớp với "${query}"</p></div>`);
                }
                return;
            }

            categories[type].forEach(cat => {
                let filtered = moviesOfType.filter(cat.filter);
                
                // Enforce exact 10 limit for Top 10 rows
                if (cat.isTop10) {
                    filtered = filtered.sort((a, b) => b.rating - a.rating).slice(0, 10);
                }

                if (filtered.length > 0) {
                    container.append(renderMovieRow(cat, filtered));
                }
            });
        }

        // Function to populate Genres in Hero
        function populateHeroGenres() {
            let allGenres = moviesData.map(m => m.genre);
            // Add 'Anime' manually if any movie is in the Anime region but doesn't have Anime as genre
            if (moviesData.some(m => m.region === 'Anime' && m.genre !== 'Anime')) {
                allGenres.push('Anime');
            }
            // Always include these genres in the dropdown
            allGenres.push('Detective', 'Supernatural', 'Psychological');
            
            const genres = [...new Set(allGenres.filter(g => g))].sort();
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
            
            const filtered = moviesData.filter(m => {
                if (selectedGenre === 'Anime') {
                    return m.genre === 'Anime' || m.region === 'Anime';
                }
                return m.genre === selectedGenre;
            });
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

        window.renderMoviesPage = function() {
            loadTabHero(currentType);
            renderTabContent(currentType, currentSearchQuery);
            populateHeroGenres();
        };
    }

    window.renderMovieDetail = async function() {
        if ($('#movie-detail-container').length === 0) return;

        const urlParams = new URLSearchParams(window.location.search);
        let movieId = urlParams.get('id');
        
        if (!movieId) {
            movieId = 1;
        }

        let currentSeasonId = null;
        let currentEpisodeId = null; // null means movie review, otherwise episode ID

        // 1. Render instantly using local data first
        let localMovie = moviesData.find(m => (m._id && m._id == movieId) || (m.id && m.id == movieId));
        if (localMovie) {
            doRender(localMovie, false);
        }

        // 2. Fetch from API in background to get latest reviews/ratings
        MovieAPI.getMovieById(movieId).then(apiMovie => {
            if (apiMovie) {
                doRender(apiMovie, true);
            }
        }).catch(e => {
            console.error("Failed to fetch movie detail from API", e);
        });

        async function doRender(movie, isFromAPI) {
            if (movie) {
            window.currentMovieData = movie;
            $('#detail-hero').css('background-image', `url(${MovieAPI.getAssetUrl(movie.banner)})`);
            $('#detail-poster').attr('src', MovieAPI.getAssetUrl(movie.poster));
            
            // Inject Netflix Badge
            $('#detail-poster-container .netflix-badge-wrapper').remove();
            const nBadge = window.getNetflixBadge(movie);
            if (nBadge) {
                $('#detail-poster-container').prepend(`<div class="netflix-badge-wrapper">${nBadge}</div>`);
            }
            $('#detail-title').text(movie.title);
            if (movie.subtitle) {
                $('#detail-subtitle').text(movie.subtitle.toUpperCase()).removeClass('d-none');
            } else {
                $('#detail-subtitle').addClass('d-none');
            }
            $('#detail-year').text(movie.year);
            $('#detail-genre').text(window.getTranslatedGenre(movie.genre));
            
            if (movie.duration) {
                $('#detail-duration-container').removeClass('d-none');
                $('#detail-duration').text(movie.duration);
            } else {
                $('#detail-duration-container').addClass('d-none');
            }

            $('#detail-rating').text(parseFloat(movie.rating || 0).toFixed(1));
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
                
                if (currentSeasonId === null) {
                    currentSeasonId = movie.seasons[0].id;
                }

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

                    // Determine if this is a movie collection (global type = Movie, or all seasons are type 'movie', or no seasons have episodes)
                    const isMovieCollection = movie.type === 'Movie' || 
                        (moviesOnly.length > 0 && seasonsOnly.length === 0) ||
                        (movie.seasons.every(s => !s.episodes || s.episodes.length === 0) && movie.type !== 'Series');

                    // Update Heading Text based on Tab
                    const hasSeasons = seasonsOnly.length > 0;
                    const hasMovies = moviesOnly.length > 0;

                    if (activeTab === 'movies' || (activeTab === 'seasons' && isMovieCollection)) {
                        $heading.text(window.currentLang === 'vi' ? 'Bộ Sưu Tập Phim' : 'Movie Collection');
                        $heading.removeAttr('data-i18n');
                    } else if (activeTab === 'top-rated') {
                        $heading.text(window.currentLang === 'vi' ? 'Đánh Giá Cao Nhất' : 'Top Rated');
                        $heading.removeAttr('data-i18n');
                    } else {
                        if (hasSeasons) {
                            $heading.text(window.currentLang === 'vi' ? 'Danh Sách Tập' : 'Episodes');
                            $heading.attr('data-i18n', 'episodes');
                        } else if (hasMovies) {
                            $heading.text(window.currentLang === 'vi' ? 'Bộ Sưu Tập Phim' : 'Movie Collection');
                            $heading.removeAttr('data-i18n');
                        } else {
                            $heading.text(window.currentLang === 'vi' ? 'Nội Dung' : 'Content');
                            $heading.removeAttr('data-i18n');
                        }
                    }

                    // Fix: Sync currentSeasonId with the active tab type
                    let isCurrentValid;
                    if (isMovieCollection) {
                        isCurrentValid = movie.seasons.some(s => s.id == currentSeasonId);
                    } else {
                        isCurrentValid = activeTab === 'seasons' 
                            ? seasonsOnly.some(s => s.id == currentSeasonId)
                            : moviesOnly.some(m => m.id == currentSeasonId);
                    }

                    if (!isCurrentValid) {
                        if (isMovieCollection) {
                            currentSeasonId = movie.seasons[0].id;
                        } else if (activeTab === 'seasons' && seasonsOnly.length > 0) {
                            currentSeasonId = seasonsOnly[0].id;
                        } else if (activeTab === 'movies' && moviesOnly.length > 0) {
                            currentSeasonId = moviesOnly[0].id;
                        }
                    }



                    // If only one type exists, don't show the switcher
                    const showSwitcher = seasonsOnly.length > 0 && moviesOnly.length > 0 && !isMovieCollection;
                    
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
                        const originalView = (seasonsOnly.length > 0 && !isMovieCollection) ? 'seasons' : 'movies';
                        const collectionLabel = isMovieCollection ? (window.currentLang === 'vi' ? 'Phim' : 'Movies') : (originalView === 'seasons' ? t['seasons'] : t['movies']);
                        const singleTitle = activeTab === 'top-rated' ? (window.currentLang === 'vi' ? 'Đánh Giá Cao Nhất' : 'Top Rated') : collectionLabel;
                        const switchText = activeTab === 'top-rated' ? `<i class="bi bi-arrow-left me-1"></i> ${window.currentLang === 'vi' ? 'Quay lại' : 'Back to'} ${collectionLabel}` : `Top-rated <i class="bi bi-arrow-right ms-1"></i>`;
                        const targetView = activeTab === 'top-rated' ? originalView : 'top-rated';

                        seasonTabsHtml += `
                            <div class="liquid-glass rounded-4 p-3 d-flex align-items-center justify-content-between mb-4 border border-white border-opacity-10 shadow-lg">
                                <h5 class="text-white fw-bold m-0"><i class="bi ${isMovieCollection ? 'bi-film' : 'bi-collection-play'} me-2 text-warning"></i>${singleTitle}</h5>
                                <span class="tab-switch ${activeTab === 'top-rated' ? 'text-warning fw-bold' : 'text-white-50'} small hover-white" style="cursor:pointer" data-view="${targetView}">${switchText}</span>
                            </div>
                        `;
                    }

                    seasonTabsHtml += `<div id="season-selector-content" class="mb-4">`;

                    if (activeTab === 'seasons' && isMovieCollection) {
                        // Movie Collection: render poster cards for all seasons
                        const allSeasons = movie.seasons;
                        seasonTabsHtml += `<div class="row row-cols-2 row-cols-md-4 row-cols-lg-5 g-3">`;
                        allSeasons.forEach(s => {
                            const activeClass = s.id === currentSeasonId ? 'border-primary border-3' : 'border-secondary border-opacity-25';
                            const poster = s.poster || movie.poster;
                            seasonTabsHtml += `
                                <div class="col">
                                    <div class="season-movie-card liquid-glass rounded-3 overflow-hidden season-select-btn ${activeClass}" style="cursor:pointer; transition: transform 0.2s;" data-id="${s.id}" data-linked-id="${s.linkedMovieId || ''}">
                                        <img src="${MovieAPI.getAssetUrl(poster)}" class="w-100 h-100 object-fit-cover" style="aspect-ratio: 2/3;">
                                        <div class="p-2">
                                            <div class="text-white small fw-bold text-truncate">${s.title || 'Part ' + s.id}</div>
                                            <div class="text-white-50" style="font-size: 0.7rem;">${s.year || movie.year}</div>
                                        </div>
                                    </div>
                                </div>
                            `;
                        });
                        seasonTabsHtml += `</div>`;
                    } else if (activeTab === 'seasons') {
                        seasonTabsHtml += `<div class="d-flex gap-2 flex-wrap">`;
                        seasonsOnly.forEach(s => {
                            const activeClass = s.id === currentSeasonId ? 'btn-warning' : 'btn-outline-light';
                            const displayText = s.displayNumber || s.id;
                            const isLong = displayText.toString().length > 2;
                            const shapeClass = isLong ? 'rounded-pill px-3' : 'rounded-circle';
                            const style = isLong ? 'height:40px;' : 'width:40px; height:40px; padding:0;';
                            
                            seasonTabsHtml += `<button class="btn ${activeClass} ${shapeClass} fw-bold season-select-btn" style="${style}" data-id="${s.id}" data-linked-id="${s.linkedMovieId || ''}">${displayText}</button>`;
                        });
                        seasonTabsHtml += `</div>`;
                    } else if (activeTab === 'movies') {
                        seasonTabsHtml += `<div class="row row-cols-2 row-cols-md-4 row-cols-lg-5 g-3">`;
                        moviesOnly.forEach(s => {
                            const activeClass = s.id === currentSeasonId ? 'border-primary border-3' : 'border-secondary border-opacity-25';
                            const poster = s.poster || movie.poster;
                            seasonTabsHtml += `
                                <div class="col">
                                    <div class="season-movie-card liquid-glass rounded-3 overflow-hidden season-select-btn ${activeClass}" style="cursor:pointer; transition: transform 0.2s;" data-id="${s.id}" data-linked-id="${s.linkedMovieId || ''}">
                                        <img src="${MovieAPI.getAssetUrl(poster)}" class="w-100 h-100 object-fit-cover" style="aspect-ratio: 2/3;">
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
                            let netflixBadge = window.getNetflixBadge(item.id ? item : movie);

                            // Standalone movie card
                            cardHtml = `
                                <div class="top-rated-card-highlight liquid-glass rounded-4 p-4 border border-warning border-opacity-25">
                                    <div class="row g-4 align-items-center">
                                        <div class="col-md-4 d-flex flex-column align-items-center gap-4">
                                            <div class="position-relative w-100">
                                                ${netflixBadge}
                                                <img src="${MovieAPI.getAssetUrl(item.poster || movie.poster)}" class="w-100 rounded-3 shadow-lg border border-white border-opacity-10">
                                            </div>
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
                            let netflixBadge = window.getNetflixBadge(movie); // Branded by parent series
                            if (netflixBadge) {
                                netflixBadge = netflixBadge.replace('m-3', 'm-2').replace('width: 28px; height: 28px;', 'width: 18px; height: 18px;').replace('padding: 5px;', 'padding: 3px;');
                            }

                            const thumb = item.thumb || movie.poster;
                            cardHtml = `
                                <div class="top-rated-card-highlight episode-rich-card liquid-glass p-4 rounded-4 d-flex flex-column flex-md-row gap-4 border border-warning border-opacity-25">
                                    <div class="d-flex flex-column align-items-center" style="min-width: 280px;">
                                        <div class="ep-thumb-wrapper position-relative overflow-hidden rounded-3 shadow-lg mb-4" style="height: 160px; width: 100%; cursor:pointer;" onclick="window.openEpisodeDetail(window.currentMovieData, ${item.sId}, ${item.id})">
                                            ${netflixBadge}
                                            <img src="${MovieAPI.getAssetUrl(thumb)}" class="w-100 h-100 object-fit-cover">
                                            <div class="ep-play-overlay">
                                                <div class="bg-white rounded-circle d-flex align-items-center justify-content-center" style="width: 50px; height: 50px;">
                                                    <i class="bi bi-play-fill text-dark fs-3"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-center gap-3 w-100">
                                            <button class="btn btn-sm btn-light rounded-pill px-4 fw-bold" style="font-size: 0.75rem; padding-top: 8px; padding-bottom: 8px;" onclick="window.openEpisodeDetail(window.currentMovieData, ${item.sId}, ${item.id})">Watch Now</button>
                                            <button class="rate-btn-minimal" onclick="openQuickEpReview(${movie.id}, ${item.sId}, ${item.id})">
                                                <i class="bi bi-pencil-square"></i> Rate
                                            </button>
                                        </div>
                                    </div>
                                    <div class="ep-content flex-grow-1">
                                        <div class="badge bg-warning text-dark mb-2 fw-bold">TOP ${index + 1} EPISODE</div>
                                        <h5 class="text-white fw-bold mb-1" style="font-size: 1.1rem;">${item.sTitle} &bull; ${item.title}</h5>
                                        <div class="mb-3">
                                            <div class="rating-chip">
                                                <i class="bi bi-star-fill"></i> ${item.rating}
                                            </div>
                                        </div>
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
                        $('#detail-poster').attr('src', MovieAPI.getAssetUrl(posterUrl));
                        
                        // Update Netflix Badge
                        $('#detail-poster-container .netflix-badge-wrapper').remove();
                        const nBadge = window.getNetflixBadge(season.id ? season : movie);
                        if (nBadge) {
                            $('#detail-poster-container').prepend(`<div class="netflix-badge-wrapper">${nBadge}</div>`);
                        }
                        $('#detail-hero').css('background-image', `url('${MovieAPI.getAssetUrl(bannerUrl)}')`);
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
                                        <img src="${MovieAPI.getAssetUrl(thumbUrl)}" class="w-100 h-100 object-fit-cover" alt="${ep.title}" onerror="this.src='${defaultThumb}'">
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
                                            <div class="rating-chip">
                                                <i class="bi bi-star-fill"></i> ${ep.rating || 'N/A'}
                                            </div>
                                            <button class="rate-btn-minimal" onclick="event.stopPropagation(); openQuickEpReview(${movie.id}, ${sId}, ${ep.id})">
                                                <i class="bi bi-pencil-square"></i> Rate
                                            </button>
                                            <button class="btn btn-sm btn-link text-white-50 text-decoration-none p-0 small ms-auto" style="font-size: 0.7rem; opacity: 0.5;">Watch options</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        `;
                    });
                    $('#episodes-list-content').html(epHtml);
                }

                renderSeasonUI();

                $(document).off('click', '.season-select-btn').on('click', '.season-select-btn', function() {
                    const linkedId = $(this).data('linked-id');
                    if (linkedId) {
                        window.location.href = 'detail.html?id=' + linkedId;
                        return;
                    }
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
                    $('#ep-detail-rating').text(parseFloat(ep.rating || 9).toFixed(1));
                    $('#ep-summary-rating-avg').text(parseFloat(ep.rating || 9).toFixed(1));

                    // Storyline
                    $('#ep-detail-storyline').text(ep.desc || 'No description available for this episode.');

                    // Render Cast (Slider)
                    let castHtml = '';
                    (ep.cast || []).forEach(c => {
                        const photo = c.photo ? MovieAPI.getAssetUrl(c.photo) : `https://ui-avatars.com/api/?name=${encodeURIComponent(c.name)}&background=random&color=fff`;
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
                                    <img src="${MovieAPI.getAssetUrl(p)}" class="w-100 h-100 object-fit-cover" alt="Episode Photo">
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
            
            $('#btn-add-watchlist').attr('data-id', movie._id || movie.id).attr('data-title', movie.title);

            // Render phim liên quan (cùng thể loại, khác phim hiện tại)
            let relatedHtml = '';
            let relatedCount = 0;
            moviesData.forEach(m => {
                if (m.genre === movie.genre && m._id !== movie._id && relatedCount < 4) {
                    relatedHtml += renderMovieCard(m);
                    relatedCount++;
                }
            });
            $('#related-movies-grid').html(relatedHtml);

            // ---- YÊU CẦU: REVIEW & RATING SYSTEM ----
            
            function getReviewKey() {
                return currentEpisodeId ? `cinematic_reviews_${movieId}_ep${currentEpisodeId}` : `cinematic_reviews_${movieId}`;
            }

            window.renderReviews = async function() {
                try {
                    const currentMovie = window.currentMovieData;
                    if (!currentMovie) return;

                    // Phải dùng _id chuẩn của MongoDB
                    const targetId = currentMovie._id || new URLSearchParams(window.location.search).get('id');
                    const response = await MovieAPI.getMovieReviews(targetId);
                    
                    // Backend trả về { reviews, averageRating, reviewCount }
                    const reviewsData = response.reviews || [];
                    const averageRating = response.averageRating || 0;
                    const reviewCount = response.reviewCount || 0;

                    const $container = $('#reviews-container');
                    if ($container.length === 0) return;

                    const user = JSON.parse(localStorage.getItem('user'));
                    let hasReviewed = false;

                    if (!reviewsData || reviewsData.length === 0) {
                        $container.html('<div class="text-white-50 text-center py-4">No reviews yet. Be the first to share your thoughts!</div>');
                        // Nếu chưa có đánh giá, vẫn cập nhật UI về 0 hoặc mặc định
                        updateRatingUI(averageRating, reviewCount);
                    } else {
                        if (user) {
                            hasReviewed = reviewsData.some(r => (r.user && (r.user._id === user.id || r.user === user.id)));
                        }

                        let html = '';
                        reviewsData.forEach(review => {
                            const date = new Date(review.createdAt).toLocaleDateString();
                            const username = review.user ? review.user.username : 'Uni User';
                            const avatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(username)}&background=random`;
                            
                            const isOwner = user && review.user && (review.user._id === user.id || review.user === user.id);
                            const isAdmin = user && user.role === 'admin';
                            const likeCount = review.likes ? review.likes.length : 0;
                            const isLiked = user && review.likes && review.likes.includes(user.id);

                            html += `
                                <div class="review-modern-card mb-4" id="review-${review._id}">
                                    <div class="user-meta">
                                        <div class="user-img">
                                            <img src="${avatar}" class="rounded-circle" width="40" height="40">
                                        </div>
                                        <div>
                                            <h6 class="username">${username}</h6>
                                            <div class="rating-badge">
                                                <i class="bi bi-star-fill"></i> ${review.rating} / 10
                                            </div>
                                        </div>
                                        <div class="ms-auto d-flex align-items-center gap-3">
                                            <div class="text-white-50 small">${date}</div>
                                            ${(isOwner || isAdmin) ? `
                                                <div class="dropdown">
                                                    <button class="btn btn-link text-white-50 p-0" data-bs-toggle="dropdown">
                                                        <i class="bi bi-three-dots-vertical"></i>
                                                    </button>
                                                    <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-end liquid-glass-strong border-secondary">
                                                        ${isOwner ? `<li><a class="dropdown-item" href="javascript:void(0)" onclick="editReview('${review._id}', ${review.rating}, '${review.title}', '${review.text.replace(/'/g, "\\'")}')"><i class="bi bi-pencil-square me-2"></i>Edit</a></li>` : ''}
                                                        <li><a class="dropdown-item text-danger" href="javascript:void(0)" onclick="deleteReview('${review._id}')"><i class="bi bi-trash3 me-2"></i>Delete</a></li>
                                                    </ul>
                                                </div>
                                            ` : ''}
                                        </div>
                                    </div>
                                    <span class="review-title">${review.title || 'Review'}</span>
                                    <p class="review-content">${review.text}</p>
                                    <div class="review-actions mt-3 pt-3 border-top border-white border-opacity-10">
                                        <button class="btn btn-sm ${isLiked ? 'btn-warning' : 'btn-outline-light'} rounded-pill px-3" onclick="toggleLike('${review._id}')">
                                            <i class="bi ${isLiked ? 'bi-heart-fill' : 'bi-heart'} me-1"></i> ${likeCount}
                                        </button>
                                    </div>
                                </div>
                            `;
                        });
                        $container.html(html);

                        // Cập nhật điểm số trên giao diện
                        updateRatingUI(averageRating, reviewCount);
                        
                        // Cập nhật vào moviesData toàn cục để đồng bộ trang chủ
                        if (currentMovie) {
                            currentMovie.rating = averageRating;
                        }
                    }

                    // Hide forms if already reviewed
                    if (hasReviewed) {
                        $('#inline-review-form').html('<div class="alert alert-warning border-0 liquid-glass-strong rounded-4 py-3 text-warning"><i class="bi bi-info-circle-fill me-2"></i>You have already reviewed this movie. Thank you for your contribution!</div>').show();
                        $('.btn-review-modal-trigger').hide(); // Hide the button that opens the modal
                    }
                    return;
                } catch (err) {
                    console.error('Error fetching reviews:', err);
                }
            };

            // Hàm cập nhật điểm số và sao trên giao diện
            function updateRatingUI(avg, count) {
                const formattedAvg = parseFloat(avg).toFixed(1);
                
                // 1. Cập nhật Badge vàng (Top)
                $('#detail-rating').text(formattedAvg);
                
                // 2. Cập nhật phần Summary Rating (Big Number)
                $('#summary-rating-avg').text(formattedAvg);
                
                // 3. Cập nhật số lượng lượt đánh giá
                $('.text-white-50.small:contains("ratings")').text(`${count.toLocaleString()} ratings`);
                
                // 4. Cập nhật sao vàng (Summary section)
                const starsContainer = $('.rating-stars').first();
                if (starsContainer.length > 0) {
                    let starsHtml = '';
                    const fullStars = Math.floor(avg / 2); // Vì thang 10, chuyển về 5 sao
                    const hasHalfStar = (avg % 2) >= 1;
                    
                    for (let i = 1; i <= 5; i++) {
                        if (i <= fullStars) {
                            starsHtml += '<i class="bi bi-star-fill text-warning"></i> ';
                        } else if (i === fullStars + 1 && hasHalfStar) {
                            starsHtml += '<i class="bi bi-star-half text-warning"></i> ';
                        } else {
                            starsHtml += '<i class="bi bi-star text-warning"></i> ';
                        }
                    }
                    starsContainer.html(starsHtml);
                }
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
                                <img src="${MovieAPI.getAssetUrl(c.photo)}" class="cast-photo-thumb" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(c.name)}&background=random'">
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
                            <img src="${MovieAPI.getAssetUrl(p)}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1000&auto=format&fit=crop'">
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

            window.renderReviews();
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
            $('#review-form').submit(async function(e) {
                e.preventDefault();
                
                const user = JSON.parse(localStorage.getItem('user'));
                if (!user) {
                    alert('Vui lòng đăng nhập để đánh giá phim!');
                    window.location.href = 'login.html';
                    return;
                }

                const rating = $('#review-rating-value').val();
                const title = $('#review-title').val().trim();
                const text = $('#review-text').val().trim();
                const urlId = new URLSearchParams(window.location.search).get('id');
                // Tìm phim trong moviesData để lấy _id thật
                const movieObj = moviesData.find(m => (m._id && m._id == urlId) || (m.id && m.id == urlId));
                const targetMovieId = (movieObj && movieObj._id) ? movieObj._id : urlId;

                if (rating == 0) {
                    alert('Vui lòng chọn số sao đánh giá!');
                    return;
                }

                try {
                    const result = await MovieAPI.submitReview({
                        movieId: targetMovieId,
                        rating: parseInt(rating),
                        title: title || 'Đánh giá phim',
                        text
                    });

                    if (result && result._id) {
                        alert('Cảm ơn bạn đã đánh giá!');
                        $('#review-form-modal').modal('hide');
                        
                        // Reset form
                        $('#review-title').val('');
                        $('#review-text').val('');
                        $('#review-rating-value').val(0);
                        $('.star-item').removeClass('bi-star-fill').addClass('bi-star');
                        
                        if (typeof window.renderReviews === 'function') window.renderReviews();
                    } else if (result && result.message) {
                        alert(result.message);
                    }
                } catch (err) {
                    console.error('Submit error:', err);
                    alert('Lỗi khi gửi đánh giá. Có thể bạn đã đánh giá phim này rồi.');
                }
            });
        }
    }
};

    // Initial call for detail page
    renderMovieDetail();

    // ---- YÊU CẦU JQUERY 3: Add to Watchlist (Click) ----
    $(document).on('click', '.btn-watchlist', async function(e) {
        e.preventDefault(); 
        
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            alert('Vui lòng đăng nhập để thêm vào Watchlist!');
            window.location.href = 'login.html';
            return;
        }

        let movieId = $(this).data('id');
        
        // Sửa lỗi ID: Nếu movieId là số hoặc không tồn tại mã _id trực tiếp
        // Chúng ta sẽ tìm trong moviesData để lấy mã _id thật của MongoDB
        if (movieId && !isNaN(movieId)) {
            const movieObj = moviesData.find(m => m.id == movieId);
            if (movieObj && movieObj._id) {
                movieId = movieObj._id;
            }
        }

        if (!movieId || (typeof movieId === 'string' && movieId.length < 10)) {
             console.error("Lỗi: Không tìm thấy mã ID chuẩn cho phim này", movieId);
             // Thử tìm theo tiêu đề nếu ID vẫn lỗi
             const title = $(this).data('title');
             const movieByTitle = moviesData.find(m => m.title === title);
             if (movieByTitle && movieByTitle._id) movieId = movieByTitle._id;
        }
        
        try {
            const result = await MovieAPI.addToWatchlist(movieId);
            if (result.watchlist || result.message === 'Phim đã có trong Watchlist') {
                const title = $(this).data('title') || 'Movie';
                
                // Update global state
                if (movieId && !window.userWatchlist.includes(movieId.toString())) {
                    window.userWatchlist.push(movieId.toString());
                }

                // Show Premium Toast in English as requested
                window.showToast(`Success!`, `"${title}" has been added to your watchlist.`, 'success');
                
                $(this).html('<i class="bi bi-check-lg"></i> Added');
                $(this).removeClass('btn-outline-light liquid-glass').addClass('btn-warning text-dark fw-bold');
                $(this).prop('disabled', true);
                
                // Update badge globally
                const badge = document.getElementById('watchlist-badge');
                if (badge) badge.textContent = window.userWatchlist.length;
                
                if (typeof watchlistCount !== 'undefined') {
                    watchlistCount = window.userWatchlist.length;
                }
            } else {
                window.showToast('Watchlist', result.message || 'Error adding to watchlist', 'error');
            }
        } catch (err) {
            console.error('Watchlist Error:', err);
            window.showToast('Connection Error', 'Failed to connect to server.', 'error');
        }
    });

    // ---- PREMIUM TOAST SYSTEM (English) ----
    window.showToast = function(title, message, type = 'success') {
        let $container = $('.toast-container');
        if ($container.length === 0) {
            $container = $('<div class="toast-container"></div>');
            $('body').append($container);
        }

        const icon = type === 'success' ? 'bi-check-circle-fill' : 'bi-exclamation-triangle-fill';
        const $toast = $(`
            <div class="premium-toast ${type}">
                <div class="toast-icon"><i class="bi ${icon}"></i></div>
                <div class="toast-content">
                    <div class="toast-title">${title}</div>
                    <div class="toast-msg">${message}</div>
                </div>
                <div class="toast-close"><i class="bi bi-x-lg"></i></div>
            </div>
        `);

        $container.append($toast);

        // Auto remove
        const timeout = setTimeout(() => {
            $toast.addClass('hide');
            setTimeout(() => $toast.remove(), 500);
        }, 5000);

        $toast.find('.toast-close').click(function() {
            clearTimeout(timeout);
            $toast.addClass('hide');
            setTimeout(() => $toast.remove(), 500);
        });
    };

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
            mediaHtml = `<video src="${MovieAPI.getAssetUrl(localVideo)}" controls autoplay class="w-100 h-100 object-fit-contain"></video>`;
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

    

    window.updateNavbarAuth = function() {
        const t = window.translations[window.currentLang];
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            const isAdmin = user.role === 'admin';
            $('.auth-buttons').html(`
                <span class="text-white fw-medium d-none d-md-inline-block px-1"><i class="bi bi-person-circle"></i> Hi, ${user.username}</span>
                ${isAdmin ? `<a href="admin.html" class="btn btn-outline-warning btn-sm rounded-circle" style="width:32px;height:32px;padding:0;display:inline-flex;align-items:center;justify-content:center;"><i class="bi bi-gear-fill" style="font-size:0.85rem;"></i></a>` : ''}
                <button class="btn btn-outline-danger btn-sm rounded-pill px-3" onclick="handleLogout()">${t.logout}</button>
            `);
        } else {
            $('.auth-buttons').html(`
                <a href="login.html" class="btn text-white fw-medium rounded-pill px-3">${t.login}</a>
                <a href="signup.html" class="btn btn-light text-dark rounded-pill px-4 fw-bold shadow-sm">${t.signup}</a>
            `);
        }
    }

    window.openLoginModal = function() {
        window.location.href = 'login.html';
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
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.updateNavbarAuth();
        window.updateAdminUI();
        window.location.href = 'index.html';
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

    // Spotlight Mute Toggle
    $(document).on('click', '.spotlight-mute-btn', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const $container = $(this).closest('.featured-iqiyi-container, .award-banner');
        const $video = $container.find('video.spotlight-video-el');
        const $icon = $(this).find('i');
        
        if ($video.length) {
            const isMuted = $video.prop('muted');
            $video.prop('muted', !isMuted);
            
            if (isMuted) {
                $icon.removeClass('bi-volume-mute-fill').addClass('bi-volume-up-fill');
            } else {
                $icon.removeClass('bi-volume-up-fill').addClass('bi-volume-mute-fill');
            }
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
                        <div class="mb-3">
                            <span class="badge bg-danger rounded-1 px-3 py-1 fw-bold text-uppercase" style="letter-spacing: 2px;">${customData.topBadge || 'NỔI BẬT'}</span>
                        </div>
                        ${titleHtml}
                        
                        <!-- Metadata row moved below title -->
                        <div class="d-flex align-items-center gap-3 mb-4 mt-2" style="font-size: 0.9rem;">
                            ${customData.rating ? `<span class="text-warning fw-bold d-flex align-items-center"><i class="bi bi-star-fill me-1" style="font-size: 0.8rem;"></i>${customData.rating}</span>` : ''}
                            <span class="fw-bold" style="color: rgba(255, 255, 255, 0.6);">${customData.year || ''}</span>
                            ${getSpotlightBadge(customData.badge, true)}
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

    async function loadNetflixSectionLogo() {
        const hasLogo = localStorage.getItem('has_netflix_section_logo');
        if (!hasLogo) return;

        const config = JSON.parse(localStorage.getItem('netflix_section_config') || '{}');
        
        try {
            const db = await openVideoDB();
            const tx = db.transaction('videos', 'readonly');
            const store = tx.objectStore('videos');
            const req = store.get('netflix_section_logo');
            
            req.onsuccess = function() {
                if (req.result) {
                    const url = URL.createObjectURL(req.result);
                    const size = config.size || '100';
                    $('#netflix-section-logo').html(`<img src="${url}" style="width: auto; height: auto; max-width: ${size}px; max-height: 100px; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.5));">`);
                }
            };
        } catch (err) {
            console.warn("Failed to load Netflix section logo:", err);
        }
    };

    // Duplicate openVideoDB removed to avoid conflicts

    loadCustomHeroBanner();
    loadNetflixSectionLogo();
    initBackendData(); // Kích hoạt lấy dữ liệu từ Cloud
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
// Toggle Like
window.toggleLike = async function(reviewId) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
        alert('Vui lòng đăng nhập để thực hiện tính năng này!');
        return;
    }

    try {
        const result = await MovieAPI.toggleLikeReview(reviewId);
        if (typeof window.renderReviews === 'function') window.renderReviews();
    } catch (err) {
        console.error('Like error:', err);
    }
};

// Delete Review
window.deleteReview = async function(reviewId) {
    if (!confirm('Bạn có chắc chắn muốn xóa đánh giá này?')) return;

    try {
        const result = await MovieAPI.deleteReview(reviewId);
        alert(result.message || 'Đã xóa thành công!');
        if (typeof window.renderReviews === 'function') window.renderReviews();
    } catch (err) {
        console.error('Delete error:', err);
        alert('Lỗi khi xóa đánh giá.');
    }
};

// Edit Review
window.editReview = function(id, rating, title, text) {
    // Fill data vào modal review form và mở nó ra
    $('#review-rating-value').val(rating);
    $('#review-title').val(title);
    $('#review-text').val(text);
    
    // Update stars UI
    $('.star-item').each(function() {
        if ($(this).data('value') <= rating) {
            $(this).removeClass('bi-star').addClass('bi-star-fill');
        } else {
            $(this).removeClass('bi-star-fill').addClass('bi-star');
        }
    });

    // Lưu ID review đang sửa vào form
    $('#review-form').data('edit-id', id);
    
    // Đổi tiêu đề và nút submit
    $('#review-form-modal .modal-title').text('Chỉnh sửa đánh giá');
    $('#review-form button[type="submit"]').text('Lưu thay đổi');
    
    const modal = new bootstrap.Modal(document.getElementById('review-form-modal'));
    modal.show();
};

// Cập nhật lại submit handler của review modal để hỗ trợ cả EDIT
$(document).ready(async function() {
    // Initialize Watchlist state before rendering
    await window.initWatchlist();

    $('#review-form').off('submit').on('submit', async function(e) {
        e.preventDefault();
        
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            alert('Vui lòng đăng nhập!');
            return;
        }

        const rating = $('#review-rating-value').val();
        const title = $('#review-title').val().trim();
        const text = $('#review-text').val().trim();
        const editId = $(this).data('edit-id');
        
        if (rating == 0) { alert('Vui lòng chọn số sao!'); return; }
        if (!text) { alert('Vui lòng nhập nội dung!'); return; }

        try {
            let result;
            if (editId) {
                // Đang EDIT
                result = await MovieAPI.updateReview(editId, {
                    rating: parseInt(rating),
                    title: title || 'Đánh giá phim',
                    text: text
                });
            } else {
                // Đang NEW SUBMIT
                const urlId = new URLSearchParams(window.location.search).get('id');
                const movieObj = typeof moviesData !== 'undefined' ? moviesData.find(m => (m._id && m._id == urlId) || (m.id && m.id == urlId)) : null;
                const targetMovieId = (movieObj && movieObj._id) ? movieObj._id : urlId;

                result = await MovieAPI.submitReview({
                    movieId: targetMovieId,
                    rating: parseInt(rating),
                    title: title || 'Đánh giá phim',
                    text: text
                });
            }

            if (result && result._id) {
                window.showToast(editId ? 'Updated!' : 'Thank You!', editId ? 'Your review has been updated.' : 'Your review has been submitted successfully.', 'success');
                $('#review-form-modal').modal('hide');
                
                // Reset form
                $('#review-form').removeData('edit-id');
                $('#review-title').val('');
                $('#review-text').val('');
                $('#review-rating-value').val(0);
                $('.star-item').removeClass('bi-star-fill').addClass('bi-star');
                $('#review-form-modal .modal-title').text('Viết đánh giá');
                $('#review-form button[type="submit"]').text('Gửi đánh giá');
                
                if (typeof window.renderReviews === 'function') window.renderReviews();
            } else if (result && result.message) {
                if (result.message.includes('already reviewed')) {
                    window.showToast('Note', result.message, 'warning');
                } else {
                    alert(result.message);
                }
            }
        } catch (err) {
            console.error('Review error:', err);
            alert('Lỗi khi xử lý đánh giá.');
        }
    });
});
window.submitInlineReview = async function() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
        alert('Vui lòng đăng nhập để đánh giá phim!');
        window.location.href = 'login.html';
        return;
    }

    const text = $('#inlineReviewText').val().trim();
    const rating = window.currentSelectedRating || 10;

    if (!text) {
        alert('Vui lòng nhập nội dung bình luận!');
        return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const urlId = urlParams.get('id');
    
    if (urlId) {
        // Tìm phim trong moviesData để lấy _id thật
        const movieObj = typeof moviesData !== 'undefined' ? moviesData.find(m => (m._id && m._id == urlId) || (m.id && m.id == urlId)) : null;
        const targetMovieId = (movieObj && movieObj._id) ? movieObj._id : urlId;

        try {
            const result = await MovieAPI.submitReview({
                movieId: targetMovieId,
                rating: parseInt(rating),
                title: 'User Review',
                text: text
            });

            if (result && result._id) {
                window.showToast('Thank You!', 'Your review has been submitted successfully.', 'success');
                $('#inlineReviewText').val('');
                $('#inline-review-form').fadeOut();
                
                // Load lại danh sách review
                if (typeof window.renderReviews === 'function') window.renderReviews();
            } else if (result && result.message) {
                if (result.message.includes('already reviewed')) {
                    window.showToast('Note', result.message, 'warning');
                } else {
                    alert(result.message);
                }
            }
        } catch (err) {
            console.error('Submit review error:', err);
            window.showToast('Note', 'You have already reviewed this movie!', 'warning');
        }
    }
};
