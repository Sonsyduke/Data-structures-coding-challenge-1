"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// ========================
// CHALLENGE 1

// Question 1:
// const [players1, players2] = game.players;

// Question 2:
// const [gk, ...otherPlayers] = players1;

// Question 3:
// const allPlayers = [...players1, ...players2];

// Question 4:
// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

// Question 5:
// const {team1, x: draw, team2} = game.odds;

// Question 6:
// function printGoals(...players) {
//   for (let i = 0; i < players.length; i++) {
//     console.log(`${players[i]}`);
//   }
// }

// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// printGoals(...game.scored);

// Question 7:
// team1 < team2 && console.log("Team 1 is more likely to win");
// team1 > team2 && console.log("Team 2 is more likely to win");

// ========================
// CHALLENGE 2

// Question 1
// const goals = Object.entries(game.scored);
// for (const [num, player] of goals) {
//   console.log(`Goal ${+num + 1}: ${player}`);
// }

// Question 2
const arrayOdds = Object.values(game.odds);
// let total = 0;
// for (const odd of arrayOdds) {
//   total += odd;
// }
// const averageOdd = total / arrayOdds.length;
// console.log(averageOdd);

// Question 3
const {
  team1,
  team2,
  odds: {team1: oddT1, x: draw, team2: oddT2},
} = game;

for (const odd of arrayOdds) {
  if (odd === 1.33) {
    console.log(`Odd of victory ${team1}: ${oddT1}`);
  } else if (odd === 3.25) {
    console.log(`Odd of draw: ${draw}`);
  } else if (odd === 6.5) {
    console.log(`Odd of victory ${team2}: ${oddT2}`);
  }
}
