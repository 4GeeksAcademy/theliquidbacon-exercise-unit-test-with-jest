// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});
test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07; 
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})
test("156.5 Yen should be 136.155 Pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(626);
    const expected = 4 * 0.87; 
     expect(fromYenToPound(626)).toBe(3.48);
})
test("1 dollar should be 146,2616822429907 Yens", function() {
    const { fromDollarToYen } = require('./app.js');
    const yen = fromDollarToYen(107);
    const expected = 100 * 156.5; 
     expect(fromDollarToYen(107)).toBe(15650);
})
