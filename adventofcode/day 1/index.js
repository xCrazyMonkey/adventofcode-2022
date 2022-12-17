const {readFileSync, promises: fsPromises} = require('fs');

// ✅ read file SYNCHRONOUSLY
function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');

  const arr = contents.split(/\r?\n/);

  //console.log(arr); // 👉️ ['One', 'Two', 'Three', 'Four']

  return arr;
}

var calories = syncReadFile('./input.txt');
var countedCalories = [];
//console.log(calories);

var count = 0;

//Loop through array and count each elves' calories.
for(let i =0; i<calories.length; i++)
{
    if(calories[i] == "")
    {
        countedCalories.push(count);
        count = 0;
    }
    else
    {
        count += parseInt(calories[i]);
    }
}
//Sort the countedCalories by integer. regular arr.sort() sorts by alphabet instead of int value
countedCalories.sort(function(a,b) {return a-b;});
countedCalories.reverse();
console.log(countedCalories);

//Count the three highest and print total.
var total = countedCalories[0] + countedCalories[1] + countedCalories[2]
console.log("total: "+total);


//Get the highest count
/*
var highest = 0;
for(let i =0; i< countedCalories.length; i++)
{
    if(countedCalories[i] > highest)
    {
        highest = countedCalories[i];
    }
}
console.log("highest amount of calories: "+highest);

*/