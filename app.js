//Dependencies
const inquirer = require('inquirer');
const connection = require('./connections');



// Inquirer

async function askQuestion() {
    return await inquirer.prompt([
        {
            name: 'firstQ',
            type: 'list',
            maessage: 'What would like to do?',
            choices: ['View all the employees', 'View all the employees by Departament', 'View all the employees by Manager', 'Add employee', 'Remove employee', 'Update employee role', 'Update employee manager', "EXIT"]
        },

    ]);
};


async function viewEmployee() {
    let results = await connection.query("SELECT * FROM employee");

    console.log(results);
}


async function viewEmpbyDep() {
    let dep = await connection.query("SELECT * FROM department");
    console.log(dep);
};


async function viewEmpbyManager() {
    let mana = await connection.query("SELECT * FROM role");
    console.log(mana);

};

async function AddEmployee() {
    const add = await inquirer.prompt([
        {
            name: 'firstName',
            type: 'input',
            maessage: 'Enter First Name?',
        },
        {
            name: 'lastName',
            type: 'input',
            maessage: 'Enter Last Name?',
        },
        {
            name: 'role',
            type: 'input',
            maessage: 'Enter Role?',
        },
    ]);
    await connection.query (`
        INSERT INTO employee (first_Name, last_Name)
        VALUES (?, ?)

    `,[add.firstName, add.lastName])
};



async function RemoveEmployee() {

    const ReEmployee = await inquirer.prompt([
        {
            name: 'firstName1',
            type: 'input',
            maessage: 'Enter First Name?',
        },
        {
            name: 'LastName1',
            type: 'input',
            maessage: 'Enter Last Name?',
        },
        {
            name: 'role1',
            type: 'input',
            maessage: 'Enter Role?',
        },
    ]);
    RemoveEmployee(ReEmployee.firstname1, ReEmployee.lastname1, ReEmployee.role1)
};

async function UpdateEmployee() {

    const UpEmployee = await inquirer.prompt([
        {
            name: 'firstName2',
            type: 'input',
            maessage: 'Enter First Name?',
        },
        {
            name: 'LastName2',
            type: 'input',
            maessage: 'Enter Last Name?',
        },
        {
            name: 'role2',
            type: 'input',
            maessage: 'Enter Role?',
        },
    ]);
    UpEmployee(UpEmployee.firstname2, UpEmployee.lastname2, UpEmployee.role2)
};



async function main() {

    // Breathe the fresh air of promisified connections.
    
    console.log("connected!", connection.threadId);

    let finished = false;

    while (!finished) {

        const accion = await askQuestion();
        console.log(accion)
        if (accion === "EXIT") {
            finished = true;
            console.log("true");
        } else {
            console.log("true");
        }
        if (accion.firstQ == "View all the employees") {
            await viewEmployee();
        } else {
            console.log("view");
        }
        if (accion.firstQ == 'View all the employees by Departament') {
            await viewEmpbyDep();

        } if (accion.firstQ == 'View all the employees by Manager') {
            await viewEmpbyManager();
        } else {
            console.log("viewM");
        }
        if (accion.firstQ == 'Add employee') {
            await AddEmployee();
        } else {
            console.log("add");
        }
        if (accion.firstQ == 'Remove employee') {
            await RemoveEmployee();
        } else {
            console.log("remove");
        }
        if (accion.firstQ == 'Update employee role') {
            await UpdateEmployee();
        } else {
            console.log("Up");
          
        }
    };
    connection.end();


};

main().catch(err => console.log(err));