// Menu data avec images
const menuItems = [
    {
        id: 1,
        name: "Foie Gras Maison",
        description: "Foie gras de canard mi-cuit, chutney de figues et pain brioché toasté",
        price: "28€",
        category: "entrees",
        image: "https://images.unsplash.com/photo-1606472976750-8f61dc3831f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1375&q=80"
    },
    {
        id: 2,
        name: "Tartare de Saumon",
        description: "Saumon frais, avocat, citron vert et fines herbes",
        price: "22€",
        category: "entrees",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
        id: 3,
        name: "Escargots de Bourgogne",
        description: "Escargots au beurre persillé, ail et fines herbes",
        price: "26€",
        category: "entrees",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1389&q=80"
    },
    {
        id: 4,
        name: "Filet de Boeuf Rossini",
        description: "Filet de boeuf Charolais, foie gras, sauce au Porto réduit",
        price: "42€",
        category: "plats",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    },
    {
        id: 5,
        name: "Magret de Canard",
        description: "Magret de canard rôti, sauce aux mûres, pommes de terre sautées",
        price: "36€",
        category: "plats",
        image: "https://images.unsplash.com/photo-1563379091339-03246963d9d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
        id: 6,
        name: "Risotto aux Cèpes",
        description: "Risotto crémeux aux cèpes frais et parmesan Reggiano",
        price: "32€",
        category: "plats",
        image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
        id: 7,
        name: "Soufflé au Chocolat",
        description: "Soufflé chaud au chocolat Valrhona, coeur fondant",
        price: "18€",
        category: "desserts",
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80"
    },
    {
        id: 8,
        name: "Tarte Tatin",
        description: "Tarte renversée aux pommes caramélisées, crème fraîche",
        price: "16€",
        category: "desserts",
        image: "https://images.unsplash.com/photo-1602929634269-2a232b8b486e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    },
    {
        id: 9,
        name: "Assiette de Fromages",
        description: "Sélection de fromages affinés, confiture de figues et noix",
        price: "20€",
        category: "desserts",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    },
    {
        id: 10,
        name: "Vin Rouge - Château Margaux",
        description: "Grand Cru Classé 2015 - Bordeaux",
        price: "15€/verre",
        category: "boissons",
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
        id: 11,
        name: "Champagne - Dom Pérignon",
        description: "Champagne brut - 2012",
        price: "25€/verre",
        category: "boissons",
        image: "https://images.unsplash.com/photo-1603561596112-0a132a6c2560?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    },
    {
        id: 12,
        name: "Cocktail Signature",
        description: "Gin, citron vert, basilic et sirop de concombre",
        price: "14€",
        category: "boissons",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
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
    
    // Add lazy loading to images
    initLazyLoading();
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
            <div class="menu-item-img-container">
                <img src="${item.image}" alt="${item.name}" class="menu-item-img" loading="lazy">
            </div>
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <h3 class="menu-item-name">${item.name}</h3>
                    <span class="menu-item-price">${item.price}</span>
                </div>
                <p class="menu-item-description">${item.description}</p>
                <div class="menu-item-footer">
                    <span class="menu-item-category">${getCategoryLabel(item.category)}</span>
                    <button class="btn-order" data-id="${item.id}">
                        <i class="fas fa-plus"></i> Commander
                    </button>
                </div>
            </div>
        `;
        
        menuItemsContainer.appendChild(menuItemElement);
    });
    
    // Add event listeners to order buttons
    document.querySelectorAll('.btn-order').forEach(button => {
        button.addEventListener('click', function() {
            const itemId = parseInt(this.getAttribute('data-id'));
            const menuItem = menuItems.find(item => item.id === itemId);
            
            if (menuItem) {
                alert(`Vous avez commandé : ${menuItem.name} pour ${menuItem.price}\n\nNotre équipe vous contactera pour confirmer votre commande.`);
                
                // Scroll to reservation form
                document.getElementById('reservation').scrollIntoView({ behavior: 'smooth' });
                
                // Pre-fill the reservation form with a note about the order
                document.getElementById('message').value = `Je souhaite commander : ${menuItem.name}`;
            }
        });
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
    const message = document.getElementById('message').value;
    
    // In a real application, you would send this data to a server
    console.log('Reservation submitted:', { name, email, date, time, guests, message });
    
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
    alert('Merci de vous être abonné à notre newsletter ! Vous recevrez nos offres spéciales et actualités.');
    
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
    const elementsToAnimate = document.querySelectorAll('.section-header, .menu-item, .about-text, .about-image, .reservation-form, .contact-info, .contact-map, .gallery-item');
    
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

// Initialize lazy loading for images
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        lazyImages.forEach(img => {
            img.src = img.dataset.src || img.src;
        });
    }
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

// Gallery image modal (optional enhancement)
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        const imgSrc = this.querySelector('img').src;
        const imgAlt = this.querySelector('img').alt;
        
        // Create modal for larger image view
        const modal = document.createElement('div');
        modal.className = 'modal gallery-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <img src="${imgSrc}" alt="${imgAlt}" class="modal-image">
            </div>
        `;
        
        document.body.appendChild(modal);
        modal.style.display = 'flex';
        
        // Close modal
        modal.querySelector('.close-modal').addEventListener('click', function() {
            modal.remove();
        });
        
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.remove();
            }
        });
    });
});

// Add styles for gallery modal
const galleryModalStyles = document.createElement('style');
galleryModalStyles.textContent = `
    .gallery-modal .modal-content {
        max-width: 90%;
        max-height: 90%;
        background: transparent;
        padding: 0;
    }
    
    .modal-image {
        width: 100%;
        height: auto;
        max-height: 80vh;
        object-fit: contain;
        border-radius: 10px;
    }
    
    .gallery-modal .close-modal {
        color: var(--light-color);
        background: rgba(0,0,0,0.5);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 20px;
        right: 20px;
    }
`;
document.head.appendChild(galleryModalStyles);

// Order button styles
const orderButtonStyles = document.createElement('style');
orderButtonStyles.textContent = `
    .btn-order {
        background-color: rgba(255, 215, 0, 0.1);
        color: var(--primary-color);
        border: 1px solid var(--primary-color);
        padding: 0.5rem 1rem;
        border-radius: 50px;
        font-size: 0.9rem;
        cursor: pointer;
        transition: var(--transition);
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .btn-order:hover {
        background-color: var(--primary-color);
        color: var(--dark-color);
    }
`;
document.head.appendChild(orderButtonStyles);