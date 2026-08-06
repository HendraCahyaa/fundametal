// ========== OBJECT ===========

const obj1 = {} // cara 1
const obj2 = new Object(); // cara 2

interface Addres{
    street:string;
        city:string;
        postcode:string;
}

interface User{
    nama:string;
    job?:string;
    addres:Addres;
    hobi:string[];
    makan:() => void;
}

const user1:User ={ // key : value
    nama: "Jordan",
    job:"Programmer",
    addres:{
        street: "jl jakarta 1",
        city: "jakarta",
        postcode: "12345",
    },
    hobi : ["mancing", "renang", "coding"],
    makan(){console.log("Makan");},
};

console.log(user1.nama);
console.log(user1.addres.street);

console.log(user1["job"]);

console.log(user1.hobi[2]);

user1.makan();

// ========== ADD PROPERTY ===========

const person:any = {
    name:"Jack",
}

console.log(person);

person.hobi = "Coding";
console.log(person);

person.addres = ["Jakarta"];
console.log(person);

// person = { name: 'Jack', hobi: 'Coding', addres: [ 'Jakarta' ] }; ini gak bisa


// ========== DELETE PROPERTY ===========

delete person.name;

console.log(person);

// ========== IMMUTABLE & MUTABLE ===========
/*
    immutable : merujuk pada tipe data yang tidak bisa diubah setelah dibuat : primitive data type
    mutable : merujuk pada tipe data yang bisa  diubah setealh dibuat : non primitive data type
*/

//immutable
let count:number = 10;
let count2:number = count;

count2 = 20;

console.log(count);
console.log(count2);

//mutable
const orang1:any ={name:"Budi"};
// const orang2:any =orang1;
const orang2:any = {...orang1}; // shallow copy
orang2.age = 20;

console.log(orang1);
console.log(orang2);

// ========== OPTIONAL CHAINING ===========

const user2:any = {};

console.log(user2.addres);
console.log(user2.addres?.street);

// ========== FOR IN ===========
//digunakan untuk looping object saja
const person2:any = {name:"sarah", umur:"23", hobi:"renang"};
for(let key in person2){
    console.log(key);
    console.log(person2[key]);
    
}

// ========== DESTRUCTURING ASSIGNMENT ===========
//mengeluarkan property dalam object/array menjadi variabel

//versi object
const animal ={
    name:"joe",
    age:20,
};

console.log(animal.name);
console.log(animal.age);

const {name:name2, age} = animal;
console.log(name2);
console.log(age);

//versi array

const array3 =[10,20];
console.log(array3[0]);
console.log(array3[1]);

const [a,b] = array3;
console.log(a);
console.log(b);

// ========== SPREAD OPERATOR ===========
//digunakan untuk copy isi object atau menggabungkan object

const ObjectOne = {name:"budi", email:"budi@gmail.com"};
const ObjectTwo = {Password:"budi123",name:"sarah"};
const result1 ={...ObjectOne, ...ObjectTwo};
console.log(result1);

// ========== THIS KEYWORD ===========
//mengakses properti lain dalam objek

    const person3 ={
        firstName:"Jack",
        lastName:"blake",
        greet(){
            console.log(`hello, ${this.firstName} ${this.lastName}`);
        }
    };
person3.greet();

// ========== CLASS ===========
//tempalte / cetakan untuk membuat object

//class declaration

class Person{
    greet(){
        console.log("Hello world");
    }
}

//class exspression

const Person2 = class{
    greet(){
        console.log("Hello world");
    }
}

const human = new Person();
const human2 = new Person2();
human.greet();
human2.greet();

// ========== CONSTRUCTOR ===========
//method bawaan dari class yang akan dijalankan pertama kali saat membuat object baru

class Vehicle{
    brands:string;
    type:string;
    #chassisNumber: string;

    constructor(brands:string, type:string, chassisNumber:string){
        this.brands = brands;
        this.type = type;
        this.#chassisNumber = chassisNumber;
    }
    start(){
        console.log(this.#chassisNumber);
        return `${this.brands} ${this.type} engine start`;
    }
}

const kendaraan = new Vehicle("Toyota","Avanza","12345");
console.log(kendaraan.type);
console.log(kendaraan.brands);
console.log(kendaraan.start());

const kendaraan2 = new Vehicle("Honda","Brio","33445");
console.log(kendaraan2.type);
console.log(kendaraan2.brands);
console.log(kendaraan2.start());

// ========== INHERITANCE ===========
//pewarisan dari parent class ke child class
//property dan method dari parent class bisa diakses oleh child class

//tidak menggunakan inheritance
class Employee{
    name:string;
    salary:number;

    constructor(name:string, salary:number){
        this.name = name;
        this.salary = salary;
    }
    work(){
        console.log( `${this.name} is working`);
    }
}
class Namager{
    name:string;
    salary :number;
    departement:string;
    constructor(name:string, salary:number,departement:string){
        this.name = name;
        this.salary = salary;
        this.departement = departement;
    }
    work(){
        console.log( `${this.name} is working`);
    }
}
const work1 = new Employee("Budi", 2000000);

//Menggunakan inheritance

class Employee2{
    name:string;
    salary:number;

    constructor(name:string, salary:number){
        this.name = name;
        this.salary = salary;
    }
    work(){
        console.log( `${this.name} is working`);
    }
}

class Manager2 extends Employee2{
    departement:string;
    constructor(name:string, salary:number, departement:string){
        super(name,salary);
        this.departement = departement;
    }
}

const manager = new Manager2("Sarah",5000000,"HR");
console.log(manager.name);
console.log(manager.salary);
console.log(manager.departement);
manager.work();

class Direktur extends Employee2{
    pt:string;
    departement:string;
    constructor( departement:string, pt:string){
        super("joko",10000000);
        this.departement = departement;
        this.pt = pt;
    }
    work1(){
        console.log(`${this.name} is working in the ${this.pt}`);
    }
}
const direktur = new Direktur("HR","Pt.Silambat");
console.log(direktur.name);
console.log(direktur.salary);
console.log(direktur.departement);
console.log(direktur.pt);
direktur.work1();
