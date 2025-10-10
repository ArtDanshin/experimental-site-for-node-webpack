// Music page specific JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    initViewToggle();
    initPlayButtons();
    initScrollAnimations();
    initTrackInteractions();
    initMusicPlayer();
    initServicesPopup();
});

// View toggle functionality
function initViewToggle() {
    const viewButtons = document.querySelectorAll('.view-btn');
    const playlistsGrid = document.querySelector('#playlistsGrid');
    
    viewButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const view = this.getAttribute('data-view');
            
            // Update active button
            viewButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Toggle view
            if (view === 'list') {
                playlistsGrid.classList.add('list-view');
            } else {
                playlistsGrid.classList.remove('list-view');
            }
        });
    });
}

// Play button functionality
function initPlayButtons() {
    const playButtons = document.querySelectorAll('.play-btn');
    
    playButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const playlist = this.getAttribute('data-playlist');
            
            // Toggle play state
            if (this.classList.contains('playing')) {
                this.classList.remove('playing');
                stopPlaylist(playlist);
            } else {
                // Stop all other playlists
                playButtons.forEach(b => b.classList.remove('playing'));
                this.classList.add('playing');
                playPlaylist(playlist);
            }
        });
    });
    
    function playPlaylist(playlist) {
        console.log('Playing playlist:', playlist);
        // Here you would integrate with actual music streaming APIs
        showNotification(`Воспроизведение плейлиста: ${playlist}`);
    }
    
    function stopPlaylist(playlist) {
        console.log('Stopping playlist:', playlist);
        showNotification('Воспроизведение остановлено');
    }
}

// Scroll animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.playlist-card, .track-item, .service-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in', 'visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Track interactions
function initTrackInteractions() {
    const trackButtons = document.querySelectorAll('.track-btn');
    
    trackButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const icon = this.querySelector('i');
            
            if (icon.classList.contains('fa-play')) {
                // Play track
                icon.classList.remove('fa-play');
                icon.classList.add('fa-pause');
                this.style.background = 'var(--error-color)';
                this.style.color = 'white';
                this.style.borderColor = 'var(--error-color)';
            } else if (icon.classList.contains('fa-pause')) {
                // Pause track
                icon.classList.remove('fa-pause');
                icon.classList.add('fa-play');
                this.style.background = 'var(--bg-hover)';
                this.style.color = 'var(--text-secondary)';
                this.style.borderColor = 'var(--border-color)';
            } else if (icon.classList.contains('fa-heart')) {
                // Toggle like
                this.classList.toggle('liked');
                if (this.classList.contains('liked')) {
                    this.style.background = 'var(--error-color)';
                    this.style.color = 'white';
                    this.style.borderColor = 'var(--error-color)';
                    showNotification('Добавлено в избранное');
                } else {
                    this.style.background = 'var(--bg-hover)';
                    this.style.color = 'var(--text-secondary)';
                    this.style.borderColor = 'var(--border-color)';
                    showNotification('Удалено из избранного');
                }
            }
        });
    });
}

