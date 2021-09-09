

//Lexical scope defines how variable names are resolved in nested functions.

//Nested(child) functions have access to the scope of their parent functions

//This is often confused with closure, but lexical scope is only an important part of
//closure

//w3schools: "A closure is a function having access to the parent scope,
//even after the parent function has closed."

// A closure is created when we define a function, not when a function is executed

//global scope
let x = 1;

const parentFunction = () => {
    //local scope
    let myValue = 2;
    console.log(x);
    console.log(myValue);

    const childFunction = () => {
        console.log( x+= 5);
        console.log(myValue+=1)
    }
    return childFunction;

}

const result = parentFunction();

//It has access to myValue variable even though the parent function has already been called
//and closed, it is already returned
//but the child function still have access to the scope
result();
result();
result();


//IIFE (Immediately Invoked Function Expression)
//I'm going to call it in the action immediately by putting
//parenthesis operators right after it and so this will
// call this function into action immediately

// const privateCounter = (()=>{
//     let count = 0;
//     console.log(`initial value: ${count}`)

//     return () => { count+=1; console.log(count)}
// })();

// privateCounter();
// privateCounter();
// privateCounter();

const credits = ((num) => {
    let credits = num;
    console.log(`initial credits value: ${credits}`);
    return () => {
        credits -=1;
        if(credits>0 ) console.log(`playing game,${credits} credits(s) remaining`)
        if (credits <=0 ) console.log('not enough credits');
    }
})(3);

credits()
credits()
credits()