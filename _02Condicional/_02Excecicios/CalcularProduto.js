console.log("******************  CALCULAR PRODUTO  *******************")
console.log();

console.log('Condição de pagamento\n\n' +
'- (1) À VISTA Débito, recebe 10% de desconto;\n' +
'- (2) À VISTA no Dinheiro ou Pix, recebe 15% de desconto;\n' +
'- (3) Em duas vezes, preço normal de etiqueta mais juros de 10%\n\n')

const produto = 200;
const formaDePagamento = 3;

if(formaDePagamento === 1){    
    console.log(produto - (produto * 0.1));
}else if(formaDePagamento === 2){
    console.log(produto - (produto * 0.15));
}else{
    console.log('Parcelado com Juros');
}




























