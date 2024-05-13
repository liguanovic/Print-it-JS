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

/**
 * Updates the content of the image and tagline based on the current positionSlide.
 *
 */
function updateContent() {
  image.src = IMG_URL + slides[positionSlide].image;
  tagLine.innerHTML = slides[positionSlide].tagLine;
}

/**
 * Updates the dots in the carousel to indicate the current slide.
 *
 * @return {void} This function does not return a value.
 */
function updateDots() {
  for (let i = 0; i < allDots.length; i++) {
    allDots[i].classList.remove("dot_selected");
  }

  allDots[positionSlide].classList.add("dot_selected");
}

/**
 * Decrements the positionSlide variable by 1 and wraps it around to the end of the slides array if it goes below 0.
 * Calls the updateContent and updateDots functions to update the displayed content and dot indicators.
 *
 * @return {void} This function does not return a value.
 */
function slideLeft() {
  positionSlide = (positionSlide - 1 + LENGTH) % LENGTH;

  updateContent();
  updateDots();
}

/**
 * Increments the positionSlide variable by 1 and wraps it around to 0 if it exceeds the length of the slides array.
 * Calls the updateContent and updateDots functions to update the displayed content and dot indicators.
 *
 * @return {void} This function does not return a value.
 */
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
