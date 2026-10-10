const milha = document.getElementById('milha');
const centena = document.getElementById('centena');
const dezena = document.getElementById('dezena');
const unidade = document.getElementById('unidade');

const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

const resto = document.getElementById('resto');

let count = 0;

function updateDisplay() {
    milha.textContent = Math.floor(count / 1000) % 10;
    centena.textContent = Math.floor(count / 100) % 10;
    dezena.textContent = Math.floor(count / 10) % 10;
    unidade.textContent = count % 10;
}

incrementButton.addEventListener('click' || 'keydown', () => {
    count++;
    resto.textContent = 10000 - count;
    updateDisplay();
});

decrementButton.addEventListener('click', () => {
    count--;
    if (count < 0) {
        count = 0;
    }else {
        resto.textContent = 10000 - count;
        updateDisplay();
    }
});

resetButton.addEventListener('click', () => {
    count = 0;
    resto.textContent = 10000 - count;
    updateDisplay();
});