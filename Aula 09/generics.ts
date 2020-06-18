
// S => State
// T => Type
// K => Key
// V => Value
// E => Element

// o conteúdo entre "<>", significa que a função poderá trabalhar com esses tipos passados.

// aqui definimos que o "S" só poderá ser number ou string.
// antes do sinal de "=", definimos quais os tipos do generic.
// depois do sinal de "=", definimos qual será o tipo padrão.
function useState<S extends number | string = string>() {
    let state: S

    function getState() {
        return state
    }

    function setState(newState: S) {
        state = newState
    }

    return { getState, setState }
}

const newState = useState()

newState.setState("foo")
console.log(newState.getState)

// newState.setState(123)
// console.log(newState.getState)

newState.setState("bla")
console.log(newState.getState)