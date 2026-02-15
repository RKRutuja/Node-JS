/*function add(a, b) {
  return a + b;
}

function square(num) {
  return num * num;
}

function greet(name) {
  return "Hello, " + name;
}*/

const add = (a, b) => console.log(a + b);
add(10,10);

const square = num =>console.log(num * num);
square(2,10);

const greet = name => {return "Hello, " + name;}
console.log(greet("Rutuja"));

let nums = [1,2,3];
let doubled =console.log( nums.map(n => n*2));

//Destructure an array of 4 spells and log the first two.
// Array
let arr = [10, 20, 30, 40];
let [first, second] = arr;
console.log(first, second); // 10 20

const spells = ["Fireball", "Ice Blast", "Lightning Strike", "Heal"];
const [spell1, spell2] = spells;
console.log(spell1,spell2);

//Destructure an object weapon with properties name, damage, type
// Object
//let hero = {name: "Aria", level: 5};
//let {name, level} = hero;
//console.log(name, level); // Aria 5


const weapon = { name: "Aria", damage: 45, type: "Melee"};
const { name, damage, type } = weapon;
console.log(name, damage,type);


// Array spread
let arr1 = [1,2];
let arr2 = [...arr1, 3,4]; // [1,2,3,4]
console.log(arr2);

// Object spread
let obj1 = {x:1, y:2};
let obj2 = {...obj1, z:3}; // {x:1, y:2, z:3}
console.log(obj2);


//Merge two arrays of treasure items using the spread operator.
const treasureChest1 = ["gold coins", "silver sword", "emerald"];
const treasureChest2 = ["ruby", "ancient map", "magic ring"];
const allTreasures = [...treasureChest1, ...treasureChest2];
console.log(allTreasures);


//Clone an object and add a new property.
const treasure = {name: "Golden Crown",value: 5000};
const updatedTreasure = {...treasure,rarity: "legendary"};
console.log(updatedTreasure);

//Array Methods - map, filter, and reduce

let numbers = [1,2,3,4,5];

//map
let squared = numbers.map(n =>n*n);
console.log(squared);

//filter
let even = numbers.filter(n=>n%2===0);
console.log(even);

//reduce
let sum= numbers.reduce((total,n)=>total+n,0);  //addition of array elements and give single value --->0 is value of total variable
console.log(sum);

//find
const users = [{ id: 1 }, { id: 2 }];
const user = users.find(u => u.id === 2);
console.log(user);

//findIndex
let index = numbers.findIndex(n => n > 3);
console.log(index);

//includes()
let fruit = ["apple", "banana"].includes("apple"); // true
console.log(fruit);

//Use map to increase each hero level by 1.
let heroLevel = [1,2,3,4,5];
let increaseHL = heroLevel.map(n=>n+1);
console.log(increaseHL);

//Use filter to select only high-level heroes (level > 3)
let filterHL = heroLevel.filter(n=>n>3);
console.log(filterHL);

//Use reduce to calculate total damage from an array of attack points.

let attackPoints = [1,2,3,4,5];
let totalDamage = attackPoints.reduce((total,n)=>total+n,0);
console.log(totalDamage);

