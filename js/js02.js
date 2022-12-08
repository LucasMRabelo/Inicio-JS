document.getElementById("texto").innerHTML="Meu preimeiro texto em <b>JS</b>";
console.log("Oi isso é um console.log");
var a = 1;
var b = 5;
var c = a + b;
console.log(c);
//js é case sensitive

//Declaração de variaves
var a,b,c;

//atribuição de valores
a = 2;
b = 7;
c = a + b;

alert(c); 

var nome, sobrenome, NomeCompleto;
nome= "Lucas";
sobrenome= "Rabelo";
NomeCompleto= nome + " " + sobrenome;

document.getElementById("texto").innerHTML=NomeCompleto;

//incremento e decremento ++ --

var valor1, valor2, total;
valor1 = 5;
valor2 = 5;

total = ++valor1;
alert(total);

document.getElementById("texto").innerHTML=valor1;

//EVITAR A REPETIÇÃO DA VARIAVEL

valor1 += valor2; //= valor1 = valor1 + valor2 

document.getElementById("texto").innerHTML=valor1;

//comparação

total= (valor1 != valor2); //true or false (===)usado para valor e tipo
// != diferente
document.getElementById("texto").innerHTML=total;

//Ternario
var idade, eleitor;
idade=17;
eleitor= (idade<18) ? " Não eleitor":" Sim, eleitor";

alert('A resposta é :' + eleitor+' a idade dele é de :'+idade)

//Operadores logico
resultado = (idade > 60 && idade < 70);
alert(resultado);

resultado1= (idade == 15 || idade == 17);// ou=||
alert(resultado1)

// !=negação

