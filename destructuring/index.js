function calcValues(a, b){
    return [
        a+b,
        a-b,
        a*b,
        a/b
    ]
}

const [sum,, mult, ...other] = calcValues(42, 10);

// const sum = result[0]
// const sub = result[1]

// const [sum, sub] = result

console.log(sum, mult, other)

//Objects

const person = {
    name:'Tania',
    age:20,
    address: {
        country: 'Ukraine',
        city:'Kyiv'
    }
}

//const name = person.name
const {name: firstName, age, car="has got a car", address:{city: hometown, country}} = person

console.log(firstName, age, car, hometown, country)

function logPerson({name, age}){
    console.log(name+" "+age)
}

logPerson(person)