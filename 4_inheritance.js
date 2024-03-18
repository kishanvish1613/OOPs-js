class BankAccount {
  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.balance = balance;
    this.accountNumber = Date.now();
  }

  withdraw(amount) {
    this.balance = this.balance - amount;
  }

  deposit(amount) {
    this.balance = this.balance + amount;
  }
}

class CurrentAccount extends BankAccount {
  constructor(customerName, balance) {
    super(customerName, balance);
    this.transactionLimit = 50000;
  }

  withdraw(amount) {
    if(amount > this.transactionLimit){
        console.log("Transaction limit exceeded!");
        return;
    }
    super.withdraw(amount)
  }

  takeBusinessLoan(amount) {
    this.balance = this.balance + amount;
  }
}

class SavingAccount extends BankAccount {
  constructor(customerName, balance) {
    super(customerName, balance);
    this.transactionLimit = 10000;
  }

  withdraw(amount) {
    if(amount > this.transactionLimit){
        console.log("Transaction limit exceeded!");
        return;
    }
    super.withdraw(amount);
  }

  takePersonalLoan(amount) {
    this.balance = this.balance + amount;
  }
}

const rakesh = new SavingAccount("rakesh", 1000);


rakesh.withdraw(900)
console.log(rakesh);
