//Interface Inheritance

class IManagerBenefits{
    
    ApproveLeave(){
      throw new Error("Method 'ApproveLeave()' must be implemented.");  
    };
    conductAppraisal() {
        throw new Error("Method 'conductAppraisal()' must be implemented.");
    };
    calculateBonus() {
        throw new Error("Method 'calculateBonus()' must be implemented.");
    }; 
}

module.exports = IManagerBenefits;
