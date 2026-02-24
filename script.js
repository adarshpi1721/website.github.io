const textLines = [
    "hello",
    "my name is adarsh"
];

const terminal = document.getElementById('terminal');
const navMenu = document.getElementById('nav-menu');

terminal.innerHTML = '<span id="typed-text"></span><span class="cursor"></span>';
const typedText = document.getElementById('typed-text');

let lineIndex = 0;
let charIndex = 0;

function typeWriter() {
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

// New function to handle expanding the sub-menus
function toggleMenu(event, menuId) {
    event.preventDefault(); // Stops the page from refreshing or jumping
    const menuToToggle = document.getElementById(menuId);
    
    // Toggles the 'hidden' class on the clicked sub-menu
    menuToToggle.classList.toggle('hidden');
}

window.onload = typeWriter;
