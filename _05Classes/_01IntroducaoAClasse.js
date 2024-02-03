
class Pessoa {
    //atributos 
    nome;
    idade;

    // métodos
    descrecrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

const vitor = new Pessoa();
vitor.nome = 'Vitor';
vitor.idade = 25;

const renan = new Pessoa();
renan.nome = 'Renan';
renan.idade = 30;


vitor.descrecrever();
renan.descrecrever();
