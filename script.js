// ================================
// AQ ACCOUNTING - SIMPLE VANILLA JS
// ================================

document.addEventListener('DOMContentLoaded', function() {
    
    console.log('🔍 Initializing Mobile-Optimized Vanilla JS system...');
    
    // Detect mobile device for optimized animations
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
    console.log('📱 Mobile device detected:', isMobile);
    
    // Add mobile-specific CSS optimizations
    if (isMobile) {
        addMobileOptimizations();
    }
    
    // Hide all animation elements initially
    hideAnimationElements();
    
    // Initialize only basic content animations
    setTimeout(() => {
        initMobileOptimizedAnimations(isMobile);
    }, 100);
    
    // Mobile menu functionality
    const mobileNavToggle = document.getElementById('mobileNavToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    const mobileMenuLinks = document.querySelectorAll('#mobileMenu a');

    // Toggle mobile menu
    mobileNavToggle.addEventListener('click', function() {
        const isExpanded = mobileNavToggle.getAttribute('aria-expanded') === 'true';
        
        if (!isExpanded) {
            // Show menu
            mobileMenu.classList.remove('translate-x-full');
            document.body.classList.add('overflow-hidden');
            mobileNavToggle.setAttribute('aria-expanded', 'true');
            
            const firstMenuItem = mobileMenu.querySelector('a');
            if (firstMenuItem) {
                firstMenuItem.focus();
            }
        } else {
            // Hide menu
            mobileMenu.classList.add('translate-x-full');
            document.body.classList.remove('overflow-hidden');
            mobileNavToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Close mobile menu
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', function() {
            mobileMenu.classList.add('translate-x-full');
            document.body.classList.remove('overflow-hidden');
            mobileNavToggle.setAttribute('aria-expanded', 'false');
        });
    }

    // Close mobile menu when clicking links
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('translate-x-full');
            document.body.classList.remove('overflow-hidden');
            mobileNavToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Handle keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const isMenuOpen = mobileNavToggle.getAttribute('aria-expanded') === 'true';
            if (isMenuOpen) {
                mobileMenu.classList.add('translate-x-full');
                document.body.classList.remove('overflow-hidden');
                mobileNavToggle.setAttribute('aria-expanded', 'false');
                mobileNavToggle.focus();
            }
        }
    });

    // Initialize modal functionality
    initModal();
    
    // Initialize contact form
    initContactForm();
    
    // Initialize CTA buttons
    initCTAButtons();
    
    // Initialize timeline animations
    initTimelineAnimation();
    
    // Initialize smooth timeline animation for mobile
    initMobileHoverEffect();
    
    // Initialize counters
    initCounters();
});

// 🎯 HIDE ANIMATION ELEMENTS INITIALLY
function hideAnimationElements() {
    console.log('🎯 Hiding animation elements initially...');
    
    // Find all sections that will be animated
    const animateSections = document.querySelectorAll('.animate-section');
    
    animateSections.forEach(section => {
        const contentElements = section.querySelectorAll('h1, h2, h3, p, .grid, .flex, .space-y-8, .max-w-7xl, .service-card, .timeline-step, .testimonial-card');
        
        contentElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
        });
    });
    
    console.log('✅ Animation elements hidden for', animateSections.length, 'sections');
}

// 📱 MOBILE CSS OPTIMIZATIONS
function addMobileOptimizations() {
    console.log('📱 Adding mobile-specific CSS optimizations...');
    
    // Create style element for mobile optimizations
    const mobileCSS = document.createElement('style');
    mobileCSS.textContent = `
        /* Mobile viewport and centering fixes */
        * {
            box-sizing: border-box;
        }
        
        html, body {
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            overflow-x: hidden !important;
        }
        
        /* Ensure perfect centering on mobile */
        .max-w-7xl.mx-auto {
            margin-left: auto !important;
            margin-right: auto !important;
            width: 100% !important;
        }
        
        @media (max-width: 768px) {
            /* Fix any potential padding/margin issues */
            .px-6 {
                padding-left: 1.5rem !important;
                padding-right: 1.5rem !important;
            }
            
            /* Ensure sections are properly centered */
            section {
                width: 100% !important;
                margin-left: 0 !important;
                margin-right: 0 !important;
            }
        }
        
        /* Mobile animation optimizations */
        * {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            -webkit-perspective: 1000;
            perspective: 1000;
        }
        
        /* Reduce motion for mobile performance */
        .animate-section * {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
        }
        
        /* Optimize transitions for mobile */
        .timeline-step,
        .service-card,
        .testimonial-card {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
            will-change: auto;
        }
        
        /* Disable hover effects on mobile */
        .service-card:hover,
        .btn:hover,
        .cta-button:hover {
            transform: none !important;
        }
    `;
    document.head.appendChild(mobileCSS);
}

