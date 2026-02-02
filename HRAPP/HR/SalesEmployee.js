const Employee = require("./Employee");

var Appraisal = require("./Interfaces/IAppraisable.js");

class SalesEmployee extends Employee{

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
    }

    doWork()
    {
        console.log(`${this.firstName} is selling products and meeting clients.`);
    }

    computePAy()
    {
        let totalSalary = this.basicSalary + this.hra;
        if(this.achievedTarget>=this.target)
        {
            totalSalary += this.incentive;
        }
        return totalSalary;
    }
 
    conductAppraisal() {
        console.log("Sales Employee appraisal completed.");
    }
}

module.exports = SalesEmployee;