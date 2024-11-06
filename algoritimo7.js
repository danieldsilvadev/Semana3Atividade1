let estudantes =[
    {nome:"João", idade:15},
    {nome:"Maria", idade:20},
    {nome:"Felipe", idade:22},
    {nome:"Pedro", idade:12},
    {nome:"Joana", idade:18}
   ];//Cria uma lista de objetos.
   const details = estudantes.filter((x)=> x.idade >= 18);//Usando filter vai filtrar os alunos que tem a idade maior ou igual a 18 e armazena na variavel details.
   console.log(details.length);//Imprime no console a quantidade/tamanho de elementos da variavel details.
 
   //Esse algoritimo vai criar uma nova lista e filtrar os alunos com idade maior ou igual a 18 e vai imprimir o tamanho da lista.
   