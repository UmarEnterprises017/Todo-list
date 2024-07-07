import inquirer from "inquirer"

let Todos: any[] = [];

let isRunning: boolean = true

while (isRunning) {
    let Questions = await inquirer.prompt([
        {
            name: "Select",
            message: "Select operation you want to do?",
            type: "list",
            choices: ["ADD TODO" , "DELETE TODO", "SHOW TODO", "EXIT"]
        }
    ])

    if(Questions.Select === "ADD TODO"){
          let answers = await inquirer.prompt([
            name: "addTodo",
            message: "Enter Your todo items",
            type: "input"
          ])

    } else if (Questions.Select === "DELETE TODO") {
        console.log("Delete Todo");
    } else if (Questions.Select === "SHOW TODO") {
        console.log("Show Todo");
    } else  {
        isRunning = false
    } 

}