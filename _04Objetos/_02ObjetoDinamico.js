const pessoa = {
    nome: 'Vitor',
    idade: 25,

    //adicionar um método
    descrever: function(){
    
    console.log(`Meu nome é ${this.nome} e a minha idade é ${this.idade}`);

    }
}; 

const atributo = 'idade';
//Outra forma de acessar os valores
console.log(pessoa[atributo]);
console.log(pessoa['nome']);
//atribuindo um novo valor que por sua vez é a mesma coisa que fazer pessoa.nome ='teste;, mas dessa forma é um acesso direto. 
pessoa['nome'] = 'teste'; // aqui e dinâmico. 