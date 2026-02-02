const SalesEmployee = require("./SalesEmployee");
var managerBenfit = require("./Interfaces/IManagerBenefits");
var InterviewPanel = require("./Interfaces/IInterviewPanel");
var trainer = require("./Interfaces/ITrainer");

class SalesManager extends SalesEmployee {
    constructor(
        id, firstName, lastName, email,
        contactNumber, location, birthDate,
        incentive, target, achievedTarget,
        basicSalary, hra, bonus
    ) {
        super(
            id, firstName, lastName, email,
            contactNumber, location, birthDate,
            incentive, target, achievedTarget,
            basicSalary, hra
        );

        this.bonus = bonus;
    };

    doWork() {
        console.log(`${this.firstName} is managing the sales team and strategy.`);
    };

    computePay() {
        return super.computePay() + this.bonus;
    };
    CalculateBonus()
    {
        return this.bonus;
    };

    conductAppraisal()
    {
        console.log("Manager appraisal completed.");
    };
    ApproveLeave()
    {
        console.log("Leave approved by Sales Manager.");
    };
    TakeInterview()
    {
        console.log("Sales Manager conducting interview.");
    };
    Train()
    {
         console.log("Sales Manager training sales team.");
    }
}

module.exports = SalesManager;