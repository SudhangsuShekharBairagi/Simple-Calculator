const calDisplay = document.getElementById("result");
const clickSound = new Audio('click_effect-86995.mp3');
const errorSound = new Audio('error-2-36058.mp3');
const resultSound = new Audio('ting.mp3');
const valueAddFunction = (num) => {
    clickSound.play();
    calDisplay.value += num;
}

const calValue = () => {
    
    try {
        resultSound.play();
        let equation = calDisplay.value;
        let result = eval(equation);

        let history = document.getElementById('history');
        let historyItem = document.createElement('div');
        historyItem.textContent = `${equation} = ${result}`;
        historyItem.className = 'historyItem';
        historyItem.onclick = function() {
            calDisplay.value = equation;
        };
        history.appendChild(historyItem);

        calDisplay.value = result       
    } catch (error) {
        errorSound.play();
        calDisplay.value = "error";
    }

}

const backSpace = () => {
    clickSound.play();
    calDisplay.value = calDisplay.value.slice(0, -1);
}

const clearAll = () => {
    clickSound.play();
    calDisplay.value = "";
}

document.addEventListener('keydown', (e) => {
    const key = e.key;
    if (!isNaN(key) || key === '.' || ['*', '/', '-', '+'].includes(key)) {
        valueAddFunction(key);
    } else if (key === 'Enter') {
        calValue();
    } else if (key === 'Backspace') {
        backSpace();
    } else if (key === 'Delete') {
        clearAll();
    }
});