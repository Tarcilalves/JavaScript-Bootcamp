
const entradas = [ 10, 5, 50, 10, 98,  23, 33, 44, 99, 65,  7];
// quando chamar tem que retornar a primeira posição, e na segunda a segunda posição e assim por diante. 
// contador
let i = 0;

function gets(){
    const valor = entradas[i];
    i++;
    return valor;

}
function print(texto){
    console.log(texto);

}

module.exports.gets = gets;

module.exports = { gets,  print };