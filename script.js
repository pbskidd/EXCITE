// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializePlasmaEffects();
    initializeButtonPulsing();
    initializeInteractivity();
    initializeEnhancedAnimations();
});

// Enhanced Plasma Effects
function initializePlasmaEffects() {
    const plasmaSingularity = document.querySelector('.plasma-singularity');
    const plasmaFireLeft = document.querySelector('.plasma-fire-left');
    const plasmaFireRight = document.querySelector('.plasma-fire-right');
    const plasmaFireBottom = document.querySelector('.plasma-fire-bottom');
    const plasmaRisingLeft = document.querySelector('.plasma-rising-left');
    const plasmaRisingRight = document.querySelector('.plasma-rising-right');
    const plasmaExtensionTop = document.querySelector('.plasma-extension-top');
    const plasmaExtensionMiddle = document.querySelector('.plasma-extension-middle');
    const plasmaExtensionBottom = document.querySelector('.plasma-extension-bottom');
    
    // Apply animations to plasma elements
    if (plasmaSingularity) {
        plasmaSingularity.style.animation = 'singularityPulse 2s ease-in-out infinite';
    }
    
    if (plasmaFireLeft) {
        plasmaFireLeft.style.animation = 'ultraHotPlasmaFlicker 2.2s ease-in-out infinite';
    }
    
    if (plasmaFireRight) {
        plasmaFireRight.style.animation = 'ultraHotPlasmaFlicker 2.6s ease-in-out infinite';
    }
    
    if (plasmaFireBottom) {
        plasmaFireBottom.style.animation = 'plasmaFlicker 4s ease-in-out infinite';
    }
    
    if (plasmaRisingLeft) {
        plasmaRisingLeft.style.animation = 'plasmaFlicker 2.5s ease-in-out infinite';
    }
    
    if (plasmaRisingRight) {
        plasmaRisingRight.style.animation = 'plasmaFlicker 2.8s ease-in-out infinite';
    }
    
    // Apply animations to extension elements with hourglass flow
    if (plasmaExtensionTop) {
        plasmaExtensionTop.style.animation = 'hourglassPlasmaFlow 3.5s ease-in-out infinite';
    }
    
    if (plasmaExtensionMiddle) {
        plasmaExtensionMiddle.style.animation = 'plasmaExtensionPulse 4s ease-in-out infinite';
    }
    
    if (plasmaExtensionBottom) {
        plasmaExtensionBottom.style.animation = 'plasmaExtensionPulse 4.5s ease-in-out infinite';
    }
}

// Button Pulsing Animation
function initializeButtonPulsing() {
    const ctaButton = document.querySelector('.cta-button');
    const navButton = document.querySelector('.nav-button');
    
    // Apply pulsing animation to both buttons
    if (ctaButton) {
        ctaButton.style.animation = 'buttonPulse 3s ease-in-out infinite';
        
        // Enhanced hover effects for CTA button - More Intense
        ctaButton.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
            this.style.transform = 'translateY(-4px) scale(1.05)';
            this.style.boxShadow = `
                0 20px 50px rgba(0, 0, 0, 0.5),
                0 0 60px rgba(255, 140, 0, 0.8),
                0 0 100px rgba(255, 255, 255, 0.6),
                inset 0 1px 0 rgba(255, 255, 255, 0.3),
                inset 0 -1px 0 rgba(0, 0, 0, 0.4)
            `;
            this.style.borderColor = 'rgba(255, 140, 0, 1)';
            this.style.background = `linear-gradient(135deg, 
                rgba(30, 30, 30, 0.95) 0%,
                rgba(40, 40, 40, 0.9) 50%,
                rgba(25, 25, 25, 0.95) 100%
            )`;
        });
        
        ctaButton.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
            this.style.borderColor = '';
            this.style.background = '';
        });
        
        // Click effect for CTA button - Enhanced
        ctaButton.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        ctaButton.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-4px) scale(1.05)';
        });
    }
    
    // Apply pulsing animation to navigation button
    if (navButton) {
        navButton.style.animation = 'buttonPulse 3.2s ease-in-out infinite';
        
        // Enhanced hover effects for nav button - More Intense
        navButton.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
            this.style.transform = 'translateY(-3px) scale(1.08)';
            this.style.boxShadow = `
                0 15px 45px rgba(0, 0, 0, 0.5),
                0 0 50px rgba(255, 140, 0, 0.6),
                0 0 80px rgba(255, 255, 255, 0.4),
                inset 0 1px 0 rgba(255, 255, 255, 0.2),
                inset 0 -1px 0 rgba(0, 0, 0, 0.4)
            `;
            this.style.borderColor = 'rgba(255, 140, 0, 0.8)';
            this.style.background = `linear-gradient(135deg, 
                rgba(25, 25, 25, 0.95) 0%,
                rgba(35, 35, 35, 0.9) 50%,
                rgba(20, 20, 20, 0.95) 100%
            )`;
        });
        
        navButton.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
            this.style.borderColor = '';
            this.style.background = '';
        });
    }
}

