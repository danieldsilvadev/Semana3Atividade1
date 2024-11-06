const users=[
    {firstName:"john", lastName:"colben", age:26},
    {firstName:"jimmy", lastName:"fred", age:75},
    {firstName:"sam", lastName:"boston", age:50},
    {firstName:"ronald", lastName:"bristh", age:26},   
  ];//Criando uma lista de objetos
  const output = users.map((x)=> x.firstName+" "+x.lastName);//Usando map vamos criar uma nova lista, e passa como parametro uma funçao que concatena o first name com o lastname.
  console.log(output);//Imprime no console a lista de output.

  //Esse algoritimo vai criar uma string com o (firtName) e o (lastName) de cada objeto e adicionalos em uma nova lista chamada output