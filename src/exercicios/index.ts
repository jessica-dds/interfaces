import { Carrinho } from "./classeCarrinho";
import { VendaCredito } from "./ClasseVendaCredito";

const carrinhoJessica = new Carrinho()

carrinhoJessica.adicionarProduto({
    id: 1,
    descricao: 'melancia',
    categoria: 'frutas',
    valor: 850,
    quantidade: 12
})

carrinhoJessica.adicionarProduto({
    id: 2,
    descricao: 'uva',
    categoria: 'frutas',
    valor: 400,
    quantidade: 6
})

carrinhoJessica.adicionarProduto({
    id: 3,
    descricao: 'maçaa',
    categoria: 'frutas',
    valor: 600,
    quantidade: 8
})

console.log(carrinhoJessica.alterarQuantidadeProduto(3, 15));
console.log(carrinhoJessica.removerProduto(2));
console.log(carrinhoJessica.resumo());

const vendaJessica = new VendaCredito(carrinhoJessica)
vendaJessica.aplicarDesconto()

console.log(vendaJessica.finalizarPedido());
