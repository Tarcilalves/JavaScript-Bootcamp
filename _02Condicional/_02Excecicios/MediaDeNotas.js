console.log("******************  MÉDIA DA NOTA  *******************")
console.log();

const primeiraNota = 1;
const segundaNota = 3;
const terceiraNota = 4;

const mediaDasNotas = (primeiraNota + segundaNota + terceiraNota) / 3;

if(mediaDasNotas < 5)
{
    console.log(" Você foi << REPROVADO >>. ");
    console.log(" Sua MÉDIA é: " + mediaDasNotas.toFixed(2));

}else if(mediaDasNotas >= 7 )
{
    console.log(" Você está em << RECUPERAÇÃO >>. ");
    console.log(" Sua MÉDIA é: " + mediaDasNota.toFixed(2));
}else 
{
    console.log(" Você está << APROVADO >>. Parabéns!! ");
    console.log(" Sua MÉDIA é: " + mediaDasNotas.toFixed(2));
}





























