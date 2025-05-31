const terminalContainer = terminalScene;
terminalContainer.style.fontFamily = 'IBMPlexMono';


const terminalInput = document.createElement('input');
terminalInput.type = 'text';
terminalInput.style.background = 'transparent';
terminalInput.style.border = 'none';
terminalInput.style.outline = 'none';
terminalInput.style.fontFamily = 'IBMPlexMono';
terminalInput.style.fontSize = '16px';
terminalInput.autofocus = true;
terminalInput.spellcheck = false;
terminalInput.size = 60;

const promptSpan = document.createElement('span');
promptSpan.textContent = '$ ';
promptSpan.style.userSelect = 'none';

const inputLine = document.createElement('div');
inputLine.appendChild(promptSpan);
inputLine.appendChild(terminalInput);

terminalContainer.appendChild(inputLine);
document.body.appendChild(terminalContainer);

terminalInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const command = terminalInput.value;
        const outputLine = document.createElement('div');
        outputLine.textContent = `$ ${command}`;
        terminalContainer.insertBefore(outputLine, inputLine);
        terminalInput.value = '';
        terminalContainer.scrollTop = terminalContainer.scrollHeight;
    }
});