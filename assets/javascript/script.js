
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
        otherLink.style.color = "#64ffda";
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

const nav = document.querySelector('header nav');
const before = document.querySelector(".background")

console.log(before)

window.addEventListener("load", function() {
  if (window.scrollY < 100) {
    // Ajouter la classe qui cache l'élément de navigation
    before.style.display="none";
    nav.style.display="";
  }
});
let isNavFixed = false;

// Ajouter un écouteur d'événement de défilement (scroll)
window.addEventListener('scroll', () => {
  // Vérifiez si la position de défilement est supérieure à 20 pixels et inférieure à 500 pixels
  if (window.scrollY < 100) {
    // Ajouter la classe qui cache l'élément de navigation
    before.style.display="none";
    if (isNavFixed) {
      // Restaurer la position relative de la barre de navigation
      nav.style.top="";
      isNavFixed = false;
    }
    
  } else if(window.scrollY < 500 ) {
    // Sinon, enlevez la classe qui cache l'élément de navigation
    before.style.display="none";
    if (isNavFixed) {
      // Restaurer la position relative de la barre de navigation
      nav.style.position="absolute";
      nav.style.top="";
      isNavFixed = false;
      
    }

  
  }
  else if(window.scrollY > 600 && !isNavFixed) {
    // Sinon, enlevez la classe qui cache l'élément de navigation
    before.style.display="";
    before.style.position="fixed";
    // Animer la transition vers la position fixe
    nav.style.position="fixed";
    nav.animate([
      { opacity: '0', transform: 'translateY(-50px)' },
      { opacity: '1', transform: 'translateY(0)' }
    ], {
      duration: 500,
      easing: 'ease-in-out'
    });
    
    
    before.animate([
      { opacity: '0', transform: 'translateY(-100px)' },
      { opacity: '1', transform: 'translateY(0px)' }


    ], {
      duration: 500,
      easing: 'ease-in-out'
    });
    
    isNavFixed = true;
  }
});
