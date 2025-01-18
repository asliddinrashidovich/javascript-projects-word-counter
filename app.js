const characters = document.getElementById('characters');
const words = document.getElementById('words');
const text = document.getElementById('text');

let allWords = '';
const nonPrintableKeys = [
    'Enter', 'Tab', 'Shift', 'Control', 
    'Alt', 'CapsLock', 'Escape', 'Meta', 'ArrowUp', 
    'ArrowDown', 'ArrowLeft', 'ArrowRight', 'PageUp', 
    'PageDown', 'End', 'Home', 'Insert', 'Delete', 'Pause', 
    'ScrollLock', 'NumLock', 'ContextMenu', 'F1', 'F2', 
    'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 
    'F11', 'F12', 'Space'
];

function removeSpacesBetweenWords(text) {
    return text.replace(/\s+/g, '');
}
  

const characterCounter = () => {
    const result = removeSpacesBetweenWords(allWords)
    characters.textContent = result.trim().length;  
}

const wordCounter = () => {
    const result = allWords.split(' ')
    words.textContent = result.length;  
}

const keyUpreplace = () => {
    allWords = text.value;
    characterCounter();
    wordCounter();
}

text.addEventListener('keyup', (e) => {
    if(!nonPrintableKeys.includes(e.code)) {
        keyUpreplace();
    } else if(e.code == 'Backspace')  {
        keyUpreplace();
    }
})
