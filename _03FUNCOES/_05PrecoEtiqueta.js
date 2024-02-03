
function aplicarDesconto(valor, desconto){
    return valor - (valor * (desconto/100));
}

function aplicarJuros(valor, juros){
    return valor + (valor * (juros  / 100));
}

const produto = 100;
const formaDePagamento = 4;

if(formaDePagamento === 1){    
    console.log(aplicarDesconto(produto, 10));
}else if(formaDePagamento === 2){
    console.log(aplicarDesconto(produto, 15));
}else if(formaDePagamento === 3){
    console.log(produto);
}else{
    console.log(aplicarDesconto(produto, 10));;
}