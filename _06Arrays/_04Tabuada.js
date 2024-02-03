function calcularTabuada(numero){ // recebe  um número como argumento
    const tabuada = []; // array vazio 
    for (let i = 0; i <= 10; i++) { // usa o loop para preenchê-lo, com um condição de até 10.
        tabuada.push(numero * i);
        
    }
    return tabuada;
}

const numeroEscolhido = 7;
const calcular = calcularTabuada(numeroEscolhido);

console.log(numeroEscolhido, calcular); // chamando a função

/*
const numero = 7;
for (let i = 0; i <= 10; i++) {
    console.log(i * numero);   
    
}

*/
