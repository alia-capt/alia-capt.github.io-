// ===== PERS.ID - Main JavaScript =====

// Preloader
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Animate toggle button
        const spans = this.querySelectorAll('span');
        spans.forEach(span => span.classList.toggle('active'));
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });
}

// Search Overlay
const searchBtn = document.getElementById('searchBtn');
const searchOverlay = document.getElementById('searchOverlay');
const closeSearch = document.getElementById('closeSearch');

if (searchBtn && searchOverlay && closeSearch) {
    searchBtn.addEventListener('click', function() {
        searchOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            searchOverlay.querySelector('input').focus();
        }, 300);
    });
    
    closeSearch.addEventListener('click', function() {
        searchOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
            searchOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Back to Top Button
const backToTop = document.getElementById('backToTop');

if (backToTop) {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Category Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const newsCards = document.querySelectorAll('.news-card');

if (filterBtns.length && newsCards.length) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            
            newsCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Load More Button (Simulasi)
const loadMoreBtn = document.getElementById('loadMore');

if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', function() {
        const originalText = this.innerHTML;
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Memuat...';
        this.disabled = true;
        
        // Simulasi loading
        setTimeout(() => {
            this.innerHTML = originalText;
            this.disabled = false;
            
            // Tampilkan notifikasi
            alert('Fitur load more akan terhubung dengan backend nanti. Ini hanya demo tampilan.');
        }, 1500);
    });
}

// Newsletter Form
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        
        if (email) {
            const button = this.querySelector('button');
            const originalText = button.innerHTML;
            
            button.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            button.disabled = true;
            
            // Simulasi pengiriman
            setTimeout(() => {
                alert(`Terima kasih! Email ${email} telah terdaftar.`);
                this.querySelector('input[type="email"]').value = '';
                button.innerHTML = originalText;
                button.disabled = false;
            }, 1500);
        }
    });
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Sticky Navbar on Scroll
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    const currentScroll = window.scrollY;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Image Lazy Loading
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-src');
                
                if (src) {
                    img.src = src;
                    img.classList.add('loaded');
                }
                
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Log untuk debugging
console.log('Pers.ID - Website pers independen siap digunakan! 🚀');