// 🎯 MOBILE-OPTIMIZED VANILLA JS SCROLL ANIMATIONS
function initMobileOptimizedAnimations(isMobile) {
    console.log('🎬 Initializing mobile-optimized animations...');
    
    const sections = document.querySelectorAll('.animate-section');
    console.log(`🔍 Found ${sections.length} sections to animate`);
    
    if (sections.length === 0) {
        console.warn('⚠️ No sections found with .animate-section class');
        return;
    }

    const observerOptions = {
        threshold: 0.05, // 5% viewport visibility triggers animations
        rootMargin: isMobile ? '0px 0px -20px 0px' : '0px 0px -30px 0px' // Early trigger
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                
                const contentElements = entry.target.querySelectorAll('h1, h2, h3, p, .grid, .flex, .space-y-8, .max-w-7xl, .service-card, .timeline-step, .testimonial-card');
                
                if (isMobile) {
                    // MOBILE: Manual animation với shorter stagger
                    contentElements.forEach((element, index) => {
                        setTimeout(() => {
                            startMobileFadeIn(element);
                        }, index * 100 + 150); // Longer stagger for visibility
                    });
                } else {
                    // DESKTOP: Full stagger animation
                    contentElements.forEach((element, index) => {
                        setTimeout(() => {
                            startDesktopFadeIn(element);
                        }, index * 75 + 100);
                    });
                }
                
                console.log('✨ Optimized animation for', contentElements.length, 'elements (mobile:', isMobile, ')');
            }
        });
    }, observerOptions);

    // Initially hide content elements with device-specific setup
    sections.forEach(section => {
        const contentElements = section.querySelectorAll('h1, h2, h3, p, .grid, .flex, .space-y-8, .max-w-7xl, .service-card, .timeline-step, .testimonial-card');
        
        contentElements.forEach(element => {
            if (isMobile) {
                // MOBILE: Setup for manual animation - no CSS transitions
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
                element.style.backfaceVisibility = 'hidden'; // Mobile optimization
                // NO CSS transitions - using manual requestAnimationFrame
            } else {
                // DESKTOP: CSS transitions
                element.style.opacity = '0';
                element.style.transform = 'translateY(30px)';
                element.style.transition = 'all 0.6s ease-out';
            }
        });
        
        scrollObserver.observe(section);
    });
    
    console.log(`👀 Observing ${sections.length} sections with mobile optimization:`, isMobile);
}

function startMobileFadeIn(element) {
    // MOBILE: Manual animation using requestAnimationFrame za guaranteed smoothness
    const startTime = Date.now();
    const duration = 500; // 0.5 seconds
    const startOpacity = 0;
    const startTranslateY = 20;
    
    function animate() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease-out curve
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        // Apply values
        element.style.opacity = startOpacity + (1 - startOpacity) * easeOut;
        element.style.transform = `translateY(${startTranslateY - (startTranslateY * easeOut)}px)`;
        
        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            // Animation complete - clean up
            element.style.opacity = '1';
            element.style.transform = 'translateY(0px)';
            element.style.willChange = 'auto';
            console.log('📱 Mobile animation completed for element');
        }
    }
    
    // Start animation
    element.style.willChange = 'opacity, transform';
    requestAnimationFrame(animate);
}

function startDesktopFadeIn(element) {
    // Desktop animation with full effects
    element.style.opacity = '1';
    element.style.transform = 'translateY(0px)';
}

