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
// const arrayOdds = Object.values(game.odds);
// let total = 0;
// for (const odd of arrayOdds) {
//   total += odd;
// }
// const averageOdd = total / arrayOdds.length;
// console.log(averageOdd);

// Question 3
// const {
//   team1,
//   team2,
//   odds: {team1: oddT1, x: draw, team2: oddT2},
// } = game;

// for (const odd of arrayOdds) {
//   if (odd === 1.33) {
//     console.log(`Odd of victory ${team1}: ${oddT1}`);
//   } else if (odd === 3.25) {
//     console.log(`Odd of draw: ${draw}`);
//   } else if (odd === 6.5) {
//     console.log(`Odd of victory ${team2}: ${oddT2}`);
//   }
// }

// SOLUTION
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

// Question 4
// Try looping through the game object
// Get the scored propeties
// loop through it
// Add conditions to check if the keys are the same or not
// If they are then add to the goals scored
// else create a new propety in the object
// const scorers = {};
// const playersScored = Object.values(game.scored);
// for (const scorer of goalsScored) {
//   if (scorers[scorer] === goalsScored[scorer]) {
//     scorers[scorer] += 1;
//   } else {
//     scorers.goalsScored[scorer] = goalsScored[scorer];
//   }
// }

// for (let x of game.scored) {
//   scorers[x]++ || (scorers[x] = 1);
// }

// console.log(scorers);

// ========================
// CHALLENGE 3

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "� Substitution"],
  [47, "⚽ GOAL"],
  [61, "� Substitution"],
  [64, "� Yellow card"],
  [69, "� Red card"],
  [70, "� Substitution"],
  [72, "� Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "� Yellow card"],
]);

// Question 1
const values = [...gameEvents.values()];
const events = new Set(values);
// console.log(events);

// Question 2
gameEvents.delete(64);
console.log(gameEvents);
