#! /usr/bin/env node

import inquirer from "inquirer"
// Operators selection list
const operator = await inquirer.prompt([
    {
        name:"operators",
        type:"list",
        message:"Please select the operator.",
        choices:
        [
             'Addition',
             'Subtraction',
             'Multiplication',
             'Division',
             'Exponentation',
             'Modulus',
             'BMI'
        ]
    }
    ]);
// Now use the opeartors 
if (operator.operators === 'Addition'){
    const add = await inquirer.prompt([{
        name:"first",
        type:"number",
        message:"Enter first number:"
    },
{
    name:"second",
    type:"number",
    message:"Enter second number:"
}
]);
console.log(`Result is ${add.first + add.second}`)
} else if (operator.operators ==='Subtraction'){
    const sub = await inquirer.prompt([{
        name:"first",
        type:"number",
        message:"Enter first number:"
    },
{
    name:"second",
    type:"number",
    message:"Enter second number:"
}
]);
console.log(`Result is ${sub.first - sub.second}`)
} else if (operator.operators === 'Multiplication'){
    const mul = await inquirer.prompt([{
        name:"first",
        type:"number",
        message:"Enter first number:"
    },
{
    name:"second",
    type:"number",
    message:"Enter second number:"
}
])
console.log(`Result is ${mul.first * mul.second}`)
} else if (operator.operators === 'Division'){
    const div = await inquirer.prompt([{
        name:"first",
        type:"number",
        message:"Enter first number:"
    },
{
    name:"second",
    type:"number",
    message:"Enter second number:"
}
])
console.log(`Result is ${div.first / div.second}`)
} else if (operator.operators === 'Exponentation'){
    const exp = await inquirer.prompt([{
        name:"first",
        type:"number",
        message:"Enter first number:"
    },
{
    name:"second",
    type:"number",
    message:"Enter second number:"
}
])
console.log(`Result is ${exp.first ** exp.second}`)
} else if (operator.operators === 'Modulus'){
    const mod = await inquirer.prompt([{
        name:"first",
        type:"number",
        message:"Enter first number:"
    },
{
    name:"second",
    type:"number",
     message:"Enter second number:"
}
])
console.log(`Result is ${mod.first % mod.second}`)
} else if (operator.operators === 'BMI'){
    const bmi = await inquirer.prompt([{
        name:"weight",
        type:"number",
        message:"Enter the value of weight in (k.g):"
    },
{
    name:"height",
    type:"number",
     message:"Enter the value of height in (meters):"
}
])
console.log(`Your BMI value is ${bmi.weight / (bmi.height*bmi.height)}`)
}
 else {
    console.log('Please select correct operators.')
} 


   


 