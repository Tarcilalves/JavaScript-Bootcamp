console.log("******************  CALCULANDO O IMC  *******************")
console.log();

console.log('O IMC - Índice de Massa Corporal é um critério da Organização Mundial de Saúde\n' + 
    'para dar uma indicação sobre a condição de peso de uma pessoa adulta.\n\n' +
    'IMC em adultos Condição:\n' +
    '- Abaixo de 18.5: Abaixo do peso;\n' +
    '- Entre 18.5 e 25: Peso normal;\n' +
    '- Entre 25 e 30: Acima do peso;\n' +
    '- Entre 30 e 40: Obeso;\n' +
    '- Acima de 40: Obesidade Grave.');
console.log();

const peso = 74;
const altura = 1.60;

const calcularIMC = peso / Math.pow(altura, 1.60);


if (calcularIMC < 18.5) {
    console.log('Abaixo do peso.' + ' Seu IMC é: ' + calcularIMC.toFixed(2))

} else if (calcularIMC >= 18.5 && calcularIMC < 25) {

    console.log('Peso Normal.' + ' Seu IMC é: ' + calcularIMC.toFixed(2))

} else if (calcularIMC >= 25 && calcularIMC < 30) {

    console.log('Acima do peso.' + ' Seu IMC é: ' + calcularIMC.toFixed(2))

} else if (calcularIMC >= 30 &&  calcularIMC < 40) {

    console.log('Acima do peso.' + ' Seu IMC é: ' + calcularIMC.toFixed(2))

} else {
    console.log('Obesidade Grave.' + ' Seu IMC é: ' + calcularIMC.toFixed(2))
}



















