const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getInput(question) {
    return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
            resolve(parseFloat(answer));
        });
    });
}

async function main() {
    console.log("Welcome to the budget calculator!\n");

    const totalIncome = await getInput("Please enter your total income for the month: $");
    const debtPayment = 11000;

    let remainingBudget = totalIncome - debtPayment;
   

    console.log(`You have $${remainingBudget.toFixed(2)} left after making your debt payment.`);

    const expenses = ["phone", "food", "piano lessons", "transportation"];

    for (let i = 0; i < expenses.length; i++) {
        let expense = expenses[i];
        let expenseBudget = await getInput(`Please enter your budget for ${expense}: $`);

        remainingBudget -= expenseBudget;
        console.log(`Your remaining budget after ${expense} is $${remainingBudget.toFixed(2)}.\n`);
    }

    console.log(`Your total expenses are $${(totalIncome - remainingBudget).toFixed(2)}.`);
    console.log(`Your remaining budget after expenses is $${remainingBudget.toFixed(2)}.\n`);

    if (remainingBudget < 0) {
        console.log(`WARNING: You have overspent your budget by $${Math.abs(remainingBudget).toFixed(2)}. Please review your expenses and adjust accordingly.`);
    } else {
        console.log(`Congratulations! You have stayed within your budget with $${remainingBudget.toFixed(2)} remaining.`);
    }

    rl.close();
}

main();