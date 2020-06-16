// accountInfo
// charInfo
// PlayerInfo

// criação de um type alias sem tipos primitivos.
type AccountInfo = {
    id: number | string
    name: string
    email?: string // usando o "?" para o email ser opcional. Isso é igual a "string | undefined".
}
// definindo uma constante como sendo do tipo "AccountInfo".
const account: AccountInfo = {
    id: 123,
    name: "Michel"
}

type CharInfo = {
    nickname: string
    level:  number
}

const char: CharInfo = {
    nickname: "micheloliveira",
    level: 100
}

// defininfo o type "PlayerInfo" como sendo a interseção (intersection) de "AccountInfo" e "CharInfo". Ou seja, a união dos dois.
type PlayerInfo = AccountInfo & CharInfo

const player: PlayerInfo = {
    name: "Michel",
    nickname: "micheloliveira",
    id: '123',
    level: 100
}