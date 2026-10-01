class Account{
    constructor(FirstName,LastName){
        this.FirstName=FirstName;
        this.LastName=LastName;
        this.balance=0;
    }
    static AccountNumber = "04591624352";
 static getAccountNumber(){
       console.log(`Your Account Number is ${this.AccountNumber}`);
    }
    credit(amount){
        this.balance+=amount;
    }
    debit(amount){
        this.balance-=amount;
    }
    getAccountBalance(){
        console.log(`${this.FirstName} ${this.LastName}'s Balance is ${this.balance} `);
    }
}
let account = new Account("Shaikh" , "Ashraf");
account.getAccountBalance();
account.credit(2000);
account.debit(560);
account.getAccountBalance();
Account.getAccountNumber();