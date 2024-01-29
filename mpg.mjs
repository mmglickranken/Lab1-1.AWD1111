// Exercise 1. MPG Calculator

// readline
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output }); 

// ask for user input & store in variables
const milesDriven = await rl.question('How many miles did you drive? ');
const gallonsUsed = await rl.question('How many gallons did you use? ');

// error handling
if (isNaN(milesDriven) || milesDriven < 0) {
    console.log('Please enter a valid number for miles driven.');
} else if (isNaN(gallonsUsed) || gallonsUsed < 0) {
    console.log('Please enter a valid number for gallons used.');
} else {
    // calculate & log mpg 
    const mpg = milesDriven / gallonsUsed;
    console.log(`Your car gets ${mpg.toFixed(2)} miles per gallon.`);
}

// close readline
rl.close();