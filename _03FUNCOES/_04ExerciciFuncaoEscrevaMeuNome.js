

function escreverNome(name){
    return 'Meu nome é: ' + name;
}

function verificarIdade(idade){    
    if(idade >= 18){
        return 'maior de idade';
    }else{
        return 'Menor de idade';
    }
}


function apresentacao(){    
        console.log(escreverNome('Tarcila') + ' e eu sou ' + verificarIdade(39));    
}

apresentacao();

