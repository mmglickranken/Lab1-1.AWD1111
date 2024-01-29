// Exercise 3. Income Tax Calculator

// readline
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output }); 

// ask for user input & store in variables
const maritalStatus = await rl.question('Are you Married or Single? Please Enter "M" for Married, and "S" for Single: ');

// married
if (maritalStatus == 'M') {
    // prompt the user to enter their 2023 Taxable Income
    let income = await rl.question('Please enter your Taxable Income for 2023: ');

    // error handling
    if (isNaN(income)  || income <= 0) {
        console.log('Please enter a numeric input that is greater than 0.');

    // calculate & log results
    } else if (parseFloat(income) <= 22000) {    
        const tax = parseFloat(income) * 0.1;
        console.log(`Your income tax is $${Math.ceil(tax)}.`);
    } else if (22001 <= (parseFloat(income)) && income <= 89450) {
        const tax = income * .12;
        console.log(`Your income tax is $${Math.ceil(tax)}.`);
    } else if (89451 <= (parseFloat(income)) && income <= 190750) {
        const tax = income * .22;
        console.log(`Your income tax is $${Math.ceil(tax)}.`);
    } else if (190751 <= (parseFloat(income)) && income <= 364200) {
        const tax = income * .24;
        console.log(`Your income tax is $${Math.ceil(tax)}.`);
    } else if (364201 <= (parseFloat(income)) && income <= 462500) {
        const tax = income * .32;
        console.log(`Your income tax is $${Math.ceil(tax)}.`);
    } else if (462501 <= (parseFloat(income)) && income <= 693750) {
        const tax = income * .35;
        console.log(`Your income tax is $${Math.ceil(tax)}.`);
    } else if (693751 <= (parseFloat(income))) {
        const tax = income * .37;
        console.log(`Your income tax is $${Math.ceil(tax)}.`);
    } 

// single
} else if (maritalStatus == 'S') {
    // prompt the user to enter their 2023 Taxable Income
    let income = await rl.question('Please enter your Taxable Income for 2023: ');

    // error handling
    if (isNaN(income)  || income <= 0) {
        console.log('Please enter a numeric input that is greater than 0.');

    // calculate & log results
    } else if (parseFloat(income) <= 11000) {    
        const tax = parseFloat(income) * 0.1;
        console.log(`Your income tax is $${Math.ceil(tax)}.`);
    } else if (11001 <= (parseFloat(income)) && income <= 44725) {
        const tax = income * .12;
        console(`Your income tax is $${Math.ceil(tax)}.`);
    } else if (44726 <= (parseFloat(income)) && income <= 95375) {
        const tax = income * .22;
        console.log(`Your income tax is $${Math.ceil(tax)}.`);
    } else if (95376 <= (parseFloat(income)) && income <= 182100) {
        const tax = income * .24;
        console.log(`Your income tax is $${Math.ceil(tax)}.`);
    } else if (182101 <= (parseFloat(income)) && income <= 231250) {
        const tax = income * .32;
        console.log(`Your income tax is $${Math.ceil(tax)}.`);
    } else if (231251 <= (parseFloat(income)) && income <= 578125) {
        const tax = income * .35;
        console.log(`Your income tax is $${Math.ceil(tax)}.`);
    } else if (578126 <= (parseFloat(income))) {
        const tax = income * .37;
        console.log(`Your income tax is $${Math.ceil(tax)}.`);
    }

// error handling
} else {
    console.log('Please enter valid input.');
}

// close readline
rl.close();