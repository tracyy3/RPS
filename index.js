const hands = ["rock", "paper", "scissors"];

function getHand(arr) {
  return arr[Math.trunc(Math.random() * 3)];
}

const playRound = function (player1, player2) {
  const player1Hand = player1.getHand(hands);
  const player2Hand = player2.getHand(hands);
  console.log(
    `${player1.name} chose ${player1Hand} and ${player2.name} chose ${player2Hand}`
  );
  if (
    (player1Hand === "rock" && player2Hand === "scissors") ||
    (player1Hand === "paper" && player2Hand === "rock") ||
    (player1Hand === "scissors" && player2Hand === "paper")
  ) {
    console.log(`${player1.name} WON the hand!`);
    return player1;
  } else if (player1Hand === player2Hand) {
    console.log(`It's a TIE!`);
    return null;
  } else {
    console.log(`${player2.name} WON the hand!`);
    return player2;
  }
};

const playGame = function (player1, player2, playUntil) {
  let player1Wins = playUntil;
  let player2Wins = playUntil;

  while (player1Wins > 0 && player2Wins > 0) {
    const winner = playRound(player1, player2);
    if (winner === player1) player1Wins--;
    if (winner === player2) player2Wins--;
  }

  if (player1Wins === 0) {
    console.log(`${player1.name} WINS the game!`);
    return player1;
  } else {
    console.log(`${player2.name} WINS the game!`);
    return player2;
  }
};

console.log(getHand(hands));

const player1 = {
  name: "Johnnie Walker",
  getHand: (arr) => {
    return arr[Math.trunc(Math.random() * 3)];
  },
};

const player2 = {
  name: "Captain Morgan",
  getHand: (arr) => {
    return arr[Math.trunc(Math.random() * 3)];
  },
};

const player3 = {
  name: "Iichiko Shochu",
  getHand: (arr) => {
    return arr[Math.trunc(Math.random() * 3)];
  },
};

const player4 = {
  name: "Jack Daniel",
  getHand: (arr) => {
    return arr[Math.trunc(Math.random() * 3)];
  },
};

playRound(player1, player2);
playGame(player1, player2, 5);

const playTournament = function (
  player1,
  player2,
  player3,
  player4,
  playUntil
) {
  const winner1 = playGame(player1, player2, playUntil);
  const winner2 = playGame(player3, player4, playUntil);

  const playTournament = playGame(winner1, winner2, playUntil);
  console.log(`${playTournament.name} IS WORLD CHAMPION!!!`);
};

playTournament(player1, player2, player3, player4, 3);

module.exports.hands = hands;
module.exports.player1 = player1;
module.exports.player2 = player2;
// the module needs to be exported from the actual js file!
