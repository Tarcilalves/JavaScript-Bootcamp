// Defina as variáveis
const precoGasolina = 5.79;
const precoEtanol = 3.42;
const gastoMedioCombustivelKmPorLitro = 12;
const distanciaKm = 1580;
const tipoCombustivel = 'Gasolina';

const listrosConsumido = distanciaKm / gastoMedioCombustivelKmPorLitro;

if (tipoCombustivel === 'Etanol') {
    console.log("É Etanol");
    const valorGastoEtanol = listrosConsumido * precoEtanol;
    console.log(valorGastoEtanol.toFixed(2));

} else {
    console.log("É Gasolina");
    const valorGastoGasolina = listrosConsumido * precoGasolina;
    console.log(valorGastoGasolina.toFixed(2));
}


