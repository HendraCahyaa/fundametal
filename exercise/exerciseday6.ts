//Latihan 1
interface Student{
    name:string,
    email:string,
    age:number,
    score:number,
};

const student:Student [] =[
    {
    name:"Andi",
    email:"Andi123@gmail.com",
    age:17,
    score:90,
    },
    {
    name:"Budi",
    email:"Budi123@gmail.com",
    age:18,
    score:80,
    },
    {
    name:"Siti",
    email:"Siti123@gmail.com",
    age:19,
    score:75,
    },
];

function calculateStudentData(student:Student[]){
    let highestAge = student[0].age;
    let lowestAge = student[0].age;
    let totalAge = 0;

    let highestScore = student[0].score;
    let lowestScore = student[0].score;
    let totalScore = 0;

    
    for(const i of student){
        //Age 
        if(i.age > highestAge ){
            highestAge = i.age;
        }
        if(i.age < lowestAge){
            lowestAge = i.age;
        }
        totalAge = totalAge + i.age;

        //Score
        if(i.score > highestScore ){
            highestScore = i.score;
        }
        if(i.score < lowestScore){
            lowestScore = i.score;
        }
        totalScore = totalScore + i.score;
    }
    const averageAge = totalAge / student.length;
    
    const averageScore = totalScore / student.length;

    return {age:{high : highestAge, lowest : lowestAge, average :averageAge.toFixed(2)},
        score:{
        high : highestScore, lowest : lowestScore, average : averageScore.toFixed(2)},
        };
}
const result = calculateStudentData(student);
console.log(result.age);
console.log(result.score);

//Latihan 2

class Product{
    name:string;
    price:number;

    constructor(name:string, price:number){
        this.name = name;
        this.price = price;
    }
};
// const mie = new Product("Indomie", 3500);
//konsep code :
// new product ("Indomie", 3500) -> constructor ("Indomie", 3500) this.name = "Indomie" this.price = 3500 -> object selesai dibuat



class Transaction{
    total:number;
    products:{
        product:Product; //menyimpan seluruh object product
        qty:number;
    }[];
    
    constructor(){
        
        this.total = 0;//"Saat transaksi dibuat, total belanja adalah Rp0."
        this.products = [];//"Siapkan keranjang belanja yang masih kosong."
    }
    addtoCart(product:Product, qty:number){//Artinya parameter product harus berupa object dari class Product, Artinya membeli 2 bungkus Indomie.
        this.products.push({product:product,qty:qty});
            
    };
    showTotal(){
        for(const item of this.products){
            this.total += item.product.price * item.qty;
        }
    };
    checkOut(){
        this.showTotal(); //untuk mengatasi jika showtotal belum dipanggil
        return{
            total: this.total,
            products: this.products,
        }
    };
    
};

const mie = new Product("Indomie",3500);
const susu = new Product("Susu",8000);

const trx = new Transaction();

trx.addtoCart(mie,5);
trx.addtoCart(susu,2);

console.log(trx.checkOut());