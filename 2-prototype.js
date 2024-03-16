function BankAccount(customerName, balance = 0) {
  this.balance = balance;
  this.customerName = customerName;
  this.accountNumber = Date.now();
}

BankAccount.prototype.withdraw = function (amount) {
    this.balance = this.balance - amount;
};

BankAccount.prototype.deposit = function (amount) {
    this.balance = this.balance + amount;
}

const kishan = new BankAccount("kishan", 1000);
console.log(kishan);

kishan.withdraw(50);
kishan.deposit(1000);

console.log(kishan);


// these two `withdraw` and `deposit` functions are added to the prototype of BankAccount.
// When you create instances of BankAccount. they all share the same withdraw and deposit functions through the prototype chain.
// This means the functions exist in memory only once, when we create instances of BankAccount
// each instance of BankAccount only needs to store its own data, which is relatively memory-efficient.