// VANILLA JS Counter animation sa formatiranjem brojeva
function animateVanillaCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    let current = 0;
    const increment = target / 120; // 120 frames za smooth animation (2 seconds at 60fps)
    const duration = 2000; // 2 seconds
    const startTime = Date.now();
    
    // Proveravamo da li je ovo procenat ili običan broj
    const isPercentage = element.textContent.includes('%');
    const suffix = isPercentage ? '%' : '+';
    
    // Funkcija za formatiranje broja sa zarezima
    function formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    function updateCounter() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease-out expo easing equivalent
        const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        current = target * easedProgress;
        const displayNumber = Math.floor(current);
        
        // Formatiranje sa zarezima i dodavanje odgovarajućeg sufiksa
        element.textContent = formatNumber(displayNumber) + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = formatNumber(target) + suffix;
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// 🎯 TIMELINE ANIMATION WITH OUTLINE BOTTOM TIMERS
function initTimelineAnimation() {
    console.log('🔧 Starting initTimelineAnimation...');
    
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        console.log('📱 Mobile detected - skipping desktop timeline');
        return; // Skip desktop timeline on mobile
    }
    
    const journeySection = document.querySelector('#journey');
    const timelineSteps = document.querySelectorAll('.timeline-step');
    
    console.log('🔍 Found journey section:', !!journeySection);
    console.log('🔍 Found timeline steps:', timelineSteps.length);
    
    if (!journeySection || timelineSteps.length === 0) {
        console.log('❌ Missing required elements for timeline');
        return;
    }
    
    let currentStep = 0;
    let isTimelineActive = false; // Changed from isScrollLocked
    let isStepTransitioning = false;
    let lastScrollTime = 0;
    let journeyCompleted = false;
    let autoProgressTimer = null;
    let cycleRestartTimer = null; // For 10s pause before restart
    const STEP_DELAY = 3000; // 3 seconds delay between steps
    const CYCLE_PAUSE = 10000; // 10 seconds pause before restart
    
    console.log('✅ Initializing timeline with', timelineSteps.length, 'steps');
    
    // Add CSS for spotlight effect
    const spotlightCSS = document.createElement('style');
    spotlightCSS.textContent = `
        .timeline-step {
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) !important;
            cursor: default !important;
            pointer-events: none !important;
        }
        .timeline-step.spotlight-active {
            opacity: 1 !important;
            transform: translateY(0px) scale(1) !important;
            filter: brightness(1) saturate(1) !important;
            position: relative !important;
        }
        .timeline-step.spotlight-active::after {
            content: '' !important;
            position: absolute !important;
            bottom: 0 !important;
            left: 0 !important;
            width: var(--timer-width, 0%) !important;
            height: 4px !important;
            background: linear-gradient(90deg, #3b82f6, #1d4ed8) !important;
            border-radius: 0 0 1.5rem 1.5rem !important;
            transition: width 0.2s ease-out !important;
            z-index: 10 !important;
            box-shadow: 0 2px 8px rgba(59, 130, 246, 0.4) !important;
        }
        .timeline-step.spotlight-completed {
            opacity: 1 !important;
            transform: translateY(0px) scale(1) !important;
            filter: brightness(1) saturate(1) !important;
            position: relative !important;
        }
        .timeline-step.spotlight-completed::after {
            content: '' !important;
            position: absolute !important;
            bottom: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 4px !important;
            background: linear-gradient(90deg, #10b981, #059669) !important;
            border-radius: 0 0 1.5rem 1.5rem !important;
            transition: width 0.3s ease-in-out !important;
            z-index: 10 !important;
            box-shadow: 0 2px 8px rgba(16, 185, 129, 0.4) !important;
        }
        .timeline-step.spotlight-future {
            opacity: 0.3 !important;
            transform: translateY(20px) scale(0.95) !important;
            filter: brightness(0.7) saturate(0.6) !important;
        }
        /* Remove any hover effects */
        .timeline-step:hover {
            transform: none !important;
            box-shadow: none !important;
        }
        /* Override default active class to prevent blue flash */
        .timeline-step.active {
            border-color: transparent !important;
            background: white !important;
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1) !important;
        }
        /* Disable text selection during timeline */
        #journey.timeline-active {
            -webkit-user-select: none !important;
            -moz-user-select: none !important;
            -ms-user-select: none !important;
            user-select: none !important;
        }
    `;
    document.head.appendChild(spotlightCSS);
    
    // Initialize all steps
    timelineSteps.forEach((step, index) => {
        if (index === 0) {
            step.classList.add('spotlight-active');
            step.classList.remove('active');
        } else {
            step.classList.add('spotlight-future');
            step.classList.remove('active');
        }
    });
    
    // Timer function for active step (outline bottom only)
    function startStepTimer(activeStep) {
        console.log('⏱️ Starting fluid timer for active step');
        
        // Reset any existing timer
        if (activeStep.timerAnimation) {
            clearInterval(activeStep.timerAnimation);
        }
        
        let progress = 0;
        const increment = 100 / (STEP_DELAY / 25); // Update every 25ms for smoother animation
        
        // Set initial width to 0
        activeStep.style.setProperty('--timer-width', '0%');
        
        activeStep.timerAnimation = setInterval(() => {
            progress += increment;
            
            if (progress >= 100) {
                progress = 100;
                clearInterval(activeStep.timerAnimation);
                console.log('⏱️ Fluid timer completed for step');
            }
            
            // Update step timer only
            activeStep.style.setProperty('--timer-width', progress + '%');
            
        }, 25); // Smoother 25ms updates
    }
    
    // Function to clear all step timers (used only for emergency cleanup)
    function clearAllStepTimers() {
        timelineSteps.forEach(step => {
            if (step.timerAnimation) {
                clearInterval(step.timerAnimation);
                step.timerAnimation = null;
            }
            // Don't reset timer width here - let each step maintain its state
        });
        
        console.log('🧹 All step timers cleared (emergency cleanup)');
    }
    
    // Function to start automatic progression (cyclical)
    function startAutomaticProgression() {
        console.log('🤖 Starting cyclical timeline progression');
        
        // Clear any existing timers
        if (autoProgressTimer) {
            clearTimeout(autoProgressTimer);
        }
        if (cycleRestartTimer) {
            clearTimeout(cycleRestartTimer);
        }
        
        function progressToNextStep() {
            if (!isTimelineActive) {
                console.log('🤖 Auto progression stopped - timeline not active');
                return;
            }
            
            if (currentStep < timelineSteps.length - 1) {
                currentStep++;
                updateTimelineStep(currentStep);
                console.log('🤖 Auto progressed to step:', currentStep + 1, '/', timelineSteps.length);
                
                // Check if this was the last step
                if (currentStep === timelineSteps.length - 1) {
                    // Final step - start 10s pause then restart cycle
                    autoProgressTimer = setTimeout(() => {
                        startCycleRestart();
                    }, STEP_DELAY);
                } else {
                    // Continue to next step
                    autoProgressTimer = setTimeout(progressToNextStep, STEP_DELAY);
                }
            }
        }
        
        // Start progression after first step timer completes
        autoProgressTimer = setTimeout(progressToNextStep, STEP_DELAY);
    }
    
    // Function to restart the cycle after pause
    function startCycleRestart() {
        console.log('🔄 Starting 10 second pause before cycle restart...');
        
        // Keep all steps completed during pause
        timelineSteps.forEach(step => {
            step.classList.remove('spotlight-active', 'spotlight-future');
            step.classList.add('spotlight-completed');
            step.style.setProperty('--timer-width', '100%');
        });
        
        // 10 second pause, then restart
        cycleRestartTimer = setTimeout(() => {
            if (isTimelineActive) {
                console.log('🔄 Restarting timeline cycle');
                currentStep = 0;
                journeyCompleted = false;
                
                updateTimelineStep(currentStep);
                startAutomaticProgression();
            }
        }, CYCLE_PAUSE);
    }
    
    function updateTimelineStep(stepIndex) {
        console.log('🔄 Updating to step:', stepIndex + 1, '/', timelineSteps.length);
        
        // Clear only active step timer (not completed ones)
        timelineSteps.forEach((step, index) => {
            if (step.timerAnimation && index >= stepIndex) {
                clearInterval(step.timerAnimation);
                step.timerAnimation = null;
            }
            // Reset timer width only for current and future steps
            if (index >= stepIndex) {
                step.style.setProperty('--timer-width', '0%');
            }
        });
        
        // Set transitioning state
        isStepTransitioning = true;
        
        timelineSteps.forEach((step, index) => {
            // Remove all spotlight classes
            step.classList.remove('spotlight-active', 'spotlight-completed', 'spotlight-future');
            
            if (index === stepIndex) {
                // Active step
                step.classList.add('spotlight-active');
                step.classList.remove('active');
                
                // Start timer animation on active step
                startStepTimer(step);
                
            } else if (index < stepIndex) {
                // Completed steps - keep their timer at 100%
                step.classList.add('spotlight-completed');
                step.classList.remove('active');
                step.style.setProperty('--timer-width', '100%');
            } else {
                // Future steps
                step.classList.add('spotlight-future');
                step.classList.remove('active');
            }
        });
        
        // No more progress bar - timeline progress shown via outline bottom timers
        
        // Clear transitioning state after animation completes
        setTimeout(() => {
            isStepTransitioning = false;
            console.log('✅ Step transition completed');
        }, STEP_DELAY);
    }
    
    // Intersection observer to trigger timeline (20% viewport)
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            console.log('👁️ Journey section intersection:', entry.intersectionRatio);
            
            if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
                if (!isTimelineActive) {
                    console.log('🎬 Timeline activated at 20% viewport visibility');
                    
                    isTimelineActive = true;
                    currentStep = 0;
                    journeyCompleted = false;
                    updateTimelineStep(currentStep);
                    
                    // Start automatic cyclical progression
                    startAutomaticProgression();
                    
                    console.log('🎬 Cyclical timeline started!');
                }
            } else if (!entry.isIntersecting || entry.intersectionRatio <= 0.1) {
                if (isTimelineActive) {
                    console.log('🛑 Timeline deactivated - out of viewport');
                    
                    // Stop timeline when out of view
                    isTimelineActive = false;
                    
                    // Clear all timers
                    if (autoProgressTimer) {
                        clearTimeout(autoProgressTimer);
                        autoProgressTimer = null;
                    }
                    if (cycleRestartTimer) {
                        clearTimeout(cycleRestartTimer);
                        cycleRestartTimer = null;
                    }
                    clearAllStepTimers();
                    
                    // Reset to initial state
                    timelineSteps.forEach((step, index) => {
                        step.classList.remove('spotlight-active', 'spotlight-completed', 'spotlight-future');
                        if (index === 0) {
                            step.classList.add('spotlight-active');
                        } else {
                            step.classList.add('spotlight-future');
                        }
                        step.style.setProperty('--timer-width', '0%');
                    });
                    
                    // Clear all timers
                    if (autoProgressTimer) {
                        clearTimeout(autoProgressTimer);
                        autoProgressTimer = null;
                    }
                    if (cycleRestartTimer) {
                        clearTimeout(cycleRestartTimer);
                        cycleRestartTimer = null;
                    }
                    clearAllStepTimers();
                }
            }
        });
    }, {
        threshold: [0.1, 0.2, 0.3, 0.5],
        rootMargin: '0px'
    });
    
    timelineObserver.observe(journeySection);
    console.log('👁️ Timeline observer attached (20% viewport trigger)');
    
    // Emergency stop with Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && isTimelineActive) {
            console.log('🆘 Emergency stop with Escape key');
            
            // Stop timeline completely
            isTimelineActive = false;
            
            // Clear all timers
            if (autoProgressTimer) {
                clearTimeout(autoProgressTimer);
                autoProgressTimer = null;
            }
            if (cycleRestartTimer) {
                clearTimeout(cycleRestartTimer);
                cycleRestartTimer = null;
            }
            clearAllStepTimers();
            
            // Reset to initial state
            timelineSteps.forEach((step, index) => {
                step.classList.remove('spotlight-active', 'spotlight-completed', 'spotlight-future');
                if (index === 0) {
                    step.classList.add('spotlight-active');
                } else {
                    step.classList.add('spotlight-future');
                }
                step.style.setProperty('--timer-width', '0%');
            });
            
            console.log('🛑 Timeline stopped and reset');
        }
    });
}

