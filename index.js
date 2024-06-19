//Exercício 01
//Dado um array de números, crie uma função que retorne um novo array, contendo apenas os números pares.

function filtrarPares(numeros) {
return numeros.filter(numero => 
    numero % 2 === 0)
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(filtrarPares(numeros));


