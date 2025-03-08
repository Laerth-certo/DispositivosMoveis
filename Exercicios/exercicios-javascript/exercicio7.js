// Exercício 7: MÉTODOS DE ARRAYS // 
let frutas = ["Maçã", "Banana", "Abacaxi", "Laranja"];
console.log("Maiúsculas:", frutas.map(f => f.toUpperCase()));
console.log("Começam com 'A':", frutas.filter(f => f.startsWith("A")));
console.log("Comprimentos:", frutas.map(f => f.length));