// Enhanced Interactive Elements
function initializeInteractivity() {
    // Navigation button hover effects
    const navButton = document.querySelector('.nav-button');
    
    if (navButton) {
        navButton.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
            this.style.boxShadow = '0 10px 30px rgba(255, 140, 0, 0.4)';
        });
        
        navButton.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
    }
    
    // Navigation links hover effects
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-1px)';
            this.style.textShadow = '0 0 10px rgba(255, 140, 0, 0.5)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.textShadow = '';
        });
    });
    
    // Dashboard interactive elements
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    sidebarItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
            this.style.background = 'rgba(255, 140, 0, 0.15)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
            this.style.background = '';
        });
    });
    
    // Dashboard tabs
    const dashboardTabs = document.querySelectorAll('.dashboard-tab');
    dashboardTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            dashboardTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
        });
        
        tab.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.color = 'rgba(255, 140, 0, 0.7)';
            }
        });
        
        tab.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.color = '';
            }
        });
    });
}

// Enhanced Animations and Effects
function initializeEnhancedAnimations() {
    // Create additional dynamic particles
    createDynamicParticles();
    
    // Add plasma intensity variation based on scroll
    initializeScrollEffects();
    
    // Add mouse interaction effects
    initializeMouseInteraction();
}

// Create Dynamic Particles
function createDynamicParticles() {
    const plasmaContainer = document.querySelector('.plasma-particles-container');
    
    if (plasmaContainer) {
        // Create additional floating particles dynamically
        for (let i = 7; i <= 12; i++) {
            createFloatingParticle(plasmaContainer, i);
        }
    }
}

function createFloatingParticle(container, index) {
    const particle = document.createElement('div');
    particle.className = 'plasma-particle dynamic-particle';
    
    // Random positioning around the plasma area
    const leftPosition = 10 + Math.random() * 80; // 10% to 90%
    const topPosition = 40 + Math.random() * 40; // 40% to 80%
    
    particle.style.cssText = `
        position: absolute;
        width: ${2 + Math.random() * 2}px;
        height: ${2 + Math.random() * 2}px;
        background: #ff8c00;
        border-radius: 50%;
        left: ${leftPosition}%;
        top: ${topPosition}%;
        box-shadow: 0 0 ${6 + Math.random() * 4}px #ff8c00;
        animation: floatUp${((index % 6) + 1)} ${3 + Math.random() * 2}s ease-in-out infinite;
        animation-delay: ${Math.random() * 2}s;
        opacity: ${0.5 + Math.random() * 0.3};
    `;
    
    container.appendChild(particle);
}

// Scroll Effects
function initializeScrollEffects() {
    const plasmaWrapper = document.querySelector('.plasma-wrapper');
    
    if (plasmaWrapper) {
        window.addEventListener('scroll', function() {
            const scrollY = window.scrollY;
            const maxScroll = 500;
            const intensity = Math.max(0.3, 1 - (scrollY / maxScroll));
            
            plasmaWrapper.style.opacity = intensity;
            plasmaWrapper.style.transform = `scale(${0.8 + (intensity * 0.2)})`;
        });
    }
}

// Mouse Interaction Effects
function initializeMouseInteraction() {
    const plasmaWrapper = document.querySelector('.plasma-wrapper');
    const centralBox = document.querySelector('.central-content-box');
    
    if (plasmaWrapper && centralBox) {
        document.addEventListener('mousemove', function(e) {
            const rect = plasmaWrapper.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const distance = Math.sqrt(
                Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
            );
            
            // Normalize distance (closer = higher intensity)
            const maxDistance = 400;
            const intensity = Math.max(0.7, 1 - (distance / maxDistance));
            
            // Apply intensity to plasma effects
            const plasmaElements = document.querySelectorAll('.plasma-fire-left, .plasma-fire-right, .plasma-fire-bottom');
            plasmaElements.forEach(element => {
                element.style.opacity = intensity;
            });
            
            // Subtle box glow effect based on mouse proximity
            if (distance < 300) {
                const glowIntensity = (300 - distance) / 300;
                centralBox.style.boxShadow = `
                    0 0 ${30 + (glowIntensity * 20)}px rgba(255, 140, 0, ${0.2 + (glowIntensity * 0.1)}),
                    inset 0 0 30px rgba(255, 140, 0, 0.05)
                `;
            } else {
                centralBox.style.boxShadow = '';
            }
        });
    }
}

