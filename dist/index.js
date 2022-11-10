import * as inquirer from "inquirer";
import { Person } from "./Person.js";
import { Student } from "./Student.js";
const prompt = inquirer.createPromptModule();
function main() {
    prompt([
        {
            type: "input",
            name: "personality",
            message: "Type 1 if you like to talk to others and type 2 if you rather keep to yourself"
        }
    ])
        .then(answer => {
        if (answer["personality"] !== "") {
            let isNum = isNumber(answer["personality"]);
            if (isNum) {
                const myPerson = new Person();
                myPerson.askQuestion(answer["personality"]);
                console.log(`You are: ${myPerson.getPersonality()}`);
                inputName();
            }
            else {
                console.log("Only Number is allowed");
            }
        }
    });
}
function inputName() {
    prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name: "
        }
    ]).then(answer => {
        if (answer["name"] != "") {
            const myStudent = new Student();
            myStudent.name = answer["name"];
            console.log(`your name is: ${myStudent.name} and your personality is: ${myStudent.getPersonality()}`);
        }
    });
}
function isNumber(ans) {
    let isnum = parseInt(ans);
    let num = !isNaN(isnum);
    return num;
}
main();