// Contact form
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            if (name && email && message) {
                alert('Hvala vam! Vaša poruka je poslana. Kontaktiraćemo vas uskoro.');
                this.reset();
            } else {
                alert('Molim vas popunite sva polja.');
            }
        });
    }
}

// CTA buttons
function initCTAButtons() {
    const ctaButtons = document.querySelectorAll('.cta-button, .btn-primary');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (!this.getAttribute('href') || this.getAttribute('href') === '#') {
                e.preventDefault();
                alert('Kontaktirajte nas na +382 67 123 456 ili office@aq-accounting.me');
            }
        });
    });
}

// Modal functionality
function initModal() {
    const modal = document.getElementById('serviceModal');
    const closeModal = document.getElementById('closeModal');
    
    if (modal && closeModal) {
        closeModal.addEventListener('click', function() {
            modal.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
        });
        
        // Close on outside click
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.add('hidden');
                document.body.classList.remove('overflow-hidden');
            }
        });
        
        // Close on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                modal.classList.add('hidden');
                document.body.classList.remove('overflow-hidden');
            }
        });
    }
}

// Initialize counters when stats section comes into view
function initCounters() {
    const counters = document.querySelectorAll('[data-target]');
    const statsSection = document.querySelector('#stats'); // Simple ID selector
    
    if (!statsSection) {
        console.log('Stats section not found, falling back to individual counter observation');
        // Fallback to original logic if section not found
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    entry.target.classList.add('counted');
                    animateVanillaCounter(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        counters.forEach(counter => {
            counterObserver.observe(counter);
        });
        return;
    }
    
    console.log('Stats section found, setting up synchronized counter animation');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.hasAttribute('data-counters-started')) {
                console.log('Stats section in viewport, starting all counters');
                entry.target.setAttribute('data-counters-started', 'true');
                
                // Start all counters at the same time
                counters.forEach(counter => {
                    if (!counter.classList.contains('counted')) {
                        counter.classList.add('counted');
                        animateVanillaCounter(counter);
                    }
                });
            }
        });
    }, { threshold: 0.3 }); // Lower threshold for mobile
    
    counterObserver.observe(statsSection);
}

