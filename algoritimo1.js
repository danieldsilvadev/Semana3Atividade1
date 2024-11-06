
const numeros = [1,2,3,4,5]; //cria uma lista com 5 elementos.
// function calcularDobro(numero)//cria uma função chamada calcularDobro que vai ter como parametro a lista criada anteriormente.
// {
//   return numero*2;  //retorna a lista coms os valores dobrados.
// }

let calcularDobro = (numero) => {return numero*2}; //crio uma função arrow que recebe como parametro numero e retorna o dobro do numero

const numerosDobro = numeros.map(calcularDobro); //com o map cria uma nova lista de numeros e aplica a função calcularDobro nela e armazena essa nova lista a variavel numerosDobro.

console.log(numerosDobro);//Imprime no console a lista numeroDobro.

//Esse algoritimo basicamenete vai pegar os numeros de uma lista e vai dobrar seus valores e armazenar em uma nova lista 
