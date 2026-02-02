class Employee{

    constructor(id, firstName, lastName, email,contactNumber,location,birthDate)
    {
        if(new.target === Employee)
        {
            throw new Error("Employee is an abstract class and cannot be instantiated");
        }
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.contactNumber = contactNumber;
        this.location = location;
        this.birthDate = birthDate;
    }

    //Abstract method ---JavaScript does not have abstract keyword. We enforce abstraction by throwing errors in base class methods.
    doWork()
    {
        throw new Error("doWork() must be implemented by derived classes");
    }

    //Virtual method
    computePay() 
    {
        return 0;
    }
    toString()
    {
        return `Employee[${this.constructor.name}]
        Id: ${this.id}
        Name: ${this.fiirstname} ${this.lastName}
        Email: ${this.email}
        Location: ${this.location}`;
    }
}

module.exports = Employee;   //This is Node.js syntax used to share code between files.
                            //When another file imports this module, give it the Employee class.
