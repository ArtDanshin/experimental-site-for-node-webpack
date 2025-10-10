// Detail Pages JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all detail page functionality
    initProjectPage();
    initArticlePage();
    initPlaylistPage();
    initGallery();
    initCodeBlocks();
    initShareButtons();
    initTableOfContents();
});

// Project Page Functionality
function initProjectPage() {
    const projectPage = document.querySelector('.project-hero');
    if (!projectPage) return;

    // Project gallery functionality
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        const btn = item.querySelector('.gallery-btn');
        if (btn) {
            btn.addEventListener('click', function() {
                const imageType = this.dataset.image;
                openImageModal(imageType);
            });
        }
    });

    // Related projects hover effects
    const relatedProjects = document.querySelectorAll('.related-project');
    relatedProjects.forEach(project => {
        project.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
        });
        
        project.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
}

// Article Page Functionality
function initArticlePage() {
    const articlePage = document.querySelector('.article-header');
    if (!articlePage) return;

    // Article actions
    const likeBtn = document.querySelector('.action-btn.like');
    if (likeBtn) {
        likeBtn.addEventListener('click', function() {
            toggleLike(this);
        });
    }

    const bookmarkBtn = document.querySelector('.action-btn.bookmark');
    if (bookmarkBtn) {
        bookmarkBtn.addEventListener('click', function() {
            toggleBookmark(this);
        });
    }

    const shareBtn = document.querySelector('.action-btn.share');
    if (shareBtn) {
        shareBtn.addEventListener('click', function() {
            showShareModal();
        });
    }

    // Author social links
    const authorSocialLinks = document.querySelectorAll('.author-social a');
    authorSocialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href) {
                window.open(href, '_blank');
            }
        });
    });

    // Related articles
    const relatedArticles = document.querySelectorAll('.related-article');
    relatedArticles.forEach(article => {
        article.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
        });
        
        article.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
}

// Playlist Page Functionality
function initPlaylistPage() {
    const playlistPage = document.querySelector('.playlist-header');
    if (!playlistPage) return;

    // Music player functionality
    initMusicPlayer();

    // Track interactions
    const trackItems = document.querySelectorAll('.track-item');
    trackItems.forEach((item, index) => {
        // Play track
        const playBtn = item.querySelector('.play-track-btn');
        if (playBtn) {
            playBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                playTrack(index);
            });
        }

        // Like track
        const likeBtn = item.querySelector('.like-track');
        if (likeBtn) {
            likeBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                toggleTrackLike(this);
            });
        }

        // More options
        const moreBtn = item.querySelector('.more-options');
        if (moreBtn) {
            moreBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                showTrackOptions(this, index);
            });
        }

        // Track selection
        item.addEventListener('click', function() {
            selectTrack(index);
        });
    });

    // Playlist actions
    const playAllBtn = document.querySelector('.play-all-btn');
    if (playAllBtn) {
        playAllBtn.addEventListener('click', function() {
            playAllTracks();
        });
    }

    const shuffleBtn = document.querySelector('.shuffle-btn');
    if (shuffleBtn) {
        shuffleBtn.addEventListener('click', function() {
            toggleShuffle(this);
        });
    }

    const likePlaylistBtn = document.querySelector('.like-btn');
    if (likePlaylistBtn) {
        likePlaylistBtn.addEventListener('click', function() {
            togglePlaylistLike(this);
        });
    }

    // Track sorting and filtering
    const sortBtn = document.querySelector('#sortBtn');
    if (sortBtn) {
        sortBtn.addEventListener('click', function() {
            showSortOptions();
        });
    }

    const filterBtn = document.querySelector('#filterBtn');
    if (filterBtn) {
        filterBtn.addEventListener('click', function() {
            showFilterOptions();
        });
    }

    // Load more tracks
    const loadMoreBtn = document.querySelector('.load-more-tracks .btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            loadMoreTracks();
        });
    }
}

