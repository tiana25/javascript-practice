// function createCalcFunction(n){
//     return function(){
//         console.log(1000 * n)
//     }
// }

// const calc = createCalcFunction(42)
// calc()

// function createIncrementor(n){
//     return function(num){
//         return n+num
//     }
// }

// const addOne = createIncrementor(1);
// console.log(addOne(41));
// console.log(addOne(11));

// const addTen = createIncrementor(10);
// console.log(addOne(10));
// console.log(addOne(41));

// function urlGenerator(domain){
//     return function(url){
//         return `https://${url}.${domain}`
//     }
// }

// const comUrl = urlGenerator('com');
// console.log(comUrl('google'));

// const uaUrl = urlGenerator('ua');
// console.log(uaUrl('kurazh'));


/*
    Написать свою функцию bind

*/


function logPerson(){
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {name: 'Mychail', age: 22, job: 'Frontend'}
const person2 = {name: 'Elena', age: 19, job: 'SMM'}

bind(person1, logPerson)()
bind(person2, logPerson)()

function bind(context, fn){
    return function (...args){
        fn.apply(context, args)
    }
}
