// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================================================
    // EXCLUDE NAVBAR FROM ANIMATIONS - KEEP EVERYTHING ELSE
    // ============================================================================
    
    // Ensure navbar elements maintain their original state
    gsap.set(".top-bar, .main-navbar, .navbar-nav, .navbar-toggler, .offcanvas", { clearProps: "all" });
    
    // ============================================================================
    // SCROLL-TRIGGERED TEXT ANIMATIONS
    // ============================================================================
    
    // Animate section titles on all pages
    gsap.utils.toArray(".section-title, .demo-title").forEach(title => {
        gsap.fromTo(title, 
            { y: 20, opacity: 0.7 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: title,
                    start: "top 85%",
                    once: true
                }
            }
        );
    });
    
    // Animate section subtitles on all pages
    gsap.utils.toArray(".section-subtitle, .demo-description").forEach(subtitle => {
        gsap.fromTo(subtitle,
            { y: 15, opacity: 0.7 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                delay: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: subtitle,
                    start: "top 85%",
                    once: true
                }
            }
        );
    });
    
    // Animate highlight spans within titles
    gsap.utils.toArray(".highlight").forEach(highlight => {
        gsap.fromTo(highlight,
            { scale: 0.95 },
            {
                scale: 1,
                duration: 0.6,
                ease: "back.out(1.2)",
                scrollTrigger: {
                    trigger: highlight,
                    start: "top 85%",
                    once: true
                }
            }
        );
    });
    
    // ============================================================================
    // HOMEPAGE SPECIFIC ANIMATIONS
    // ============================================================================
    
    // Hero section animations (only on homepage)
    if (document.querySelector(".hero-title")) {
        gsap.fromTo(".hero-title",
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
        );
        
        gsap.fromTo(".hero-description",
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, delay: 0.3, ease: "power2.out" }
        );
        
        gsap.fromTo(".demo-btn",
            { scale: 0.9, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.6, delay: 0.5, ease: "back.out(1.4)" }
        );
        
        gsap.fromTo(".signup-form",
            { x: 50, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, delay: 0.4, ease: "power3.out" }
        );
    }
    
    // ============================================================================
    // UNIVERSAL CARD ANIMATIONS
    // ============================================================================
    
    // Responsive animations for all types of cards
    ScrollTrigger.matchMedia({
        // Desktop: Full animations
        "(min-width: 992px)": function() {
            gsap.utils.toArray(".feature-card, .benefit-item, .platform-card, .use-case-item, .support-card, .product-card, .pricing-card").forEach((card, index) => {
                gsap.fromTo(card,
                    { y: 40, opacity: 0.3 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.7,
                        delay: index * 0.08,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            once: true
                        }
                    }
                );
            });
        },
        
        // Tablet/Mobile: Simpler animations
        "(max-width: 991px)": function() {
            gsap.utils.toArray(".feature-card, .benefit-item, .platform-card, .use-case-item, .support-card, .product-card, .pricing-card").forEach(card => {
                gsap.fromTo(card,
                    { y: 20, opacity: 0.5 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.5,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 90%",
                            once: true
                        }
                    }
                );
            });
        }
    });
    
    // ============================================================================
    // TEXT CONTENT ANIMATIONS
    // ============================================================================
    
    // Animate all paragraph text in sections
    gsap.utils.toArray(".feature-description, .benefit-description, .platform-description, .use-case-description, .card-description").forEach(text => {
        gsap.fromTo(text,
            { y: 15, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: text,
                    start: "top 85%",
                    once: true
                }
            }
        );
    });
    
    // Animate buttons across all pages (excluding navbar buttons)
    gsap.utils.toArray(".feature-btn, .know-more-btn, .use-case-link, .btn, .signup-btn").forEach(btn => {
        // Skip buttons inside navbar/offcanvas
        if (btn.closest('.navbar') || btn.closest('.offcanvas')) return;
        
        gsap.fromTo(btn,
            { scale: 0.9, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 0.5,
                ease: "back.out(1.2)",
                scrollTrigger: {
                    trigger: btn,
                    start: "top 90%",
                    once: true
                }
            }
        );
    });
    
    // ============================================================================
    // BANNER SECTIONS
    // ============================================================================
    
    // Animate banner sections found on multiple pages
    gsap.utils.toArray(".banner-2-section").forEach(banner => {
        gsap.fromTo(banner.querySelector("h2"), 
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: banner,
                    start: "top 85%",
                    once: true
                }
            }
        );
        
        gsap.fromTo(banner.querySelector("p"), 
            { y: 20, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                delay: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: banner,
                    start: "top 85%",
                    once: true
                }
            }
        );
    });
    
    // ============================================================================
    // PRICING PLANS SPECIFIC ANIMATIONS
    // ============================================================================
    
    // Animate accordion/details elements (pricing page)
    gsap.utils.toArray("details").forEach((detail, index) => {
        gsap.fromTo(detail,
            { x: -20, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.6,
                delay: index * 0.05,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: detail,
                    start: "top 90%",
                    once: true
                }
            }
        );
    });
    
    // ============================================================================
    // FOOTER ANIMATIONS
    // ============================================================================
    
    gsap.fromTo(".footer-header",
        { y: 30, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            scrollTrigger: {
                trigger: ".footer-component",
                start: "top 80%",
                once: true
            }
        }
    );
    
    gsap.fromTo(".footer-section",
        { y: 20, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".footer-links",
                start: "top 85%",
                once: true
            }
        }
    );
    
    // ============================================================================
    // HOVER ANIMATIONS
    // ============================================================================
    
    // Enhanced hover effects for all cards
    document.querySelectorAll('.feature-card, .benefit-item, .platform-card, .use-case-item, .support-card, .product-card, .pricing-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            gsap.to(this, {
                y: -8,
                boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        card.addEventListener('mouseleave', function() {
            gsap.to(this, {
                y: 0,
                boxShadow: "0px 0px 20px 0px rgba(16, 16, 16, 0.08)",
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
    
    // Button hover effects (excluding navbar buttons)
    document.querySelectorAll('.demo-btn, .feature-btn, .know-more-btn, .start-selling-btn, .use-case-link').forEach(btn => {
        // Skip buttons inside navbar/offcanvas
        if (btn.closest('.navbar') || btn.closest('.offcanvas')) return;
        
        btn.addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.05,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        btn.addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
    
    // Social icon hover
    document.querySelectorAll('.social-icon').forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.15,
                rotation: 180,
                duration: 0.4,
                ease: "power2.out"
            });
        });
        
        icon.addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                rotation: 0,
                duration: 0.4,
                ease: "power2.out"
            });
        });
    });
    
    // ============================================================================
    // PARALLAX EFFECTS
    // ============================================================================
    
    // Hero background parallax (only on homepage)
    if (window.innerWidth > 768 && document.querySelector(".banner-1")) {
        gsap.to(".banner-1", {
            yPercent: -15,
            ease: "none",
            scrollTrigger: {
                trigger: ".hero-banner",
                start: "top top",
                end: "bottom top",
                scrub: 1
            }
        });
        
        gsap.to(".banner-2", {
            yPercent: -8,
            ease: "none",
            scrollTrigger: {
                trigger: ".hero-banner",
                start: "top top",
                end: "bottom top",
                scrub: 1
            }
        });
    }
    
    // ============================================================================
    // SCROLL PROGRESS INDICATOR
    // ============================================================================
    
    // Create scroll progress bar
    const progressBar = document.createElement("div");
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(to right, var(--primary-color), var(--accent));
        z-index: 9999;
        transform-origin: left;
        transform: scaleX(0);
        pointer-events: none;
    `;
    document.body.appendChild(progressBar);
    
    gsap.to(progressBar, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
            scrub: 0.3
        }
    });
    
    // ============================================================================
    // SPECIAL ANIMATIONS FOR UNIQUE ELEMENTS
    // ============================================================================
    
    // Logo animation (excluding navbar logo to prevent alignment issues)
    gsap.utils.toArray(".logo-img").forEach(logo => {
        // Skip logo in navbar
        if (logo.closest('.navbar')) return;
        
        gsap.fromTo(logo, 
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.8, delay: 0.3, ease: "back.out(1.4)" }
        );
    });
    
    // Form inputs animation (excluding navbar)
    gsap.utils.toArray("input, textarea, select").forEach((input, index) => {
        // Skip inputs in navbar/offcanvas
        if (input.closest('.navbar') || input.closest('.offcanvas')) return;
        
        gsap.fromTo(input,
            { x: -20, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.6,
                delay: index * 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: input,
                    start: "top 90%",
                    once: true
                }
            }
        );
    });
    
    // Images fade in (excluding navbar images)
    gsap.utils.toArray("img").forEach(img => {
        // Skip images in navbar
        if (img.closest('.navbar')) return;
        
        gsap.fromTo(img,
            { opacity: 0, scale: 0.95 },
            {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: img,
                    start: "top 85%",
                    once: true
                }
            }
        );
    });
    
    console.log('Full GSAP animations loaded - navbar excluded for perfect alignment');
}); 