interface Iproduto {
    id: number
    descricao: string
    categoria: string
    valor: number
    quantidade: number
}

export class Carrinho {
    produtos: Iproduto[]

    constructor() {
        this.produtos = []
    }

    adicionarProduto(produto: Iproduto): void {
        this.produtos.push(produto)
    }

    removerProduto(idProduto): string {
        const indiceProdutoEncontrado = this.produtos.findIndex(produto => produto.id === idProduto)

        if (indiceProdutoEncontrado === -1) {
            return 'Produto não encontrado.'
        }

        this.produtos.splice(indiceProdutoEncontrado, 1)

        return 'Produto removido.'
    }

    alterarQuantidadeProduto(idProduto: number, quantidade: number): string {
        const ProdutoEncontrado = this.produtos.find(produto => produto.id === idProduto)

        if (!ProdutoEncontrado) {
            return 'Produto não encontrado.'
        }

        ProdutoEncontrado.quantidade = quantidade

        return `Quantidade de ${ProdutoEncontrado.descricao} alterado para ${quantidade}`
    }

    resumo(): Iproduto[] {
        return this.produtos
    }
}