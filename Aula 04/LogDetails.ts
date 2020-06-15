
// usando o "Union" para falar que o type "Uid" pode ser do tipo "number", "string" ou "undefined".
type Uid = number | string | undefined // criação de um "Type Alias".

// usando o Type Alias "Uid" criado acima para indicar o tipo do parâmetro "uid".
function logDetails(uid: Uid, item: string) {
    console.log(`A product with ${uid} has a title as ${item}.`)
}

function logInfo(uid: Uid, user: string) {
    console.log(`As user with ${uid} has a name as ${user}.`)
}

// usando o type alias para já definir quais serão os tipo aceitos por ele.
type Platform = 'Windows' | 'Linux' | 'Mac Os' | 'ios'

function renderPlatform(platform: Platform) {
    return platform
}

renderPlatform('ios')

logDetails(123, "sapato")
logDetails("123", "sapato")

logInfo(123, "Michel")
logInfo("123", "Michel")