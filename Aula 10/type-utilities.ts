type Todo = {
    title: string
    description: string
    completed?: boolean
}

// Readonly:  Transformando todas as propriedades do objeto em "Readonly", ou seja, seus valores não poderão ser alterados, uma vez que já foram passados.
const todo: Readonly<Todo> = {
    title: "Assistir Dark de novo",
    description: "Relembrar os detalhes",
    completed: false
}

console.log(todo)

//todo.completed = true

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) { // o "Partial" torna as propriedades do objeto opcionais dentro dessa função.
    return { ...todo, ...fieldsToUpdate }
}

const todo2: Todo = updateTodo(todo, { completed: true })
console.log(todo2)

//// Pick: Pega somente as propriedades que quisermos dentro do Type criado.
type TodoPreview = Pick<Todo, "title" | "completed">

const todo3: TodoPreview = {
    title: "Fechar Ghost of Tsushima",
    completed: false
}

//// Omit: Ao contrário do "Pick", o Omit irá omitir as propriedades do Type que forem passadas.
type TodoPreview2 = Omit<Todo, "description">

const todo4: TodoPreview2 = {
    title: "Fechar Ghost of Tsushima",
    completed: false
}
