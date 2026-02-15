var fs=require("fs");  //importing fs module

var data="This is sample text for file operations using fs module in NodeJS";
fs.writeFileSync("../Data/transflower.txt",data); //synchronous write