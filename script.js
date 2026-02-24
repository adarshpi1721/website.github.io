const textLines = [
    "hello",
    "my name is adarsh"
];

let lineIndex = 0;
let charIndex = 0;

// Initializes the terminal safely after the page loads
function initTerminal() {
    const terminal = document.getElementById('terminal');
    terminal.innerHTML = '<span id="typed-text"></span><span class="cursor"></span>';
    setTimeout(typeWriter, 300); // Brief pause before typing starts
}

function typeWriter() {
    const typedText = document.getElementById('typed-text');
    const navMenu = document.getElementById('nav-menu');

    if (lineIndex < textLines.length) {
        if (charIndex < textLines[lineIndex].length) {
            typedText.innerHTML += textLines[lineIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 120); 
        } else {
            typedText.innerHTML += "<br>";
            lineIndex++;
            charIndex = 0;
            setTimeout(typeWriter, 400); 
        }
    } else {
        navMenu.classList.remove('hidden');
    }
}

function toggleMenu(event, menuId) {
    event.preventDefault(); 
    const menuToToggle = document.getElementById(menuId);
    if (menuToToggle) {
        menuToToggle.classList.toggle('hidden');
    }
}

window.onload = initTerminal;
