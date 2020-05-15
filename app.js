//Dependencies
const mysql = require('mysql');
const inquirer = require('inquirer');

//SQL connection 

// Inquirer

function userPrompt () {
   return inquirer.prompt({
        name: '',
        type: 'list',
        maessage: 'What would you',
        choices: ['What']
    });
};