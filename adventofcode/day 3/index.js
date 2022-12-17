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

let priority = [
    ["a",1],
    ["b",2],
    ["c",3],
    ["d",4],
    ["e",5],
    ["f",6],
    ["g",7],
    ["h",8],
    ["i",9],
    ["j",10],
    ["k",11],
    ["l",12],
    ["m",13],
    ["n",14],
    ["o",15],
    ["p",16],
    ["q",17],
    ["r",18],
    ["s",19],
    ["t",20],
    ["u",21],
    ["v",22],
    ["w",23],
    ["x",24],
    ["y",25],
    ["z",26],
    ["A",27],
    ["B",28],
    ["C",29],
    ["D",30],
    ["E",31],
    ["F",32],
    ["G",33],
    ["H",34],
    ["I",35],
    ["J",36],
    ["K",37],
    ["L",38],
    ["M",39],
    ["N",40],
    ["O",41],
    ["P",42],
    ["Q",43],
    ["R",44],
    ["S",45],
    ["T",46],
    ["U",47],
    ["V",48],
    ["W",49],
    ["X",50],
    ["Y",51],
    ["Z",52]
]

let rucksack = syncReadFile('day 3/input.txt');

let part1, part2, totalPoints = 0;

for(let i = 0; i < rucksack.length; i++)
{
    DivideContent(rucksack[i]);
    let commonValue = compareParts(part1, part2);
    let points = getPoints(commonValue);
    totalPoints += points;
    console.log("totalPoints: "+totalPoints+" points: "+points);
}

//Get the content of rucksack and divide it in two parts
function DivideContent(content)
{
    let middle = (content.length/2);//minus 1 because we start counting at 0
    part1 = content.substring(0, middle);
    part2 = content.substring(middle, content.length);
}

function compareParts(first, second) 
{
    first = Array.from(first);
    second = Array.from(second);
    result = first.filter(value => second.includes(value));
    return result[0];
}

function getPoints(letter)
{
    for(let i = 0; i < priority.length; i++)
    {
        if(letter == priority[i][0])
        {
            return priority[i][1];
        }
    }
    return 0;
}
