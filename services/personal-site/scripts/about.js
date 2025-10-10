// About page specific JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    initSkillBars();
    initTimelineAnimation();
    initScrollAnimations();
    initPhotoEffects();
});

// Animate skill bars when they come into view
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const level = skillBar.getAttribute('data-level');
                
                // Set the target width and animate
                skillBar.style.setProperty('--target-width', level + '%');
                skillBar.classList.add('animate');
                
                // Animate the bar
                setTimeout(() => {
                    skillBar.style.width = level + '%';
                }, 100);
                
                // Stop observing this element
                observer.unobserve(skillBar);
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    });
    
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Timeline animation
function initTimelineAnimation() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Add staggered animation
                const index = Array.from(timelineItems).indexOf(entry.target);
                entry.target.style.animationDelay = `${index * 0.2}s`;
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    });
    
    timelineItems.forEach(item => {
        observer.observe(item);
    });
}

// Scroll animations for various elements
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.skill-category, .interest-card, .about-story, .contact-cta');
    
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

// Photo hover effects
function initPhotoEffects() {
    const photoContainer = document.querySelector('.photo-container');
    const aboutImage = document.querySelector('.about-image');
    
    if (photoContainer && aboutImage) {
        photoContainer.addEventListener('mouseenter', function() {
            aboutImage.style.transform = 'scale(1.05) rotate(2deg)';
            aboutImage.style.boxShadow = 'var(--shadow-xl), 0 0 30px rgba(99, 102, 241, 0.5)';
        });
        
        photoContainer.addEventListener('mouseleave', function() {
            aboutImage.style.transform = 'scale(1) rotate(0deg)';
            aboutImage.style.boxShadow = 'var(--shadow-xl), var(--shadow-glow)';
        });
        
        // Add click effect
        photoContainer.addEventListener('click', function() {
            aboutImage.style.transform = 'scale(0.95)';
            setTimeout(() => {
                aboutImage.style.transform = 'scale(1.05) rotate(2deg)';
            }, 150);
        });
    }
}

// Add CSS for timeline animations
const timelineStyle = document.createElement('style');
timelineStyle.textContent = `
    .timeline-item {
        opacity: 0;
        transform: translateX(-30px);
        transition: all 0.6s ease-out;
    }
    
    .timeline-item.animate-in {
        opacity: 1;
        transform: translateX(0);
    }
    
    .skill-category,
    .interest-card,
    .about-story,
    .contact-cta {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease-out;
    }
    
    .skill-category.visible,
    .interest-card.visible,
    .about-story.visible,
    .contact-cta.visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    /* Staggered animation for interest cards */
    .interest-card:nth-child(1) { transition-delay: 0.1s; }
    .interest-card:nth-child(2) { transition-delay: 0.2s; }
    .interest-card:nth-child(3) { transition-delay: 0.3s; }
    .interest-card:nth-child(4) { transition-delay: 0.4s; }
    
    /* Staggered animation for skill categories */
    .skill-category:nth-child(1) { transition-delay: 0.1s; }
    .skill-category:nth-child(2) { transition-delay: 0.2s; }
    .skill-category:nth-child(3) { transition-delay: 0.3s; }
`;

document.head.appendChild(timelineStyle);

// Add interactive effects for interest cards
document.addEventListener('DOMContentLoaded', function() {
    const interestCards = document.querySelectorAll('.interest-card');
    
    interestCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add typing effect for the role
function initTypingEffect() {
    const roleElement = document.querySelector('.role');
    if (!roleElement) return;
    
    const text = roleElement.textContent;
    roleElement.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            roleElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing effect after a delay
    setTimeout(typeWriter, 1000);
}

// Initialize typing effect
document.addEventListener('DOMContentLoaded', initTypingEffect);

// Add parallax effect to the page hero
function initParallaxEffect() {
    const hero = document.querySelector('.page-hero');
    if (!hero) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        hero.style.transform = `translateY(${rate}px)`;
    });
}

// Initialize parallax effect
document.addEventListener('DOMContentLoaded', initParallaxEffect);

// Add smooth reveal animation for the about grid
function initAboutGridAnimation() {
    const aboutGrid = document.querySelector('.about-grid');
    if (!aboutGrid) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const photo = entry.target.querySelector('.about-photo');
                const story = entry.target.querySelector('.about-story');
                
                if (photo) {
                    photo.classList.add('slide-in-left', 'visible');
                }
                
                if (story) {
                    story.classList.add('slide-in-right', 'visible');
                }
            }
        });
    }, {
        threshold: 0.3
    });
    
    observer.observe(aboutGrid);
}

// Initialize about grid animation
document.addEventListener('DOMContentLoaded', initAboutGridAnimation);