// 🎯 MOBILE HOVER-LIKE VIEWPORT EFFECT
function initMobileHoverEffect() {
    console.log('🔦 Starting mobile hover effect...');
    
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) {
        console.log('🖥️ Desktop mode - skipping mobile hover');
        return;
    }
    
    const timelineSteps = document.querySelectorAll('.timeline-step');
    
    if (timelineSteps.length === 0) {
        console.log('❌ Timeline steps not found');
        return;
    }
    
    console.log('✅ Mobile hover found with', timelineSteps.length, 'cards');
    
    // Fluid 400ms spotlight hover effect with continuous intensity via CSS variable
    const hoverCSS = document.createElement('style');
    hoverCSS.textContent = `
        @media (max-width: 768px) {
            /* Use --hl (0..1) as highlight intensity computed by JS */
            .timeline-step {
                --hl: 0; /* default */
                margin-bottom: 1.5rem;
                background: #fff;
                /* Fluid ease-in/ease-out for all dependent props */
                transition:
                    opacity 200ms ease-in-out,
                    transform 200ms ease-in-out,
                    filter 200ms ease-in-out,
                    border-color 200ms ease-in-out,
                    box-shadow 200ms ease-in-out,
                    background 200ms ease-in-out;

                /* Continuous mapping from --hl to visual props */
                opacity: calc(0.6 + (0.4 * var(--hl)));
                transform: scale(calc(1 + (0.10 * var(--hl)))); /* up to 1.10 (10% scale up) */
                filter: grayscale(calc(60% * (1 - var(--hl)))) brightness(calc(0.9 + (0.15 * var(--hl))));
                border: 1px solid rgba(59, 130, 246, calc(0.3 + (0.7 * var(--hl))));
                box-shadow:
                    0 0 0 1px rgba(59,130,246, calc(0.15 * var(--hl))),
                    0 8px 20px -6px rgba(59,130,246, calc(0.35 * var(--hl))),
                    0 16px 32px -12px rgba(59,130,246, calc(0.25 * var(--hl)));
                background: linear-gradient(135deg, rgba(59, 130, 246, calc(0.02 * var(--hl))) 0%, rgba(255, 255, 255, 1) 100%);
            }

            /* Title - keep separate color transition (thresholded) */
            .timeline-step h4 {
                color: #4b5563;
                transition: color 200ms ease-in-out, text-shadow 200ms ease-in-out;
            }
            .timeline-step.viewport-active h4 {
                color: #1d4ed8;
                text-shadow: 0 1px 2px rgba(29, 78, 216, 0.12);
            }

            /* Icon - driven by intensity */
            .timeline-step .bg-gradient-to-r {
                transition: box-shadow 200ms ease-in-out, transform 200ms ease-in-out;
                transform: scale(calc(1 + (0.08 * var(--hl)))); /* up to 1.08 for icon */
                box-shadow: 0 8px 20px rgba(59, 130, 246, calc(0.35 * var(--hl)));
            }

            /* Copy - subtle lift by intensity */
            .timeline-step p, .timeline-step ul {
                transition: opacity 200ms ease-in-out, transform 200ms ease-in-out;
                opacity: calc(0.85 + (0.15 * var(--hl)));
                transform: translateY(calc(1px * (1 - var(--hl))));
            }
        }
    `;
    document.head.appendChild(hoverCSS);

    // Scroll-driven continuous highlight ratio based on distance to viewport center
    const maxDistance = window.innerHeight * 0.45; // range for full fade

    const updateHighlight = () => {
        const center = window.innerHeight / 2;
        timelineSteps.forEach(card => {
            const rect = card.getBoundingClientRect();
            const cardCenter = rect.top + rect.height / 2;
            const visible = rect.bottom > 0 && rect.top < window.innerHeight;
            let hl = 0;
            if (visible) {
                const dist = Math.abs(cardCenter - center);
                const t = Math.min(dist / maxDistance, 1);
                hl = 1 - t; // 1 at center, 0 when far
                // Ease in/out on ratio itself for smoother feel
                // use smoothstep-like curve: 3x^2 - 2x^3
                const x = hl;
                hl = (3 * x * x) - (2 * x * x * x);
            }
            card.style.setProperty('--hl', hl.toFixed(3));
            if (hl >= 0.55) card.classList.add('viewport-active');
            else card.classList.remove('viewport-active');
        });
    };

    // Initial and listeners
    updateHighlight();
    window.addEventListener('scroll', () => requestAnimationFrame(updateHighlight), { passive: true });
    window.addEventListener('resize', () => requestAnimationFrame(updateHighlight));

    console.log('🎯 Mobile hover effect initialized (continuous 400ms spotlight)');
}

