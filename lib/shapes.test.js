//constructor Shape is imported
const {Triangle, Square, Circle} = require('./shapes')

// A testing suite for Shape is created.
describe('{Circle}', () => {
    // A test is created to check that the shape is the correct color.
    test('blue circle', () => {
            const color = 'blue';
            const shape = 'circle';
            const myTestVariable = new Circle();
            myTestVariable.color = color;
            myTestVariable.shape = shape;
            const expectedResult = `<g>${shape}<circle cx="150" cy="115" r="80" fill="${color}" />`
            expect(myTestVariable.render()).toEqual(expectedResult);
    });
})

describe('{Triangle}', () => {
    // A test is created to check that the shape is the correct color.
    test('red triangle', () => {
            const color = 'red';
            const shape = 'triangle';
            const myTestVariable = new Triangle();
            myTestVariable.color = color;
            myTestVariable.shape = shape;
            const expectedResult = `<g>${shape}<polygon points="150,25 250,175 50,175" fill="${color}" />`
            expect(myTestVariable.render()).toEqual(expectedResult);
    });
})








// at a bare minimum there needs to be two tests; 1 for the shape and one for color
// at least one unit test per method
// at least one unit test for the draw function/method
// 1 unit test per method; unit tests will be the hardest part of the assignment
// 4 unit test files
