// let students = ["ali", "umer", "ahed"];
// students[0];
// console.log(students[0]);
// let student_data: any = {
//     name: "Ramzan",
//     age: 25,
//     rollno: 435677,
//     address: "karachi"
// };
// let property = 'age';
// console.log(student_data[property]); // hm is object ko direct be acces kr sakta ha like 'name' and 'age' etc...
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.90,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};
let user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: 'Enter form currency',
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'to',
        message: 'Enter to currency',
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'amount',
        message: 'Enter Your Amount',
        type: "number",
    }
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; // USD base currency
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
// console.log(fromAmount)
// console.log(toAmount)
// console.log(amount)
