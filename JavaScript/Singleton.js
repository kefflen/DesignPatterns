//Tentativas com clousures
function Singleton() {
    let instance = null
    function inner() {
        if (instance === null) {
            console.log("Criando instancia")
            instance = {}
        }
        return instance
    }
    return inner
}
let contructor = Singleton()

let obj2 = contructor()
let obj3 = contructor()
obj2.x = 2
console.log({obj2, obj3})

function Singleton2() {
    if (!Singleton2.instace) {
        Singleton2.instace = {}
    }
    return Singleton2.instace
}

function Singleton3 () {
    let instace
    Singleton3 = function() {
        return instace
    }
    instace = {}
    return instace
}
obj4 = Singleton3()
obj5 = Singleton3()
obj5.x = 2
obj4.y = 3
console.log({obj4, obj5})
