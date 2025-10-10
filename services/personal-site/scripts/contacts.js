// Contacts page specific JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    initContactForm();
    initFAQ();
    initScrollAnimations();
    initContactCards();
    initQuickActions();
});

// Contact form functionality
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            submitForm();
        }
    });
    
    // Real-time validation
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            clearFieldError(this);
        });
    });
    
    function validateForm() {
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
            if (!validateField(field)) {
                isValid = false;
            }
        });
        
        return isValid;
    }
    
    function validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name;
        let isValid = true;
        let errorMessage = '';
        
        // Clear previous errors
        clearFieldError(field);
        
        // Required field validation
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'Это поле обязательно для заполнения';
        }
        
        // Email validation
        if (fieldName === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Введите корректный email адрес';
            }
        }
        
        // Name validation
        if (fieldName === 'name' && value) {
            if (value.length < 2) {
                isValid = false;
                errorMessage = 'Имя должно содержать минимум 2 символа';
            }
        }
        
        // Message validation
        if (fieldName === 'message' && value) {
            if (value.length < 10) {
                isValid = false;
                errorMessage = 'Сообщение должно содержать минимум 10 символов';
            }
        }
        
        if (!isValid) {
            showFieldError(field, errorMessage);
        }
        
        return isValid;
    }
    
    function showFieldError(field, message) {
        field.classList.add('error');
        
        const errorElement = document.createElement('div');
        errorElement.className = 'form-error';
        errorElement.textContent = message;
        
        field.parentNode.appendChild(errorElement);
    }
    
    function clearFieldError(field) {
        field.classList.remove('error');
        
        const errorElement = field.parentNode.querySelector('.form-error');
        if (errorElement) {
            errorElement.remove();
        }
    }
    
    function submitForm() {
        const formData = new FormData(form);
        const submitButton = form.querySelector('button[type="submit"]');
        
        // Show loading state
        form.classList.add('form-loading');
        submitButton.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            // Show success message
            showSuccessMessage();
            
            // Reset form
            form.reset();
            
            // Remove loading state
            form.classList.remove('form-loading');
            submitButton.disabled = false;
            
            // Clear all errors
            const errorElements = form.querySelectorAll('.form-error');
            errorElements.forEach(error => error.remove());
            
            const errorFields = form.querySelectorAll('.error');
            errorFields.forEach(field => field.classList.remove('error'));
            
        }, 2000);
    }
    
    function showSuccessMessage() {
        const successMessage = document.createElement('div');
        successMessage.className = 'form-success';
        successMessage.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <strong>Сообщение отправлено!</strong><br>
            Спасибо за ваше сообщение. Я обязательно отвечу в ближайшее время.
        `;
        
        form.insertBefore(successMessage, form.firstChild);
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    }
}

// FAQ functionality
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active', !isActive);
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.contact-card, .quick-action, .faq-item');
    
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

// Contact cards interactions
function initContactCards() {
    const contactCards = document.querySelectorAll('.contact-card');
    
    contactCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.contact-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.contact-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
        
        // Add click effect
        card.addEventListener('click', function() {
            this.style.transform = 'translateY(-5px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px) scale(1)';
            }, 150);
        });
    });
}

// Quick actions interactions
function initQuickActions() {
    const quickActions = document.querySelectorAll('.quick-action');
    
    quickActions.forEach(action => {
        action.addEventListener('click', function() {
            this.style.transform = 'translateY(-5px) scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px) scale(1)';
            }, 150);
        });
    });
}

// Add CSS for animations and effects
const contactsStyle = document.createElement('style');
contactsStyle.textContent = `
    .contact-card {
        transition: all 0.3s ease-in-out;
    }
    
    .contact-card:hover {
        transform: translateY(-5px);
    }
    
    .contact-icon {
        transition: all 0.3s ease-in-out;
    }
    
    .quick-action {
        transition: all 0.3s ease-in-out;
    }
    
    .quick-action:hover {
        transform: translateY(-5px);
    }
    
    .faq-item {
        transition: all 0.3s ease-in-out;
    }
    
    .faq-answer {
        transition: max-height 0.3s ease-in-out;
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
    .contact-card:nth-child(1) { transition-delay: 0.1s; }
    .contact-card:nth-child(2) { transition-delay: 0.2s; }
    .contact-card:nth-child(3) { transition-delay: 0.3s; }
    .contact-card:nth-child(4) { transition-delay: 0.4s; }
    .contact-card:nth-child(5) { transition-delay: 0.5s; }
    .contact-card:nth-child(6) { transition-delay: 0.6s; }
    
    .quick-action:nth-child(1) { transition-delay: 0.1s; }
    .quick-action:nth-child(2) { transition-delay: 0.2s; }
    .quick-action:nth-child(3) { transition-delay: 0.3s; }
    
    .faq-item:nth-child(1) { transition-delay: 0.1s; }
    .faq-item:nth-child(2) { transition-delay: 0.2s; }
    .faq-item:nth-child(3) { transition-delay: 0.3s; }
    .faq-item:nth-child(4) { transition-delay: 0.4s; }
    .faq-item:nth-child(5) { transition-delay: 0.5s; }
    
    /* Form validation styles */
    .form-input.error,
    .form-select.error,
    .form-textarea.error {
        border-color: var(--error-color);
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }
    
    .form-error {
        color: var(--error-color);
        font-size: 0.75rem;
        margin-top: var(--spacing-xs);
    }
    
    .form-success {
        color: var(--success-color);
        font-size: 0.875rem;
        text-align: center;
        padding: var(--spacing-md);
        background: rgba(16, 185, 129, 0.1);
        border: 1px solid var(--success-color);
        border-radius: var(--radius-md);
        margin-bottom: var(--spacing-lg);
    }
    
    /* Loading state */
    .form-loading {
        opacity: 0.6;
        pointer-events: none;
    }
    
    .form-loading .btn {
        position: relative;
    }
    
    .form-loading .btn::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 20px;
        height: 20px;
        border: 2px solid transparent;
        border-top: 2px solid currentColor;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }
`;

document.head.appendChild(contactsStyle);

// Copy to clipboard functionality
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showNotification('Скопировано в буфер обмена!');
        });
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('Скопировано в буфер обмена!');
    }
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

// Add click handlers for contact handles
document.addEventListener('DOMContentLoaded', function() {
    const contactHandles = document.querySelectorAll('.contact-handle');
    
    contactHandles.forEach(handle => {
        handle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const text = this.textContent;
            copyToClipboard(text);
        });
        
        // Add cursor pointer
        handle.style.cursor = 'pointer';
        handle.title = 'Нажмите, чтобы скопировать';
    });
});

// Export functions for use in other scripts
window.ContactsPage = {
    copyToClipboard,
    showNotification,
    validateForm: function() {
        console.log('Validating form...');
    }
};
