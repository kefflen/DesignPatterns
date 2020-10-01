
function newsNotifation() {
    let obj = {
        observers: [],
        lastNews: [],
        register(observer) {
            this.observers.push(observer)
        },
        notice(news) {
            this.lastNews.push(news)
            this.notififyAll(news)
        },
        notififyAll(news) {
            for (let observer of this.observers) {
                observer.update(news)
            }
        }
    }
    //Singleton
    newsNotifation = function () {
        return obj
    }
    return obj
}

class Pessoa {
    constructor(name, suject) {
        this.name = name
        this.suject = suject
        this.suject.register(this)
    }
    update(news) {
        console.log(`${this.name} has received: ${news}`)
    }
}
newsNow = new newsNotifation()
kefflen = new Pessoa("Kefflen", newsNow)
joao = new Pessoa("João", newsNow)
ana = new Pessoa("Ana", newsNow)


newsNow.notice("Testando o sistema de notificação")
