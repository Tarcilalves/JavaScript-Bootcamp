/*
1 Criar uma classe para representar carros;
O carros possuem:
> Marca > cor > gasto médio de combustível por KM rodado
Criar um método que dado a quantidade de quilometros e o preço do combustivel nos dê o valor gasto
em reais para realizar este percurso. 

*/

class Carro{
    //atributos
    marca;
    cor;
    gastoMedioPorKm;

    //método construtor - inicializamos os atributos
    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    // método calcular quantidade de Km e o preço do combustivel gerando o resultado em reais:
    calcularGastoDoPercurso(distanciaKm, precoCombustivel){
        return distanciaKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

//Instanciando
const gol = new Carro('Uno', 'Branco', 1/12);
console.log(gol.calcularGastoDoPercurso(70, 5));
