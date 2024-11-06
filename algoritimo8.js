const users=[
    {firstName:"john", lastName:"colben", age:26},
    {firstName:"jimmy", lastName:"fred", age:75},
    {firstName:"sam", lastName:"boston", age:50},
    {firstName:"ronald", lastName:"bristh", age:26},  
  ];//Cria uma lista de objetos.
  const output=users
  .filter((x)=>x.age<30)//Com filter vai filtrar os usuarios com idade menor que 30.
  .map((x)=>x.firstName);//vai criar uma nova lista e adiciciona a variavel output, com o nome dos usuarios filtrados pelo filter.
  console.log(output);//Imprime no console a lista de output.
  

  //Esse algoritimo vai filtrar os usuarios com menos de 30 anos e vai criar uma lista coms os nomes deles.