// console.log('Start')

// console.log('Start 2')

/** Почему поток не блокируется?
 * Почему программа регистрирует это и в нужный момент вызывает?
 * 
 * Здесь кроется концепт Event Loop
 * Когда интерпретатор доходит до этого места, он берет и закидывает всю эту строчку в стек
 * Потом он берет и выкидывает ее из стека регистрируя эту функцию
 * И ждет пока браузерный сторонний API выполнит эту функцию
 * 
 * И когда метод setTimeout будет выполнен, функция, которую мы в нем регистрируем
 * попадает в так званую очередь, в которой работает цикл
 * который пробегается по этой очереди и если видит, что функция готова
 * то он закидывает ее обратно в стек и выполняет ее
 */

// window.setTimeout(function(){
//     console.log('inside timeout, after 2s')
// }, 2000)

// console.log('End')

 console.log('Request data...')

// const p = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log('Preparing data ...')
//         const backenddata = {
//             server: 'aws',
//             port:2000,
//             status: 'working'
//         }
//         //Таким образом говорим промису, что он завершил свое выполнение
//         resolve(backenddata)
//     }, 2000)
// })

// p.then(data=>{
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             data.modified = true;
//             resolve(data)
//             }, 2000)    
//     })
// })
// // .catch(err => console.error('Error: ', err))
// .then(clientData =>{
//         console.log('Data received', clientData);
//         clientData.fromPromise = true
//         return clientData
// }).then(data => {
//     console.log('Modified data',data)
// })
// //Если поставим catch в конце, то получим всего одну ошибку
// .catch(err => console.error('Error: ', err))
// //Данный метод будет вызван в любом случае в не зависимости от успеха или ошибки
// .finally(()=>{
//     console.log('Finally')
// })

const sleep = ms => {
    return new Promise(resolve => {
        setTimeout( () => resolve(), ms)
    })
}

// sleep(2000).then( () => console.log('After 2 sec'))
// sleep(3000).then (() => console.log('After 3 sec'))

//Передаем массив промисов, возвращает промис, который будет выполнен только тогда,
// когда завершатся все промисы в этом массиве

Promise.all([sleep(2000), sleep(5000)])
    .then(()=>{
        console.log('All promises')
    })
//Когда выполнится первый промис, то тогда сразу же этот промис в race() отработает
//Полезно в тех случаях, когда нам нужно определить какой промис был выполнен первым
Promise.race([sleep(2000), sleep(5000)])
.then(()=>{
    console.log('All promises')
})

