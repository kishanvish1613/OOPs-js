function BankAccount (customerName, balance) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;

    this.deposit = function (amount) {
        this.balance = this.balance + amount;
    }

    this.withdraw = function (amount) {
        this.balance = this.balance - amount;
    }
}

const ramJiAccount = new BankAccount('Ram ji', 1000);
console.log(ramJiAccount);

ramJiAccount.deposit(500);
console.log(ramJiAccount);

ramJiAccount.withdraw(100);
console.log(ramJiAccount);

// In this example, BankAccount is a constructor function that defines properties (customerName and balance with accountNumber) and two method (deposit, withdraw) for a BankAccount object. When you create a new instance of a BankAccount object using new BankAccount(...), the this keyword inside the constructor function refers to the newly created object.

// Constructor functions are useful for creating multiple instances of similar objects with shared behavior and properties. They are a fundamental concept in JavaScript's object-oriented programming paradigm.