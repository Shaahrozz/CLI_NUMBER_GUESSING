#! /usr/bin/env node
import inquirer from "inquirer";
let guess = await inquirer.prompt([{
        name: 'n',
        type: 'number',
        message: 'Please guess a No. between 1 and 10:',
    }
]);
let target = Math.floor(Math.random() * 10 + 1);
if (guess.n < target) {
    console.log("Your guess is too low.");
}
else if (guess.n > target) {
    console.log("Your guess is too high");
}
else {
    console.log("Congratulations!, You guessed correctly!");
}
console.log("The Correct answer was: ", target);
