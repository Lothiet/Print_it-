const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.jpg",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Sélection des flèches gauche et droite
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');

// Ajout d'un écouteur d'événements sur la flèche gauche
leftArrow.addEventListener('click', function() {
    console.log('Flèche gauche cliquée');
});

// Ajout d'un écouteur d'événements sur la flèche droite
rightArrow.addEventListener('click', function() {
    console.log('Flèche droite cliquée');
});

// Sélectionnez tous les bullets
const bullets = document.querySelectorAll('.dot');

// Fonction pour mettre à jour les bullets en fonction de l'index de l'image actuelle
function updateBullets() {
    // Réinitialisez tous les bullets pour les désactiver
    bullets.forEach(bullet => bullet.classList.remove('active'));
    // Activez le bullet correspondant à l'image actuelle
    bullets[currentIndex].classList.add('active');
}


// Fonction pour mettre à jour le contenu des phrases associées à l'image
function updateTagLine() {
    // Sélectionnez la phrase associée à l'image actuelle
    const tagLine = document.querySelector('.carousel p');
    // Mettez à jour le contenu de la phrase avec celui de l'image actuelle
    tagLine.innerHTML = slides[currentIndex].tagLine;
}

// Fonction pour déplacer le carrousel vers la droite 
// Sélection des images du carrousel
const bannerImg= document.querySelectorAll('.banner-img');

// Variable pour suivre l'index de la première image visible
let currentIndex = 0;

// Fonction pour déplacer le carrousel vers la droite
function moveCarouselRight() {
    // Masquer l'image actuelle en déplaçant son positionnement vers la gauche
    bannerImg[currentIndex].style.transform = 'translateX(-100%)';
    
    // Incrémenter l'index de l'image actuelle
    currentIndex++;

    // Vérifier si nous avons atteint la dernière image
    if (currentIndex === bannerImg.length) {
        // Si oui, revenir à la première image
        currentIndex = 0;
    }

    // Afficher la nouvelle image en déplaçant son positionnement vers la gauche
    bannerImg[currentIndex].style.transform = 'translateX(0)';
      // Mettre à jour les phrases associées à l'image
      updateTagLine();
	 // Mettre à jour les bullets après le changement de diapositive
	 updateBullets();
}

// Ajout d'un écouteur d'événements sur la flèche droite
rightArrow.addEventListener('click', function() {
    console.log('Flèche droite cliquée');
    moveCarouselRight();
});

// Fonction pour déplacer le carrousel vers la gauche
function moveCarouselLeft() {
    // Masquer l'image actuelle en déplaçant son positionnement vers la droite
    bannerImg[currentIndex].style.transform = 'translateX(100%)';
    
    // Décrémenter l'index de l'image actuelle
    currentIndex--;

    // Vérifier si nous avons atteint la première image
    if (currentIndex < 0) {
        // Si oui, passer à la dernière image
        currentIndex = bannerImg.length - 1;
    }

    // Afficher la nouvelle image en déplaçant son positionnement vers la droite de 0 pixel
    bannerImg[currentIndex].style.transform = 'translateX(0)';
      // Mettre à jour les phrases associées à l'image
      updateTagLine();
    // Mettre à jour les bullets après le changement de diapositive
    updateBullets();
}

// Ajout d'un écouteur d'événements sur la flèche gauche
leftArrow.addEventListener('click', function() {
    console.log('Flèche gauche cliquée');
    moveCarouselLeft();
});
