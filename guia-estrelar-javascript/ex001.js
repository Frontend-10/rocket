// Declarar uma variável chamada weight
let weight;

// Qual o tipo dessa variável? undefined
console.log(typeof weight)

// Declare variável com os seguintes tipos
/*  name: String,
    age: Number(integer),
    stars: Number*(float),
    isSubscribed: Bolean */
let name = 'Robson';
let age = 26;
let isSubscribed = true
weight = 70

// A variável student abaixo é de que tipo de dados? object
// Atribuir valores criados acima ao objeto student
let student = {
    name: name,
    age: age,
    isSubscribed: isSubscribed,
    weight: weight
}

// Escreva a seguinte frase no console:
// <nome> de idade <idade>, pesa <peso>Kg!
console.log(`${student.name} de idade ${student.age}, pesa ${student.weight}Kg!`)

// Declarar um array vazio chamado students
let students = []

// coloque o objeto criado dentro do Array
students = [student]

// Coloque no console a posição 0 do array students
console.log(students[0])

// Crie um aluno novo e coloque ele na posição 1 do Array
let student2 = {
    name: 'John',
    age: 30,
    isSubscribed: false,
    weight: 110
}
students.push(student2)