// 🎯 SMOOTH MOBILE TIMELINE - NO TIMERS, NO SECKANJE  
function initSmoothMobileTimeline() {
    console.log('🔦 Starting smooth mobile timeline...');
    
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) {
        console.log('🖥️ Desktop mode - skipping mobile timeline');
        return;
    }
    
    const timelineSteps = document.querySelectorAll('.timeline-step');
    
    if (timelineSteps.length === 0) {
        console.log('❌ Timeline steps not found');
        return;
    }
    
    console.log('✅ Smooth mobile timeline found with', timelineSteps.length, 'cards');
    
    // Progressive hover-like CSS animations for mobile viewport
    const spotlightCSS = document.createElement('style');
    spotlightCSS.textContent = `
        @media (max-width: 768px) {
            /* Default state - all cards are grey/dimmed */
            .timeline-step {
                opacity: 0.4;
                transform: scale(0.95);
                filter: grayscale(70%) brightness(0.6);
                transition: 
                    opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                    transform 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                    filter 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                    border 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                    box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                    background 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                margin-bottom: 1.5rem;
                border: 1px solid rgba(156, 163, 175, 0.3);
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                background: rgba(249, 250, 251, 0.8);
            }
            
            /* HOVER-LIKE ACTIVE STATE - full color and animations */
            .timeline-step.viewport-active {
                opacity: 1;
                transform: scale(1.02);
                filter: grayscale(0%) brightness(1.1);
                border: 2px solid #3b82f6;
                box-shadow: 
                    0 20px 40px -12px rgba(59, 130, 246, 0.4),
                    0 8px 20px -4px rgba(59, 130, 246, 0.2),
                    0 0 0 1px rgba(59, 130, 246, 0.1);
                background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(255, 255, 255, 1) 100%);
                
                /* Hover-like bounce animation */
                animation: viewportHover 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
            }
            
            /* Bounce hover-like animation keyframes */
            @keyframes viewportHover {
                0% {
                    transform: scale(0.95);
                    opacity: 0.4;
                }
                50% {
                    transform: scale(1.04);
                    opacity: 0.9;
                }
                100% {
                    transform: scale(1.02);
                    opacity: 1;
                }
            }
            
            /* Title color changes with hover-like effect */
            .timeline-step h4 {
                transition: 
                    color 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                    text-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                    transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                color: #6b7280; /* Default grey */
            }
            
            .timeline-step.viewport-active h4 {
                color: #1d4ed8;
                text-shadow: 0 2px 4px rgba(29, 78, 216, 0.15);
                transform: translateY(-1px);
            }
            
            /* Icon hover-like glow and scale */
            .timeline-step .bg-gradient-to-r {
                transition: 
                    box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                    transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            }
            
            .timeline-step.viewport-active .bg-gradient-to-r {
                box-shadow: 
                    0 12px 30px rgba(59, 130, 246, 0.5),
                    0 0 0 2px rgba(59, 130, 246, 0.2);
                transform: scale(1.1) rotate(2deg);
                animation: iconPulse 2s ease-in-out infinite;
            }
            
            /* Icon pulse animation */
            @keyframes iconPulse {
                0%, 100% {
                    box-shadow: 
                        0 12px 30px rgba(59, 130, 246, 0.5),
                        0 0 0 2px rgba(59, 130, 246, 0.2);
                }
                50% {
                    box-shadow: 
                        0 16px 40px rgba(59, 130, 246, 0.7),
                        0 0 0 3px rgba(59, 130, 246, 0.3);
                }
            }
            
            /* Content fade with hover-like effect */
            .timeline-step p, .timeline-step ul {
                transition: 
                    opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                opacity: 0.6; /* Default dimmed */
                transform: translateY(2px);
            }
            
            .timeline-step.viewport-active p,
            .timeline-step.viewport-active ul {
                opacity: 1;
                transform: translateY(0px);
            }
            
            /* Subtle border pulse for active card */
            .timeline-step.viewport-active {
                animation: 
                    viewportHover 0.6s cubic-bezier(0.34, 1.56, 0.64, 1),
                    borderPulse 3s ease-in-out infinite 0.6s;
            }
            
            @keyframes borderPulse {
                0%, 100% {
                    border-color: #3b82f6;
                    box-shadow: 
                        0 20px 40px -12px rgba(59, 130, 246, 0.4),
                        0 8px 20px -4px rgba(59, 130, 246, 0.2),
                        0 0 0 1px rgba(59, 130, 246, 0.1);
                }
                50% {
                    border-color: #1d4ed8;
                    box-shadow: 
                        0 24px 48px -12px rgba(59, 130, 246, 0.5),
                        0 12px 24px -4px rgba(59, 130, 246, 0.3),
                        0 0 0 2px rgba(59, 130, 246, 0.2);
                }
            }
        }
    `;
    document.head.appendChild(spotlightCSS);
    
    // Simple scroll handler with progressive transitions
    function handleScroll() {
        requestAnimationFrame(checkViewportCards);
    }
    
    // Progressive hover-like spotlight with gradual state transitions
    function checkViewportCards() {
        const viewportCenter = window.innerHeight / 2;
        let cardDistances = [];

        // Calculate distances and states for all cards
        timelineSteps.forEach(card => {
            const rect = card.getBoundingClientRect();
            const cardCenter = rect.top + rect.height / 2;
            const distance = Math.abs(cardCenter - viewportCenter);
            const isVisible = rect.bottom > 50 && rect.top < window.innerHeight - 50;
            
            cardDistances.push({
                element: card,
                distance: distance,
                isVisible: isVisible,
                rect: rect
            });
        });

        // Sort by distance to center
        cardDistances.sort((a, b) => a.distance - b.distance);

        // Apply progressive states based on distance ranking
        timelineSteps.forEach(card => {
            // Clear all spotlight classes first
            card.classList.remove('spotlight-active', 'spotlight-entering', 'spotlight-leaving');
            
            const cardData = cardDistances.find(item => item.element === card);
            if (!cardData || !cardData.isVisible) return;

            const index = cardDistances.indexOf(cardData);
            const distanceFromCenter = cardData.distance;
            const maxDistance = window.innerHeight * 0.4;
            
            // Progressive states based on proximity to viewport center
            if (index === 0 && distanceFromCenter < maxDistance) {
                // Closest card - main spotlight
                card.classList.add('spotlight-active');
                console.log(`🎯 Spotlight ACTIVE on step ${card.getAttribute('data-step')}`);
            } else if (index <= 1 && distanceFromCenter < maxDistance * 1.5) {
                // Second closest - entering state
                card.classList.add('spotlight-entering');
                console.log(`� Spotlight ENTERING on step ${card.getAttribute('data-step')}`);
            } else if (distanceFromCenter < maxDistance * 2) {
                // Further away - leaving state
                card.classList.add('spotlight-leaving');
                console.log(`🌫️ Spotlight LEAVING on step ${card.getAttribute('data-step')}`);
            }
            // Cards beyond this range get default (dim) styling
        });
    }
    
    // Initial check
    setTimeout(checkViewportCards, 100);
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    console.log('🎯 Smooth mobile timeline initialized');
}

