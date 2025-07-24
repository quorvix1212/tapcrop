let score = 0;
const scoreDisplay = document.getElementById("score");
const tiles = document.querySelectorAll(".tile");

tiles.forEach(tile => {
  tile.addEventListener("click", () => {
    if (tile.dataset.state === "soil") {
      tile.classList.add("grown");
      tile.dataset.state = "crop";
      score += 1;
      scoreDisplay.textContent = score;
    }
  });
});
