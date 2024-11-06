const numbers = [1,2,3,4,5];//cria uma lista com 5 elementos.
const output = numbers.map((x)=>{ //com o map cria uma nova lista de numeros armazena essa nova lista a variavel output, passando uma função como parametro do map ele itera nos elementos.
  return x * 2;//retorna o dobro do valor.
});
console.log(numbers);//Imprime no console a lista de output.

//Esse algoritimo vai pegar os numeros de uma lista e vai dobrar seus valores e armazenar em uma nova lista