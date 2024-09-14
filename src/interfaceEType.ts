interface IAnimal {
    nome: string
}

interface IAnimal {
    peso: number
}

type TAnimal = {
    nome: string
}

type T2Animal = {
    peso: string
}

type T3Animal = TAnimal & T2Animal

let urso: T3Animal;

