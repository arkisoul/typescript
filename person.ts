class Person {
  public readonly name: string;
  protected age: number;
  private height: number;
  static prop: number = 10;

  static sayProp() {
      return Person.prop;
  }

  constructor(name: string, age: number, height: number) {
    this.name = name;
    this.age = age;
    this.height = height;
  }

  public sayHello(): string {
    return `Hello ${this.name}`;
  }

  protected myHeight(): string {
    return `My height is ${this.height}`;
  }
}

const person = new Person('John', 32, 172);
console.log(person.sayHello());
Person.prop
console.log(Person.sayProp())

// class AnotherClass extends Person {
//   constructor(name: string, age: number, height: number) {
//     super(name, age, height);
//   }
// }

class Employee extends Person {
  role: string;

  constructor(name: string, age: number, height: number) {
    super(name, age, height);
    this.role = "Employee";
  }

  public sayHello(): string {
    const parentMsg = super.sayHello();
    return `${parentMsg} Hi I am an employee. My name is ${this.name}`;
  }
}

const e1 = new Employee("John", 32, 172);
const e2 = new Employee("John", 32, 172);
console.log(e1.sayHello());

// default access modifiers for class members - properties or methods - public
export default Person;

// method overloading - find a good example of this.
// method overridding
// access modifiers public private protected
// static readonly
// abstract classes
// abstract methods
// interfaces
// implementating interfaces

abstract class AbstractClass {
    abstract str: string;
    abstract sayHello();
    abstract sayHi();
    abstract sayHola();
}

class DerivedClass extends AbstractClass {
    str: string;

    constructor() {
        super();
        this.str = 'Hello world';
    }

    sayHello() {
        
    }

    sayHi() {
        
    }

    sayHola() {
        
    }

    sayNamaste(animal: Animal, bird: Birds, name: Name) {

    }
}

type Animal = {
    legs: number,
    tail: boolean
}

type Name = string;

const fullName: Name = "Arpit Jain"

const dog: Animal = {
    legs: 4,
    tail: true
}

interface Birds {
    legs: number,
    canFly: boolean,
    canSwim: boolean
}

const duck: Birds = {
    legs: 2,
    canFly: true,
    canSwim: true
}