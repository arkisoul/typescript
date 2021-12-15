function Demo(name, type) {
    this.name = name;
    this.type = type;
}
Demo.prototype.func = function () {
    [1,2,3].forEach((n) => {
        console.log(n + "." + this.name + " " + this.type)
    })
}
const demo1 = new Demo('John', 'Male');
const demo2 = new Demo('Jane', 'Female');
demo1.func();
demo2.func();
// console.log(demo);

class Person {
    constructor(name = 'Guest', type) {
        this.name = name;
        this.type = type;
    }

    fun() {
        console.log(this.name, this.type);
    }
}

function greet(name = getGuest()) {
    console.log(`Hello! ${name}`)
}

function getGuest() {
    console.log('getting guest');
    return 'Guest'
}
greet()
greet('Arpit')

// spread and rest operator
// ... and ...
const firstArray = [1,2,3,4,5]
const anotherArray = [2,4,6,8,10]
const combinedArray = [...firstArray].sort()
Math.min(...firstArray, ...anotherArray, ...combinedArray)
const [first, second, ...remainingArray] = firstArray
const f = firstArray[0]
const s = firstArray[1]
const r = firstArray.slice(2)
function calculateMin(...n) {

}

calculateMin()

const obj = {key: 'value', k2: 'value2', k3: 'value3'}
const anotherObj = {keyA: 'value', k2A: 'value2', k3A: 'value3'}
const combinedObj = {
    ...obj,
    ...anotherObj,
    init: 'values',
    anotherKey: 'anotherValue'
};
const {k2, ...restObj} = obj
function objFun({ name: fname = 'Guest', age, height, ...otherInfo }) {
    console.log(fname, age, height, otherInfo)
}

objFun({ age: 30, name: 'John', height: 160, weight: 50, role: 'employee'})
objFun({ age: 30, height: 160, weight: 50, role: 'employee'})