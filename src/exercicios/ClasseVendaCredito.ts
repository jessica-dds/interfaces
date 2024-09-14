import { Carrinho } from "./classeCarrinho";
import { Venda } from "./ClasseVenda";
import { IVenda } from "./InterfaceVenda";


export class VendaCredito extends Venda implements IVenda {
    readonly desconto: number

    constructor(carrinho: Carrinho) {
        super(carrinho)
        this.desconto = 0.05
    }

    aplicarDesconto(): void {
        if (this.total > 10000) {
            this.total = this.total - (this.total * this.desconto)
        }
    }

    finalizarPedido(): string {
        return `Pedido finalizado. Total: R$ ${(this.total / 100).toFixed(2)}`
    }
}
