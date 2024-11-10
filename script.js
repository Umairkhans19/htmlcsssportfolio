const typewriterText = document.querySelector(".typewriter-text");
const words = ["Web Developer", "Designer", "Freelancer"];
let wordIndex = 0;
let currentWord = "";
let isDeleting = false;

function type() {
    const fullWord = words[wordIndex];

    if (isDeleting) {
        currentWord = fullWord.substring(0, currentWord.length - 1);
    } else {
        currentWord = fullWord.substring(0, currentWord.length + 1);
    }

    typewriterText.textContent = currentWord;

    let typingSpeed = isDeleting ? 100 : 200;

    if (!isDeleting && currentWord === fullWord) {
        typingSpeed = 1000; // Pause after fully typing a word
        isDeleting = true;
    } else if (isDeleting && currentWord === "") {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(type, typingSpeed);
}

type();