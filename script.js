body {
    background-color: black;
    color: #00FF41; 
    font-family: 'Courier New', Courier, monospace;
    font-size: 20px;
    margin: 0;
    padding: 40px; /* Forces everything top-left with a clean border */
    box-sizing: border-box;
}

#terminal-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
}

#terminal {
    margin-bottom: 20px;
    line-height: 1.5;
}

.cursor {
    display: inline-block;
    width: 10px;
    height: 20px;
    background-color: #00FF41;
    animation: blink 1s infinite;
    vertical-align: bottom;
}

/* Base menu styling (vertical stack) */
#nav-menu {
    display: flex;
    flex-direction: column;
    gap: 15px; 
}

/* Reliable hiding class */
.hidden {
    display: none !important;
}

.nav-link {
    color: #00FF41;
    text-decoration: none;
    width: fit-content; 
    padding: 2px 5px;
}

.nav-link:hover {
    background-color: #00FF41;
    color: black;
}

@keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
}
