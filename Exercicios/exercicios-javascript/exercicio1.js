// Exercício 1: MANIPULAÇÃO DE STRINGS //

function manipularString(str, letraAntiga, letraNova) {
    console.log("Maiúsculas:", str.toUpperCase());
    console.log("Minúsculas:", str.toLowerCase());
    console.log("Invertida:", str.split('').reverse().join(''));
    console.log("Substituição:", str.replaceAll(letraAntiga, letraNova));
}
manipularString("Meu nome é Laerth!", 'a', 'o');

