const delay = ms => {
    return new Promise(resolve => setTimeout(()=>resolve(),ms))
}

const url = 'https://jsonplaceholder.typicode.com/todos'

// function fetchTodos(){
//     console.log("Fetch todo started ...")
//     return delay(2000)
//     .then(()=>
//         //fetch() - это некий аналог AJAX, который делает асинхронный запрос
//         // и возвращает нам Promise
//          fetch(url)
//     ).then(response => response.json())
// }

// fetchTodos()
// .then(data => {
//     console.log('Data:', data)
// })
// .catch(e => console.error(e))


async function fetchAsyncTodos(){
    //await позволяет не переходить к следующей строчке,
    // пока промис на текущей строчке не выполнится
    try {
        console.log("Fetch todo started ...")
        await delay(2000)
        const response = await fetch(url)
        const data = await response.json()
        console.log('Data:', data)
    } catch(e){
        console.error(e)
    } finally{
        
    }
}

fetchAsyncTodos()