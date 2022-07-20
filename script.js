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

// Question 1
let [players1, players2] = game.players;
// Question 2
const [gk, ...fieldPlayers] = players1;
// Question 3
const allPlayers = [...players1, ...players2];
// Question 4
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// Question 5
const {team1, x: draw, team2} = game.odds;
// Question 6
function printGoals(...players) {
  console.log(`${players.length} goals were scored`);
  for (let i = 0; i < players.length; i++) {
    console.log(`${players[i]}`);
  }
}

// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// printGoals(...game.scored);

// Question 7
// team1 < team2 && console.log(`Team 1 is more likely to win`);
// team1 > team2 && console.log(`Team 2 is more likely to win`);

// ======================= CODING CHALLENGE 2 =======================

// Question 1
// let goal = 1;

// for (const player of game.scored) {
//   console.log(`Goal ${goal++}: ${player}`);
// }

// for (let i = 0; i < game.scored.length; i++) {
//   console.log(`Goal ${i + 1}: ${game.scored[i]}`);
// }

// ANSWER
// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${game.scored[i]}`);
// }

// Question 2
// const values = Object.values(game.odds);
// let total = 0;
// for (const avg of values) {
//   total += avg;
// }
// console.log(`The average of the odds are ${total / values.length}`);

// ANSWER
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) {
//   average += odd;
// }
// average /= odds.length;
// console.log(average);

// Question 3
// for (const odd of values) {
//   console.log(`Odd of victory : ${values.}`);
// }

// for (let i = 0; i < values.length; i++) {
//   console.log(`Odd of victory : ${values[i]}`);
// }

// ANSWER
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
