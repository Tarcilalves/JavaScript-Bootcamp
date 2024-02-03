/* 
2 Crie uma classe para representar Pessoa.
Atibustos: nome, peso e altura
IMC = peso / (altura * altura)
Instanciar uma Pessoa. 

*/

class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    //método calciular IMC
    calcularIMC(){
        return this.peso / (this.altura * this.altura);
    }
    //método para classificar o IMC
    classificarImc(){
        const imc = this.calcularIMC();
        
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

const jose = new Pessoa('Jose', 70, 1.75);
console.log(jose);
console.log(jose.calcularIMC());
console.log(jose.classificarImc());

