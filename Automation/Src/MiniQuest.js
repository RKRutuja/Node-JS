
//Use arrow functions for actions.
let action = (actionName) => console.log("Actions " + actionName);
action("Play");
action("Run");
action("Walk");
action("Jump");

//Use destructuring to extract hero and weapon info.

/*let hero = {name: "Aria", level: 5};
let {name, level} = hero;
console.log(name, level); // Aria 5*/


const weapon = { name: "Aria", damage: 45, type: "Melee"};
const { name, damage, type } = weapon;
console.log(name, damage,type);

//Use spread operator to merge item lists.

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

//Use map, filter, and reduce for battle stats.
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

//Modularize: separate hero, enemy, and inventory modules.


