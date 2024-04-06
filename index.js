#! /usr/bin/env node
import inquirer from "inquirer";
// 1.generate a random number
//enter number from user
//compare both numbers and show result
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answesr = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10"
    }
]);
if (answesr.userGuessedNumber === randomNumber) {
    console.log("congratulations! You guessed right number.");
}
else {
    console.log("You guessed wrong number");
}
