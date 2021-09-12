
const person = Object.create(
    {
        //В данном объекте мы може указывать прототип нового созданного объекта 
        //person
        calculateAge(){
            console.log('Age:', new Date().getFullYear() - this.birthYear)
        }
    },
    {
    name: {
        value:'Tania',
        //для того чтобы поле name было видно в цикле for
        enumerable: true,
        //можно или нельзя изменять это поле
        writable: true,
        // можем или не можем удалять данный параметр с объекта
        configurable: true
    },
    birthYear: {
        value:2001
    },
    age: {
        get(){
            return new Date().getFullYear() - this.birthYear
        },
        set(value){
            document.body.style.background = 'red'
            console.log('Set age', value)
        }
    }
})

person.name = "Maxim"

for(let key in person){
    if(person.hasOwnProperty(key)){
        console.log('Key', key, person[key])
    }
}