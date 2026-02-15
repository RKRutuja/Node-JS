var flowers=require("../Data/products.json");
var count=56;
count++;

var name="John Doe";
var status=true;
var person={firstName:"Jane", lastName:"Doe", age:30};

console.log("Count value is: "+count);
console.log("Person name:" + person.firstName, person.lastName);

if  (count>50){
    console.log("Count is greater than 50");
}
else{
    console.log("Count is less than or equal to 50");
}

//console.log(flowers);

//loop through the array of objects
for(var i=0;i<flowers.length;i++){
    console.log("Flower Name: "+flowers[i].title+" Price: "+flowers[i].price);
}

