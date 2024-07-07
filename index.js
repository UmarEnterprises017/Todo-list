import inquirer from "inquirer";
let Todos = [];
let isRunning = true;
while (isRunning) {
    let Questions = await inquirer.prompt([
        {
            name: "Select",
            message: "Select operation you want to do?",
            type: "list",
            choices: ["ADD TODO", "DELETE TODO", "SHOW TODO", "EXIT"]
        }
    ]);
    if (Questions.Select === "ADD TODO") {
        console.log("Added Todo");
    }
    else if (Questions.Select === "DELETE TODO") {
        console.log("Delete Todo");
    }
    else if (Questions.Select === "SHOW TODO") {
        console.log("Show Todo");
    }
    else {
        isRunning = false;
    }
}
