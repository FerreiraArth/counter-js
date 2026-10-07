const milha = document.getElementById('milha');
const centena = document.getElementById('centena');
const dezena = document.getElementById('dezena');
const unidade = document.getElementById('unidade');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

let count = 0;

incrementButton.addEventListener('click', () => {
    count++;
    updateDisplay();
});

function updateDisplay() {
    milha.textContent = Math.floor(count / 1000) % 10;
    centena.textContent = Math.floor(count / 100) % 10;
    dezena.textContent = Math.floor(count / 10) % 10;
    unidade.textContent = count % 10;
}

decrementButton.addEventListener('click', () => {
    count--;
    if (count < 0) {
        count = 0;
    }else {
        updateDisplay();
    }
});

resetButton.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});