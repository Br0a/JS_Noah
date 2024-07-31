//DESAFIO!!!!

//FAZER UMA CALCULADORA QUE MOSTRA A IDADE DE UMA PESSOA UTILIZANDO
//DOIS DADOS DE ENTRADA.

/*
----------------------------------------------------------------
AQUI EM BAIXO ESTÁ NOSSO PRIMEIRO CÓDIGO, UTILIZE COMO CONSULTA.
----------------------------------------------------------------

let num1 = 10;
let num2 = 20;
let resultado;

resultado = num1 / num2;

alert("O resultado  é: " + resultado);

num1 = parseInt(prompt("Digite o primeiro número da soma: "));
num2 = parseInt(prompt("Digite o segundo número da soma: "));

resultado = num1 + num2;

alert("O resultado é: " + resultado);
*/

let num1;
let num2;
let resultado;
let nome;

nome = prompt("Digite o seu nome: ");
num1 = parseInt(prompt("Digite o ano atual: "));
num2 = parseInt(prompt("Digite o ano de nascimento: "));

resultado = num1 - num2;

alert(nome +" a sua idade é de: " + resultado);                        

resultado = (num1 - num2) / 7;

alert("Se você fosse um cachorro, sua idade seria de: " + Math.round(resultado));