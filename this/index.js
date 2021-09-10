// Контекст this. Как работает call, bind, apply?

// Метод bind() создаёт новую функцию, которая при вызове устанавливает 
// в качестве контекста выполнения this предоставленное значение. 
// В метод также передаётся набор аргументов, которые будут установлены
// перед переданными в привязанную функцию аргументами при её вызове.

function hello() {
    console.log('Hello', this)
}

const person = {
    name:'Tania',
    age:20,
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}

const lena ={
    name: 'Elena',
    age: 23
}

// person.logInfo.bind(lena,'Frontend','8-999')();
//lenaLog('Frontend','8-999');

//The call() method calls a function 
//with a given this value and arguments provided individually.

// Помимо того, что метод call() задает определенный контекст функции и 
// какие-то параметры через запятую перечисленные
// Он и сразу же вызывает эту функцию

//bind() же в свою очередь возвращает новую функцию и ее мы можем вызвать
//тогда, когда нам будет угодно
// person.logInfo.call(lena,'Frontend','8-999');

//В метод apply() мы всегда передаем два параметра в отличии от метода 
//call(), где мы можем передавать бесконечное число параметров
person.logInfo.apply(lena,['Frontend','8-999']);


const array = [1, 2, 3, 4, 5]

// function multBy(arr,n){
//     return arr.map(i => i*n)
// }
// console.log(multBy(array, 5))

//А как сделать так, чтобы у этого массива сразу же был метод,
//который позволяет сделать подобный функционал?
// Для этого можем пользоваться прототипами

Array.prototype.multBy = function(n){
    return this.map(i => i*n)
}

console.log(array.multBy(2))

//Теперь для того, чтобы изменять элементы каждого массива, нам не нужно вызывать
// отдельную функцию