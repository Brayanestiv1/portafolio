// Toggle mobile menu
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Typing effect
const texts = ['Desarrollador Backend', 'Diseñador Web', 'Gestor de Bases de Datos'];
let textIndex = 0;
let charIndex = 0;
const typingText = document.getElementById('typing-text');

function type() {
    if (charIndex < texts[textIndex].length) {
        typingText.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        typingText.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 500);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 1000);
});