const textLines = [
    "hello",
    "my name is adarsh"
];

const terminal = document.getElementById('terminal');
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
            setTimeout(typeWriter, 150); 
        } else {
            lineIndex++;
            charIndex = 0;
            setTimeout(typeWriter, 500); 
        }
    }
}

window.onload = typeWriter;
