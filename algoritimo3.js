const numbers = [1,2,3,4,5];//cria uma lista com 5 elementos.
const isOdd = (x) =>  {return x % 2;}//criando uma função chamada isOdd que vai  iterar sobre a lista e retornar o resto da divisão por 2 de cada numero
const output = numbers.filter(isOdd);//Usando filter vai filtrar apenas os numeros impares da lista 
console.log(output);//Imprime no console a lista de output.

//Esse algoritimo vai pegar os numeros de uma lista e vai criar uma nova lista apenas com os numeros impares