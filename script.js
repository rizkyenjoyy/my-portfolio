// ===== Smooth Scrolling ===== 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== Active Nav Link ===== 
window.addEventListener('scroll', () => {
    updateActiveNavLink();
});

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--primary)';
        } else {
            link.style.color = 'var(--text-secondary)';
        }
    });
}

// ===== Scroll Animations ===== 
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.timeline-item, .skill-category, .stat-item, .edu-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== Particle Animation Background (Optional Enhancement) ===== 
const createParticle = () => {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = Math.random() * 4 + 2 + 'px';
    particle.style.height = particle.style.width;
    particle.style.background = Math.random() > 0.5 ? 'rgba(15, 255, 255, 0.5)' : 'rgba(255, 0, 110, 0.3)';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '-1';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.opacity = '0';
    particle.style.animation = `particleFloat ${Math.random() * 20 + 10}s infinite linear`;

    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 25000);
};

// Add particle animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes particleFloat {
        0% {
            opacity: 0;
            transform: translateY(0px) translateX(0px);
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: translateY(-100vh) translateX(${Math.random() * 200 - 100}px);
        }
    }
`;
document.head.appendChild(style);

// Create particles every 3 seconds (optional - comment out if too heavy)
setInterval(createParticle, 3000);

// ===== Text Animation ===== 
class TextAnimator {
    constructor(element) {
        this.element = element;
        this.originalText = element.textContent;
        this.animatedText = '';
    }

    animate() {
        let index = 0;
        const interval = setInterval(() => {
            if (index < this.originalText.length) {
                this.animatedText += this.originalText[index];
                this.element.textContent = this.animatedText;
                index++;
            } else {
                clearInterval(interval);
            }
        }, 30);
    }
}

// Animate hero title on page load
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const animator = new TextAnimator(heroTitle);
        // Uncomment below to enable text animation
        // animator.animate();
    }
});

// ===== Contact Form Submission ===== 
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted');
    });
}

// ===== Mobile Menu Toggle ===== 
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// ===== Hover Effects on Skill Tags ===== 
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// ===== Parallax Effect ===== 
window.addEventListener('scroll', () => {
    const parallaxElements = document.querySelectorAll('.hero::before, .hero::after');
    const scrollY = window.scrollY;
    
    // Subtle parallax - commented out by default as it can be heavy
    // parallaxElements.forEach(el => {
    //     el.style.transform = `translateY(${scrollY * 0.5}px)`;
    // });
});

// ===== Loading Animation ===== 
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ===== Keyboard Navigation ===== 
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close any open modals/menus here
    }
});

// ===== Performance: Debounce Scroll Events ===== 
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = window.requestAnimationFrame(() => {
        updateActiveNavLink();
    });
}, { passive: true });

console.log('Portfolio website loaded successfully!');
