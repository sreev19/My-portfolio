const phrases = [
  "Aspiring Data Analyst",
  "Python Enthusiast",
  "Creative Soul"
];

let currentPhrase = 0;
let currentChar = 0;
const typingElement = document.querySelector(".typing");

function typeEffect() {
  const text = phrases[currentPhrase];
  typingElement.textContent = text.slice(0, currentChar++);
  if (currentChar <= text.length) {
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(() => {
      eraseEffect();
    }, 1500);
  }
}

function eraseEffect() {
  const text = phrases[currentPhrase];
  typingElement.textContent = text.slice(0, currentChar--);
  if (currentChar >= 0) {
    setTimeout(eraseEffect, 50);
  } else {
    currentPhrase = (currentPhrase + 1) % phrases.length;
    setTimeout(typeEffect, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});
