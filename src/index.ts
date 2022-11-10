import * as inquirer from "inquirer";
import { Person } from "./Person.js";
import { Student } from "./Student.js";


const prompt = inquirer.createPromptModule();



function main(): void{
    prompt([
        {
            type: "input",
            name: "personality",
            message: "Type 1 if you like to talk to others and type 2 if you rather keep to yourself"
        }
    ])
    .then(answer => {
        if(answer["personality"] !== ""){
            let isNum: boolean = isNumber(answer["personality"]);
            if(isNum){
                const myPerson: Person = new Person();
                myPerson.askQuestion(answer["personality"]);
                console.log(`You are: ${myPerson.getPersonality()}`);
                inputName();
            } else {
                console.log("Only Number is allowed")
            }
        }
    })
}

function inputName(): void {
    prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name: "
        }
    ]).then(answer => {
        if(answer["name"] != ""){
            const myStudent: Student = new Student();
            myStudent.name = answer["name"];
            console.log(`your name is: ${myStudent.name} and your personality is: ${myStudent.getPersonality()}`);
        } else {
            console.log("invalid!")
        }
    })
}

function isNumber(ans: string): boolean{
    let isnum: number = parseInt(ans);
    let num: boolean = !isNaN(isnum);
    return num;
}

main();