// --- Mini juego de clic rápido ---
const square = document.getElementById("square");
const scoreDisplay = document.getElementById("score");
let score = 0;

// Mueve el cuadrado a una posición aleatoria dentro del área
function moveSquare() {
  const area = document.getElementById("game-area");
  const maxX = area.clientWidth - square.clientWidth;
  const maxY = area.clientHeight - square.clientHeight;
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;
  square.style.left = `${randomX}px`;
  square.style.top = `${randomY}px`;
}

square.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;
  moveSquare();
});

// Inicia el juego moviendo el cuadrado cada 2 segundos
setInterval(moveSquare, 2000);
moveSquare();
