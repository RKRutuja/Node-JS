//classical javascript syntax
//SOC: Seperation of concern 

//Loosely coupled, Highly Cohesive
var handlers = require("./handler"); //custom module
var events = require("events"); //builtin module available in nodejs
var emitter = new events.EventEmitter();

var Account = function(amount){

    var balance = amount;

    //Inner function
    var getBalance = function(){
        return balance;
    };

    var monitor = function()
    {
       if(balance<5000)
       {
        //handlers.blockAccount();
        //console.log("Insufficient funds,Not allowed options to succeed");
        //emit (trigger) event underBalance
        emitter.emit("underBalance");
       }
       else if(balance >=250000)
       {
        // handlers.payIncomeTax();
        //console.log("Crossing the income tax limit,Taxation will be applied");
        //emit (trigger) event overBalance
        emitter.emit("overBalance");
       }
    };

    var withdrow = function(amount){
        balance = balance - amount;
        monitor();
    };

    var deposit = function(amount){
        balance = balance + amount;
        monitor();
    };

    //publish inner function to outside world

    return{
        receiveBalance : getBalance,
        debit : withdrow,
        credit : deposit
    }
};


//events are associated with instances(objects)
//Register Eventhandler with event using emitter object
//adding Action listners to events

//Seperate logic for piplining event handlers for event
emitter.on("underBalance",handlers.blockAccount);
emitter.on("underBalance",handlers.sendEmail);
emitter.on("underBalance",handlers.sendSMS);

emitter.on("overBalance",handlers.payServiceTax);

// Step 2: Create Objects
var acc123 = new Account(55000);       //Creating an object
var acc124 = new Account(5000);
//var data = acc123.receiveBalance();   //Invoking member function
//console.log("Balance = "+ data);
acc123.debit(52000);
//var data = acc123.receiveBalance();

//Step 3: Start invoking their operations
var amount = 200000;
//acc123.credit(amount);
var data = acc123.receiveBalance();
console.log("Balance = "+ data);


