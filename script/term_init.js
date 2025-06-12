function startAsciiLoadingBar(asciiBar) {
    const spinnerFrames = ['⣾', '⣽', '⣻', '⢿', '⡿', '⣟', '⣯', '⣷'];
    let spinnerIndex = 0;
    const totalDuration = 3000;
    const intervalTime = 100;
    let elapsed = 0;
    const loadingInterval = setInterval(() => {
        spinnerIndex = (spinnerIndex + 1) % spinnerFrames.length;
        asciiBar.textContent = spinnerFrames[spinnerIndex];
        elapsed += intervalTime;
        if (elapsed >= totalDuration) {
            clearInterval(loadingInterval);
            asciiBar.textContent = '✔';
        }
    }, intervalTime);
}
function startTextLoadingAnimation(element, baseText) {
    let count = 0;
    element.textContent = baseText;
    const interval = setInterval(() => {
        count = (count + 1) % 4;
        element.textContent = baseText + '.'.repeat(count);
    }, 500);
    return interval;
}
function clearAndExpandTerminalScene() {
    const terminalScene = document.getElementById('terminalScene');
    terminalScene.removeAttribute('style');
    if (terminalScene) {
        terminalScene.innerHTML = '';
        terminalScene.style.position = 'fixed';
        terminalScene.style.top = '50%';
        terminalScene.style.left = '50%';
        terminalScene.style.transform = 'translate(-50%, -50%)';
        terminalScene.style.width = '99%';
        terminalScene.style.height = '90%';
        terminalScene.style.background = '#000';
        terminalScene.style.border = "1px solid #00FF00";
        terminalScene.style.margin = '0';
        terminalScene.style.padding = '0';
        terminalScene.style.overflow = 'hidden';
        terminalScene.style.display = 'flex';
        terminalScene.style.alignItems = 'center';
        terminalScene.style.justifyContent = 'center';        
    }
}

/**
 * Main Part :
 */
const textElement = document.createElement('p');
const placeholder = document.getElementById('init_placeholder');
startTextLoadingAnimation(textElement,"Bienvenue");
if (placeholder) {
    placeholder.appendChild(textElement);
    const asciiBar = document.createElement('pre');
    asciiBar.style.fontFamily = 'IBMPlexMono';
    asciiBar.style.marginTop = '10px';
    asciiBar.style.fontSize = '18px';
    placeholder.appendChild(asciiBar);
    startAsciiLoadingBar(asciiBar);
    setTimeout(() => {
        clearAndExpandTerminalScene();
        const script = document.createElement('script');
        script.src = '/script/term_base.js';
        script.type = 'text/javascript';
        document.body.appendChild(script);
    }, 4000);
}
