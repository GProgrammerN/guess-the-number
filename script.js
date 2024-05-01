const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const messageElement = document.getElementById('message');
let secretNumber = Math.floor(Math.random() * 100) + 1;

function submitGuess() {
    const guess = parseInt(document.getElementById('guessInput').value);
    if (isNaN(guess) || guess < 1 || guess > 100) {
        updateCanvas("Digite um número entre 1 e 100.");
        return;
    }
    if (guess < secretNumber) {
        updateCanvas("Mais alto!");
    } else if (guess > secretNumber) {
        updateCanvas("Mais baixo!");
    } else {
        updateCanvas("Correto! O número era " + secretNumber);
        secretNumber = Math.floor(Math.random() * 100) + 1;  // Reset o jogo
    }
}

function updateCanvas(message) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "16px Arial";
    ctx.fillText(message, 10, 50);
}

canvas.width = 400;
canvas.height = 100;
updateCanvas("Adivinhe o número entre 1 e 100!");
