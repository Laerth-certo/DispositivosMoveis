// Exercício 9: Desestruturação de Objetos
let livro = { titulo: "O Senhor dos Anéis", autor: "J.R. Tolkien", ano: 1954 };
let { titulo, autor } = livro;
function obterInfoLivro({ titulo, autor }) {
    return `${titulo} - ${autor}`;
}
console.log(obterInfoLivro(livro));