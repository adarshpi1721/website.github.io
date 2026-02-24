const textLines = [
    "hello",
    "my name is adarsh"
];

const terminal = document.getElementById('terminal');
const navMenu = document.getElementById('nav-menu');
let lineIndex = 0;
let charIndex = 0;

function typeWriter() {
    if (lineIndex < textLines.length) {
        const currentLine = textLines[lineIndex];
        
        if (charIndex < currentLine.length) {
            let displayedText = "";
            for(let i = 0; i < lineIndex; i++) {
                displayedText += textLines[i] + "<br>";
            }
            displayedText += currentLine.substring(0, charIndex + 1);
            
            terminal.innerHTML = displayedText + '<span class="cursor"></span>';
            
            charIndex++;
            setTimeout(typeWriter, 120); 
        } else {
            lineIndex++;
            charIndex = 0;
            setTimeout(typeWriter, 400); 
        }
    } else {
        // Remove the cursor from the typed text once finished
        terminal.innerHTML = terminal.innerHTML.replace('<span class="cursor"></span>', '');
        
        // Reveal the menu by removing the hidden class
        navMenu.classList.remove('hidden');
    }
}

window.onload = typeWriter;
