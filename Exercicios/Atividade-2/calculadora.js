

import moment from "moment";

export function soma(num1, num2) {
    return num1 + num2;
}

export function subtracao(num1, num2) {
    return num1 - num2;
}

export function multiplicacao(num1, num2) {
    return num1 * num2;
}

export function divisao(num1, num2) {
   
    return num1 / num2;
}

export function calcularIdade(dataNascimento){
    return moment().diff(moment(dataNascimento, 'yyy-mm-dd','years'))
}