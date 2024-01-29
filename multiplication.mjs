// Exercise 4. Multiplication Table

// readline
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output }); 

// ask for user input & store in variables
const size = await rl.question('How big would you like the table? Please enter a number between 1 - 12: ');

// error handling
if (isNaN(size) || size < 1 || size > 12) {
    console.log('Please enter a numeric input (1-12).');

// call function & log the returned table
} else {
    const multiplicationTable = generateMultiplicationTable(size);
    console.log(multiplicationTable);
}

// close readline
rl.close();

// generate the multiplication table
function generateMultiplicationTable(size) {
    // create an array for the multiples
    const table = [];
    
    // create the table
    for (let i = 1; i <= size; i++) {
      const row = [];
      for (let j = 1; j <= size; j++) {
        row.push((i * j).toString().padStart(4));
      }
      table.push(row.join(' '));
    }
  
    // return the table
    return table.join('\n');
}