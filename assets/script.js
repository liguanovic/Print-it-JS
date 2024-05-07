const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const IMG_URL = './assets/images/slideshow/';
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const image = document.querySelector('.banner-img');
const tagLine = document.querySelector('.banner-tagline');
const dots = document.querySelector(".dots");

let positionSlide = 0;
let allDots;

carousel();

leftArrow.addEventListener("click", slideLeft);
rightArrow.addEventListener("click", slideRight);


function slideLeft() {

	console.log("La flèche de gauche a été cliquée !");
	if (positionSlide == 0) {
		positionSlide = slides.length - 1;
	} else {
		positionSlide--;
	}

	image.src = IMG_URL + slides[positionSlide].image;
    tagLine.innerHTML = slides[positionSlide].tagLine;

	updateDots();

	

};

function slideRight() {

	console.log("La flèche de droite a été cliquée !");
	if (positionSlide == slides.length - 1) {
		positionSlide = 0;
	} else {
		positionSlide++;
	}

	image.src = IMG_URL + slides[positionSlide].image;
    tagLine.innerHTML = slides[positionSlide].tagLine;

	updateDots();

};

function updateDots() {
	for (let i = 0; i < allDots.length; i++) {
		allDots[i].classList.remove("dot_selected");
	}

	allDots[positionSlide].classList.add("dot_selected");
}


function carousel() {

	let i;
    leftArrow.addEventListener("click", slideLeft);
    rightArrow.addEventListener("click", slideRight);

	for (let i = 0; i < slides.length; i++) {
		const addDot = document.createElement("span");
		addDot.classList.add("dot");
		dots.appendChild(addDot);
	}

	if (i === 0) {
		addDot.classList.add("dot_selected");
	}

	allDots = document.querySelectorAll(".dot");

}


