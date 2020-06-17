 
 // "abstract class": pode ser extendida, mas não pode ser instanciada.
 abstract class UserAccount {
    public name: string // "public": pode ser tanto lido, quanto alterado fora da classe.
    protected age: number // "protected": pode ser chamada dentro da própria classe ou suas subclasses.

    // passando valores para as propriedades.
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    logDetails(): void {
        console.log(`The player ${this.name} is ${this.age} years old.`)
    }
}

class CharAccount extends UserAccount {
    private nickname: string // "private": não pode ser lido nem alterado fora da classe, nem mesmo das subclasses.
    readonly level: number // "readonly": pode ser lido fora da classe, mas não alterado.

    constructor(name: string, age: number, nickname: string, level: number) {
        super(name, age) // pegando as propriedades da classe superior.

        this.nickname = nickname
        this.level = level
    }

    get getLevel() {
        console.log("------GET------")
        return this.level
    }

    set setLevel(level: number) {
        //this.level = level (comentado porque essa propriedade é "readonly").
    }

    logCharDetails(): void {
        console.log(`The player ${this.name} is ${this.age} and has the char ${this.nickname} at level ${this.level}`)
    }
}

// const michel = new UserAccount("Michel", 20)
// console.log(michel)
// michel.logDetails()

const john = new CharAccount("John", 45, "JohnMaster", 80)
john.logDetails()
john.logCharDetails()

// john.setLevel = 499

console.log(john.getLevel)