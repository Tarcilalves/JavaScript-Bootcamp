const numero = 0;
const nummeroDivisivelPor5 = (numero % 5) === 0;


if(numero === 0){
    console.log('O número inválido');
}else if(nummeroDivisivelPor5){
    console.log('Sim');
}else{
    console.log('Não');
}