// Music Player Functionality
function initMusicPlayer() {
    const player = {
        currentTrack: 0,
        isPlaying: false,
        isShuffled: false,
        isRepeated: false,
        tracks: [
            {
                title: 'Midnight City',
                artist: 'M83',
                album: 'Hurry Up, We\'re Dreaming',
                duration: '4:03',
                image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=60&h=60&fit=crop'
            },
            {
                title: 'Blinding Lights',
                artist: 'The Weeknd',
                album: 'After Hours',
                duration: '3:20',
                image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=60&h=60&fit=crop'
            },
            {
                title: 'Sunflower',
                artist: 'Post Malone, Swae Lee',
                album: 'Spider-Man: Into the Spider-Verse',
                duration: '2:38',
                image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=60&h=60&fit=crop'
            },
            {
                title: 'Levitating',
                artist: 'Dua Lipa',
                album: 'Future Nostalgia',
                duration: '3:23',
                image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=60&h=60&fit=crop'
            }
        ]
    };

    // Player controls
    const playPauseBtn = document.querySelector('#playPauseBtn');
    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');
    const repeatBtn = document.querySelector('#repeatBtn');
    const shuffleBtn = document.querySelector('#shuffleBtn');
    const volumeBtn = document.querySelector('#volumeBtn');

    if (playPauseBtn) {
        playPauseBtn.addEventListener('click', function() {
            togglePlayPause();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            playPreviousTrack();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            playNextTrack();
        });
    }

    if (repeatBtn) {
        repeatBtn.addEventListener('click', function() {
            toggleRepeat();
        });
    }

    if (shuffleBtn) {
        shuffleBtn.addEventListener('click', function() {
            toggleShuffle();
        });
    }

    if (volumeBtn) {
        volumeBtn.addEventListener('click', function() {
            toggleMute();
        });
    }

    // Progress bar
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        progressBar.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const percentage = clickX / rect.width;
            seekTo(percentage);
        });
    }

    // Global functions for music player
    window.togglePlayPause = function() {
        player.isPlaying = !player.isPlaying;
        const icon = playPauseBtn.querySelector('i');
        if (player.isPlaying) {
            icon.className = 'fas fa-pause';
            startProgressAnimation();
        } else {
            icon.className = 'fas fa-play';
            stopProgressAnimation();
        }
    };

    window.playTrack = function(index) {
        player.currentTrack = index;
        updatePlayerInfo();
        selectTrack(index);
        if (!player.isPlaying) {
            togglePlayPause();
        }
    };

    window.playAllTracks = function() {
        player.currentTrack = 0;
        updatePlayerInfo();
        selectTrack(0);
        if (!player.isPlaying) {
            togglePlayPause();
        }
    };

    window.selectTrack = function(index) {
        // Remove active class from all tracks
        document.querySelectorAll('.track-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Add active class to selected track
        const trackItem = document.querySelector(`[data-track="${index + 1}"]`);
        if (trackItem) {
            trackItem.classList.add('active');
        }
        
        player.currentTrack = index;
        updatePlayerInfo();
    };

    window.playPreviousTrack = function() {
        if (player.currentTrack > 0) {
            player.currentTrack--;
        } else {
            player.currentTrack = player.tracks.length - 1;
        }
        updatePlayerInfo();
        selectTrack(player.currentTrack);
    };

    window.playNextTrack = function() {
        if (player.currentTrack < player.tracks.length - 1) {
            player.currentTrack++;
        } else {
            player.currentTrack = 0;
        }
        updatePlayerInfo();
        selectTrack(player.currentTrack);
    };

    window.toggleRepeat = function() {
        player.isRepeated = !player.isRepeated;
        const icon = repeatBtn.querySelector('i');
        if (player.isRepeated) {
            icon.style.color = 'var(--primary-color)';
        } else {
            icon.style.color = '';
        }
    };

    window.toggleShuffle = function(btn) {
        player.isShuffled = !player.isShuffled;
        const icon = btn ? btn.querySelector('i') : shuffleBtn.querySelector('i');
        if (player.isShuffled) {
            icon.style.color = 'var(--primary-color)';
        } else {
            icon.style.color = '';
        }
    };

    window.toggleMute = function() {
        const icon = volumeBtn.querySelector('i');
        if (icon.classList.contains('fa-volume-up')) {
            icon.className = 'fas fa-volume-mute';
        } else {
            icon.className = 'fas fa-volume-up';
        }
    };

    function updatePlayerInfo() {
        const track = player.tracks[player.currentTrack];
        if (track) {
            document.getElementById('playerTitle').textContent = track.title;
            document.getElementById('playerArtist').textContent = track.artist;
            document.getElementById('playerImage').src = track.image;
            document.getElementById('totalTime').textContent = track.duration;
        }
    }

    function startProgressAnimation() {
        const progressFill = document.getElementById('progressFill');
        const currentTime = document.getElementById('currentTime');
        let progress = 0;
        
        const interval = setInterval(() => {
            if (!player.isPlaying) {
                clearInterval(interval);
                return;
            }
            
            progress += 0.1;
            if (progress >= 100) {
                progress = 0;
                if (!player.isRepeated) {
                    playNextTrack();
                }
            }
            
            progressFill.style.width = progress + '%';
            currentTime.textContent = formatTime(progress * 0.04); // Approximate time
        }, 100);
    }

    function stopProgressAnimation() {
        // Animation stops when isPlaying becomes false
    }

    function seekTo(percentage) {
        const progressFill = document.getElementById('progressFill');
        const currentTime = document.getElementById('currentTime');
        
        progressFill.style.width = (percentage * 100) + '%';
        currentTime.textContent = formatTime(percentage * 4); // Approximate time
    }

    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    // Initialize player
    updatePlayerInfo();
}

