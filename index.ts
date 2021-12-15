const str: string = 'Hello world';
const num: number = 20;
const float: number = 20.20;
const bool: boolean = true;
let str2: string;

const arr: number[] = [1, 2, 3, 4];
const arr1: Array<Array<number>> = [[1, 2], [3, 4]];
const union: string | number | boolean | string[] = 20;
const tuple: [string, number] = ["hello", 20];
enum example {
    GREEN = 'green',
    RED = 'red',
    YELLOW = 'yellow'
}
const obj = {
    GREEN: 'green'
}

function fun(a: string | number, ex: example) {
    if(typeof a === 'string') {
        a.length
    } else if (typeof a === 'number') {
        const c = a * 20;
    } else {
        // a's type would be never here
    }
    {
        let fname;
        console.log(fname);
    }
}
const arrOne: number[] = [1,2,3,4]
// arrOne = [2,3,4,5] // illegal assignment
const objOne = {

}
// objOne = {} // illegal assignment
fun(10, example.GREEN)

const aProp: string = "string";

// fun(true, example.GREEN) // illegal function invocation

// es6 features
/**
 * let, const
 * arrow functions
 * class based syntax
 * rest operator
 * spread operator
 * default function params
 */

function Demo() {
    // console.log(this);
}
const demoOne = () => {}
demoOne();
new Demo()

function add(param1: number = 1, param2: number = 2, ...numbers: number[]) {
    return param1 + param2
}
add()
add(10)
add(10, 20, 30, 40, 50, 60 ,70)
const squares = [1,2,3,4].map((n: number, index: number, arr: number[]) => n * n)
const arrayExm = [1,2,3,4,5,6]
const [first, second] = arrayExm;
const {name: fname, age}: {name: string, age: number, height: number} = {name: 'John', age: 30, height: 172}

class Person {
    name: string;
    age: number;
    height: number;
    
    constructor(name: string, age: number, height: number) {
        this.name = name;
        this.age = age;
        this.height = height;
    }

    sayHello(): string {
        return `Hello ${this.name}`;
    }
}
