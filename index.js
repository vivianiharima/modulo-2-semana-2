/*Exercício 01
Dado um array de números, crie uma função que retorne um novo array, contendo apenas os números pares.*/

function filtrarPares(numeros) {
return numeros.filter(numero => 
    numero % 2 === 0)
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(filtrarPares(numeros));



/*Exercício 02
Dado um array de objetos representando pessoas com propriedades nome e idade,
crie uma função que retorne um array, contendo apenas os nomes das pessoas com idade maior ou igual a 18 anos.*/


let pessoas = [
    { nome: 'Alice', idade: 17 },
    { nome: 'Bob', idade: 22 },
    { nome: 'Charlie', idade: 16 },
    { nome: 'David', idade: 19 }
    ];


function filtrarAdultos(pessoas) {
        let pessoasMaior = pessoas.filter(pessoa =>
            pessoa.idade>=18);
        let nomesPessoasMaior = pessoasMaior.map(pessoa => pessoa.nome)
            return nomesPessoasMaior
    }




console.log(filtrarAdultos(pessoas)); 


