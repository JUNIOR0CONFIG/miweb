// 🎮 Mini juego: clic rápido al cuadrado brillante
const square = document.getElementById("square");
const scoreDisplay = document.getElementById("score");
let score = 0;

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

  // Efecto visual al hacer clic
  square.style.boxShadow = "0 0 35px #ff00ff, 0 0 60px #00ffff";
  setTimeout(() => {
    square.style.boxShadow = "0 0 25px #00ffff";
  }, 150);
});

setInterval(moveSquare, 1500);
moveSquare();
