// Type Alias

// definição
type GameT = {
    title: string
}

type DCLT = {
    extra?: string
}

// intersection
type GameCollectionT = Game & DCLT & { content: boolean }

// implements

class CreateGameT implements GameCollectionT {
    title: string
    description: string
    genre: string
    content: boolean

    constructor(t: string, d: string, g: string, c: boolean) {
        this.title = t
        this.description = d
        this.genre = g
        this.content = c
    }
}

// declarar função

type getSimilarsT = (title: string) => void;

// ============== Diferenças ============ //

// permite declarar tipos primitivos

type IDT = string | number

// pode declarar tuplas normalmente

type TupleT = [number, number]

[1, 2] as TupleT

// apenas uma declaração por escopo

// ------ Dá erro!! ------/
// type JQueryT = {a: string}
// type JQueryT = {b: string}

// mais recomendado:
// na maioria das vezes
// React - Props