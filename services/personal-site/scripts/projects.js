// Projects page specific JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    initFilters();
    initViewToggle();
    initScrollAnimations();
    initLoadMore();
    initProjectCards();
});

// Filter functionality
function initFilters() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active tab
            filterTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            filterProjects(filter);
        });
    });
    
    function filterProjects(filter) {
        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                card.classList.remove('hidden');
                card.style.display = 'block';
            } else {
                card.classList.add('hidden');
                card.style.display = 'none';
            }
        });
        
        // Update empty state
        updateEmptyState();
    }
    
    function updateEmptyState() {
        const visibleProjects = document.querySelectorAll('.project-card:not(.hidden)');
        const projectsGrid = document.querySelector('#projectsGrid');
        
        // Remove existing empty state
        const existingEmptyState = projectsGrid.querySelector('.empty-state');
        if (existingEmptyState) {
            existingEmptyState.remove();
        }
        
        if (visibleProjects.length === 0) {
            const emptyState = document.createElement('div');
            emptyState.className = 'empty-state';
            emptyState.innerHTML = `
                <i class="fas fa-folder-open"></i>
                <h3>Проекты не найдены</h3>
                <p>Попробуйте выбрать другую категорию или изменить фильтр</p>
            `;
            projectsGrid.appendChild(emptyState);
        }
    }
}

// View toggle functionality
function initViewToggle() {
    const viewButtons = document.querySelectorAll('.view-btn');
    const projectsGrid = document.querySelector('#projectsGrid');
    
    viewButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const view = this.getAttribute('data-view');
            
            // Update active button
            viewButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Toggle view
            if (view === 'list') {
                projectsGrid.classList.add('list-view');
            } else {
                projectsGrid.classList.remove('list-view');
            }
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.project-card');
    
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

// Load more functionality
function initLoadMore() {
    const loadMoreBtn = document.querySelector('.load-more-btn');
    const projectsGrid = document.querySelector('#projectsGrid');
    
    if (!loadMoreBtn) return;
    
    // Initially hide some projects
    const allProjects = document.querySelectorAll('.project-card');
    const initialShow = 6;
    
    allProjects.forEach((project, index) => {
        if (index >= initialShow) {
            project.style.display = 'none';
        }
    });
    
    let currentlyShowing = initialShow;
    
    loadMoreBtn.addEventListener('click', function() {
        const hiddenProjects = Array.from(allProjects).slice(currentlyShowing, currentlyShowing + 3);
        
        if (hiddenProjects.length === 0) {
            this.style.display = 'none';
            return;
        }
        
        hiddenProjects.forEach((project, index) => {
            setTimeout(() => {
                project.style.display = 'block';
                project.classList.add('fade-in');
            }, index * 100);
        });
        
        currentlyShowing += hiddenProjects.length;
        
        if (currentlyShowing >= allProjects.length) {
            this.style.display = 'none';
        }
    });
}

// Project card interactions
function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        // Add hover effect for tech tags
        const techTags = card.querySelectorAll('.tech-tag');
        techTags.forEach(tag => {
            tag.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px) scale(1.05)';
            });
            
            tag.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
        
        // Add click effect for project links
        const projectLinks = card.querySelectorAll('.project-link');
        projectLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Add ripple effect
                const ripple = document.createElement('span');
                ripple.classList.add('ripple');
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    });
}

// Add CSS for animations and effects
const projectsStyle = document.createElement('style');
projectsStyle.textContent = `
    .project-card {
        transition: all 0.3s ease-in-out;
    }
    
    .project-card.hidden {
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
        transform: translateY(30px);
        transition: all 0.6s ease-out;
    }
    
    .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    /* Ripple effect */
    .project-link {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    /* Staggered animation for project cards */
    .project-card:nth-child(1) { transition-delay: 0.1s; }
    .project-card:nth-child(2) { transition-delay: 0.2s; }
    .project-card:nth-child(3) { transition-delay: 0.3s; }
    .project-card:nth-child(4) { transition-delay: 0.4s; }
    .project-card:nth-child(5) { transition-delay: 0.5s; }
    .project-card:nth-child(6) { transition-delay: 0.6s; }
    .project-card:nth-child(7) { transition-delay: 0.7s; }
    .project-card:nth-child(8) { transition-delay: 0.8s; }
    
    /* Filter transition */
    .project-card.filtering {
        transition: all 0.3s ease-in-out;
    }
    
    /* Loading state */
    .projects-grid.loading {
        opacity: 0.5;
        pointer-events: none;
    }
    
    .projects-grid.loading::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50px;
        height: 50px;
        border: 4px solid var(--border-color);
        border-top: 4px solid var(--primary-color);
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }
    
    /* Empty state animation */
    .empty-state {
        animation: fadeInUp 0.6s ease-out;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    /* Project card hover effects */
    .project-card:hover .project-image img {
        transform: scale(1.1);
    }
    
    .project-card:hover .project-overlay {
        opacity: 1;
    }
    
    /* Tech tag hover effect */
    .tech-tag {
        transition: all 0.2s ease-in-out;
    }
    
    .tech-tag:hover {
        transform: translateY(-2px) scale(1.05);
    }
    
    /* Status badge pulse animation */
    .status-badge.in-progress {
        animation: pulse 2s infinite;
    }
    
    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.7; }
    }
`;

document.head.appendChild(projectsStyle);

// Add interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add parallax effect to project images
    const projectImages = document.querySelectorAll('.project-image img');
    
    projectImages.forEach(img => {
        img.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `scale(1.1) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotateX(0deg) rotateY(0deg)';
        });
    });
    
    // Add typing effect for project descriptions
    const projectDescriptions = document.querySelectorAll('.project-description');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const description = entry.target;
                const text = description.textContent;
                description.textContent = '';
                
                let i = 0;
                const typeWriter = () => {
                    if (i < text.length) {
                        description.textContent += text.charAt(i);
                        i++;
                        setTimeout(typeWriter, 20);
                    }
                };
                
                setTimeout(typeWriter, 500);
                observer.unobserve(description);
            }
        });
    }, { threshold: 0.5 });
    
    projectDescriptions.forEach(desc => {
        observer.observe(desc);
    });
});

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export functions for use in other scripts
window.ProjectsPage = {
    debounce,
    filterProjects: function(filter) {
        console.log('Filtering projects by:', filter);
    }
};
