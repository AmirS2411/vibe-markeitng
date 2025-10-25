// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background opacity on scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.feature-card, .step, .ai-point');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Button hover effects
    const buttons = document.querySelectorAll('.primary-button, .secondary-button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // CTA button actions
    const ctaButtons = document.querySelectorAll('.primary-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Simulate CTA action
            alert('Thank you for your interest! We\'ll be in touch soon to help amplify your brand\'s vibe.');
        });
    });

    // Secondary button actions
    const secondaryButtons = document.querySelectorAll('.secondary-button');
    secondaryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Scroll to learn more section
            const learnMoreSection = document.querySelector('#what-is');
            if (learnMoreSection) {
                const offsetTop = learnMoreSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Dynamic vibe animation speed based on scroll
    let animationSpeed = 3;
    const waves = document.querySelectorAll('.wave');
    const centerPulse = document.querySelector('.center-pulse');

    window.addEventListener('scroll', function() {
        const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        animationSpeed = 3 - (scrollPercentage * 2); // Speed up as user scrolls
        
        waves.forEach((wave, index) => {
            wave.style.animationDuration = `${animationSpeed + index * 0.5}s`;
        });
        
        if (centerPulse) {
            centerPulse.style.animationDuration = `${animationSpeed * 0.7}s`;
        }
    });

    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    const heroVisual = document.querySelector('.hero-visual');

    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (heroContent && heroVisual) {
            heroContent.style.transform = `translateY(${rate * 0.5}px)`;
            heroVisual.style.transform = `translateY(${rate * 0.3}px)`;
        }
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // Mobile menu toggle (basic implementation)
    const navLinks = document.querySelector('.nav-links');
    const navLogo = document.querySelector('.nav-logo');
    
    // Create mobile menu button
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.innerHTML = '☰';
    mobileMenuBtn.style.display = 'none';
    mobileMenuBtn.style.background = 'none';
    mobileMenuBtn.style.border = 'none';
    mobileMenuBtn.style.fontSize = '1.5rem';
    mobileMenuBtn.style.color = '#6366f1';
    mobileMenuBtn.style.cursor = 'pointer';
    mobileMenuBtn.className = 'mobile-menu-btn';
    
    navLogo.parentNode.appendChild(mobileMenuBtn);
    
    // Show mobile menu button on small screens
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            mobileMenuBtn.style.display = 'block';
            navLinks.style.display = 'none';
        } else {
            mobileMenuBtn.style.display = 'none';
            navLinks.style.display = 'flex';
        }
    }
    
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
    
    // Mobile menu toggle functionality
    mobileMenuBtn.addEventListener('click', function() {
        if (navLinks.style.display === 'none' || navLinks.style.display === '') {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.right = '0';
            navLinks.style.background = 'white';
            navLinks.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            navLinks.style.padding = '1rem';
            mobileMenuBtn.innerHTML = '✕';
        } else {
            navLinks.style.display = 'none';
            mobileMenuBtn.innerHTML = '☰';
        }
    });
});
