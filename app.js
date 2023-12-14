let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}
const fromYenToPound = function(valueInYen) {
    let euroequivalent = valueInYen / 156.5;
    let valueInPound = euroequivalent * 0.87;
    return valueInPound;
}
const fromDollarToYen = function(valueInDollar) {
    let euroequivalent = valueInDollar / 1.07;
    let valueInYen = euroequivalent * 156.5;
    return valueInYen;
}

// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromYenToPound, fromDollarToYen}