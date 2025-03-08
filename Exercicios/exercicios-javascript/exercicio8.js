// Exercício 8: Objetos
let pessoa = { nome: "Carlos", idade: 28, cidade: "São Paulo" };
pessoa.profissao = "Engenheiro";
delete pessoa.cidade;
console.log("Propriedades:", Object.keys(pessoa));