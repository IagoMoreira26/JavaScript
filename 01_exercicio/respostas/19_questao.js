let pedido = (cod, quant) => {
  switch (cod) {
    case 100:
      valor = 3.0;
      console.log(
        `Cachorro Quente \nUnidade R$ ${valor} \nTotal R$ ${valor * quant}`
      );
      break;
    case 200:
      valor = 4.0;
      console.log(
        `Hambúrguer Simples \nUnidade R$ ${valor} \nTotal R$ ${valor * quant}`
      );
      break;
    case 300:
      valor = 5.5;
      console.log(
        `Cheeseburguer \nUnidade R$ ${valor} \nTotal R$ ${valor * quant}`
      );
      break;
    case 400:
      valor = 7.5;
      console.log(`Bauru \nUnidade R$ ${valor} \nTotal R$ ${valor * quant}`);
      break;
    case 500:
      valor = 3.5;
      console.log(
        `Refrigerante \nUnidade R$ ${valor} \nTotal R$ ${valor * quant}`
      );
      break;
    case 600:
      valor = 2.8;
      console.log(`Suco \nUnidade R$ ${valor} \nTotal R$ ${valor * quant}`);
      break;
    default:
      console.log("Produto não existente");
  }
};

pedido(100, 4);

/* O cardápio de uma lanchonete é o seguinte: 

Código      Descrição do Produto    Preço 
100         Cachorro Quente         R$ 3,00 
200         Hambúrguer Simples      R$ 4,00 
300         Cheeseburguer           R$ 5,50 
400         Bauru                   R$ 7,50 
500         Refrigerante            R$ 3,50 
600         Suco                    R$ 2,80 

Implemente uma  função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor 
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o 
comando switch. Crie um caso default para produto não existente */
