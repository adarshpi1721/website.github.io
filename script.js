const textLines = [
    "hello",
    "my name is adarsh"
];

const terminal = document.getElementById('terminal');
const navMenu = document.getElementById('nav-menu');

// Initialize terminal with a dedicated text span and a permanent cursor span
terminal.innerHTML = '<span id="typed-text"></span><span class="cursor"></span>';
const typedText = document.getElementById('typed-text');

let lineIndex = 0;
let charIndex = 0;

function typeWriter() {
    if (lineIndex < textLines.length) {
        if (charIndex < textLines[lineIndex].length) {
            // Append the next single character
            typedText.innerHTML += textLines[lineIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 120); 
        } else {
            // Line finished, append a line break
            typedText.innerHTML += "<br>";
            lineIndex++;
            charIndex = 0;
            setTimeout(typeWriter, 400); 
        }
    } else {
        // Animation complete, reveal the menu
        navMenu.classList.remove('hidden');
    }
}

window.onload = typeWriter;
