let compararStrings = (string1, string2) => {
  if (string1.toLowerCase() === string2.toLowerCase()) {
    return true;
  } else {
    return false;
  }
};

console.log(compararStrings("ana", "ANA"));
console.log(compararStrings("ana", "BIA"));

/* Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso 
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras */
