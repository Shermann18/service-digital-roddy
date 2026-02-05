// Configuration - REMPLACE CES VALEURS
const config = {
    whatsapp: "261340880914", // Ton numéro WhatsApp
    email: "ellidashermann@gmail.com",
    services: {
        PowerPoint: "PowerPoint",
        Excel: "Excel",
        Word: "Word",
        Arduino: "Arduino",
        Design: "Logo & Design",
        Formation: "Formation"
    }
};

// DOM Elements
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const whatsappForm = document.getElementById('whatsappForm');
const notification = document.getElementById('notification');

// Menu Mobile
menuBtn.addEventListener('click', () => {
    mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Fermer le menu mobile en cliquant sur un lien
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Soumission du formulaire WhatsApp
whatsappForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Récupération des données du formulaire
    const formData = {
        name: document.getElementById('name').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        service: document.getElementById('service').value,
        budget: document.getElementById('budget').value,
        details: document.getElementById('details').value.trim(),
        payment: document.getElementById('payment').value,
        date: new Date().toLocaleString('fr-FR')
    };
    
    // Validation simple
    if (!formData.name || !formData.phone || !formData.service || !formData.budget || !formData.payment) {
        showNotification('Veuillez remplir tous les champs obligatoires', 'error');
        return;
    }
    
    // Formater le message WhatsApp
    const whatsappMessage = formatWhatsAppMessage(formData);
    
    // Encoder le message pour URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Créer le lien WhatsApp
    const whatsappLink = `https://wa.me/${config.whatsapp}?text=${encodedMessage}`;
    
    // Afficher notification
    showNotification('Redirection vers WhatsApp...', 'success');
    
    // Attendre un peu avant la redirection
    setTimeout(() => {
        window.open(whatsappLink, '_blank');
    }, 1000);
    
    // Réinitialiser le formulaire
    setTimeout(() => {
        whatsappForm.reset();
    }, 2000);
});

// Formater le message WhatsApp
function formatWhatsAppMessage(data) {
    return `
🛒 NOUVELLE COMMANDE DIGITAL RODDY
━━━━━━━━━━━━━━━━━━━━━━━━
👤 CLIENT: ${data.name}
📱 WHATSAPP: ${data.phone}
━━━━━━━━━━━━━━━━━━━━━━━━
🎯 SERVICE: ${data.service}
💰 BUDGET: ${data.budget} Ar
💳 PAIEMENT: ${data.payment}
━━━━━━━━━━━━━━━━━━━━━━━━
📝 DÉTAILS DU PROJET:
${data.details || 'Aucun détail fourni'}
━━━━━━━━━━━━━━━━━━━━━━━━
🕐 DATE: ${data.date}
━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ IMPORTANT: Envoyez la preuve de paiement en photo.
Merci pour votre confiance ! 🚀
    `.trim();
}

// Afficher une notification
function showNotification(message, type = 'success') {
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    notification.className = `notification ${type}`;
    notification.classList.add('show');
    
    // Masquer après 5 secondes
    setTimeout(() => {
        notification.classList.remove('show');
    }, 5000);
}

// Changer l'apparence de la navbar au scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.backdropFilter = 'blur(15px)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    }
});

// Fermer le menu mobile si on clique en dehors
document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.style.display = 'none';
    }
});

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    console.log('Digital Roddy - Site prêt !');
    
    // Mettre à jour l'année dans le footer
    const yearSpan = document.querySelector('.footer-bottom p');
    if (yearSpan) {
        yearSpan.innerHTML = yearSpan.innerHTML.replace('2026', new Date().getFullYear());
    }
    
    // Remplacer les numéros de téléphone dans le HTML
    document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
        link.href = link.href.replace('261340880914', config.whatsapp);
    });
    
    // Remplacer les emails
    document.querySelectorAll('a[href^="mailto"]').forEach(link => {
        link.href = link.href.replace('ellidashermann@gmail.com', config.email);
    });
});
// Données des exemples pour chaque service
const portfolioExamples = {
    powerpoint: {
        title: "Présentations PowerPoint Professionnelles",
        description: "Création de présentations percutantes avec design moderne, animations fluides et infographies personnalisées.",
        images: [
            "exemples/powerpoint1.jpg",
            "exemples/powerpoint2.jpg", 
            "exemples/powerpoint3.jpg"
        ],
        time: "24-48 heures",
        price: "20,000 Ar",
        guarantee: "3 révisions gratuites"
    },
    excel: {
        title: "Solutions Excel Avancées",
        description: "Automatisation de processus, création de dashboards dynamiques et modèles de gestion.",
        images: [
            "exemples/excel1.jpg",
            "exemples/excel2.jpg",
            "exemples/excel3.jpg"
        ],
        time: "24-72 heures",
        price: "25,000 Ar",
        guarantee: "Support technique inclus"
    },
    design: {
        title: "Design & Identité Visuelle",
        description: "Création de logos uniques, chartes graphiques et visuels pour réseaux sociaux.",
        images: [
            "exemples/design1.jpg",
            "exemples/design2.jpg", 
            "exemples/design3.jpg"
        ],
        time: "48-96 heures",
        price: "30,000 Ar",
        guarantee: "Jusqu'à 5 propositions"
    },
    arduino: {
        title: "Projets Arduino & IoT",
        description: "Développement de systèmes domotiques, formations et projets électroniques personnalisés.",
        images: [
            "exemples/arduino1.jpg",
            "exemples/arduino2.jpg",
            "exemples/arduino3.jpg"
        ],
        time: "Sur devis",
        price: "À partir de 50,000 Ar",
        guarantee: "Support 1 mois"
    }
};

