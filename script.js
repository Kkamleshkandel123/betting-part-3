const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };
  
  // 1.
  const [player1, player2] = game.players;
  console.log(player1);
  console.log(player2);
  
  // 2.
  const [gk, ...fieldPlayers] = player1;
  console.log(gk);
  console.log(fieldPlayers);
  
  // 3.
  const allPlayers = [...game.players[0], ...game.players[1]];
  console.log(allPlayers);
  
  // 4.
  const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
  console.log(players1Final);
  
  // 5.
  const {team1, x:draw, team2} = game.odds;
  console.log(team1, draw, team2);
  
  // 6.
  const printGoals = function (...players) {
    console.log(...players, players.length);
  };
  printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
  printGoals(...game.scored);
  
  // 7.
  team1 < team2 && console.log("Team 1 is more likely to win.");
  team1 > team2 && console.log("Team 2 is more likely to win.");

const {scored} = game;
console.log(scored);

for (const [goal,player] of scored.entries()){
  console.log(`Goal ${goal+1} : ${player}`)
};
//2
let sum = 0,avg;
const value = Object.values(game.odds);
for (const values of value){
 sum = sum + values;
 avg = sum / value.length;
 
}
console.log(`Average odd is ${avg}`);
//3
for (const [team,odd] of Object.entries(game.odds)){
  const strTeam =  team === 'x'? 'draw' : `victory ${game[team]}`
  console.log(`Odd of ${strTeam} : ${odd}`);
}
