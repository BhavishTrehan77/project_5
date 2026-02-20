let obs = document.getElementById("obstacle");
let dino = document.getElementById("dino");
let isJumping = false;
let isGameOver = false;
let score = 0;

// Jump on spacebar press
document.addEventListener('keydown', function (e) {
    if (e.code === 'Space' && !isJumping && !isGameOver) {
        jump();
    }
});

// Restart game on button click
document.getElementById('playAgain').addEventListener('click', function () {
    location.reload();
});

function jump() {
    isJumping = true;
    dino.classList.add('jump');
    setTimeout(() => {
        dino.classList.remove('jump');
        isJumping = false;
    }, 600);
}

function moveObstacle() {
    let obsLeft = 800;
    setInterval(() => {
        if (obsLeft < -80) {
            obsLeft = 800;
            increaseScore();
        }

        obsLeft -= 10;
        obs.style.left = obsLeft + 'px';
        
        // Check collision
        checkCollision(obsLeft);
    }, 20);
}

function increaseScore() {
    score += 1;
    document.getElementById('score-number').innerText = score;
}

function checkCollision(obsLeft) {
    if (isGameOver || isJumping) return;
    
    // Get dino and obstacle positions
    let dinoLeft = 50;
    let dinoTop = dino.getBoundingClientRect().top;
    let dinoBottom = dino.getBoundingClientRect().bottom;
    
    let obsTop = obs.getBoundingClientRect().top;
    let obsBottom = obs.getBoundingClientRect().bottom;
    
    // Collision detection: only if dino is not jumping
    if (obsLeft < 130 && obsLeft > 0 && dinoBottom > obsTop) {
        gameOver();
    }
}

function gameOver() {
    isGameOver = true;
    document.getElementById('finalscore').innerText = score;
    document.getElementById('gameOver').style.display = 'block';
}

moveObstacle();