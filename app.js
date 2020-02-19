const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

const createdTeam = [];



const introQs = [{
        type: 'input',
        name: 'res',
        message: 
`        Hello There! :)
     Please choose an option



`,
        choices: [ new inquirer.Separator('\n\x1b[33m---- Add a new employee: ----\x1b[0m'), new inquirer.Separator(" "), "Manager", "Engineer", "Intern", new inquirer.Separator('\n\x1b[33m--------- Options: ----------\x1b[0m'), new inquirer.Separator(" "), "Create Page and Exit"],
        type: 'list'
}];

var newEmpQs = [{
    type: 'input',
    name: 'eName',
    message: 
    `


               ________________________________________
               |                                      |
               |                                      |
               |                                      |
               |            Please enter              |
               |           employee name:             |
               |                                      |
               |                                      |
               |______________________________________|


`},
{
    type: 'input',
    name: 'eId',
    message:
    `


               ________________________________________
               |                                      |
               |                                      |
               |                                      |
               |            Please enter              |
               |            a unique id:              |
               |                                      |
               |                                      |
               |______________________________________|


`},
{
    type: 'input',
    name: 'eEmail',
    message:
    `


               ________________________________________
               |                                      |
               |                                      |
               |                                      |
               |            Please enter              |
               |            their email:              |
               |                                      |
               |                                      |
               |______________________________________|


`}];

var new1Q = {
    type: 'input',
    name: 'res',
    message:
    `


               ________________________________________
               |                                      |
               |                                      |
               |                                      |
               |         Please enter their           |
               |         office phone number:         |
               |                                      |
               |                                      |
               |______________________________________|


`};

var new2Q = {
    type: 'input',
    name: 'res',
    message:
    `


               ________________________________________
               |                                      |
               |                                      |
               |                                      |
               |            Please enter              |
               |            their github:             |
               |                                      |
               |                                      |
               |______________________________________|


`};

var new3Q = {
    type: 'input',
    name: 'res',
    message:
    `


               ________________________________________
               |                                      |
               |                                      |
               |                                      |
               |            Please enter              |
               |            their school:             |
               |                                      |
               |                                      |
               |______________________________________|


`};

console.log('\n\n\n\n\n\n\n\n');

promptIntro();

function promptIntro() {

    inquirer.prompt(introQs).then(data => {
        console.log('\n\n');
        let usrEntry = data.res;
        if (usrEntry === "Manager") {
            newEmp(new1Q, 1);
        } else if(usrEntry === "Engineer") {
            newEmp(new2Q, 2);
        } else if (usrEntry === "Intern") {
            newEmp(new3Q, 3);
        } else if (usrEntry === "Create Page and Exit") {
            console.log('Have an amazing day!');
            createPage();
        } else {
            console.log(
                `Invalid Entry. Please try again!`);
            promptIntro();
            return;
        }
        return;
    });
}

function newEmp(question, choice) {
    var tmpQs = newEmpQs;
    if (tmpQs.length === 4) { tmpQs.pop(); }
    tmpQs.push(question);
    inquirer.prompt(tmpQs).then(data => {
        var specificQ = data.res;
        if(choice === 1) {
            let newEmployee = new Manager (data.eName, data.eId, data.eEmail, specificQ);
            createdTeam.push(newEmployee);
        }
        else if(choice === 2) {
            let newEmployee = new Engineer (data.eName, data.eId, data.eEmail, specificQ);
            createdTeam.push(newEmployee);
        }
        else if(choice === 3) {
            let newEmployee = new Intern (data.eName, data.eId, data.eEmail, specificQ);
            createdTeam.push(newEmployee);
        }
        promptIntro();
        return;
    });
}

function createPage() {
    var tmpHTML = 
    `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet">

            <title>My Team</title>
        </head>
        <body>
            
        <div class='container'>
            
            <nav class="navbar navbar-light bg-light">
                <span class="navbar-brand mb-0 h1">My Team</span>
            </nav>

            <div class='row'>
                    <div class="card-deck">
    `;
    for (var i = 0; i < createdTeam.length; i++) {
        tmpHTML += createdTeam[i].getHTML();
    }
    tmpHTML += "</div></div></div></body></html>";
    fs.writeFile('./output/team.html', tmpHTML, function(err) {
        if (err) {
            return console.error(err);
        }
        console.log("File write success");
    });
}