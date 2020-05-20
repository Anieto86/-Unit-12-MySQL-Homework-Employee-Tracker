//Dependencies
const mysql = require('mysql');
const inquirer = require('inquirer');
const util = require('util');
const connections = require('./connections');
const console.table = require('./console.table');
//SQL connection 







// Inquirer

async function askQuestion() {
    return await inquirer.prompt([
        {
            name: 'firstQ',
            type: 'checkbox',
            maessage: 'What would like to do?',
            choices: ['View all the employees', 'View all the employees by Departament', 'View all the employees by Manager', 'Add employee', 'Remove employee', 'Update employee role', 'Update employee manager', "EXIT"]
        },
    ]);
};


async function viewEmployees() {
    let results = await connection.query("SELECT * FROM employees");

    console.log(results);
}


async function viewEmpbyDep() {

    let dep = await connection.query("SELECT * FROM department");

    console.log(dep);


}


async function viewEmpbyManager() {

    let mana = await connection.query("SELECT * FROM role");

    console.log(mana);


}


async function AddEmployee () {


}

async function RemoveEmployee () {

    
}








async function askRole() {
    return await inquirer.prompt([
        {
            type: "input",
            name: "role",
            message: "What is your role?",
            choices: ["Sales", "Engineering", "Finance", "Legal", "EXIT"]
        }
    ]);
};






async function main() {

    let accion = await askQuestion();
    if (accion.firstQ == "View all the employees") {
        console.log(accion);
        await viewEmployees();
    } 
    else if (accion2.firstQ == "View all the employees by Departament") {
        console.log(accion2);
        await viewEmpbyDeps();
    }










}
main();