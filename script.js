// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
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

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title .gradient-text');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 150);
    }
});

// Parallax effect for floating elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const floatingElements = document.querySelectorAll('.floating-icon');
    
    floatingElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Skill progress animation
function animateSkills() {
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, index * 100);
    });
}

// Intersection Observer for skill animation
const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                observer.unobserve(entry.target);
            }
        });
    });
    observer.observe(skillsSection);
}

// Contact Widget Functionality
let contactOptionsOpen = false;
let chatbotOpen = false;

// Toggle contact options panel
function toggleContactOptions() {
    contactOptionsOpen = !contactOptionsOpen;
    const options = document.getElementById('contact-options');
    const button = document.getElementById('contact-main-button');
    
    if (contactOptionsOpen) {
        options.classList.add('active');
        button.style.transform = 'scale(1.1) rotate(45deg)';
    } else {
        options.classList.remove('active');
        button.style.transform = 'scale(1) rotate(0deg)';
    }
}

// WhatsApp functionality
function openWhatsApp() {
    const phoneNumber = '8801710265574';
    const message = encodeURIComponent("Hello! I'm interested in your AI & Machine Learning expertise. Can we discuss potential opportunities?");
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappURL, '_blank');
    toggleContactOptions();
}

// Messenger functionality
function openMessenger() {
    const messengerURL = 'https://m.me/rizwanul.rudro.3';
    window.open(messengerURL, '_blank');
    toggleContactOptions();
}

// Call functionality
function makeCall() {
    const phoneNumber = 'tel:+8801710265574';
    window.location.href = phoneNumber;
    toggleContactOptions();
}

// AI Chatbot functionality
function openChatbot() {
    chatbotOpen = true;
    const modal = document.getElementById('chatbot-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    toggleContactOptions();
    
    // Focus on input
    setTimeout(() => {
        document.getElementById('chatbot-input').focus();
    }, 300);
}

function closeChatbot() {
    chatbotOpen = false;
    const modal = document.getElementById('chatbot-modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Chatbot responses
const chatbotResponses = {
    greetings: [
        "Hello! I'm Rizwanul's AI assistant. How can I help you today? 🤖",
        "Hi there! I'm here to answer your questions about Rizwanul's work and skills. 👋",
        "Greetings! I'm the digital assistant for Rizwanul Rudro. What would you like to know? ✨"
    ],
    skills: [
        "Rizwanul is skilled in Python, Java, JavaScript, C++, React, Node.js, and many more technologies! 💻",
        "He specializes in competitive programming, full-stack development, and problem-solving. 🚀",
        "His technical skills include web development, algorithms, data structures, and database management. 🎯",
        "Rizwanul is an AI & Machine Learning expert with expertise in Deep Learning, Neural Networks, Computer Vision, and NLP! 🧠"
    ],
    projects: [
        "Rizwanul has worked on various projects including Weather Prediction, Lung Cancer Survival Predictor, and Insurance Prediction models! 🛠️",
        "His projects showcase his expertise in React, Node.js, Python, and modern web technologies. 📱",
        "You can check out his GitHub profile for more details on his projects and contributions. 🔗",
        "His ML projects demonstrate advanced techniques in data science and predictive analytics! 📊"
    ],
    contact: [
        "You can reach Rizwanul through WhatsApp (+880 1710265574), Telegram, or his social media profiles! 📞",
        "Feel free to connect with him on LinkedIn, GitHub, or send him a message on any of his social platforms. 📧",
        "He's always open to discussing new opportunities and collaborations. Let's connect! 🤝",
        "For immediate contact, you can call him directly or use the WhatsApp option in this widget! 📱"
    ],
    experience: [
        "Rizwanul is currently pursuing his Bachelor's in Computer Science & Engineering with focus on AI engineering principles. 🎓",
        "He has achieved perfect GPAs in both HSC (5.00) and SSC (5.00), showing exceptional academic excellence! 🏆",
        "His experience includes competitive programming, open-source contributions, and research in AI/ML. 🔬",
        "He's passionate about bridging the gap between cutting-edge AI research and practical industry applications! 🌟"
    ],
    default: [
        "That's an interesting question! Let me think about that... 🤔",
        "I'm still learning, but I can help you with information about Rizwanul's skills, projects, and contact details! 📚",
        "Hmm, I'm not sure about that specific question, but I'd be happy to tell you about Rizwanul's expertise! 💭",
        "I can tell you about Rizwanul's skills, projects, experience, or help you connect with him. What interests you most? 🤖"
    ]
};

// Function to get random response from array
function getRandomResponse(responses) {
    return responses[Math.floor(Math.random() * responses.length)];
}

// Function to add message to chatbot
function addChatbotMessage(message, isUser = false) {
    const messagesContainer = document.getElementById('chatbot-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chatbot-message ${isUser ? 'user' : 'bot'}`;
    
    const messageContent = document.createElement('div');
    messageContent.className = 'chatbot-message-content';
    messageContent.textContent = message;
    
    messageDiv.appendChild(messageContent);
    messagesContainer.appendChild(messageDiv);
    
    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Function to generate bot response
function generateBotResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Add typing indicator
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chatbot-message bot typing';
    typingDiv.innerHTML = '<div class="chatbot-message-content">🤖 is typing...</div>';
    document.getElementById('chatbot-messages').appendChild(typingDiv);
    
    setTimeout(() => {
        document.getElementById('chatbot-messages').removeChild(typingDiv);
        
        let response;
        if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
            response = getRandomResponse(chatbotResponses.greetings);
        } else if (message.includes('skill') || message.includes('technology') || message.includes('programming') || message.includes('ai') || message.includes('ml')) {
            response = getRandomResponse(chatbotResponses.skills);
        } else if (message.includes('project') || message.includes('work') || message.includes('github')) {
            response = getRandomResponse(chatbotResponses.projects);
        } else if (message.includes('contact') || message.includes('phone') || message.includes('email') || message.includes('reach') || message.includes('call')) {
            response = getRandomResponse(chatbotResponses.contact);
        } else if (message.includes('experience') || message.includes('education') || message.includes('background') || message.includes('degree')) {
            response = getRandomResponse(chatbotResponses.experience);
        } else {
            response = getRandomResponse(chatbotResponses.default);
        }
        
        addChatbotMessage(response);
    }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
}

// Send chatbot message
function sendChatbotMessage() {
    const input = document.getElementById('chatbot-input');
    const message = input.value.trim();
    
    if (message) {
        addChatbotMessage(message, true);
        input.value = '';
        generateBotResponse(message);
    }
}

// Handle enter key in chatbot input
function handleChatbotInput(event) {
    if (event.key === 'Enter') {
        sendChatbotMessage();
    }
}

// Close chatbot when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('chatbot-modal');
    if (event.target === modal && chatbotOpen) {
        closeChatbot();
    }
});

// Close chatbot with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && chatbotOpen) {
        closeChatbot();
    }
});

