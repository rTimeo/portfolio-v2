
// Sélectionnez tous les liens dans la nav
const links = document.querySelectorAll("header ul li a");

// Boucle à travers les liens et ajoute un écouteur d'événement
links.forEach(link => {
  link.addEventListener("mouseenter", () => {
    // Change la couleur de texte pour le lien survolé
    link.style.color = "#64ffda ";
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

//test
const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
const container = document.querySelector('.test');


container.addEventListener("mouseover", () => {
  p1.style.display = "none";
  p2.style.display = "block";
});

container.addEventListener("mouseout", () => {
  p1.style.display = "block";
  p2.style.display = "none";
});
