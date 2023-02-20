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
    console.log("Welcome to the debt repayment program!");

    const debtAmountMXN = 20000;
    const exchangeRateMXNtoUSD = 0.05; // 1 Mexican peso is worth 0.05 US dollars
    const debtAmountUSD = debtAmountMXN * exchangeRateMXNtoUSD;
    console.log(`Your total debt is ${debtAmountUSD.toFixed(2)} US dollars.`);

    const monthlyIncomeUSD = 750;
    const monthlyPaymentUSD = Math.ceil(debtAmountUSD / 10);
    console.log(`To pay off your debt in 10 months, you need to make a monthly payment of ${monthlyPaymentUSD} US dollars.`);

    let remainingDebtUSD = debtAmountUSD;
    let totalInterestPaidUSD = 0;

    for (let i = 1; i <= 10; i++) {
        console.log(`Month ${i}:`);
        console.log(`Monthly payment: ${monthlyPaymentUSD} US dollars.`);
        const interestAmountUSD = remainingDebtUSD * 0.1 / 12; // 10% annual interest rate
        console.log(`Interest charged: ${interestAmountUSD.toFixed(2)} US dollars.`);
        totalInterestPaidUSD += interestAmountUSD;
        remainingDebtUSD = remainingDebtUSD - monthlyPaymentUSD + interestAmountUSD;
        console.log(`Remaining debt: ${remainingDebtUSD.toFixed(2)} US dollars.`);
    }

    console.log(`Total interest paid: ${totalInterestPaidUSD.toFixed(2)} US dollars.`);

    const remainingDebtMXN = remainingDebtUSD / exchangeRateMXNtoUSD;
    console.log(`Remaining debt in Mexican pesos: ${remainingDebtMXN.toFixed(2)} Mexican pesos.`);

    rl.close();
}

main();
//In this version of the program, I first convert the debt amount from Mexican pesos to US dollars using an exchange rate of 0.05. I then calculate the monthly payment required to pay off the debt in 10 months using the debt amount in US dollars and display it in the console.

//The program then calculates the interest charged each month using an annual interest rate of 10% and keeps track of the remaining debt and total interest paid over the 10-month repayment period in US dollars.


//Finally, the program converts the remaining debt amount back to Mexican pesos using the same exchange rate of 0.05 and displays it in the console.