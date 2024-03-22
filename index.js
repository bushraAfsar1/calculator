#! /usr/bin/env node
import inquirer from "inquirer";
const result = await inquirer.prompt([
    { message: 'Enter your First Value', type: 'number', name: 'firstNumber' },
    { message: 'Enter your Second Value', type: 'number', name: 'secondNumber' },
    {
        message: 'Select one of the operator',
        type: 'list',
        name: 'operator',
        choices: ['Addition', 'Subtraction', 'Division', 'Multiplication'],
    },
]);
if (result.operator == "Addition") {
    console.log(result.firstNumber + result.secondNumber);
}
else if (result.operator == "Subtraction") {
    console.log(result.firstNumber - result.secondNumber);
}
else if (result.operator == "Division") {
    console.log(result.firstNumber / result.secondNumber);
}
else if (result.operator == "Multiplication") {
    console.log(result.firstNumber * result.secondNumber);
}
else {
    console.log("choose correct value for answer");
}
;
// console.log(result);
