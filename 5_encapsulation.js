class BankAccount {
  accountName;
  #balance = 0;
  accountNumber;

  constructor(accountName, balance) {
    this.accountName = accountName;
    this.#balance = balance;
    this.accountNumber = Date.now();
  }

  withdraw(amount) {
    this.#balance -= amount;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  setBalance(amount) {
    this.#balance = amount;
  }

  getBalance() {
    return this.#balance;
  }
}

class CurrentAccount extends BankAccount {
  constructor(accountName, balance) {
    super(accountName, balance);
    this.transactionLimit = 50000;
  }

  withdraw(amount) {
    if (amount > this.transactionLimit) {
      throw new Error("Transaction limit exceeded!");
    }
    super.withdraw(amount);
  }

  #calculateInterest(amount) {
    console.log("calculating interest");
  }

  takeBusinessLoan(amount) {
    this.#calculateInterest(amount);
    console.log(`Taking business loan ${amount}`);
  }

  deposit(amount) {
    super.deposit(amount);
  }
}

const amitAccount = new CurrentAccount("Amit", 9009);

amitAccount.setBalance(2000);

const res = amitAccount.getBalance();
console.log(res);

amitAccount.takeBusinessLoan(2000);

console.log(amitAccount);
