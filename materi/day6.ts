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

const user1:User ={ //user1 = object
    nama: "Jordan", // propert : value    nama : "Jordan"
    job:"Programmer",
    addres:{
        street: "jl jakarta 1",
        city: "jakarta",
        postcode: "12345",
    },
    hobi : ["mancing", "renang", "coding"],
    makan()//method
    {console.log("Makan");}, // method adalah function yang disimpan di object
};

console.log(user1.nama); //ambil value dari properti name
console.log(user1.addres.street); 

console.log(user1["job"]); //ambil value 

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
let count:number =10;
let count2:number = count;

count2 = 20;

console.log(count);
console.log(count2);
//value count tetap bernilai 10  artinya setiap perubahan akan membuat nilai baru,bukan mengubah nilai yang lama

//mutable
const orang1:any ={name:"Budi"};
// const orang2:any =orang1;
const orang2:any = {...orang1}; // shallow copy
orang2.age = 20;
orang2.name = "Hendra";

console.log(orang1);
console.log(orang2);

// value orang1 dicopy ke orang2 dan outputnya jadi name: 'budi', age: 20

//contoh immutable
let nama = "hendra";
let namabaru =nama;//namabaru = nama membuat salinan nilai "Hendra", bukan berbagi memori
// nama => "Hendra" 
//namabaru => "hendra"
namabaru ='Andi';//Saat namabaru = "Andi", JavaScript membuat string baru untuk namabaru
// nama => "Hendra" 
//namabaru => "Andi"

//Variabel nama tetap menyimpan "Hendra"
console.log(nama); 
console.log(namabaru);
//nama tidak ikut berubah

//contoh mutable
const person4:any = {
    name:"Hendra",
}
let person5 = person4;
person5.name = "Andi";
person5.age = 10;
console.log(person4);
console.log(person5);
//value dari property name berubah dan ada tambahan age juga diperson4
// ========== OPTIONAL CHAINING ===========

const user2:any = {};

console.log(user2.addres);
console.log(user2.addres?.street);//program tidak error tapi undefined

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

//biasanya pakai seperti ini :
console.log(animal.name);
console.log(animal.age);

//gunakan seperti ini
const {name:name2 /*bisa ganti nama variabel */, age} = animal;
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
//kalau tidak pakai spread:
//const ObjectTwo = {
// name:ObjectOne.name,
// email:ObjectOne.email,
// Password:"budi123",name:"sarah"};
const ObjectTwo = {...ObjectOne,Password:"budi123",name:"sarah"};//artinya salin semua isi ObjectOne dan tambahkan passowrd dan ganti nama menjadi sarah
const result1 ={...ObjectOne, ...ObjectTwo};
console.log(ObjectTwo);

//spread array
const num1 =[1,2,3];
const num2 = [...num1,4];
console.log(num2);

// ========== THIS KEYWORD ===========
//mengakses properti lain dalam objek
//this = object yang sedang memanggil method => object : method => person3 : greet
    const person3 ={
        firstName:"Jack",
        lastName:"blake",
        greet(){
            console.log(`hello, ${this.firstName} ${this.lastName}`);
            //this = person3
            // sehingga this.firstName = person3.firstName
        }
    };
person3.greet();

// ========== CLASS ===========
//tempalte / cetakan untuk membuat object

//bayangkan jika ingin membuat data 100 orang
//kalo tanpa pakai class :
// const human1={}
// const human2={}
// const human3={}
// const human4={}
//karena semua isinya hampir sama
//maka dibuat seperti ini : 
//class human{isi code}

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

//setelah itu baru buat new object
const human = new Person();//yang memanggil constructor adalah new
const human2 = new Person2();
human.greet();
human2.greet();
//semua mempunyai bentuk yang sama

// ========== CONSTRUCTOR ===========
//method bawaan dari class yang akan dijalankan pertama kali saat membuat object baru


class Vehicle{
    brands:string;
    type:string;
    #chassisNumber: string;

    //constructor hanya boleh 1 didalam class
    //constructor(brands:string){langsung dipanggil}
    constructor(brands:string, type:string, chassisNumber:string){
        this.brands = brands; // this.brands = brands; => this.brands = "Toyota"
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

//misalnya ada class Employee dan semua Employee mempunyai property name salary dan method work
//kemudian manager juga pasti punya property name salary dan method work
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
    //tidak perlu ditulis ulang property nya yang sama dan methodnya yang sama seperti ini
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
    //cukup buat property atau method yang hanya ada di manager2 dan tidak ada di Employee
    //jadi tidak perlu menulis ulang property dan method yang ada di class Eployee
    departement:string;
    constructor(name:string, salary:number, departement:string){
        super(name,salary);
        //super : misalnya Employee mempunyai constructor dan constructor milik Manager2 juga harus dijalankan maka pakai super()
        // spuer() memanggil constructor parent dan harus dipanggil sebelum menggunakan this diconstructor child
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
