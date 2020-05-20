//Dependencies
const mysql = require('mysql');
const inquirer = require('inquirer');
const util = require('util');
const connections = require('./connections');
const consoletable = require('consoletable');
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




async function AddEmployee() {


}

async function RemoveEmployee() {


}









async function main() {

    let accion = await askQuestion();
    if (accion.firstQ == "View all the employees") {
        console.log(accion);
        await viewEmployees();
    }
    else if (accion.firstQ == 'View all the employees by Departament') {
        console.log(accion);
        await viewEmpbyDep();

    } else if (accion.firstQ == 'View all the employees by Manager') {
        console.log(accion);
        await viewEmpbyManager();
    } else if (accion.firstQ == 'Add employee')
        await askRole();






    connection.end();


}
main().catch(err => console.log(err));