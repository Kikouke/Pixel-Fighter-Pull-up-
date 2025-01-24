let playerHP = 100;
let botHP = 100;
let scorePlayer = 0;
let scoreBot = 0;
let round = 1;
let maxRounds = 5; // Limite de rounds

// Fonction pour démarrer le jeu
function startGame() {
  document.getElementById('menu').style.display = 'none';
  document.getElementById('story').style.display = 'block';
}

// Fonction pour quitter le jeu
function exitGame() {
  window.close();  // Ferme la fenêtre si possible (cela ne fonctionne pas sur tous les navigateurs)
}

// Fonction d'attaque
function attack() {
  let damage = Math.floor(Math.random() * 20) + 5;
  botHP -= damage;
  document.getElementById('bot-hp').innerText = "HP: " + botHP;

  if (botHP <= 0) {
    scorePlayer++;
    endRound();
    alert("Le Bot est KO! Tu as gagné ce round.");
  }

  document.getElementById('score').innerText = `${scorePlayer} - ${scoreBot}`;
}

// Fonction de défense
function defend() {
  let reduceDamage = Math.floor(Math.random() * 10) + 1;
  let damage = Math.floor(Math.random() * 20) + 5;
  let finalDamage = Math.max(damage - reduceDamage, 0);
  playerHP -= finalDamage;
  document.getElementById('player-hp').innerText = "HP: " + playerHP;

  if (playerHP <= 0) {
    scoreBot++;
    endRound();
    alert("Tu es KO! Le Bot a gagné ce round.");
  }

  document.getElementById('score').innerText = `${scorePlayer} - ${scoreBot}`;
}

// Fonction spéciale
function special() {
  let damage = Math.floor(Math.random() * 50) + 20;
  botHP -= damage;
  document.getElementById('bot-hp').innerText = "HP: " + botHP;

  if (botHP <= 0) {
    scorePlayer++;
    endRound();
    alert("Le Bot est KO avec l'attaque spéciale! Tu as gagné ce round.");
  }

  document.getElementById('score').innerText = `${scorePlayer} - ${scoreBot}`;
}

function endRound() {
  round++;
  if (round > maxRounds) {
    endGame();
  }
}

// Fonction pour finir le jeu
function endGame() {
  alert(`Le jeu est terminé! Score final: ${scorePlayer} - ${scoreBot}`);
  resetGame();
}

function resetGame() {
  playerHP = 100;
  botHP = 100;
  scorePlayer = 0;
  scoreBot = 0;
  round = 1;
  document.getElementById('game-container').style.display = 'none';
  document.getElementById('menu').style.display = 'block';
}

// Lier les événements aux boutons
document.getElementById('play-button').addEventListener('click', startGame);
document.getElementById('start-combat-button').addEventListener('click', () => {
  document.getElementById('story').style.display = 'none';
  document.getElementById('game-container').style.display = 'block';
});
document.getElementById('attack-button').addEventListener('click', attack);
document.getElementById('defend-button').addEventListener('click', defend);
document.getElementById('special-button').addEventListener('click', special);