// Gallery Functionality
function initGallery() {
    // Gallery modal functionality
    window.openImageModal = function(imageType) {
        const modal = document.createElement('div');
        modal.className = 'gallery-modal';
        modal.innerHTML = `
            <div class="modal-overlay">
                <div class="modal-content">
                    <button class="modal-close">
                        <i class="fas fa-times"></i>
                    </button>
                    <img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop" alt="${imageType} view">
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Close modal
        const closeBtn = modal.querySelector('.modal-close');
        const overlay = modal.querySelector('.modal-overlay');
        
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(modal);
        });
        
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                document.body.removeChild(modal);
            }
        });
        
        // Add modal styles
        const style = document.createElement('style');
        style.textContent = `
            .gallery-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 1000;
                animation: fadeIn 0.3s ease;
            }
            
            .modal-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 2rem;
            }
            
            .modal-content {
                position: relative;
                max-width: 90%;
                max-height: 90%;
            }
            
            .modal-content img {
                width: 100%;
                height: 100%;
                object-fit: contain;
                border-radius: 1rem;
            }
            
            .modal-close {
                position: absolute;
                top: -3rem;
                right: 0;
                background: none;
                border: none;
                color: white;
                font-size: 2rem;
                cursor: pointer;
                transition: color 0.3s ease;
            }
            
            .modal-close:hover {
                color: var(--primary-color);
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    };
}

// Code Blocks Functionality
function initCodeBlocks() {
    const copyBtns = document.querySelectorAll('.copy-btn');
    copyBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const codeBlock = this.closest('.code-block');
            const code = codeBlock.querySelector('code').textContent;
            
            navigator.clipboard.writeText(code).then(() => {
                // Show success feedback
                const originalIcon = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i>';
                this.style.color = 'var(--success-color)';
                
                setTimeout(() => {
                    this.innerHTML = originalIcon;
                    this.style.color = '';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy code: ', err);
            });
        });
    });
}

// Share Buttons Functionality
function initShareButtons() {
    const shareBtns = document.querySelectorAll('[data-share]');
    shareBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.dataset.share;
            const url = window.location.href;
            const title = document.title;
            
            let shareUrl = '';
            
            switch (platform) {
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
                    break;
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                    break;
                case 'linkedin':
                    shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
                    break;
                case 'telegram':
                    shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
                    break;
                case 'copy':
                    navigator.clipboard.writeText(url).then(() => {
                        showNotification('Ссылка скопирована в буфер обмена!');
                    });
                    return;
            }
            
            if (shareUrl) {
                window.open(shareUrl, '_blank', 'width=600,height=400');
            }
        });
    });
}

// Table of Contents Functionality
function initTableOfContents() {
    const tocLinks = document.querySelectorAll('.toc-list a');
    const sections = document.querySelectorAll('h2[id]');
    
    if (tocLinks.length === 0 || sections.length === 0) return;
    
    // Smooth scrolling for TOC links
    tocLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Highlight active section in TOC
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                const activeLink = document.querySelector(`.toc-list a[href="#${id}"]`);
                
                // Remove active class from all links
                tocLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to current link
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, {
        rootMargin: '-20% 0px -70% 0px'
    });
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Utility Functions
function toggleLike(btn) {
    const icon = btn.querySelector('i');
    const count = btn.querySelector('span');
    
    if (btn.classList.contains('liked')) {
        btn.classList.remove('liked');
        icon.className = 'fas fa-heart';
        count.textContent = parseInt(count.textContent) - 1;
    } else {
        btn.classList.add('liked');
        icon.className = 'fas fa-heart';
        count.textContent = parseInt(count.textContent) + 1;
    }
}

