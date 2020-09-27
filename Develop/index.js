const inquirer = require('inquirer');

const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please provide the name of your project.'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions for usage.'
    },
    {
        type: 'input',
        name: 'license',
        message: 'Please provide licenses for your project.'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide any contributors of the project.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions'
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

//test1