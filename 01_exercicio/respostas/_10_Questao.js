function verificaInteiro(valor) {
  if (!Number.isInteger(valor) == true) {
    return "O número informado não é inteiro";
  } else if (valor % 3 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(verificaInteiro(3.5));
console.log(verificaInteiro(30));
console.log(verificaInteiro(35));

/* Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true 
ou false */
