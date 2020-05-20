//Dependencies
const inquirer = require('inquirer');
const connection = require('./connection');

// Wrap connection.connect() in a promise! 
async function connect() {
    return new Promise((resolve, reject) => {
        connection.connect(err => {
            if (err) reject(err); // oh no!
            else resolve(); // oh yeah!
        })
    })
}


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
            name: 'LastName',
            type: 'input',
            maessage: 'Enter Last Name?',
        },
        {
            name: 'role',
            type: 'input',
            maessage: 'Enter Role?',
        },
    ]);
    AddEmployee(add.firstname, add.lastname, add.role);
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

    let finished = false;

    while (!finished) {

        const accion = await askQuestio();
        console.log("while")
        if (question === "EXIT") {
            finished = true;
            console.log("true");
        } else {
            console.log("true");
        }
        if (accion.firstQ == "View all the employees") {
            await viewEmployees();
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
            break;
        }
    };
    connection.end();


};

main().catch(err => console.log(err));