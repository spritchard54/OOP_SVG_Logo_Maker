class LogoDetails {
    constructor (svgLogo,textColor,letters) {
        this.svgLogo = svgLogo
        this.textColor = textColor
        this.letter = letters

        this.logoDetails = {
            // Create new variabe properties using template literals inquirer responses
            xmlVersion: '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">',
            typeOfShape: this.svgLogo,
            fontDetails: `<text x="50%" y="65%" dominant-baseline="top" text-anchor="middle" font-size="40" fill="${this.textColor}">`,
            letters: `${this.letter}</text></g></svg>`
          }
    }
    render () {
        return `${this.logoDetails.xmlVersion}${this.logoDetails.typeOfShape}${this.logoDetails.fontDetails}${this.logoDetails.letters}`
    }
}

module.exports = LogoDetails