// Show notification after 3 seconds
setTimeout(() => {
    const notification = document.getElementById('contact-notification');
    if (notification) {
        notification.style.animation = 'bounce 1s infinite';
    }
}, 3000);

// Project card hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Skill item hover effects
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(10px) scale(1.05)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0) scale(1)';
    });
});

// Social link hover effects
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.05)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Achievement card animations
document.querySelectorAll('.achievement-card').forEach((card, index) => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) rotate(2deg)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotate(0deg)';
    });
});

// Gallery item click effects
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        this.style.transform = 'scale(1.1) rotate(5deg)';
        setTimeout(() => {
            this.style.transform = 'scale(1.05)';
        }, 200);
    });
});

// Smooth reveal animation for sections
const revealSections = document.querySelectorAll('section');
const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -200px 0px"
};

const revealOnScroll = new IntersectionObserver(function(entries, revealOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('revealed');
            revealOnScroll.unobserve(entry.target);
        }
    });
}, revealOptions);

revealSections.forEach(section => {
    revealOnScroll.observe(section);
});

// Add CSS for revealed sections
const revealStyle = document.createElement('style');
revealStyle.textContent = `
    section {
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.8s ease;
    }
    
    section.revealed {
        opacity: 1;
        transform: translateY(0);
    }
    
    .hero {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(revealStyle);

// Particle effect for hero section
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        pointer-events: none;
        animation: particleFloat 6s linear infinite;
    `;
    
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 6 + 's';
    
    document.querySelector('.hero').appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 6000);
}

// Create particles periodically
setInterval(createParticle, 300);

// Add particle animation CSS
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes particleFloat {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

// Initialize all animations and effects
document.addEventListener('DOMContentLoaded', function() {
    // Add loading animation
    const loader = document.createElement('div');
    loader.className = 'loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-spinner"></div>
            <p>Loading Portfolio...</p>
        </div>
    `;
    document.body.appendChild(loader);
    
    // Remove loader after page loads
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.remove();
        }, 500);
    }, 1000);
    
    // Add loader styles
    const loaderStyle = document.createElement('style');
    loaderStyle.textContent = `
        .loader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            transition: opacity 0.5s ease;
        }
        
        .loader-content {
            text-align: center;
            color: white;
        }
        
        .loader-spinner {
            width: 50px;
            height: 50px;
            border: 3px solid rgba(255, 255, 255, 0.3);
            border-top: 3px solid white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 1rem;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(loaderStyle);
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Scroll-based animations
}, 16)); // ~60fps

// Lightbox functionality
function openLightbox(imageSrc, caption) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    
    lightboxImage.src = imageSrc;
    lightboxImage.alt = caption;
    lightboxCaption.textContent = caption;
    
    lightbox.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close lightbox with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeLightbox();
    }
});

// Close lightbox when clicking outside the image
document.addEventListener('click', function(event) {
    const lightbox = document.getElementById('lightbox');
    if (event.target === lightbox) {
        closeLightbox();
    }
});
