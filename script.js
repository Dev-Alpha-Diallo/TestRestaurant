// Menu data
const menuItems = [
    {
        id: 1,
        name: "Foie Gras Maison",
        description: "Foie gras de canard mi-cuit, chutney de figues et pain brioché toasté",
        price: "28€",
        category: "entrees"
    },
    {
        id: 2,
        name: "Tartare de Saumon",
        description: "Saumon frais, avocat, citron vert et fines herbes",
        price: "22€",
        category: "entrees"
    },
    {
        id: 3,
        name: "Escargots de Bourgogne",
        description: "Escargots au beurre persillé, ail et fines herbes",
        price: "26€",
        category: "entrees"
    },
    {
        id: 4,
        name: "Filet de Boeuf Rossini",
        description: "Filet de boeuf Charolais, foie gras, sauce au Porto réduit",
        price: "42€",
        category: "plats"
    },
    {
        id: 5,
        name: "Magret de Canard",
        description: "Magret de canard rôti, sauce aux mûres, pommes de terre sautées",
        price: "36€",
        category: "plats"
    },
    {
        id: 6,
        name: "Risotto aux Cèpes",
        description: "Risotto crémeux aux cèpes frais et parmesan Reggiano",
        price: "32€",
        category: "plats"
    },
    {
        id: 7,
        name: "Soufflé au Chocolat",
        description: "Soufflé chaud au chocolat Valrhona, coeur fondant",
        price: "18€",
        category: "desserts"
    },
    {
        id: 8,
        name: "Tarte Tatin",
        description: "Tarte renversée aux pommes caramélisées, crème fraîche",
        price: "16€",
        category: "desserts"
    },
    {
        id: 9,
        name: "Assiette de Fromages",
        description: "Sélection de fromages affinés, confiture de figues et noix",
        price: "20€",
        category: "desserts"
    },
    {
        id: 10,
        name: "Vin Rouge - Château Margaux",
        description: "Grand Cru Classé 2015 - Bordeaux",
        price: "15€/verre",
        category: "boissons"
    },
    {
        id: 11,
        name: "Champagne - Dom Pérignon",
        description: "Champagne brut - 2012",
        price: "25€/verre",
        category: "boissons"
    },
    {
        id: 12,
        name: "Cocktail Signature",
        description: "Gin, citron vert, basilic et sirop de concombre",
        price: "14€",
        category: "boissons"
    }
];

// DOM Elements
const navMenu = document.getElementById('navMenu');
const menuToggle = document.getElementById('menuToggle');
const filterButtons = document.querySelectorAll('.filter-btn');
const menuItemsContainer = document.querySelector('.menu-items');
const bookingForm = document.getElementById('bookingForm');
const confirmationModal = document.getElementById('confirmationModal');
const closeModalButtons = document.querySelectorAll('.close-modal, .close-modal-btn');
const newsletterForm = document.getElementById('newsletterForm');
const statsNumbers = document.querySelectorAll('.stat-number');

// Initialize the site
document.addEventListener('DOMContentLoaded', function() {
    // Initialize menu
    renderMenuItems('all');
    
    // Initialize animations
    initAnimations();
    
    // Initialize statistics counter
    initStatsCounter();
    
    // Set minimum date for reservation to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('date').setAttribute('min', today);
    
    // Set default time to next available hour
    const now = new Date();
    const nextHour = now.getHours() + 1;
    const formattedTime = `${nextHour.toString().padStart(2, '0')}:00`;
    document.getElementById('time').value = formattedTime;
});

// Mobile menu toggle
menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    menuToggle.innerHTML = navMenu.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Render menu items based on filter
function renderMenuItems(filter) {
    menuItemsContainer.innerHTML = '';
    
    let filteredItems = menuItems;
    if (filter !== 'all') {
        filteredItems = menuItems.filter(item => item.category === filter);
    }
    
    filteredItems.forEach(item => {
        const menuItemElement = document.createElement('div');
        menuItemElement.className = 'menu-item wow';
        menuItemElement.setAttribute('data-category', item.category);
        
        menuItemElement.innerHTML = `
            <div class="menu-item-header">
                <h3 class="menu-item-name">${item.name}</h3>
                <span class="menu-item-price">${item.price}</span>
            </div>
            <p class="menu-item-description">${item.description}</p>
            <span class="menu-item-category">${getCategoryLabel(item.category)}</span>
        `;
        
        menuItemsContainer.appendChild(menuItemElement);
    });
    
    // Re-initialize animations for new elements
    initScrollAnimations();
}

// Get category label in French
function getCategoryLabel(category) {
    const labels = {
        'entrees': 'Entrée',
        'plats': 'Plat principal',
        'desserts': 'Dessert',
        'boissons': 'Boisson'
    };
    return labels[category] || category;
}

// Filter menu items
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Get filter value
        const filter = this.getAttribute('data-filter');
        
        // Render filtered items
        renderMenuItems(filter);
    });
});

// Handle booking form submission
bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;
    
    // In a real application, you would send this data to a server
    console.log('Reservation submitted:', { name, email, date, time, guests });
    
    // Show confirmation modal
    confirmationModal.style.display = 'flex';
    
    // Reset form
    bookingForm.reset();
    
    // Set default values again
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('date').setAttribute('min', today);
    const now = new Date();
    const nextHour = now.getHours() + 1;
    const formattedTime = `${nextHour.toString().padStart(2, '0')}:00`;
    document.getElementById('time').value = formattedTime;
    document.getElementById('guests').value = '2';
});

// Handle newsletter subscription
newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const emailInput = this.querySelector('input[type="email"]');
    const email = emailInput.value;
    
    // In a real application, you would send this to a server
    console.log('Newsletter subscription:', email);
    
    // Show success message
    alert('Merci de vous être abonné à notre newsletter !');
    
    // Reset form
    emailInput.value = '';
});

// Close modal
closeModalButtons.forEach(button => {
    button.addEventListener('click', function() {
        confirmationModal.style.display = 'none';
    });
});

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    if (e.target === confirmationModal) {
        confirmationModal.style.display = 'none';
    }
});

// Initialize animations on scroll
function initAnimations() {
    // Add wow class to elements that should animate on scroll
    const elementsToAnimate = document.querySelectorAll('.section-header, .menu-item, .about-text, .about-image, .reservation-form, .contact-info, .contact-map');
    
    elementsToAnimate.forEach(element => {
        element.classList.add('wow');
    });
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Animate hero elements on load
    const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-buttons');
    heroElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('animated');
        }, index * 300);
    });
}

// Scroll animation function
function initScrollAnimations() {
    const wowElements = document.querySelectorAll('.wow');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add delay based on element's data attribute
                const delay = entry.target.getAttribute('data-wow-delay') || 0;
                
                setTimeout(() => {
                    entry.target.classList.add('animated');
                }, parseFloat(delay) * 1000);
                
                // Stop observing after animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    wowElements.forEach(element => {
        observer.observe(element);
    });
}

// Animate statistics counters
function initStatsCounter() {
    statsNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60fps
        
        let current = 0;
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current);
        }, 16);
    });
}

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(18, 18, 18, 0.98)';
        navbar.style.padding = '0.8rem 0';
    } else {
        navbar.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
        navbar.style.padding = '1.2rem 0';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});