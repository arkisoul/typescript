enum Gender {
    MALE = 'male',
    FEMALE = 'female'
}

interface Address {
    street: string,
    city: string,
    country: string,
    pincode: number
}

interface IPerson {
    // Properties
    name: string;
    age: number;
    height: number;
    weight: number;
    gender: Gender;
    married: boolean;
    address: Address;

    // Methods
    greet(): string;
    intro(): string;
    locate(): string;
}

export default class Person implements IPerson {
    name: string;
    age: number;
    weight: number;
    height: number;
    gender: Gender;
    married: boolean;
    address: Address;
    private _lastname!: string;

    constructor(name: string, age: number, weight: number, height: number, gender: Gender, married: boolean, address: Address) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.gender = gender;
        this.address = address;
        this.married = married;
    }

    get lastname() {
        return this._lastname;
    }

    set lastname(value: string) {
        this._lastname = value;
    }

    greet(): string {
        return `Hi, I am ${this.name}`
    }

    intro(): string {
        return `
        Hi, I am ${this.age} years old.
        I am ${this.height} cm tall.
        I weigh ${this.weight} kg.
        I am ${this.married ? 'married' : 'single'}`
    }

    locate(): string {
        return `I reside at ${this.address.street}, ${this.address.city} ${this.address.country}, ${this.address.pincode}`;
    }
}

const p1 = new Person('John', 30, 55, 177, Gender.MALE, true, {street: 'MG Road', city: 'Delhi', country: 'India', pincode: 110001});
console.log(p1.lastname);
p1.lastname = 'Doe'
console.log(p1.lastname);