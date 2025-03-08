// Exercício 6: ARRAYS // 
let numeros = [10, 20, 30, 40, 50];
numeros.push(60);
numeros.shift();
console.log("Maior número:", Math.max(...numeros));
console.log("Menor número:", Math.min(...numeros));