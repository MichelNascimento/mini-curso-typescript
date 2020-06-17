// interfaces

// definição
interface Game {
    title: string
}

interface DLC {
    extra?: string
}

// interseção / extend

interface GameCollection extends Game, DLC {}

// implements

class CreateGameI implements GameCollection {
    title: string
    description: string
    genre: string

    constructor(t: string, d: string, g: string) {
        this.title = t
        this.description = d
        this.genre = g
    }
}

// declarar função
interface getSimilars {
    (title: string): void
}

// =============== Diferenças ==============//

// ----- Dá erro -------//
//interface ID extends number {}

// não é possível definir tuplas na interface.
interface Tuple {
    0: number
    1: number
}

[1, 2, 3] as Tuple

// pode ter múltiplas declarações e ele une em uma de mesmo nome.

interface JQuery {
    a: string
}

interface JQuery {
    b: string
}

const $: JQuery = {
    a: "bla",
    b: "foo"
}

// vantagem: quando tiver criando libs, prefira
// interfaces, pois são mais extensiveis!

// criando objetos/classes (POO)