const person = {
    name: 'Maxim',
    age: 25,
    greet: function() {
        console.log('Greet!')
    }
}

//По сути, благодаря этой конструкции мы расширили базовый прототип
//класса Object и добавили в него новый метод 
//после чего он стал доступен для того объекта, который мы создаем
Object.prototype.sayHello = function() {
    console.log('Hello!')
}

//В метод create() мы можем передать какой-то объект,
//который на самом деле будет являться прототипом
//для объекта лена 
const lena = Object.create(person)
lena.name = 'Elena'