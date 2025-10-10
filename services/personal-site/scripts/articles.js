// Articles page specific JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    initSearch();
    initFilters();
    initPagination();
    initScrollAnimations();
    initSidebarAnimations();
});

// Search functionality
function initSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchResults = document.querySelector('.search-results');
    const articlesGrid = document.querySelector('#articlesGrid');
    
    if (!searchInput || !articlesGrid) return;
    
    let searchTimeout;
    
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        const query = this.value.trim().toLowerCase();
        
        if (query.length < 2) {
            clearSearch();
            return;
        }
        
        searchTimeout = setTimeout(() => {
            performSearch(query);
        }, 300);
    });
    
    function performSearch(query) {
        const articles = document.querySelectorAll('.article-card');
        let visibleCount = 0;
        
        articles.forEach(article => {
            const title = article.querySelector('.article-title a').textContent.toLowerCase();
            const excerpt = article.querySelector('.article-excerpt').textContent.toLowerCase();
            const tags = Array.from(article.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase());
            
            const matches = title.includes(query) || 
                          excerpt.includes(query) || 
                          tags.some(tag => tag.includes(query));
            
            if (matches) {
                article.classList.remove('hidden');
                article.classList.add('fade-in');
                visibleCount++;
            } else {
                article.classList.add('hidden');
            }
        });
        
        // Show no results message if needed
        showNoResults(visibleCount === 0);
    }
    
    function clearSearch() {
        const articles = document.querySelectorAll('.article-card');
        articles.forEach(article => {
            article.classList.remove('hidden');
        });
        hideNoResults();
    }
    
    function showNoResults(show) {
        let noResultsMsg = document.querySelector('.no-results-message');
        
        if (show && !noResultsMsg) {
            noResultsMsg = document.createElement('div');
            noResultsMsg.className = 'no-results-message';
            noResultsMsg.innerHTML = `
                <div style="text-align: center; padding: 2rem; color: var(--text-muted);">
                    <i class="fas fa-search" style="font-size: 2rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                    <p>Ничего не найдено</p>
                    <p style="font-size: 0.875rem; margin-top: 0.5rem;">Попробуйте изменить поисковый запрос</p>
                </div>
            `;
            articlesGrid.appendChild(noResultsMsg);
        } else if (!show && noResultsMsg) {
            noResultsMsg.remove();
        }
    }
    
    function hideNoResults() {
        const noResultsMsg = document.querySelector('.no-results-message');
        if (noResultsMsg) {
            noResultsMsg.remove();
        }
    }
}

// Filter functionality
function initFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    const sortFilter = document.getElementById('sortFilter');
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', applyFilters);
    }
    
    if (sortFilter) {
        sortFilter.addEventListener('change', applyFilters);
    }
    
    function applyFilters() {
        const selectedCategory = categoryFilter ? categoryFilter.value : '';
        const selectedSort = sortFilter ? sortFilter.value : 'newest';
        
        filterByCategory(selectedCategory);
        sortArticles(selectedSort);
    }
    
    function filterByCategory(category) {
        const articles = document.querySelectorAll('.article-card');
        
        articles.forEach(article => {
            const articleCategory = article.getAttribute('data-category');
            
            if (!category || articleCategory === category) {
                article.classList.remove('hidden');
                article.style.display = 'block';
            } else {
                article.classList.add('hidden');
                article.style.display = 'none';
            }
        });
    }
    
    function sortArticles(sortBy) {
        const articlesGrid = document.querySelector('#articlesGrid');
        const articles = Array.from(document.querySelectorAll('.article-card:not(.hidden)'));
        
        articles.sort((a, b) => {
            switch (sortBy) {
                case 'newest':
                    return new Date(b.getAttribute('data-date')) - new Date(a.getAttribute('data-date'));
                case 'oldest':
                    return new Date(a.getAttribute('data-date')) - new Date(b.getAttribute('data-date'));
                case 'title':
                    const titleA = a.querySelector('.article-title a').textContent.toLowerCase();
                    const titleB = b.querySelector('.article-title a').textContent.toLowerCase();
                    return titleA.localeCompare(titleB);
                case 'popular':
                    // Mock popularity based on date (newer = more popular)
                    return new Date(b.getAttribute('data-date')) - new Date(a.getAttribute('data-date'));
                default:
                    return 0;
            }
        });
        
        // Re-append sorted articles
        articles.forEach(article => {
            articlesGrid.appendChild(article);
        });
    }
}

