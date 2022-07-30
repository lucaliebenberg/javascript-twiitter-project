const TOTAL_CHARS = 280,
    enteredCharsBox = document.getElementById('entered-chars'),
    remainedCharsBox = document.getElementById('remained-chars'),
    messageBox = document.querySelector('.wrapper textarea');

let enteredChars = 0,
    remainedChars = TOTAL_CHARS;

window.addEventListener('DOMContentLoaded', () => {
    enteredCharsBox.textContent = enteredChars;
    remainedCharsBox.textContent = remainedChars;
});

messageBox.addEventListener('keyup', updateCharsInfo);
messageBox.addEventListener('paste', updateCharsInfo);

function updateCharsInfo(){
    enteredChars = messageBox.value.length;
    remainedChars = TOTAL_CHARS - enteredChars;

    if(enteredChars > TOTAL_CHARS){
        let tempChars = messageBox.value.slice(0, 280);
        messageBox.value = tempChars;
        enteredChars = messageBox.value.length;
        remainedChars = TOTAL_CHARS - enteredChars;
    }

    enteredCharsBox.textContent = enteredChars;
    remainedCharsBox.textContent = remainedChars;
}
