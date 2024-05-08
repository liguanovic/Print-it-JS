"use strict";

// *************** CONSTANTS *************** 

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

const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const image = document.querySelector('.banner-img');
const tagLine = document.querySelector('.banner-tagline');
const dots = document.querySelector(".dots");

const LENGTH = slides.length;
const IMG_URL = './assets/images/slideshow/';

// *************** VARIABLES *************** 

let positionSlide = 0;
let allDots;

// *************** FUNCTIONS *************** 

function updateContent() {
  image.src = IMG_URL + slides[positionSlide].image;
  tagLine.innerHTML = slides[positionSlide].tagLine;
}

function updateDots() {
  for (let i = 0; i < allDots.length; i++) {
    allDots[i].classList.remove("dot_selected");
  }

  allDots[positionSlide].classList.add("dot_selected");
}

function slideLeft() {
  positionSlide = (positionSlide - 1 + LENGTH) % LENGTH;

  updateContent();
  updateDots();
}

function slideRight() {
  positionSlide = (positionSlide + 1) % LENGTH;

  updateContent();
  updateDots();
}

function addListeners() {
  leftArrow.addEventListener("click", slideLeft);
  rightArrow.addEventListener("click", slideRight);
}

/**
 * Initializes the carousel by adding event listeners, creating dots for each slide,
 * and selecting the first dot.
 *
 * @return {void} This function does not return a value.
 */
function startCarousel() {
  let i;
  addListeners();

  for (let i = 0; i < slides.length; i++) {
    const addDot = document.createElement("span");
    addDot.classList.add("dot");
    dots.appendChild(addDot);
  }

  if (i === 0) addDot.classList.add("dot_selected");
  
  allDots = document.querySelectorAll(".dot");
  updateDots();
}

// *************** MAIN *************** 

startCarousel();
