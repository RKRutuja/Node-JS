let level = 10;           // Number
let spell = "Fireball";    // String
//let isAlive = true;       // Boolean
//let inventory = ["potion","scroll"]; // Array
let hero = { name: "Aria", class: "Mage" }; // Object

// 1. Arithmetic operators: total damage from 3 attacks
let attack1 = 25;
let attack2 = 30;
let attack3 = 20;

let totalDamage = attack1 + attack2 + attack3;
console.log("Total Damage:", totalDamage);

// 2. Logical operators: can the hero cast a spell?
let mana = 50;
let spellCost = 40;
let isAlive = true;

let canCastSpell = (mana >= spellCost) && isAlive;
console.log("Can cast spell:", canCastSpell);

// 3. Comparison operators: compare hero levels
let heroLevel = 10;
let enemyLevel = 8;

console.log("Hero level > Enemy level:", heroLevel > enemyLevel);
console.log("Hero level == Enemy level:", heroLevel === enemyLevel);
console.log("Hero level < Enemy level:", heroLevel < enemyLevel);


function castSpell(spellName) 
{
  console.log("Casting " + spellName);
}
castSpell("Raj"); //function calling in JS

let cast = (spellName) => console.log("Casting " + spellName);
cast("Raj"); //Arrow function calling in JS

let heroHealth = 50;
if (heroHealth > 0) {
  console.log("Alive");
} else {
  console.log("Defeated");
}

for (let round = 1; round <= 5; round++) {
  console.log("Attack round:", round);
}


let manafruit = 30;
let spellCost1 = 5;

while (manafruit > 0) {
  console.log("Casting spell. Mana left:", manafruit);
  manafruit -= spellCost1;
}
console.log("Out of mana!");


let weapon = { name: "Sword", damage: 50, type: "Melee" };
let inventory = ["potion", "scroll", "ring"];

for(let item of inventory)
{
  console.log(item);
}

// Hero stats
/*
Function castSpell(spellName)
Input: spellName as string
Output: Logs the spell being cast
*/