// Music player simulation
function initMusicPlayer() {
    // Create a simple music player overlay
    const playerOverlay = document.createElement('div');
    playerOverlay.className = 'music-player-overlay';
    playerOverlay.innerHTML = `
        <div class="music-player">
            <div class="player-info">
                <div class="player-image">
                    <img src="" alt="Now Playing" id="playerImage">
                </div>
                <div class="player-details">
                    <h4 id="playerTitle">Выберите трек</h4>
                    <p id="playerArtist">ArtDanshin</p>
                </div>
            </div>
            <div class="player-controls">
                <button class="player-btn" id="prevBtn">
                    <i class="fas fa-step-backward"></i>
                </button>
                <button class="player-btn play-pause" id="playPauseBtn">
                    <i class="fas fa-play"></i>
                </button>
                <button class="player-btn" id="nextBtn">
                    <i class="fas fa-step-forward"></i>
                </button>
            </div>
            <div class="player-progress">
                <div class="progress-bar">
                    <div class="progress-fill" id="progressFill"></div>
                </div>
                <div class="time-display">
                    <span id="currentTime">0:00</span>
                    <span id="totalTime">0:00</span>
                </div>
            </div>
            <button class="player-close" id="closePlayer">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(playerOverlay);
    
    // Player functionality
    const playPauseBtn = document.getElementById('playPauseBtn');
    const closePlayer = document.getElementById('closePlayer');
    const progressFill = document.getElementById('progressFill');
    const currentTimeEl = document.getElementById('currentTime');
    const totalTimeEl = document.getElementById('totalTime');
    
    let isPlaying = false;
    let currentTime = 0;
    let totalTime = 180; // 3 minutes example
    
    playPauseBtn.addEventListener('click', function() {
        isPlaying = !isPlaying;
        const icon = this.querySelector('i');
        
        if (isPlaying) {
            icon.classList.remove('fa-play');
            icon.classList.add('fa-pause');
            startProgress();
        } else {
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
            stopProgress();
        }
    });
    
    closePlayer.addEventListener('click', function() {
        playerOverlay.style.display = 'none';
        isPlaying = false;
        const icon = playPauseBtn.querySelector('i');
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    });
    
    function startProgress() {
        const interval = setInterval(() => {
            if (!isPlaying) {
                clearInterval(interval);
                return;
            }
            
            currentTime += 1;
            const progress = (currentTime / totalTime) * 100;
            progressFill.style.width = progress + '%';
            currentTimeEl.textContent = formatTime(currentTime);
            
            if (currentTime >= totalTime) {
                currentTime = 0;
                isPlaying = false;
                const icon = playPauseBtn.querySelector('i');
                icon.classList.remove('fa-pause');
                icon.classList.add('fa-play');
                clearInterval(interval);
            }
        }, 1000);
    }
    
    function stopProgress() {
        // Progress will stop when isPlaying becomes false
    }
    
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }
    
    // Initialize time display
    totalTimeEl.textContent = formatTime(totalTime);
    currentTimeEl.textContent = formatTime(currentTime);
}

// Notification system
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--bg-card);
        color: var(--text-primary);
        padding: 1rem 1.5rem;
        border-radius: var(--radius-lg);
        border: 1px solid var(--border-color);
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease-in-out;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add CSS for music player and animations
const musicStyle = document.createElement('style');
musicStyle.textContent = `
    .music-player-overlay {
        position: fixed;
        bottom: 20px;
        left: 20px;
        right: 20px;
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: var(--radius-xl);
        padding: var(--spacing-lg);
        box-shadow: var(--shadow-xl);
        z-index: 1000;
        display: none;
        backdrop-filter: blur(10px);
    }
    
    .music-player {
        display: flex;
        align-items: center;
        gap: var(--spacing-lg);
    }
    
    .player-info {
        display: flex;
        align-items: center;
        gap: var(--spacing-md);
        flex: 1;
    }
    
    .player-image {
        width: 50px;
        height: 50px;
        border-radius: var(--radius-md);
        overflow: hidden;
    }
    
    .player-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .player-details h4 {
        font-size: 1rem;
        font-weight: 600;
        color: var(--text-primary);
        margin-bottom: var(--spacing-xs);
    }
    
    .player-details p {
        font-size: 0.875rem;
        color: var(--text-secondary);
    }
    
    .player-controls {
        display: flex;
        gap: var(--spacing-sm);
    }
    
    .player-btn {
        width: 40px;
        height: 40px;
        background: var(--bg-hover);
        border: 1px solid var(--border-color);
        border-radius: var(--radius-md);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text-secondary);
        cursor: pointer;
        transition: var(--transition-fast);
    }
    
    .player-btn:hover {
        background: var(--primary-color);
        color: white;
        border-color: var(--primary-color);
    }
    
    .player-btn.play-pause {
        width: 50px;
        height: 50px;
        background: var(--primary-color);
        color: white;
        border-color: var(--primary-color);
    }
    
    .player-progress {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xs);
    }
    
    .progress-bar {
        height: 4px;
        background: var(--bg-hover);
        border-radius: var(--radius-sm);
        overflow: hidden;
    }
    
    .progress-fill {
        height: 100%;
        background: var(--gradient-primary);
        width: 0%;
        transition: width 0.3s ease;
    }
    
    .time-display {
        display: flex;
        justify-content: space-between;
        font-size: 0.75rem;
        color: var(--text-muted);
    }
    
    .player-close {
        width: 30px;
        height: 30px;
        background: transparent;
        border: none;
        color: var(--text-muted);
        cursor: pointer;
        border-radius: var(--radius-sm);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: var(--transition-fast);
    }
    
    .player-close:hover {
        background: var(--bg-hover);
        color: var(--text-primary);
    }
    
    /* Animation classes */
    .fade-in {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease-out;
    }
    
    .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    /* Staggered animation */
    .playlist-card:nth-child(1) { transition-delay: 0.1s; }
    .playlist-card:nth-child(2) { transition-delay: 0.2s; }
    .playlist-card:nth-child(3) { transition-delay: 0.3s; }
    .playlist-card:nth-child(4) { transition-delay: 0.4s; }
    .playlist-card:nth-child(5) { transition-delay: 0.5s; }
    .playlist-card:nth-child(6) { transition-delay: 0.6s; }
    
    .track-item:nth-child(1) { transition-delay: 0.1s; }
    .track-item:nth-child(2) { transition-delay: 0.2s; }
    .track-item:nth-child(3) { transition-delay: 0.3s; }
    .track-item:nth-child(4) { transition-delay: 0.4s; }
    
    .service-card:nth-child(1) { transition-delay: 0.1s; }
    .service-card:nth-child(2) { transition-delay: 0.2s; }
    .service-card:nth-child(3) { transition-delay: 0.3s; }
    .service-card:nth-child(4) { transition-delay: 0.4s; }
    
    /* Responsive music player */
    @media (max-width: 768px) {
        .music-player {
            flex-direction: column;
            gap: var(--spacing-md);
        }
        
        .player-info {
            width: 100%;
            justify-content: center;
        }
        
        .player-progress {
            width: 100%;
        }
        
        .player-close {
            position: absolute;
            top: var(--spacing-sm);
            right: var(--spacing-sm);
        }
    }
