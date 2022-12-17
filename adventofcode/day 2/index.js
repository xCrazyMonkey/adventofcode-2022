/**
 * Day 2 advent of code
 * Rock defeats scissors
 * scissors defeat paper
 * paper defeats rock
 * Both players pick the same, its a draw
 * ======================================
 * You always get these points regardless if you win/lose
 * Choose   letter      points
 * Rock     (A) (X)     1
 * Paper    (B) (Y)     2
 * Scissors (C) (Z)     3
 * 
 * Lose                 0
 * Draw                 3
 * Win                  6
 */
 const {
    readFileSync,
    promises: fsPromises
} = require('fs');

//Function to read out files
function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');

    const arr = contents.split(/\r?\n/);

    //console.log(arr); // 👉️ ['One', 'Two', 'Three', 'Four']

    return arr;
}

var strat = syncReadFile('day 2/input.txt');

//console.log(strat);

let totalPoints = 0;
for(let i = 0; i < strat.length; i++)
{
    elfPick = strat[i].charAt(0);
    playerPick = strat[i].charAt(2);
    totalPoints += playGame(elfPick, playerPick);
    console.log(i+". elf: "+elfPick+" player: "+playerPick+" totalPoints: "+totalPoints);
}
console.log("totalPoints: "+totalPoints);
console.log("strat.length: "+strat.length);


function playGame(elf,player)
{
    //let points = giveChoicePoints(player);
    let points = 0;
    /*
    switch(player)
    {
        case 'X': //lose
            points += 0;
        break;
        case 'Y': //draw
            points += 3;
        break;
        case 'Z': //win
            points += 6;
        break;
    }*/

    //Game logic
    switch(elf)
    {
        case 'A'://Rock
            if(player == 'X')
            {
                points += giveChoicePoints("scissors");
            }
            if(player == 'Y')
            {
                points += giveChoicePoints("rock");
                points += 3;
            }
            if(player == 'Z')
            {
                points += giveChoicePoints("paper");
                points += 6;
            }
        break;
        case 'B': //Paper
            if(player == 'X')
            {
                points += giveChoicePoints("rock");
            }
            if(player == 'Y')
            {
                points += giveChoicePoints("paper");
                points += 3;
            }
            if(player == 'Z')
            {
                points += giveChoicePoints("scissors");
                points += 6;
            }
        break;
        case 'C': //Scissors
            if(player == 'X')
            {
                points += giveChoicePoints("paper");
            }
            if(player == 'Y')
            {
                points += giveChoicePoints("scissors");
                points += 3;
            }
            if(player == 'Z')
            {
                points += giveChoicePoints("rock");
                points += 6;
            }
        break;
    }
    return points;
}

function giveChoicePoints(choice)
{
    let choicePoints = 0;
    switch(choice)
    {
        case 'rock':
            choicePoints += 1;
        break;
        case 'paper':
            choicePoints += 2;
        break;
        case 'scissors':
            choicePoints += 3;
        break;
    }
    return choicePoints;
}