//--Dados do pedido

let nomeCliente = "alice";
let tipoClient = "premium";

let nomeProduto = "Teclado Mecânico"
let precoProduto = 200.00;
let estoque = 10;
let quantidadePedido = 5;

//Tem estoque suficiente?
let estoqueOK = quantidadePedido <= estoque;

if(!estoqueOK) {
console.log("Pedido RECUSADO - estoque insuficiente")
}