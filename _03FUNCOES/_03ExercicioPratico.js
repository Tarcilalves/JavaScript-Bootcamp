console.log("******************  CALCULANDO O IMC  *******************")
console.log();

function calcularIMC(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarIMC(imc) {

    if (imc < 18.5) {
        return 'Abaixo do peso.';
    } else if (imc >= 18.5 && imc < 25) {

        return 'Peso Normal.' ;

    } else if (imc >= 25 && imc < 30) {        
        return 'Acima do peso.';
        
    } else if (imc >= 30 && imc < 40) {

        return 'Acima do peso.';
    } else {
        return 'Obesidade Grave.';
    }

}

(function main(){
    
    const peso = 74;
    const altura = 1.60;
    
    const imc = calcularIMC(peso, altura);
    //imprimir a classificação do IMC
    console.log(classificarIMC(imc));

})

main = function(){
    console.log(1);
}

main();



