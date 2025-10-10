// Error pages specific JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    initProgressAnimation();
    initNotifyForm();
    initScrollAnimations();
    initInteractiveElements();
});

// Progress animation for construction page
function initProgressAnimation() {
    const progressFill = document.getElementById('progressFill');
    const progressPercent = document.getElementById('progressPercent');
    const progressStatus = document.getElementById('progressStatus');
    
    if (!progressFill || !progressPercent || !progressStatus) return;
    
    const statuses = [
        'Начинаем работу...',
        'Создаем дизайн...',
        'Разрабатываем функционал...',
        'Тестируем...',
        'Оптимизируем...',
        'Финализируем...',
        'Почти готово!'
    ];
    
    let currentProgress = 0;
    let currentStatusIndex = 0;
    
    const animateProgress = () => {
        if (currentProgress < 75) {
            currentProgress += Math.random() * 5;
            progressFill.style.width = currentProgress + '%';
            progressPercent.textContent = Math.round(currentProgress) + '%';
            
            // Update status
            if (currentProgress > (currentStatusIndex + 1) * 10 && currentStatusIndex < statuses.length - 1) {
                currentStatusIndex++;
                progressStatus.textContent = statuses[currentStatusIndex];
            }
            
            setTimeout(animateProgress, 1000 + Math.random() * 2000);
        } else {
            progressFill.style.width = '75%';
            progressPercent.textContent = '75%';
            progressStatus.textContent = 'Скоро будет готово!';
        }
    };
    
    // Start animation after a delay
    setTimeout(animateProgress, 1000);
}

// Notify form functionality
function initNotifyForm() {
    const notifyForm = document.getElementById('notifyForm');
    if (!notifyForm) return;
    
    notifyForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        const submitButton = this.querySelector('button[type="submit"]');
        
        if (!email) return;
        
        // Show loading state
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Отправка...';
        submitButton.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            // Show success message
            showNotification('Спасибо! Мы уведомим вас, когда страница будет готова.');
            
            // Reset form
            this.reset();
            
            // Restore button
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }, 2000);
    });
}

// Scroll animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.suggestion-item, .info-item');
    
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

// Interactive elements
function initInteractiveElements() {
    // Add hover effects for suggestion items
    const suggestionItems = document.querySelectorAll('.suggestion-item');
    suggestionItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click effects for info items
    const infoItems = document.querySelectorAll('.info-item');
    infoItems.forEach(item => {
        item.addEventListener('click', function() {
            this.style.transform = 'translateY(-5px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px) scale(1)';
            }, 150);
        });
    });
    
    // Add click effects for buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
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
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// Add CSS for animations
const errorPagesStyle = document.createElement('style');
errorPagesStyle.textContent = `
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
    .suggestion-item:nth-child(1) { transition-delay: 0.1s; }
    .suggestion-item:nth-child(2) { transition-delay: 0.2s; }
    .suggestion-item:nth-child(3) { transition-delay: 0.3s; }
    .suggestion-item:nth-child(4) { transition-delay: 0.4s; }
    .suggestion-item:nth-child(5) { transition-delay: 0.5s; }
    
    .info-item:nth-child(1) { transition-delay: 0.1s; }
    .info-item:nth-child(2) { transition-delay: 0.2s; }
    .info-item:nth-child(3) { transition-delay: 0.3s; }
    .info-item:nth-child(4) { transition-delay: 0.4s; }
    
    /* Interactive effects */
    .suggestion-item,
    .info-item {
        transition: all 0.3s ease-in-out;
    }
    
    .btn {
        transition: all 0.2s ease-in-out;
    }
    
    /* Progress bar animation */
    .progress-fill {
        position: relative;
        overflow: hidden;
    }
    
    .progress-fill::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
        animation: shimmer 2s infinite;
    }
    
    @keyframes shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
    }
    
    /* Construction gear animation */
    .construction-gear {
        transition: all 0.3s ease-in-out;
    }
    
    .construction-gear:hover {
        transform: scale(1.2);
        color: var(--secondary-color);
    }
    
    /* Error number animation */
    .error-number {
        transition: all 0.3s ease-in-out;
    }
    
    .error-number:hover {
        transform: scale(1.1);
    }
    
    /* Error icon animation */
    .error-icon {
        transition: all 0.3s ease-in-out;
    }
    
    .error-icon:hover {
        transform: translate(-50%, -50%) scale(1.1);
        border-color: var(--secondary-color);
    }
`;

document.head.appendChild(errorPagesStyle);

// Add interactive effects for construction page
document.addEventListener('DOMContentLoaded', function() {
    // Add click effect for construction icon
    const constructionIcon = document.querySelector('.construction-icon');
    if (constructionIcon) {
        constructionIcon.addEventListener('click', function() {
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    }
    
    // Add hover effects for gears
    const gears = document.querySelectorAll('.construction-gear');
    gears.forEach(gear => {
        gear.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2)';
            this.style.color = 'var(--secondary-color)';
        });
        
        gear.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.color = 'var(--primary-color)';
        });
    });
    
    // Add click effect for error number
    const errorNumber = document.querySelector('.error-number');
    if (errorNumber) {
        errorNumber.addEventListener('click', function() {
            this.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    }
    
    // Add click effect for error icon
    const errorIcon = document.querySelector('.error-icon');
    if (errorIcon) {
        errorIcon.addEventListener('click', function() {
            this.style.transform = 'translate(-50%, -50%) scale(1.1)';
            this.style.borderColor = 'var(--secondary-color)';
            setTimeout(() => {
                this.style.transform = 'translate(-50%, -50%) scale(1)';
                this.style.borderColor = 'var(--primary-color)';
            }, 200);
        });
    }
});

// Export functions for use in other scripts
window.ErrorPages = {
    showNotification,
    initProgressAnimation,
    initNotifyForm
};
