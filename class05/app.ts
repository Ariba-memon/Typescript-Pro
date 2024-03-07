import inquirer from "inquirer"

let answer = await inquirer.prompt([{
    name: "userName",
    type: "string",
    message: "What is your name? ",
}])

console.log("Welcome! " + answer.userName)

