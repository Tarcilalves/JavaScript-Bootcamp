
//Coleção de Dados

//Sintaxe de um Objeto Literal 

const pessoa = {
    nome: 'Vitor',
    idade: 25,

    //adicionar um método{
    descrever: function(){
    // quando estamos dentro de uma função, temos uam palavra reservada que é o This, 
    //ele quer dizer ao contexto no qual está inserido, assumindo o objeto.
    
    // como a função está dentro de um objeto, podemos usar os valores:
    console.log(`Meu nome é ${this.nome} e a minha idade é ${this.idade}`);

    }
}; 

pessoa.descrever();

pessoa.nome = 'Renan';
pessoa.idade = 30;

pessoa.descrever = function() {
    console.log(`Meu nome é ${this.nome}`);
}

pessoa.descrever();

