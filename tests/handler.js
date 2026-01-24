//Module : Modularity Event handler module
//Event listeners
//Event handler logic

//expose functions to be used outside  of javascript file
exports. payIncomeTax = function()
{
    console.log("20% income tax to be applied against account");
};
exports. payServiceTax = function()
{
    console.log("18% service tax to be applied against account");
};
exports. blockAccount = function()
{
    console.log("The account has been blocked Temp.");
};
exports. sendEmail = function()
{
    console.log("Email is sent to registered email ID.");
};
exports. sendSMS = function()
{
    console.log("SMS is sent to registered phone number.");
};

