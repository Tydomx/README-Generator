// TODO: Include packages needed for this application
const inquirer = require('inquirer'); // inquirer package
const fs = require('fs'); // file system
const { title } = require('process');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        // title of project
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a title!');
                return false;
            }
        }
    },
    {
        // description of project
        type: 'input',
        name: 'description',
        message: 'Provide some information about the project (Required)',
        validate: projDescription => {
            if (projDescription) {
                return true;
            } else {
                console.log('Please enter a project!');
                return false;
            }
        }
    },
    {
        // installation instructions
        type: 'input',
        name: 'installInstruct',
        message: 'Provide some information about how to install and run the project (Required)',
        validate: howInstall => {
            if (howInstall) {
                return true;
            } else {
                console.log('Please enter installation steps to the README!');
                return false;
            }
        }
    },
    {
        // how to use project
        type: 'input',
        name: 'useProject',
        message: 'Provide some information about how to use the project (Required)',
        validate: projUsage => {
            if (projUsage) {
                return true;
            } else {
                console.log('Please enter information on how to use the project!');
                return false;
            }
        }
    },
    {
        // contributors  
        type: 'input',
        name: 'contributors',
        message: 'How can users contribute to the project?',
        validate: userContributors => {
            if (userContributors) {
                return true;
            } else {
                console.log('Please provide information on how others can contribute to the project.');
                return false;
            }
        }
    },
    {
        // add license(s)
        type: 'checkbox',
        name: 'license',
        message: 'Add a license to the project (Check those that apply)',
        choices: ['Apache 2.0', 'MIT', 'MPL-2.0', 'None of the above'],
        validate: selectLicense => {
            if (selectLicense) {
                return true;
            } else {
                console.log('Select a license for the project or none.');
                return false;
            }
        }
    },
    {
        // add tests
        type: 'input',
        name: 'tests',
        message: 'Provide testing instructions',
        validate: testInput => {
            if(testInput) {
                return true;
            } else {
                console.log('Please provide testing instructions.');
                return false;
            }
        }
    },
    {
        // GitHub username 
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: gitHubName => {
            if(gitHubName) {
                return true;
            } else {
                console.log('Pleaes enter your GitHub Username!');
                return false;
            }
        }
    },
    {
        // email address
        type: 'input',
        name: 'email',
        message: 'Enter an email to be used for contact information',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter an email!');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log('README created! Go ahead and preview your file!');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(answer) {
        console.log(answer)
        writeToFile('README.md', generateMarkdown(answer));
    });
}

// Function call to initialize app
init();