function toggleBookmark(btn) {
    const icon = btn.querySelector('i');
    const text = btn.querySelector('span');
    
    if (btn.classList.contains('bookmarked')) {
        btn.classList.remove('bookmarked');
        icon.className = 'fas fa-bookmark';
        text.textContent = 'Сохранить';
    } else {
        btn.classList.add('bookmarked');
        icon.className = 'fas fa-bookmark';
        text.textContent = 'Сохранено';
    }
}

function toggleTrackLike(btn) {
    const icon = btn.querySelector('i');
    
    if (btn.classList.contains('liked')) {
        btn.classList.remove('liked');
        icon.className = 'fas fa-heart';
    } else {
        btn.classList.add('liked');
        icon.className = 'fas fa-heart';
    }
}

function togglePlaylistLike(btn) {
    const icon = btn.querySelector('i');
    const text = btn.querySelector('span');
    
    if (btn.classList.contains('liked')) {
        btn.classList.remove('liked');
        icon.className = 'fas fa-heart';
        text.textContent = 'Нравится';
    } else {
        btn.classList.add('liked');
        icon.className = 'fas fa-heart';
        text.textContent = 'Не нравится';
    }
}

function showTrackOptions(btn, trackIndex) {
    // Create dropdown menu
    const dropdown = document.createElement('div');
    dropdown.className = 'track-options-dropdown';
    dropdown.innerHTML = `
        <div class="dropdown-content">
            <button class="dropdown-item">
                <i class="fas fa-play"></i>
                Воспроизвести
            </button>
            <button class="dropdown-item">
                <i class="fas fa-plus"></i>
                Добавить в плейлист
            </button>
            <button class="dropdown-item">
                <i class="fas fa-share"></i>
                Поделиться
            </button>
            <button class="dropdown-item">
                <i class="fas fa-download"></i>
                Скачать
            </button>
        </div>
    `;
    
    // Position dropdown
    const rect = btn.getBoundingClientRect();
    dropdown.style.position = 'fixed';
    dropdown.style.top = rect.bottom + 'px';
    dropdown.style.left = rect.left + 'px';
    dropdown.style.zIndex = '1000';
    
    document.body.appendChild(dropdown);
    
    // Close dropdown when clicking outside
    const closeDropdown = (e) => {
        if (!dropdown.contains(e.target)) {
            document.body.removeChild(dropdown);
            document.removeEventListener('click', closeDropdown);
        }
    };
    
    setTimeout(() => {
        document.addEventListener('click', closeDropdown);
    }, 100);
    
    // Add dropdown styles
    const style = document.createElement('style');
    style.textContent = `
        .track-options-dropdown {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-lg);
            overflow: hidden;
            animation: slideDown 0.2s ease;
        }
        
        .dropdown-content {
            display: flex;
            flex-direction: column;
        }
        
        .dropdown-item {
            display: flex;
            align-items: center;
            gap: var(--spacing-sm);
            padding: var(--spacing-sm) var(--spacing-md);
            background: none;
            border: none;
            color: var(--text-primary);
            text-align: left;
            cursor: pointer;
            transition: background-color 0.2s ease;
        }
        
        .dropdown-item:hover {
            background: var(--bg-hover);
        }
        
        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}

function showSortOptions() {
    showNotification('Функция сортировки в разработке');
}

function showFilterOptions() {
    showNotification('Функция фильтрации в разработке');
}

function loadMoreTracks() {
    showNotification('Загрузка дополнительных треков...');
    // Simulate loading
    setTimeout(() => {
        showNotification('Треки загружены!');
    }, 2000);
}

function showShareModal() {
    showNotification('Модальное окно для поделиться в разработке');
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 2rem;
        right: 2rem;
        background: var(--primary-color);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-lg);
        z-index: 1000;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
    
    // Add notification styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(100%);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes slideOutRight {
            from {
                opacity: 1;
                transform: translateX(0);
            }
            to {
                opacity: 0;
                transform: translateX(100%);
            }
        }
    `;
    document.head.appendChild(style);
}
