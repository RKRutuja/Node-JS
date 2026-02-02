const Employee = require("./Employee");

var managerBenefit = require("./Interfaces/IManagerBenefits.js");
var  InterviewPanel = require("./Interfaces/IInterviewPanel.js");
var  Audit = require("./Interfaces/IAuditable.js");

class HRManager extends Employee{

    constructor(
        id,firstName,lastName,email,
        contactNumber,location,birthDate,
        incentive, target, achievedTarget,
        basicSalary, hra
    ){
        super(id, firstName.lastName,email,contactNumber,location,birthDate);
        this.incentive = incentive;
        this.target = target;
        this.achievedTarget = achievedTarget;
        this.basicSalary = basicSalary;
        this.hra = hra;
    };

    doWork() {
        console.log(`${this.firstName} is managing the HR team and strategy.`);
    };

    computePay() {
        return super.computePay() + this.bonus;
    };
    CalculateBonus()
    {
        return this.bonus;
    };
    Audit()
    {
        console.log("HR Manager audit completed.");
    };
    conductAppraisal()
    {
        console.log("HR Manager appraisal completed.");
    };
    ApproveLeave()
    {
        console.log("Leave approved by HR Manager.");
    };
    TakeInterview()
    {
        console.log("HR Manager conducting interview.");
    };
    Train()
    {
         console.log("HR Manager training sales team.");
    }
}

module.exports = HRManager;
