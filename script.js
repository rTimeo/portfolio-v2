
// Sélectionnez tous les liens dans la nav
const links = document.querySelectorAll("header ul li a");

// Boucle à travers les liens et ajoute un écouteur d'événement
links.forEach(link => {
  link.addEventListener("mouseenter", () => {
    // Change la couleur de texte pour le lien survolé
    link.style.color = "white";
    // Change la couleur de fond pour le lien survolé
    // Boucle à travers les autres liens et change leur couleur de texte et de fond
    links.forEach(otherLink => {
      if (otherLink !== link) {
        otherLink.style.color = "white";
        otherLink.style.opacity ="0.5";
  
      }
    });
  });
  
  link.addEventListener("mouseleave", () => {
    // Change la couleur de texte et de fond pour tous les liens
    links.forEach(otherLink => {
      otherLink.style.color = "white";
      otherLink.style.opacity ="1";
    });
  });

  

});


