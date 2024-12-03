//boolean
let isDone:boolean = false;
isDone = true;

//Number
let price:number = 10;

//Strings
let first_name:string = 'Masai';
let last_name:number = 5;
let full_name = `${first_name} ${last_name}`;//Inference check from values in typescript

//Array
let arr: number[] = [1,2,3,4,5];
let arrOfStrings: string[] = ['Masai', 'School']
let arrOfNumbers: Array<number> = [1,2,3,4]; //Generic functions

//Object

//interface and types -> creating a blueprint for your object / to create/define the shape of an object.
//Primitive Types in TypeScript -> number, string, boolean, null, undefined, symbol and big-int.

type state = string;

type company = {
    first_name: string;
    age: number;
    last_name: string;
}

type softwareDeveloper = {
    skills: string,
    isWorking?: boolean,
}

// interface company{
//     first_name: string;
//     age: number;
//     last_name: string;
// }


const masai:company = {
    first_name: 'Masai',
    last_name: 'school',
    age: 3
}

let arrOfCompanies: company[] = [{first_name: 'Masai',
last_name: 'school',
age: 3}]


//Tuples
//The number of initial elements in the tuple is fixed
//The types of those initial elements are known in advance.

// let a: string = 'Masai';
// let b: number = 3;

let arryofSomething: [string, number?] = ['Masai'];
// arryofSomething.push(9)
// arryofSomething.push()
// console.log(arryofSomething)


//Enums -> group together a set of named constants.

enum Color{
    RED = 'Red', //0
    GREEN = 'Green', //1
    BLUE = 'Blue',//2
    YELLOW = 'Yellow' //3
}

// console.log(Color)

//Other
let u: undefined;
let n: null;
let a: any;


function sum(a:number, b:number = 10):number{
    return a + b ;
}
console.log(Math.floor(sum(2)))

const printData = ({first_name , last_name, age}: company):void => {
    console.log(`${first_name} ${last_name}`)
}

// printData(masai)

//Union -> Set Theory 
// Either, OR
let output: (number | string | company)[] = ['Masai', 3, 'Masai School' ];

// Intersection
// AND

const masaiStudent: company & softwareDeveloper = {
    first_name: 'Student',
    last_name: 'A',
    age: 20,
    skills: 'Full-Stack Developer',
}