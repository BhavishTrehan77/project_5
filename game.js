let moles = document.querySelectorAll(".mole");
let score = 0;
let scoreDisplay = document.getElementById("score");
let gameWon = false;

// Randomly activate moles every 1 second
setInterval(function () {
    if (gameWon) return; // Stop if game is won
    
    for (let i = 0; i < moles.length; i++) {
        let mole = moles[i];
        mole.classList.remove('active');
        mole.style.backgroundColor = "gray";
    }
    
    let index = Math.floor(Math.random() * 3);
    let selectedMole = moles[index];
    selectedMole.classList.add('active');
    selectedMole.style.backgroundColor = "green";
}, 1000);

// Handle mole clicks
moles.forEach(function (mole) {
    mole.addEventListener("click", function () {
        if (mole.classList.contains("active") && !gameWon) {
            score += 1;
            scoreDisplay.textContent = score;
            mole.classList.remove('active');
            mole.style.backgroundColor = "gray";
            
            if (score == 5) {
                gameWon = true;
                document.getElementById("greet").textContent = "Hurray! You won";
                document.getElementById("restart").style.display = "block";
                document.getElementById("restart").style.margin = "auto";
            }
        }
    });
});

// Restart button functionality
document.getElementById("restart").addEventListener("click", function () {
    location.reload();
});