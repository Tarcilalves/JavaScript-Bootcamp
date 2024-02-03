
// Defina as variáveis
const precoCombustivel = 5.79;
const gastoMedioCombustivelKmPorLitro = 12;
const distanciaViagemKm = 1580;


// Calcule o valor gasto de combustível
const listrosConsumido = distanciaViagemKm / gastoMedioCombustivelKmPorLitro;
const valorGasto = listrosConsumido * precoCombustivel;

// Imprima o resultado no console
console.log(valorGasto.toFixed(2));