// DOM Elements pour la modal
const portfolioModal = document.getElementById('portfolioModal');
const modalClose = document.getElementById('modalClose');
const modalCarousel = document.getElementById('modalCarousel');
const modalTitle = document.getElementById('modalTitle');
const modalServiceName = document.getElementById('modalServiceName');
const modalServiceDesc = document.getElementById('modalServiceDesc');
const modalTime = document.getElementById('modalTime');
const modalPrice = document.getElementById('modalPrice');
const modalGuarantee = document.getElementById('modalGuarantee');

// Variables pour le carrousel
let currentSlide = 0;
let currentService = '';

// Ouvrir la modal au clic sur un projet
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', () => {
        const service = item.dataset.service;
        openPortfolioModal(service);
    });
});

// Fermer la modal
modalClose.addEventListener('click', closePortfolioModal);
portfolioModal.addEventListener('click', (e) => {
    if (e.target === portfolioModal) {
        closePortfolioModal();
    }
});

// Fonction pour ouvrir la modal
function openPortfolioModal(service) {
    if (!portfolioExamples[service]) return;
    
    currentService = service;
    currentSlide = 0;
    
    const data = portfolioExamples[service];
    
    // Mettre à jour le contenu
    modalTitle.textContent = `Exemples - ${data.title}`;
    modalServiceName.textContent = data.title;
    modalServiceDesc.textContent = data.description;
    modalTime.textContent = data.time;
    modalPrice.textContent = data.price;
    modalGuarantee.textContent = data.guarantee;
    
    // Créer le carrousel
    updateCarousel(data.images);
    
    // Afficher la modal
    portfolioModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Fonction pour fermer la modal
function closePortfolioModal() {
    portfolioModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Mettre à jour le carrousel
function updateCarousel(images) {
    modalCarousel.innerHTML = '';
    
    images.forEach((imgSrc, index) => {
        const slide = document.createElement('div');
        slide.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = `
            <img src="${imgSrc}" alt="Exemple ${index + 1}">
        `;
        modalCarousel.appendChild(slide);
    });
    
    // Ajouter les boutons de navigation
    const prevBtn = document.createElement('button');
    prevBtn.className = 'carousel-nav carousel-prev';
    prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevBtn.addEventListener('click', prevSlide);
    
    const nextBtn = document.createElement('button');
    nextBtn.className = 'carousel-nav carousel-next';
    nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextBtn.addEventListener('click', nextSlide);
    
    // Ajouter les points indicateurs
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'carousel-dots';
    
    images.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    modalCarousel.appendChild(prevBtn);
    modalCarousel.appendChild(nextBtn);
    modalCarousel.appendChild(dotsContainer);
}

// Navigation du carrousel
function nextSlide() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = (currentSlide + 1) % slides.length;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function prevSlide() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = index;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Fermer avec la touche Échap
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && portfolioModal.style.display === 'block') {
        closePortfolioModal();
    }
});

// Mettre à jour le bouton Commander pour sélectionner automatiquement le service
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', () => {
        const service = item.dataset.service;
        // Stocker le service sélectionné pour le formulaire
        localStorage.setItem('selectedService', service);
    });
});

// Dans la fonction d'initialisation, ajoute ceci pour pré-remplir le formulaire
document.addEventListener('DOMContentLoaded', () => {
    // ... ton code existant ...
    
    // Si un service était sélectionné dans le portfolio, le pré-remplir dans le formulaire
    const selectedService = localStorage.getItem('selectedService');
    if (selectedService) {
        const serviceSelect = document.getElementById('service');
        if (serviceSelect) {
            // Convertir le nom du service (ex: "powerpoint" -> "PowerPoint")
            const serviceName = selectedService.charAt(0).toUpperCase() + selectedService.slice(1);
            if (selectedService === 'design') {
                serviceSelect.value = 'Design';
            } else if (selectedService === 'arduino') {
                serviceSelect.value = 'Arduino';
            } else {
                serviceSelect.value = serviceName;
            }
        }
        localStorage.removeItem('selectedService');
    }
});