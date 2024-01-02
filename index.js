const inquirer = require('inquirer')
const { Triangle, Square, Circle } = require('./lib/shapes')
const LogoDetails = require('./lib/logoDetails')
const fs = require('fs')
// Inquierer user prompts for generating shape. Stored as a variable and called in userQuestions function.
const questions = [
  {
    type: 'input',
    name: 'userInitials',
    message: 'Enter your initials or three letters.',
    default: ''
  },
  {
    type: 'input',
    name: 'whatColorText',
    message: 'What color should your logo TEXT be? (OR a hexadecimal number)?',
    default: ''
  },
  {
    type: 'list',
    name: 'shapeType',
    message: 'What type of shape do you want to use for your logo?',
    choices: ['Circle', 'Square', 'Triangle'],
    default: ''
  },
  {
    type: 'input',
    name: 'whatColorShape',
    message: 'What color should your logo SHAPE be? (OR a hexadecimal number)?',
    default: ''
  }
]

// Use code from shapes.js, and user responses to determine the the type and color of shape and assign them to svgLogo variable.
function createShape (_paramOne, answers) {
  let svgLogo
  if (answers.shapeType === 'Triangle') {
    const triangle = new Triangle(answers.whatColorShape, answers.shapeType)
    svgLogo = triangle.render()
  } else if (answers.shapeType === 'Square') {
    const square = new Square(answers.whatColorShape, answers.shapeType)
    svgLogo = square.render()
  } else {
    const circle = new Circle(answers.whatColorShape, answers.shapeType)
    svgLogo = circle.render()
  }
const logoDetails = new LogoDetails (svgLogo, answers.whatColorText, answers.userInitials)
const finishedLogo = logoDetails.render();

  // use .writeFile funtion to create logo.svg using finishedLogo variable.
  fs.writeFile('logo.svg', finishedLogo, (err) => {
    err ? console.log(err) : console.log('Generated logo.svg')
  })
}

//Initiates questions, then outputs 'answers' to 'logo.svg'
const userQuestions = () => {
  return inquirer
    .prompt(questions)
    .then((answers) => {
      createShape('logo.svg', answers)
    })
}
// Function that calls inquirer and prompts users
function init () {
  userQuestions()
}

// Initiate the application
init()
