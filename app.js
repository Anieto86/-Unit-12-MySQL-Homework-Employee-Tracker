//Dependencies
const mysql = require('mysql');
const inquirer = require('inquirer');
const util = require('util');
//SQL connection 







// Inquirer

async function askQuestion () {
   return await inquirer.prompt([
       {
        name: 'firstQ',
        type: 'list',
        maessage: 'What would like to do?',
        choices: ['View all the employees', 'View all the employees by Departament', 'View all the employees by Manager', 'Add employee', 'Remove employee', 'Udate employee role', 'Update employee manager']
       },
   ]);
};

async function askQuestion () {
    return await inquirer.prompt([
        {  
            name: 'nameEmployees',
            type: 'list',

        
        },

    ]);
 };