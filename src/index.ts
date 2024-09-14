// Classe Fusca que herda característica de uma classe abstrata e assume dois contratos
// que possuem assinaturas públicas 

interface ICarro {
    ano: number

    acelerar(): void
}

interface ICarro2 {
    ano: number

    ligarTurbo(): void
}

abstract class Carro {
    protected velocidade: number

    abstract frear(): void
}

class Fusca extends Carro implements ICarro, ICarro2 {
    ano: number

    constructor(ano: number) {
        super()
        this.ano = ano
        this.velocidade = 0
    }
    ligarTurbo(): void {
        this.velocidade += 100
    }

    acelerar(): void {
        this.velocidade += 1
    }

    frear(): void {
        this.velocidade = 0
    }
}