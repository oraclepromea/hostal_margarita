// Reviews carousel functionality - Show only 2 reviews, cycle every 4 seconds
let currentSlide = 0;
const slides = document.querySelectorAll('.review-slide');
const indicators = document.querySelectorAll('.indicator');

function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Show current slide
    if (slides[index]) {
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
    }
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Auto-advance slides every 4 seconds
function startCarousel() {
    setInterval(nextSlide, 4000);
}

// Manual navigation
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Enhanced scroll effects for navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image img');
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Enhanced intersection observer with stagger animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100); // Stagger effect
        }
    });
}, observerOptions);

// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth reveal animations for elements
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.feature, .room-card, .activity-card, .review-card, .highlight-item');
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        staggerObserver.observe(el);
    });
    
    // Initialize carousel
    if (slides.length > 0) {
        showSlide(0);
        startCarousel();
    }
    
    // Add floating animation to particles
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
        particle.style.animationDelay = `${index * 0.5}s`;
        particle.style.animationDuration = `${6 + (index % 3)}s`;
    });
});

// Add CSS for fade in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    .nav-toggle.active .bar:nth-child(2) {
        opacity: 0;
    }
    
    .nav-toggle.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }
    
    .nav-toggle.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }
`;
document.head.appendChild(style);

// Translation functionality
const translations = {
    en: {
        // Navigation
        "nav-home": "Home",
        "nav-about": "About",
        "nav-rooms": "Rooms",
        "nav-activities": "Activities",
        "nav-contact": "Contact",
        
        // Hero Section
        "hero-title": "Welcome to Hostal Margarita",
        "hero-subtitle": "Experience the magic of Isle del Sol on the mystical Lake Titicaca",
        "hero-cta": "Book Your Stay",
        
        // About Section
        "about-title": "Discover Paradise on Isle del Sol",
        "about-description": "Nestled on the sacred Isle del Sol in Bolivia's stunning Lake Titicaca, Hostal Margarita offers an authentic and comfortable retreat where ancient Inca legends come alive. Our charming hostal provides the perfect base to explore this mystical island, known as the birthplace of the sun in Inca mythology.",
        "feature-views-title": "Breathtaking Views",
        "feature-views-desc": "Wake up to stunning panoramic views of Lake Titicaca and the surrounding Andes mountains.",
        "feature-comfort-title": "Modern Comfort",
        "feature-comfort-desc": "Enjoy modern amenities including WiFi, hot water, and comfortable beds in a traditional setting.",
        "feature-cuisine-title": "Local Cuisine",
        "feature-cuisine-desc": "Savor delicious traditional Bolivian dishes made with fresh, local ingredients.",
        
        // Rooms Section
        "rooms-title": "Our Accommodations",
        "rooms-description": "Experience comfort and traditional Bolivian charm in our beautifully decorated rooms",
        "room-traditional-title": "Traditional Room",
        "room-traditional-desc": "Cozy room featuring beautiful traditional Andean artwork and comfortable bedding. Perfect for couples or solo travelers seeking an authentic cultural experience.",
        "room-comfort-title": "Comfort Room",
        "room-comfort-desc": "Spacious and comfortable room with quality bedding and modern amenities. Ideal for travelers who want comfort while experiencing island life.",
        "room-superior-title": "Superior Room",
        "room-superior-desc": "Our finest accommodation featuring premium amenities and the best views. Perfect for special occasions or travelers seeking luxury on the island.",
        "amenity-bathroom": "Private bathroom",
        "amenity-decor": "Traditional decor",
        "amenity-water": "Hot water",
        "amenity-bedding": "Comfortable bedding",
        "amenity-queen-bed": "Queen-size bed",
        "amenity-mountain-views": "Mountain views",
        "amenity-storage": "Extra storage space",
        "amenity-lake-views": "Lake Titicaca views",
        "amenity-premium-bathroom": "Premium bathroom",
        "amenity-sitting-area": "Sitting area",
        "amenity-breakfast": "Complimentary breakfast",
        "book-now": "Book Now",
        
        // Activities Section
        "activities-title": "Explore Isle del Sol",
        "activity-ruins-title": "Ancient Ruins Trek",
        "activity-ruins-desc": "Explore the sacred Inca ruins and temples scattered across the island, including the famous Pilko Kaina complex.",
        "activity-boat-title": "Lake Titicaca Boat Tours",
        "activity-boat-desc": "Discover the crystal-clear waters of the world's highest navigable lake on traditional boats.",
        "activity-sunset-title": "Sunrise & Sunset Views",
        "activity-sunset-desc": "Witness breathtaking sunrises and sunsets over the Andes from our scenic viewpoints.",
        "activity-culture-title": "Cultural Experiences",
        "activity-culture-desc": "Meet local families and learn about traditional Aymara culture and ancient customs.",
        "activity-photo-title": "Photography Tours",
        "activity-photo-desc": "Capture the stunning landscapes and unique architecture with guided photography walks.",
        "activity-nature-title": "Nature Walks",
        "activity-nature-desc": "Explore the island's diverse flora and fauna on peaceful walking trails.",
        
        // Reviews Section
        "reviews-title": "What Our Guests Say",
        "reviews-cta-text": "Join hundreds of satisfied guests who have experienced the warmth and hospitality of Hostal Margarita",
        "reviews-cta-button": "Book Your Stay Today",
        
        // Contact Section
        "contact-title": "Plan Your Visit",
        "contact-info-title": "Get in Touch",
        "contact-directions-title": "How to Get Here",
        "contact-directions-desc": "Take a boat from Copacabana harbor to Isle del Sol. Our hostal is located in the main village area, easily accessible from the boat landing.",
        "location-title": "About Isle del Sol",
        "boat-schedule-title": "Boat Schedule",
        "boat-schedule-desc": "Boats from Copacabana depart at 8:30 AM and 1:30 PM daily. Return trips at 10:30 AM and 3:30 PM.",
        "island-tips-title": "Island Tips",
        "island-tips-desc": "Bring warm clothes for evening, comfortable walking shoes, and cash (no ATMs on the island).",
        "best-time-title": "Best Time to Visit",
        "best-time-desc": "April to October offers clear skies and dry weather. Peak season is June to August.",
        "why-choose-title": "Why Choose Us",
        "why-choose-desc": "Family-run hostal with personal attention, local knowledge, and genuine Bolivian hospitality.",
        "contact-cta-title": "Ready to Experience Isle del Sol?",
        "contact-cta-desc": "Contact us directly via WhatsApp for instant responses about availability, rates, and travel tips!",
        "whatsapp-cta": "Message Us on WhatsApp",
        
        // Footer
        "footer-copyright": "© 2025 Hostal Margarita, Isle del Sol. All rights reserved.",
        "footer-tagline": "Experience the magic of Lake Titicaca at Bolivia's most beautiful island destination."
    },
    es: {
        // Navigation
        "nav-home": "Inicio",
        "nav-about": "Acerca de",
        "nav-rooms": "Habitaciones",
        "nav-activities": "Actividades",
        "nav-contact": "Contacto",
        
        // Hero Section
        "hero-title": "Bienvenidos a Hostal Margarita",
        "hero-subtitle": "Vive la magia de la Isla del Sol en el místico Lago Titicaca",
        "hero-cta": "Reserva tu Estadía",
        
        // About Section
        "about-title": "Descubre el Paraíso en la Isla del Sol",
        "about-description": "Ubicado en la sagrada Isla del Sol en el impresionante Lago Titicaca de Bolivia, Hostal Margarita ofrece un refugio auténtico y cómodo donde las antiguas leyendas incas cobran vida. Nuestro encantador hostal proporciona la base perfecta para explorar esta isla mística, conocida como el lugar de nacimiento del sol en la mitología inca.",
        "feature-views-title": "Vistas Impresionantes",
        "feature-views-desc": "Despierta con vistas panorámicas espectaculares del Lago Titicaca y las montañas de los Andes.",
        "feature-comfort-title": "Comodidad Moderna",
        "feature-comfort-desc": "Disfruta de comodidades modernas incluyendo WiFi, agua caliente y camas cómodas en un ambiente tradicional.",
        "feature-cuisine-title": "Cocina Local",
        "feature-cuisine-desc": "Saborea deliciosos platos tradicionales bolivianos hechos con ingredientes frescos y locales.",
        
        // Rooms Section
        "rooms-title": "Nuestros Alojamientos",
        "rooms-description": "Experimenta la comodidad y el encanto tradicional boliviano en nuestras habitaciones bellamente decoradas",
        "room-traditional-title": "Habitación Tradicional",
        "room-traditional-desc": "Habitación acogedora con hermoso arte andino tradicional y ropa de cama cómoda. Perfecta para parejas o viajeros solos que buscan una experiencia cultural auténtica.",
        "room-comfort-title": "Habitación Confort",
        "room-comfort-desc": "Habitación espaciosa y cómoda con ropa de cama de calidad y comodidades modernas. Ideal para viajeros que quieren comodidad mientras experimentan la vida en la isla.",
        "room-superior-title": "Habitación Superior",
        "room-superior-desc": "Nuestro mejor alojamiento con comodidades premium y las mejores vistas. Perfecto para ocasiones especiales o viajeros que buscan lujo en la isla.",
        "amenity-bathroom": "Baño privado",
        "amenity-decor": "Decoración tradicional",
        "amenity-water": "Agua caliente",
        "amenity-bedding": "Ropa de cama cómoda",
        "amenity-queen-bed": "Cama queen",
        "amenity-mountain-views": "Vistas a las montañas",
        "amenity-storage": "Espacio de almacenamiento extra",
        "amenity-lake-views": "Vistas al Lago Titicaca",
        "amenity-premium-bathroom": "Baño premium",
        "amenity-sitting-area": "Área de estar",
        "amenity-breakfast": "Desayuno incluido",
        "book-now": "Reservar Ahora",
        
        // Activities Section
        "activities-title": "Explora la Isla del Sol",
        "activity-ruins-title": "Caminata a Ruinas Antiguas",
        "activity-ruins-desc": "Explora las ruinas y templos incas sagrados esparcidos por la isla, incluyendo el famoso complejo Pilko Kaina.",
        "activity-boat-title": "Tours en Bote por el Lago Titicaca",
        "activity-boat-desc": "Descubre las aguas cristalinas del lago navegable más alto del mundo en botes tradicionales.",
        "activity-sunset-title": "Vistas de Amanecer y Atardecer",
        "activity-sunset-desc": "Contempla amaneceres y atardeceres impresionantes sobre los Andes desde nuestros miradores escénicos.",
        "activity-culture-title": "Experiencias Culturales",
        "activity-culture-desc": "Conoce familias locales y aprende sobre la cultura tradicional aymara y costumbres ancestrales.",
        "activity-photo-title": "Tours de Fotografía",
        "activity-photo-desc": "Captura los paisajes impresionantes y arquitectura única con caminatas fotográficas guiadas.",
        "activity-nature-title": "Caminatas en la Naturaleza",
        "activity-nature-desc": "Explora la flora y fauna diversa de la isla en senderos tranquilos.",
        
        // Reviews Section
        "reviews-title": "Lo que Dicen Nuestros Huéspedes",
        "reviews-cta-text": "Únete a cientos de huéspedes satisfechos que han experimentado la calidez y hospitalidad de Hostal Margarita",
        "reviews-cta-button": "Reserva tu Estadía Hoy",
        
        // Contact Section
        "contact-title": "Planifica tu Visita",
        "contact-info-title": "Ponte en Contacto",
        "contact-directions-title": "Cómo Llegar Aquí",
        "contact-directions-desc": "Toma un bote desde el puerto de Copacabana hacia la Isla del Sol. Nuestro hostal está ubicado en el área del pueblo principal, fácilmente accesible desde el desembarcadero.",
        "location-title": "Acerca de la Isla del Sol",
        "boat-schedule-title": "Horarios de Botes",
        "boat-schedule-desc": "Los botes desde Copacabana salen a las 8:30 AM y 1:30 PM diariamente. Viajes de regreso a las 10:30 AM y 3:30 PM.",
        "island-tips-title": "Consejos para la Isla",
        "island-tips-desc": "Trae ropa abrigada para la noche, zapatos cómodos para caminar y efectivo (no hay cajeros automáticos en la isla).",
        "best-time-title": "Mejor Época para Visitar",
        "best-time-desc": "Abril a octubre ofrece cielos despejados y clima seco. La temporada alta es de junio a agosto.",
        "why-choose-title": "Por Qué Elegirnos",
        "why-choose-desc": "Hostal familiar con atención personal, conocimiento local y hospitalidad boliviana genuina.",
        "contact-cta-title": "¿Listo para Experimentar la Isla del Sol?",
        "contact-cta-desc": "¡Contáctanos directamente vía WhatsApp para respuestas instantáneas sobre disponibilidad, tarifas y consejos de viaje!",
        "whatsapp-cta": "Escríbenos por WhatsApp",
        
        // Footer
        "footer-copyright": "© 2025 Hostal Margarita, Isla del Sol. Todos los derechos reservados.",
        "footer-tagline": "Experimenta la magia del Lago Titicaca en el destino insular más hermoso de Bolivia."
    }
};

let currentLanguage = 'en';

function translatePage(lang) {
    currentLanguage = lang;
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Save language preference
    localStorage.setItem('preferredLanguage', lang);
}

// Initialize language toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    // Language toggle functionality
    const langButtons = document.querySelectorAll('.lang-btn');
    
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    if (savedLanguage !== 'en') {
        translatePage(savedLanguage);
    }
    
    // Add click handlers for language buttons
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedLang = button.getAttribute('data-lang');
            translatePage(selectedLang);
        });
    });
});