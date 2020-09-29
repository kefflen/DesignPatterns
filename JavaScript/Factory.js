//Factory method
//...pensando



//Abstract factory
function americanPizza() {
    this.igredientes = ["tomate", "salame", "chedar"]
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

