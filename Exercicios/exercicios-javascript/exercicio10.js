// Exercício 10: Funções e Arrays
let numerosArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares = numerosArray.filter(n => n % 2 === 0);
let dobrados = pares.map(n => n * 2);
let soma = dobrados.reduce((acc, val) => acc + val, 0);
console.log("Pares:", pares);
console.log("Dobrados:", dobrados);
console.log("Soma total:", soma);