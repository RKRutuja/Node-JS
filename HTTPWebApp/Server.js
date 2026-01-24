
//HTTP Web server

var http = require('http');

//this is a rule for web programming
//to define first parameter always as request object
//         second parameter always as response object

var person ={
      'firstname':'Rutuja',
      'lastname':'Kadam',
      'email':'rutujaK@gmail.com',
      'contactnumber':'8991128266'
};

var people =[
      {'firstname':'Rutuja','lastname':'Kadam','email':'rutujaK@gmail.com','contactnumber':'8991128266'},
      {'firstname':'Shilpa','lastname':'Kamble','email':'ShilpaK@gmail.com','contactnumber':'1122334455'},
      {'firstname':'Manohar','lastname':'Nene','email':'ManoharN@gmail.com','contactnumber':'9988776655'},
      {'firstname':'Ram','lastname':'Wagh','email':'RamW@gmail.com','contactnumber':'5566778899'},
      {'firstname':'Taniya','lastname':'Mane','email':'TaniyaM@gmail.com','contactnumber':'1029384756'}
];

var data = "Transflower Learning Pvt Ltd.";
//custom(programmer defined function)
var onRequestHandler = function(request,response){

    //response.writeHead(200,{'content-Thype':'text/html'})
    //response.write("<h1>Welcome to Transflower</h1>");
    //response.end();
    console.log("Request is received...");
    //response.write("<h1>Hello world</h1>"); //inbuilt function
   // response.writeHead(200,{'content-type':"text/json"});

    //Serialization --Deserialization
   // response.write(JSON.stringify(person));
    //response.write(JSON.stringify(people));
    response.writeHead(200,{'content-Thype':'text/html'});
    response.write("<h1>Welcome to the real programmimg world</h1>");
    response.end();
};
var server = http.createServer(onRequestHandler);  //inbuilt function
server.listen(9999); // 0 to 1024 port number
console.log("Server is listening on port no. 9999");

