#! /usr/bin/env node
import inquirer from "inquirer";
let guess = await inquirer.prompt([{
        name: 'n',
        type: 'number',
        message: 'Please guess a No.',
    }
]);
let target = 5;
if (guess.n < target) {
    console.log("Your guess is too low.");
}
else if (guess.n > target) {
    console.log("Your guess is too high");
}
else {
    console.log("You guessed correctly!");
}
