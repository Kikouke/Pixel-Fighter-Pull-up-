// Variables du jeu
let playerHP = 100;
let botHP = 100;
let scorePlayer = 0;
let scoreBot = 0;
let round = 1;
let maxRounds = 5; // Limite de rounds

// Fonction pour démarrer le jeu
function startGame() {
  // Cacher le menu et afficher la zone de jeu
  document.getElementById('menu').style.display = 'none';
  document.getElementById('game').style.display = 'block';
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
    alert("Le Bot est KO! Tu as gagné ce round.");
  }

  document.getElementById('score').innerText = `${scorePlayer} - ${scoreBot}`;
}

// Réinitialiser la round
function endRound() {
  round++;
  if (round > maxRounds) {
    alert("Fin de la partie ! Score final: " + scorePlayer + " - " + scoreBot);
    resetGame();
  } else {
    document.getElementById('round').innerText = round;
    playerHP = 100;
    botHP = 100;
    document.getElementById('player-hp').innerText = "HP: " + playerHP;
    document.getElementById('bot-hp').innerText = "HP: " + botHP;
  }
}

// Réinitialiser la partie
function resetGame() {
  round = 1;
  scorePlayer = 0;
  scoreBot = 0;
  document.getElementById('score').innerText = `${scorePlayer} - ${scoreBot}`;
  document.getElementById('round').innerText = round;
  playerHP = 100;
  botHP = 100;
  document.getElementById('player-hp').innerText = "HP: " + playerHP;
  document.getElementById('bot-hp').innerText = "HP: " + botHP;

  // Afficher à nouveau le menu
  document.getElementById('game').style.display = 'none';
  document.getElementById('menu').style.display = 'block';
}
