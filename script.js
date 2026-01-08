// ========================================
// PARTICLES GENERATOR
// ========================================
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Position aléatoire
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Délai d'animation aléatoire
        particle.style.animationDelay = Math.random() * 15 + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// ========================================
// AUDIO CONTROL
// ========================================
const audioToggle = document.getElementById('audioToggle');
const backgroundAudio = document.getElementById('backgroundAudio');
let audioInitialized = false;

// Volume modéré (30%)
backgroundAudio.volume = 0.3;

// Initialiser l'audio après interaction utilisateur
function initializeAudio() {
    if (!audioInitialized) {
        backgroundAudio.play().then(() => {
            backgroundAudio.pause();
            backgroundAudio.currentTime = 0;
            audioInitialized = true;
        }).catch(err => {
            console.log('Audio initialization:', err);
        });
    }
}

// Lancer la musique (reset et play)
audioToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // Empêcher le déclenchement de startMusicOnInteraction
    
    // Initialiser l'audio si pas déjà fait
    if (!audioInitialized) {
        audioInitialized = true;
    }
    
    // Si la musique joue déjà, on la pause
    if (!backgroundAudio.paused) {
        isManualPause = true;
        backgroundAudio.pause();
    } else {
        // Reset et relancer la musique
        backgroundAudio.currentTime = 0;
        backgroundAudio.play().then(() => {
            audioToggle.classList.add('playing');
            audioToggle.querySelector('.audio-text').textContent = 'Playing';
            document.body.classList.add('shake');
        }).catch(err => {
            console.log('Error playing audio:', err);
        });
    }
});

// Démarrer automatiquement la musique au premier clic/interaction
function startMusicOnInteraction() {
    // Ignorer si déjà en cours de lecture
    if (!backgroundAudio.paused) {
        return;
    }
    
    // Initialiser et jouer directement
    if (!audioInitialized) {
        audioInitialized = true;
    }
    
    // Démarrer la musique
    backgroundAudio.currentTime = 0;
    const playPromise = backgroundAudio.play();
    
    if (playPromise !== undefined) {
        playPromise.then(() => {
            // Musique lancée avec succès
            audioToggle.classList.add('playing');
            audioToggle.querySelector('.audio-text').textContent = 'Playing';
            document.body.classList.add('shake');
        }).catch(err => {
            console.log('Error auto-playing audio:', err);
        });
    }
}

// Démarrer la musique au premier clic/interaction n'importe où sur la page
document.addEventListener('click', startMusicOnInteraction, { once: true });
document.addEventListener('touchstart', startMusicOnInteraction, { once: true });
document.addEventListener('keydown', startMusicOnInteraction, { once: true });

// ========================================
// ENTER BUTTON - Scroll to gallery
// ========================================
const enterBtn = document.getElementById('enterBtn');
enterBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Empêcher le déclenchement de startMusicOnInteraction
    
    // Initialiser l'audio si pas déjà fait
    if (!audioInitialized) {
        initializeAudio();
    }
    
    // Reset et démarrer l'audio si pas déjà en cours
    if (backgroundAudio.paused) {
        backgroundAudio.currentTime = 0;
        backgroundAudio.play().then(() => {
            audioToggle.classList.add('playing');
            audioToggle.querySelector('.audio-text').textContent = 'Playing';
            document.body.classList.add('shake');
            audioInitialized = true;
        }).catch(err => {
            console.log('Error playing audio:', err);
        });
    }
    
    // Scroll vers la galerie
    document.getElementById('gallery').scrollIntoView({ 
        behavior: 'smooth' 
    });
});

// ========================================
// SCROLL ANIMATIONS
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observer tous les éléments avec animation au scroll
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.gallery-item, .quote-card, .video-card');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});

// ========================================
// SMOOTH SCROLLING
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// ========================================
// GALLERY ITEM CLICK EFFECT
// ========================================
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        // Effet de zoom
        this.style.transform = 'scale(1.2)';
        setTimeout(() => {
            this.style.transform = '';
        }, 300);
    });
});

