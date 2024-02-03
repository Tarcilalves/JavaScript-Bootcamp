
function nome(name){
    console.log('Seu nome é: ' + name);
}

nome('Renan');
nome('Vitor');

function quadrado(valor){
    return valor * valor
}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);
console.log(quadrado(10) + quadrado(10))

function incrementarJuros(valorBase, percentualJuros){
    const valorDeAcrescimo = (percentualJuros / 100) * valorBase;
    return valorBase + valorDeAcrescimo;
}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));
console.log(incrementarJuros(100, 20));