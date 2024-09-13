function aumentoSalario(salario, plano) {

    switch(plano) {
        case "A":
            console.log("Seu novo salário é: ", (salario / 100) * 10 + salario)
            break
        case "B":
            console.log("Seu novo salário é: ", (salario / 100) * 15 + salario)
            break
        case "C":
            console.log("Seu novo salário é: ", (salario / 100) * 20 + salario)
            break
        default:
            console.log("Plano inválido")
    }
}

aumentoSalario(1500, "A")

/* Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo:  

Plano  Aumento 
A  10% 
B  15% 
C  20% 

Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido */