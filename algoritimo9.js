let students = [
    {name:"Smith", average:80},
    {name:"Jenny", average:69},
    {name:"John", average:35},
    {name:"Tiger", average:55}
   ];//cria uma lista de objetos
   const output = students
   .map((student)=>{
       if(student.marks < 60){ // Se a marca/média do estudante for menor que 60
           student.average += 20;//adiciona 20 ao average do estudante
       }
       return student;//retorna o estudante
   }) //com map vamos criar uma nova lista de estudantes e armazenar em output
   .filter((student)=> student.average > 60);//filtra os alunos que após ganhar os 20 pontos ficaram com o average maior que 60
   console.log(output);//Imprime no console a lista de output.

   //esse algoritimo vai criar uma nova lista, onde os alunos com media menor que 60 ganham 20 pontos e no final filtra os alunos que após ganharem os 20 pontos ficaram com avarage maior que 60.
   
   