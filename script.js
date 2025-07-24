document.addEventListener('DOMContentLoaded', function() {
    // Add to Cart Button Functionality
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    
    if(addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            // Add loading state
            this.textContent = 'Adding...';
            this.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                this.textContent = 'Added to Cart!';
                this.style.backgroundColor = '#4CAF50';
                
                // Reset after 2 seconds
                setTimeout(() => {
                    this.textContent = 'Add To Cart';
                    this.style.backgroundColor = '';
                    this.disabled = false;
                }, 2000);
            }, 1000);
        });
    }

    // Wishlist Button Functionality
    const wishlistBtn = document.querySelector('.wishlist-btn');
    let isWishlisted = false;
    
    if(wishlistBtn) {
        wishlistBtn.addEventListener('click', function() {
            const heartIcon = this.querySelector('svg');
            
            if(!isWishlisted) {
                // Add to wishlist
                heartIcon.innerHTML = `
                    <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" fill="#FF6B6B" stroke="#FF6B6B" stroke-width="2"/>
                `;
                this.style.backgroundColor = '#FFE6E6';
                this.style.borderColor = '#FF6B6B';
                isWishlisted = true;
                
                // Show notification
                showNotification('Added to wishlist!');
            } else {
                // Remove from wishlist
                heartIcon.innerHTML = `
                    <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" stroke="#1C1A23" stroke-width="2"/>
                `;
                this.style.backgroundColor = '';
                this.style.borderColor = '';
                isWishlisted = false;
                
                // Show notification
                showNotification('Removed from wishlist!');
            }
        });
    }

    // AR Button Functionality
    const arButton = document.querySelector('.ar-button');
    
    if(arButton) {
        arButton.addEventListener('click', function() {
            // Simulate AR experience
            this.textContent = 'Loading AR...';
            this.disabled = true;
            
            setTimeout(() => {
                // In a real app, this would open AR view
                showNotification('AR feature coming soon!');
                this.textContent = 'View in AR';
                this.disabled = false;
            }, 1500);
        });
    }

    // Header Navigation Functionality
    const accountBtn = document.querySelector('.account');
    const searchBtn = document.querySelector('.search');
    const menuBtn = document.querySelector('.menu');
    
    if(accountBtn) {
        accountBtn.addEventListener('click', function() {
            showNotification('Account page coming soon!');
        });
    }
    
    if(searchBtn) {
        searchBtn.addEventListener('click', function() {
            showNotification('Search feature coming soon!');
        });
    }
    
    if(menuBtn) {
        menuBtn.addEventListener('click', function() {
            showNotification('Menu coming soon!');
        });
    }

    // Image Loading Animation
    const cameraImage = document.querySelector('.camera-image');
    
    if(cameraImage) {
        cameraImage.addEventListener('load', function() {
            this.classList.remove('loading');
        });
        
        cameraImage.addEventListener('error', function() {
            // Show placeholder if image fails to load
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUwIiBoZWlnaHQ9IjM1MCIgdmlld0JveD0iMCAwIDM1MCAzNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzNTAiIGhlaWdodD0iMzUwIiBmaWxsPSIjRjVGN0Y3Ii8+CjxwYXRoIGQ9Ik0xNzUgMTc1QzE3NSAxNzUgMTc1IDE3NSAxNzUgMTc1IiBzdHJva2U9IiNDQ0NDQ0MiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4K';
        });
    }

    // Smooth Scrolling for any anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Notification System
    function showNotification(message) {
        // Remove existing notification
        const existingNotification = document.querySelector('.notification');
        if(existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 120px;
            left: 50%;
            transform: translateX(-50%);
            background-color: var(--primary-color);
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 500;
            z-index: 10000;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            animation: slideIn 0.3s ease-out;
        `;
        
        // Add animation styles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from {
                    opacity: 0;
                    transform: translateX(-50%) translateY(-20px);
                }
                to {
                    opacity: 1;
                    transform: translateX(-50%) translateY(0);
                }
            }
            @keyframes slideOut {
                from {
                    opacity: 1;
                    transform: translateX(-50%) translateY(0);
                }
                to {
                    opacity: 0;
                    transform: translateX(-50%) translateY(-20px);
                }
            }
        `;
        document.head.appendChild(style);
        
        // Add to page
        document.body.appendChild(notification);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => {
                if(notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 3000);
    }

    // Keyboard Navigation
    document.addEventListener('keydown', function(e) {
        // Escape key to close any modals or notifications
        if(e.key === 'Escape') {
            const notification = document.querySelector('.notification');
            if(notification) {
                notification.remove();
            }
        }
        
        // Enter key for buttons
        if(e.key === 'Enter') {
            const focusedElement = document.activeElement;
            if(focusedElement && focusedElement.tagName === 'BUTTON') {
                focusedElement.click();
            }
        }
    });

    // Touch Gestures for Mobile
    let touchStartY = 0;
    let touchEndY = 0;
    
    document.addEventListener('touchstart', function(e) {
        touchStartY = e.changedTouches[0].screenY;
    });
    
    document.addEventListener('touchend', function(e) {
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartY - touchEndY;
        
        if(Math.abs(diff) > swipeThreshold) {
            if(diff > 0) {
                // Swipe up
                console.log('Swipe up detected');
            } else {
                // Swipe down
                console.log('Swipe down detected');
            }
        }
    }

    // Performance Optimization: Lazy loading for images
    if('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    const img = entry.target;
                    if(img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // Accessibility improvements
    function addAccessibilityFeatures() {
        // Add ARIA labels
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            if(!button.getAttribute('aria-label')) {
                const text = button.textContent.trim();
                if(text) {
                    button.setAttribute('aria-label', text);
                }
            }
        });
        
        // Add focus indicators
        const focusableElements = document.querySelectorAll('button, a, input, select, textarea');
        focusableElements.forEach(element => {
            element.addEventListener('focus', function() {
                this.style.outline = '2px solid var(--primary-color)';
                this.style.outlineOffset = '2px';
            });
            
            element.addEventListener('blur', function() {
                this.style.outline = '';
                this.style.outlineOffset = '';
            });
        });
    }
    
    addAccessibilityFeatures();

    // Analytics tracking (placeholder)
    function trackEvent(eventName, properties = {}) {
        // In a real app, this would send data to analytics service
        console.log('Event tracked:', eventName, properties);
    }
    
    // Track page view
    trackEvent('page_view', {
        page: 'product_detail',
        product: 'polaroid_now_plus_gen3'
    });
    
    // Track button clicks
    document.addEventListener('click', function(e) {
        if(e.target.matches('.add-to-cart-btn')) {
            trackEvent('add_to_cart', {
                product: 'polaroid_now_plus_gen3',
                price: 139.99
            });
        } else if(e.target.matches('.wishlist-btn')) {
            trackEvent('wishlist_toggle', {
                product: 'polaroid_now_plus_gen3',
                action: isWishlisted ? 'remove' : 'add'
            });
        } else if(e.target.matches('.ar-button')) {
            trackEvent('ar_view_attempt', {
                product: 'polaroid_now_plus_gen3'
            });
        }
    });
}); 