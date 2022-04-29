// var declaração de variável global
console.log(hello);

{
    // O javascript usa um conceito chamado hosting, que joga a declaração da variável
    // para o início do código, porém seu valor fica 'undefined'
    var hello = 'there';
    console.log(hello)
}

// let e const somente no escopo global
// const não pode ter o valor da declaração alterado

const fruit = 'banana';

{
    let obj = 'fork';
    obj = 'car';
    console.log(obj)
}

console.log(fruit);