// Pagination functionality
function initPagination() {
    const paginationNumbers = document.querySelectorAll('.pagination-number');
    const prevBtn = document.querySelector('.pagination-btn:first-child');
    const nextBtn = document.querySelector('.pagination-btn:last-child');
    
    let currentPage = 1;
    const articlesPerPage = 6;
    
    paginationNumbers.forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.classList.contains('active')) return;
            
            // Update active state
            paginationNumbers.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            currentPage = parseInt(this.textContent);
            updatePagination();
        });
    });
    
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            if (currentPage > 1) {
                currentPage--;
                updatePagination();
            }
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            const totalPages = paginationNumbers.length;
            if (currentPage < totalPages) {
                currentPage++;
                updatePagination();
            }
        });
    }
    
    function updatePagination() {
        // Update active page
        paginationNumbers.forEach((btn, index) => {
            btn.classList.toggle('active', index + 1 === currentPage);
        });
        
        // Update button states
        if (prevBtn) {
            prevBtn.disabled = currentPage === 1;
        }
        if (nextBtn) {
            const totalPages = paginationNumbers.length;
            nextBtn.disabled = currentPage === totalPages;
        }
        
        // Show/hide articles based on current page
        showPageArticles(currentPage);
    }
    
    function showPageArticles(page) {
        const articles = document.querySelectorAll('.article-card');
        const startIndex = (page - 1) * articlesPerPage;
        const endIndex = startIndex + articlesPerPage;
        
        articles.forEach((article, index) => {
            if (index >= startIndex && index < endIndex) {
                article.style.display = 'block';
                article.classList.add('fade-in');
            } else {
                article.style.display = 'none';
                article.classList.remove('fade-in');
            }
        });
    }
}

// Scroll animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.article-card, .sidebar-widget');
    
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

// Sidebar animations
function initSidebarAnimations() {
    const sidebarWidgets = document.querySelectorAll('.sidebar-widget');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('slide-in-right', 'visible');
                }, index * 200);
            }
        });
    }, {
        threshold: 0.3
    });
    
    sidebarWidgets.forEach(widget => {
        widget.classList.add('slide-in-right');
        observer.observe(widget);
    });
}

// Add CSS for animations
const articlesStyle = document.createElement('style');
articlesStyle.textContent = `
    .article-card {
        transition: all 0.3s ease-in-out;
    }
    
    .article-card.hidden {
        opacity: 0;
        transform: scale(0.95);
        pointer-events: none;
        max-height: 0;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
    
    .fade-in {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s ease-out;
    }
    
    .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    .slide-in-right {
        opacity: 0;
        transform: translateX(30px);
        transition: all 0.6s ease-out;
    }
    
    .slide-in-right.visible {
        opacity: 1;
        transform: translateX(0);
    }
    
    /* Staggered animation for article cards */
    .article-card:nth-child(1) { transition-delay: 0.1s; }
    .article-card:nth-child(2) { transition-delay: 0.2s; }
    .article-card:nth-child(3) { transition-delay: 0.3s; }
    .article-card:nth-child(4) { transition-delay: 0.4s; }
    .article-card:nth-child(5) { transition-delay: 0.5s; }
    .article-card:nth-child(6) { transition-delay: 0.6s; }
    
    /* Filter transition */
    .article-card.filtering {
        transition: all 0.3s ease-in-out;
    }
    
    /* Search highlight */
    .search-highlight {
        background: rgba(99, 102, 241, 0.2);
        padding: 2px 4px;
        border-radius: 2px;
    }
    
    /* Loading state */
    .articles-grid.loading {
        opacity: 0.5;
        pointer-events: none;
    }
    
    .articles-grid.loading::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 40px;
        height: 40px;
        border: 3px solid var(--border-color);
        border-top: 3px solid var(--primary-color);
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }
`;

document.head.appendChild(articlesStyle);

// Add interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Tag hover effects
    const tags = document.querySelectorAll('.tag, .tag-link');
    tags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Category item hover effects
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
    
    // Recent article hover effects
    const recentArticles = document.querySelectorAll('.recent-article-item');
    recentArticles.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
});

// Utility function for highlighting search terms
function highlightSearchTerm(text, term) {
    if (!term) return text;
    
    const regex = new RegExp(`(${term})`, 'gi');
    return text.replace(regex, '<span class="search-highlight">$1</span>');
}

// Export functions for use in other scripts
window.ArticlesPage = {
    highlightSearchTerm,
    performSearch: function(query) {
        // This would be called from the search function
        console.log('Searching for:', query);
    }
};
