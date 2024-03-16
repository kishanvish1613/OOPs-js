class BankAccount {

    constructor (customerName, bankBalance = 0) {
        this.customerName = customerName;
        this.bankBalance = bankBalance;
        this.accountNumber = Date.now();
    }

    withdraw(amount) {
        this.bankBalance = this.bankBalance - amount;
    }

    deposit(amount) {
        this.bankBalance = this.bankBalance + amount;
    }

}

const kishanAccount = new BankAccount("kishan", 2000);

console.log(kishanAccount);

kishanAccount.withdraw(20);

console.log(kishanAccount);

kishanAccount.deposit(50);

console.log(kishanAccount);

// In JavaScript, by default, this syntax adds the withdraw and deposit functions directly to the prototype chain.