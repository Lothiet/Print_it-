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
];

// Variable pour suivre l'index de la première image visible
let currentIndex = 0;

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
const bullets = document.querySelector('.dots'); 

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

//fonction pour l'image
function updateImage(slides,currentIndex){
    const image = document.querySelector('.carousel .banner-img');
    const prefixeImage = "./assets/images/slideshow/";
    image.src = prefixeImage + slides[currentIndex].image;
    
}
// Fonction pour déplacer le carrousel vers la droite 
// Sélection des images du carrousel
const bannerImg= document.querySelectorAll('.banner-img');

// Fonction pour déplacer le carrousel vers la droite
function moveCarouselRight(slides,currentIndex) {    
    // Incrémenter l'index de l'image actuelle
    currentIndex++;

    // Vérifier si nous avons atteint la dernière image
    if (currentIndex >= slides.length) {
        // Si oui, revenir à la première image
        currentIndex = 0;
    }

    // Mettre à jour les phrases associées à l'image
    updateTagLine();
    // Mettre à jour l'image
    updateImage(slides,currentIndex);
	 // Mettre à jour les bullets après le changement de diapositive
	 // updateBullets(); 
}

// Ajout d'un écouteur d'événements sur la flèche droite
rightArrow.addEventListener('click', function() {
    console.log('Flèche droite cliquée');
    moveCarouselRight();
});

// Fonction pour déplacer le carrousel vers la gauche
function moveCarouselLeft(slides,currentIndex) {

    // Décrémenter l'index de l'image actuelle
    currentIndex--;

    // Vérifier si nous avons atteint la première image
    if (currentIndex < 0) {
        // Si oui, passer à la dernière image
        currentIndex = bannerImg.length - 1;
    }

    // Mettre à jour les phrases associées à l'image
    updateTagLine();
    // Mettre à jour l'image
    updateImage(slides,currentIndex);
    // Mettre à jour les bullets après le changement de diapositive
    //updateBullets();
}

// Ajout d'un écouteur d'événements sur la flèche gauche
leftArrow.addEventListener('click', function() {
    console.log('Flèche gauche cliquée');
    moveCarouselLeft();
});
