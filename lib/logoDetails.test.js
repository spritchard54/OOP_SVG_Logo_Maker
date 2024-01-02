const LogoDetails = require('./logoDetails');
const {Triangle, Square, Circle} = require('./shapes')

//Testing 
describe('Testsuite for Circle Logo with DET', () => {
    // A test is created to check that the shape is the correct color.
    test('Class Test', () => {
            const color = 'blue';
            const shape = 'circle';
            const logoTest = new Circle();
            logoTest.color = color;
            logoTest.shape = shape;
            const logoRender = logoTest.render()
            const textColor = "red"
            const letters = "DET"
            const myTestVariable = new LogoDetails(logoRender,textColor,letters)
            const expectedResult = `${myTestVariable.logoDetails.xmlVersion}${myTestVariable.logoDetails.typeOfShape}${myTestVariable.logoDetails.fontDetails}${myTestVariable.logoDetails.letters}`
            expect(myTestVariable.render()).toEqual(expectedResult);
    });
})