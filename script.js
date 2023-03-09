


// Récupération de tous les liens de la barre de navigation
const navLinks = document.querySelectorAll('nav ul li a');
// Ajout d'un écouteur d'événement de défilement de page
window.addEventListener('scroll', () => {
  // Pour chaque section de la page
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 50; // Décalage de 50 pixels pour compenser la hauteur de la barre de navigation
        const sectionHeight = section.offsetHeight;

        // Vérification si la section est visible à l'écran
        if (window.pageYOffset >= sectionTop && window.pageYOffset < (sectionTop + sectionHeight)) {
            const sectionId = section.getAttribute('id');

        // Suppression de la classe active sur tous les liens de la barre de navigation
            navLinks.forEach(link => link.classList.remove('active'));

        // Ajout de la classe active sur le lien correspondant à la section en cours de visualisation
            navLinks.forEach(link => {
            if (link.getAttribute('href').slice(1) === sectionId) {
            link.classList.add('active');
            }
        });
        } else {
        // Suppression de la classe active si la section n'est plus visible
            const sectionId = section.getAttribute('id');
            navLinks.forEach(link => {
            if (link.getAttribute('href').slice(1) === sectionId) {
                link.classList.remove('active');
            }
        });
        }
    });
});