// 🎯 VIEWPORT-BASED SPOTLIGHT EFFECT FOR MOBILE TIMELINE
function initAdvancedTimelineAnimation() {
    console.log('� Starting viewport spotlight timeline...');
    
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) {
        console.log('🖥️ Desktop mode - using standard timeline');
        return;
    }
    
    const timelineSteps = document.querySelectorAll('.timeline-step');
    
    if (timelineSteps.length === 0) {
        console.log('❌ Timeline steps not found');
        return;
    }
    
    console.log('✅ Spotlight timeline found with', timelineSteps.length, 'cards');
    
    // Add spotlight CSS for viewport-based highlighting
    const spotlightCSS = document.createElement('style');
    spotlightCSS.textContent = `
        @media (max-width: 768px) {
            .timeline-step {
                opacity: 0.3;
                transform: scale(0.9);
                filter: grayscale(50%) brightness(0.7);
                transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                margin-bottom: 1.5rem;
                border: 2px solid transparent;
            }
            
            .timeline-step.viewport-spotlight {
                opacity: 1;
                transform: scale(1);
                filter: grayscale(0%) brightness(1);
                box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25), 0 0 0 1px rgb(59 130 246 / 0.1);
                border: 2px solid #3b82f6;
                background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(255, 255, 255, 1) 100%);
            }
            
            /* Subtle glow effect for spotlight */
            .timeline-step.viewport-spotlight::before {
                content: '';
                position: absolute;
                top: -2px;
                left: -2px;
                right: -2px;
                bottom: -2px;
                background: linear-gradient(45deg, #3b82f6, #1d4ed8, #3b82f6);
                border-radius: inherit;
                z-index: -1;
                opacity: 0.3;
                filter: blur(8px);
            }
            
            /* Content highlighting */
            .timeline-step.viewport-spotlight h4 {
                color: #1d4ed8 !important;
            }
            
            .timeline-step.viewport-spotlight .bg-gradient-to-r {
                box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4) !important;
            }
        }
    `;
    document.head.appendChild(spotlightCSS);
    
    // Intersection Observer for viewport detection
    const observerOptions = {
        threshold: 0.6, // 60% of card must be visible
        rootMargin: '-10% 0px -10% 0px' // Reduce effective viewport area
    };
    
    const spotlightObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const card = entry.target;
            
            if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
                // Add spotlight to this card
                card.classList.add('viewport-spotlight');
                console.log(`� Spotlight on step ${card.getAttribute('data-step')}`);
            } else {
                // Remove spotlight from this card
                card.classList.remove('viewport-spotlight');
            }
        });
    }, observerOptions);
    
    // Observe all timeline steps
    timelineSteps.forEach(step => {
        spotlightObserver.observe(step);
    });
    
    // Handle window resize to recalculate viewport
    function handleResize() {
        const newIsMobile = window.innerWidth <= 768;
        if (!newIsMobile) {
            // Clean up mobile styles when switching to desktop
            timelineSteps.forEach(step => {
                step.classList.remove('viewport-spotlight');
                spotlightObserver.unobserve(step);
            });
        }
    }
    
    window.addEventListener('resize', handleResize);
    
    console.log('🎯 Viewport spotlight timeline initialized');
    
    // Cleanup function
    return () => {
        timelineSteps.forEach(step => {
            spotlightObserver.unobserve(step);
            step.classList.remove('viewport-spotlight');
        });
        window.removeEventListener('resize', handleResize);
    };
}
