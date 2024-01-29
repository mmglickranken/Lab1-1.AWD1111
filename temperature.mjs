// Exercise 2. Temperature Converter

// readline
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { clearScreenDown } from 'node:readline';

const rl = readline.createInterface({ input, output }); 

// ask for user input & store in variable
const convert = await rl.question('Which would you like to convert? Enter "C" for Celsius, or "F" for Fahrenheit: ');

if (convert == 'F') {
    // prompt the user to enter the temp
    let fahrenheit = await rl.question('Please enter the temperature in fahrenheit: ');

    // error handling
    if (isNaN(fahrenheit)  || fahrenheit <= 0) {
        console.log('Please enter a numeric input that is greater than 0.');

    // calculate & log results
    } else {
        let celsius = ((parseFloat(fahrenheit)) - 32) * (5/9);
        console.log(`${fahrenheit} degrees fahrenheit is equal to ${celsius.toFixed(2)} degrees celsius.`);
    }
} else if (convert == 'C') {
    // prompt the user to enter the temp
    let celsius = await rl.question('Please enter the temperature in celsius: ');

    // error handling
    if (isNaN(celsius) || celsius <= 0) {
        console.log('Please enter a numeric input that is greater than 0.');
            
    // calculate & log results
    } else {
        let fahrenheit = ((parseFloat(celsius)) * (9/5)) + 32;
        console.log(`${celsius} degrees celsius is equal to ${fahrenheit.toFixed(2)} degrees fahrenheit.`);
    }

// error handling
} else {
    console.log('Please enter valid input.');
}

// close readline
rl.close();