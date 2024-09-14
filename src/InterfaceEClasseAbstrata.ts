// type TUsuario = {
//     nome: string
//     email: string
//     senha: string
// }

interface IUsuario {
    nome: string
    email: string
    senha: string
}

abstract class Usuario {
    nome: string
    email: string
    protected senha: string

    abstract login(senha: string): boolean

}

class Gerente extends Usuario {

    constructor(usuario: IUsuario) {
        super()
    }

    login(senha: string): boolean {
        if (this.senha !== senha) {
            return false
        }
        return true
    }

}