class Pessoa {
    peso;
    altura;

    calcularIMC( ) {
        const imc = this.peso / ((this.altura / 100) * (this.altura / 100));

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

  
}

const tarcila = new Pessoa;
tarcila.peso = 76;
tarcila.altura = 160;
const resultadoIMC = tarcila.calcularIMC();
// Chamando a função calcularIMC diretamente

console.log(resultadoIMC);
