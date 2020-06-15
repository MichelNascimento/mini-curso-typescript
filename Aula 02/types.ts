// boolean (true / false)
let isOpen: boolean
isOpen = true

// string ('foo', "foo", `foo`)
let message: string
message = `foo ${isOpen}`

// number (int, float, hex, binary)
let total: number
total = 20.3

// array (type[]) - Para tipar arrays, passamos o tipo de conteúdo que ele terá + [].
let items: string[]
items = ["foo", "bar"]

let values: Array<number> // forma de tipar arrays conhecida como "generic".
values = [1, 2, 3]

// tuple
let title: [number, string, string] // array em que se sabe quantos itens irá conter e os seus tipos.
title = [1, "foo", "bar"]

// enum
enum Colors {
    white = '#fff',
    black = '#000'
}

// any (qualquer coisa) NÃO É LEGAL!
let coisa: any
coisa = [1]

// void (vazio. não tem retorno)
function logger(): void {
    console.log('foo')
}

// null / undefined
type Bla = string | undefined

// never (nunca tem um retorno)
function error(): never {
    throw new Error("error");
}

// object (tudo que não é tipo primitivo)
let cart: object
cart = {
    key: "fi"
}