`;

document.head.appendChild(musicStyle);

// Add interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects for playlist cards
    const playlistCards = document.querySelectorAll('.playlist-card');
    
    playlistCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const playBtn = this.querySelector('.play-btn');
            if (playBtn) {
                playBtn.style.transform = 'scale(1.1)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const playBtn = this.querySelector('.play-btn');
            if (playBtn) {
                playBtn.style.transform = 'scale(1)';
            }
        });
    });
    
    // Add click effects for service cards
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px) scale(1)';
            }, 150);
        });
    });
});

// Services popup functionality
function initServicesPopup() {
    const popup = document.getElementById('services-popup');
    const closeBtn = document.getElementById('popup-close');
    const overlay = popup.querySelector('.popup-overlay');
    const moreButtons = document.querySelectorAll('.more-services-btn');
    
    // Services data for each playlist
    const servicesData = {
        'coding-vibes': [
            { name: 'SoundCloud', icon: 'fab fa-soundcloud', url: 'https://soundcloud.com/artdanshin/sets/coding-vibes' },
            { name: 'Yandex Music', icon: 'fab fa-yandex', url: 'https://music.yandex.ru/users/artdanshin/playlists/coding-vibes' },
            { name: 'Tidal', icon: 'fas fa-music', url: 'https://tidal.com/playlist/coding-vibes' },
            { name: 'Deezer', icon: 'fab fa-deezer', url: 'https://deezer.com/playlist/coding-vibes' }
        ],
        'gaming-sessions': [
            { name: 'Yandex Music', icon: 'fab fa-yandex', url: 'https://music.yandex.ru/users/artdanshin/playlists/gaming-sessions' },
            { name: 'Tidal', icon: 'fas fa-music', url: 'https://tidal.com/playlist/gaming-sessions' }
        ],
        'streaming-mix': [
            { name: 'SoundCloud', icon: 'fab fa-soundcloud', url: 'https://soundcloud.com/artdanshin/sets/streaming-mix' },
            { name: 'Yandex Music', icon: 'fab fa-yandex', url: 'https://music.yandex.ru/users/artdanshin/playlists/streaming-mix' },
            { name: 'Tidal', icon: 'fas fa-music', url: 'https://tidal.com/playlist/streaming-mix' },
            { name: 'Deezer', icon: 'fab fa-deezer', url: 'https://deezer.com/playlist/streaming-mix' },
            { name: 'Qobuz', icon: 'fas fa-compact-disc', url: 'https://qobuz.com/playlist/streaming-mix' }
        ]
    };
    
    // Open popup
    moreButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const playlist = this.getAttribute('data-playlist');
            const services = servicesData[playlist];
            
            if (services) {
                showServicesPopup(services);
            }
        });
    });
    
    // Close popup
    function closePopup() {
        popup.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    closeBtn.addEventListener('click', closePopup);
    overlay.addEventListener('click', closePopup);
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && popup.classList.contains('active')) {
            closePopup();
        }
    });
    
    function showServicesPopup(services) {
        const servicesList = document.getElementById('services-list');
        servicesList.innerHTML = '';
        
        services.forEach(service => {
            const serviceItem = document.createElement('a');
            serviceItem.href = service.url;
            serviceItem.target = '_blank';
            serviceItem.className = 'service-item';
            serviceItem.innerHTML = `
                <div class="service-item-icon">
                    <i class="${service.icon}"></i>
                </div>
                <div class="service-item-name">${service.name}</div>
            `;
            servicesList.appendChild(serviceItem);
        });
        
        popup.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Export functions for use in other scripts
window.MusicPage = {
    showNotification,
    playPlaylist: function(playlist) {
        console.log('Playing playlist:', playlist);
    },
    stopPlaylist: function(playlist) {
        console.log('Stopping playlist:', playlist);
    }
};
