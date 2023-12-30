const inquirer = require('inquirer')
const { Triangle, Square, Circle } = require('./lib/shapes')
const fs = require('fs')
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
// const { error, clear } = require('console');

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

  const logoDetails = {
    version: '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">',
    shape: svgLogo,
    textParams: `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.whatColorText}">`,
    text: `${answers.userInitials}</text></g></svg>`
  }

  const finishedLogo = `${logoDetails.version}${logoDetails.shape}${logoDetails.textParams}${logoDetails.text}`

  fs.writeFile('logo.svg', finishedLogo, (err) => {
    if (err) {
      throw err
    } else {
      console.log('The logo has been created')
    }
  })
}

const userQuestions = () => {
  return inquirer
    .prompt(questions)
    .then((answers) => {
      createShape('logo.svg', answers)
    })
}

function init () {
  userQuestions()
}

init()