// ========================================
// DYNAMIC GLITCH EFFECT (synced with audio)
// ========================================
function syncGlitchWithAudio() {
    const heroTitle = document.querySelector('.hero-title');
    
    // Analyser le volume audio (simulation)
    setInterval(() => {
        if (!backgroundAudio.paused) {
            const random = Math.random();
            if (random > 0.7) {
                heroTitle.style.animation = 'none';
                setTimeout(() => {
                    heroTitle.style.animation = 'glitch 3s infinite';
                }, 10);
            }
        }
    }, 500);
}

// Démarrer la synchronisation après initialisation audio
backgroundAudio.addEventListener('play', () => {
    syncGlitchWithAudio();
});

// Désactiver shake quand l'audio est en pause (mais seulement si pas causé par startMusicOnInteraction)
let isManualPause = false;

backgroundAudio.addEventListener('pause', () => {
    // Ne mettre à jour le bouton que si c'est une pause manuelle
    if (isManualPause) {
        document.body.classList.remove('shake');
        audioToggle.classList.remove('playing');
        audioToggle.querySelector('.audio-text').textContent = 'Play Music';
    }
    isManualPause = false;
});

// ========================================
// PARALLAX EFFECT
// ========================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-background, .quote-background, .final-background');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ========================================
// VIDEO CARDS TILT EFFECT
// ========================================
document.querySelectorAll('.video-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});

// ========================================
// LOADING SCREEN
// ========================================
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    
    // Simuler un temps de chargement minimum
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 1500);
});

// ========================================
// NAVIGATION MENU
// ========================================
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav-menu');

// Sticky navbar on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Update active nav link
    updateActiveNavLink();
});

// Update active nav link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Smooth scroll for nav links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = targetSection.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        }
    });
});

// Mobile menu toggle
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && navMenu.classList.contains('active')) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ========================================
// SCROLL PROGRESS BAR
// ========================================
const scrollProgress = document.getElementById('scrollProgress');

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// ========================================
// BACK TO TOP BUTTON
// ========================================
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========================================
// LIGHTBOX FOR GALLERY
// ========================================
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
const galleryItems = document.querySelectorAll('[data-gallery-img]');
let currentImageIndex = 0;
let galleryImages = [];

// Get all gallery images
galleryItems.forEach(item => {
    const imgSrc = item.getAttribute('data-gallery-img');
    galleryImages.push(imgSrc);
});

// Open lightbox
galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentImageIndex = index;
        openLightbox(galleryImages[currentImageIndex]);
    });
});

function openLightbox(imgSrc) {
    lightboxImage.src = imgSrc;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    lightboxImage.src = galleryImages[currentImageIndex];
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    lightboxImage.src = galleryImages[currentImageIndex];
}

lightboxClose.addEventListener('click', closeLightbox);
lightboxNext.addEventListener('click', showNextImage);
lightboxPrev.addEventListener('click', showPrevImage);

// Close lightbox on background click
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowRight') {
            showNextImage();
        } else if (e.key === 'ArrowLeft') {
            showPrevImage();
        }
    }
});

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Créer les particules
    createParticles();
    
    // Initialiser le premier lien nav comme actif
    if (navLinks.length > 0) {
        navLinks[0].classList.add('active');
    }
    
    console.log('🎸 REZE Tribute Site Loaded!');
});

// ========================================
// MOBILE MENU (si besoin)
// ========================================
// Fonction pour désactiver le shake sur mobile (optionnel)
if (window.innerWidth < 768) {
    document.body.classList.remove('shake');
}

// ========================================
// PREVENT RIGHT-CLICK ON IMAGES (optional)
// ========================================
// Décommentez si vous voulez protéger les images
// document.addEventListener('contextmenu', (e) => {
//     if (e.target.tagName === 'IMG') {
//         e.preventDefault();
//     }
// });

