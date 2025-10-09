//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 2:  MAKE THE BANK
//1. Create the object structure first.
//2. Add the required properties to your object.
//3. Add your first method and test it. Remember, the methods will change the properties of the object.
//4. Add your second method and test it.
//5. Create the required output to complete steps 6-10 of the lab.
//6. Once everything is working, tackle the Stretch Goal!
var customer_1001 = {
    lastName: 'Smith',
    branchNumber: 2001,
    accountBalance: 500.25,
    interestRate: 0.03,
    multipleAccounts: false,
    makeDeposit: function(deposit){
        customer_1001.accountBalance = customer_1001.accountBalance + deposit;
        return ("Thank you, your current balance is now $" + parseFloat(customer_1001.accountBalance));
    },
    makeWithdrawal: function(withdrawal){
        customer_1001.accountBalance = customer_1001.accountBalance - withdrawal;
        return ("Thank you, your current balance is now $" + parseFloat(customer_1001.accountBalance));
    },
    addInterest: function(){
        if (customer_1001.multipleAccounts == true){
            customer_1001.accountBalance += customer_1001.accountBalance * 0.08;
            return ("Thank you, your current balance is now $"+ customer_1001.accountBalance.toFixed(2));
        }
        else if (customer_1001.multipleAccounts == false) {
            customer_1001.accountBalance += customer_1001.accountBalance * customer_1001.interestRate;
            return ("Thank you, your current balance is now $"+ customer_1001.accountBalance.toFixed(2));
        }
    }
}

console.log(customer_1001);


var addDeposit = prompt("Please, type the deposit value", "Type here");
var convertDeposit = parseFloat(addDeposit);
var newDeposit = customer_1001.makeDeposit(convertDeposit);
console.log(newDeposit);

var minusWithdrawal = prompt("How much money do you want to withdraw?", "Type here");
var convertWithdrawal = parseFloat(minusWithdrawal);
var newWithdrawal = customer_1001.makeWithdrawal(convertWithdrawal);
console.log(newWithdrawal);


var accounts = prompt("How many accounts do you have with our bank?");
var intAccounts = parseInt(accounts);
if (intAccounts > 1){
    customer_1001.multipleAccounts = true;
    console.log(customer_1001.addInterest());

}else{
    console.log(customer_1001.addInterest());
}