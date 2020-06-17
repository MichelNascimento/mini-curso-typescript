
// interfaces servem para descrever a estrutura de objetos mais complexos
// diferente dos "type alias", as interface servem apenas para objetos.
interface Game {
    id?: string | number
    title: string
    description: string
    // diferente dos "type alias", é possível usar os "modifiers".
    readonly genre: string
    platform?: string[]
    //assinatura de método.
    getSimilars?: (title: string) => void
}

const tlou: Game = {
    id: 123,
    title: "The Last Of Us",
    description: "The best game in the world",
    genre: "Action",
    platform: ["PS3", "PS4"],
    getSimilars: (title: string) => {
        console.log(`Similars games to ${title}: Uncharted, A Plague Tale, Metro`)
    }
}

console.log(tlou.genre)

if (tlou.getSimilars) {
    tlou.getSimilars(tlou.title)
}

interface DLC extends Game {
    OriginalGame: Game
    newContent: string[]
}

const leftBehind: DLC = {
    title: "The Last Of Us - Left Behind",
    description: "You play as Ellie before the original game",
    genre: "Action",
    platform: ["PS4"],
    OriginalGame: tlou,
    newContent: ["# hours story", "new characters"]
}

// uma classe que implementa uma interface, deve conter todos itens da interface em questão.
class CreateGame implements Game {
    title: string
    description: string
    genre: string

    constructor(t: string, d: string, g: string) {
        this.title = t
        this.description = d
        this.genre = g
    }
}