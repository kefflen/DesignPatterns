//Factory method
class profile {
    constructor () {
        this.sections = []
        this.createProfile()
    }
    addSections(...sections) {
        for (let section of sections) {
            this.sections.push(section)
        }
    }
    createProfile() {
        console.log("need to implement")
    }
}

function publication() {
    return {
        page: "Publication"
    }
}
function Patents() {
    return {
        page: "Patents"
    }
}
function Album() {
    return {
        page: "Album"
    }
}
function Friends() {
    return {
        page: "Friends"
    }
}
class Facebook extends profile {
    createProfile() {
        this.addSections(new Album(), new Friends(), new publication())
    }
}
class Linkdin extends profile {
    createProfile() {
        this.addSections(new Patents(), new Friends(), new publication())
    }
}
face = new Facebook()
link = new Linkdin()

//Abstract factory
function americanPizza() {
    this.igredientes = ["tomate", "salame", "cheedar"]
}
function vegAmericanPizza() {
    this.igredientes = ["champinhon", "oregano", "tomate", "cebola"]
}
function brPizza() {
    this.igredientes = ["Frango", "catupiri", "mussarela", "tomate", "oregano", "bacon", "batata-palha"]
}
function brVeg() {
    this.igredientes = ["tomate", "champinhon", "oregano", "cebola", "brocolis"]
}

function usaPizzaria() {
    return {
        pizza() {
            return new americanPizza()
        },
        vegPizza() {
            return new vegAmericanPizza()
        }
    }
}
function brPizzaria() {
    return {
        pizza() {
            return new brPizza()
        },
        vegPizza() {
            return new brVeg()
        }
    }
}
function pizzaStore(...pizzarias) {
    return {
        cardapio(tipo) {
            pizzas = []
            if (tipo && tipo.toLowerCase() == "v") {
                for (pizzaria of pizzarias) {
                    pizzas.push(pizzaria.vegPizza())
                }
            } else {
                for (pizzaria of pizzarias) {
                    pizzas.push(pizzaria.pizza())
                }
            }
            console.log(pizzas)
        }
    }
}
store = new pizzaStore(usaPizzaria(), brPizzaria())
console.log(face, link)