// Performance optimization: Reduce animations on low-end devices
function optimizeForPerformance() {
    // Check if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const style = document.createElement('style');
        style.textContent = `
            *, *::before, *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize performance optimizations
document.addEventListener('DOMContentLoaded', optimizeForPerformance);

// Cleanup function for dynamic particles
function cleanupDynamicParticles() {
    const dynamicParticles = document.querySelectorAll('.dynamic-particle');
    dynamicParticles.forEach(particle => {
        particle.addEventListener('animationend', function() {
            if (Math.random() > 0.7) { // 30% chance to recreate
                const container = this.parentElement;
                this.remove();
                createFloatingParticle(container, Math.floor(Math.random() * 6) + 1);
            }
        });
    });
}

// Initialize cleanup
setTimeout(cleanupDynamicParticles, 2000);


// New animation keyframes for plasma bars and extensions
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    @keyframes plasmaBarFlicker {
        0%, 100% {
            opacity: 0.9;
            box-shadow: 
                0 0 20px rgba(255, 255, 255, 1),
                0 0 40px rgba(255, 200, 100, 0.8),
                0 0 60px rgba(255, 140, 0, 0.6),
                0 0 80px rgba(255, 140, 0, 0.4);
        }
        25% {
            opacity: 1;
            box-shadow: 
                0 0 25px rgba(255, 255, 255, 1),
                0 0 50px rgba(255, 200, 100, 0.9),
                0 0 75px rgba(255, 140, 0, 0.7),
                0 0 100px rgba(255, 140, 0, 0.5);
        }
        50% {
            opacity: 0.8;
            box-shadow: 
                0 0 15px rgba(255, 255, 255, 0.9),
                0 0 30px rgba(255, 200, 100, 0.7),
                0 0 45px rgba(255, 140, 0, 0.5),
                0 0 60px rgba(255, 140, 0, 0.3);
        }
        75% {
            opacity: 1;
            box-shadow: 
                0 0 30px rgba(255, 255, 255, 1),
                0 0 60px rgba(255, 200, 100, 0.9),
                0 0 90px rgba(255, 140, 0, 0.7),
                0 0 120px rgba(255, 140, 0, 0.5);
        }
    }
    
    @keyframes plasmaExtensionPulse {
        0%, 100% {
            opacity: 0.6;
            transform: translateX(-50%) scale(1);
        }
        50% {
            opacity: 0.9;
            transform: translateX(-50%) scale(1.05);
        }
    }
`;
document.head.appendChild(additionalStyles);


// Enhanced animation keyframes for ultra-hot plasma effects
const enhancedPlasmaStyles = document.createElement('style');
enhancedPlasmaStyles.textContent = `
    @keyframes ultraHotPlasmaFlicker {
        0%, 100% {
            opacity: 0.95;
            filter: blur(0.3px);
            box-shadow: 
                0 0 30px rgba(255, 255, 255, 1),
                0 0 60px rgba(255, 255, 255, 0.9),
                0 0 90px rgba(255, 200, 100, 0.8),
                0 0 120px rgba(255, 140, 0, 0.6),
                0 0 150px rgba(255, 140, 0, 0.4);
        }
        15% {
            opacity: 1;
            filter: blur(0.2px);
            box-shadow: 
                0 0 40px rgba(255, 255, 255, 1),
                0 0 80px rgba(255, 255, 255, 1),
                0 0 120px rgba(255, 200, 100, 0.9),
                0 0 160px rgba(255, 140, 0, 0.7),
                0 0 200px rgba(255, 140, 0, 0.5);
        }
        30% {
            opacity: 0.9;
            filter: blur(0.4px);
            box-shadow: 
                0 0 25px rgba(255, 255, 255, 0.9),
                0 0 50px rgba(255, 255, 255, 0.8),
                0 0 75px rgba(255, 200, 100, 0.7),
                0 0 100px rgba(255, 140, 0, 0.5),
                0 0 125px rgba(255, 140, 0, 0.3);
        }
        50% {
            opacity: 1;
            filter: blur(0.1px);
            box-shadow: 
                0 0 50px rgba(255, 255, 255, 1),
                0 0 100px rgba(255, 255, 255, 1),
                0 0 150px rgba(255, 200, 100, 0.9),
                0 0 200px rgba(255, 140, 0, 0.8),
                0 0 250px rgba(255, 140, 0, 0.6);
        }
        75% {
            opacity: 0.85;
            filter: blur(0.5px);
            box-shadow: 
                0 0 20px rgba(255, 255, 255, 0.8),
                0 0 40px rgba(255, 255, 255, 0.7),
                0 0 60px rgba(255, 200, 100, 0.6),
                0 0 80px rgba(255, 140, 0, 0.4),
                0 0 100px rgba(255, 140, 0, 0.2);
        }
    }
    
    @keyframes hourglassPlasmaFlow {
        0%, 100% {
            opacity: 0.8;
            transform: translateX(-50%) scale(1);
            filter: blur(1px);
        }
        25% {
            opacity: 1;
            transform: translateX(-50%) scale(1.05);
            filter: blur(0.8px);
        }
        50% {
            opacity: 0.9;
            transform: translateX(-50%) scale(1.02);
            filter: blur(1.2px);
        }
        75% {
            opacity: 1;
            transform: translateX(-50%) scale(1.08);
            filter: blur(0.6px);
        }
    }
    
    @keyframes intensePlasmaParticleFloat {
        0% {
            transform: translateY(0) scale(1);
            opacity: 0.8;
        }
        25% {
            transform: translateY(-20px) scale(1.1);
            opacity: 1;
        }
        50% {
            transform: translateY(-40px) scale(0.9);
            opacity: 0.9;
        }
        75% {
            transform: translateY(-60px) scale(1.2);
            opacity: 1;
        }
        100% {
            transform: translateY(-80px) scale(0.8);
            opacity: 0;
        }
    }
`;


document.head.appendChild(enhancedPlasmaStyles);

