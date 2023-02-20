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
    console.log("hola josue!");
    const totalIncome = await getInput("por favor ingresa cuanto dinero generaste y te dire cuanto dinero tienes disponible : ");
    const savedAmount = totalIncome * 0.8;
    console.log(`dinero de nayalhi mejia $${savedAmount.toFixed(2)}.`);
    const remainingAmount = totalIncome * 0.2;
    const foodBudget = remainingAmount * 0.3;
    const phoneBudget = remainingAmount * 0.15;
    const transportationBudget = remainingAmount * 0.2;
    const debtBudget = remainingAmount * 0.25;
    const savingsBudget = remainingAmount * 0.1;
    console.log(`presupuesto pa la tripa $${foodBudget.toFixed(2)}.`);
    console.log(`pal aifon $${phoneBudget.toFixed(2)}.`);
    console.log(`pa la combi $${transportationBudget.toFixed(2)}.`);
    console.log(`pa la deuda $${debtBudget.toFixed(2)}.`);
    console.log(`pa mi  $${savingsBudget.toFixed(2)}.`);
    rl.close();
}

main(); 