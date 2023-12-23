const inquirer = require('inquirer');
// const { error, clear } = require('console');
const questions = [
    {
        type: 'input',
        name: 'userInitials',
        message: 'Enter your initials or three letters.',
    },
    {
        type: 'input',
        name: 'whatColorText',
        message: 'What color should your logo TEXT be? (OR a hexadecimal number)?',
    },
    {
        type: 'list',
        name: 'shapeType',
        message: 'What type of shape do you want to use for your logo?',
        choices: ['Cirlce', 'Square', 'Triangle']
    },
    {
        type: 'input',
        name: 'whatColorShape',
        message: 'What color should your logo SHAPE be? (OR a hexadecimal number)?',
    },
]

function init() {
    inquirer
    .prompt(questions)
        .then((answers) => {
            // answers
            console.log(answers);
        });
};

init();


// WHEN I have entered input for all the prompts THEN an SVG file is created named `logo.svg` AND the output text "Generated logo.svg" is printed in the command line

// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered