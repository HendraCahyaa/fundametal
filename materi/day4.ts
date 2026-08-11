//========== ARRAY ===========
let firstarr = [1,2,3,4,5];
let secondarr = new Array ('a','b','c','d','e');

console.log(firstarr[2]); //3
console.log(secondarr[3]); // d

firstarr[6] = 100;
console.log(firstarr);

delete firstarr[6]; //hanya menghapus nilainya saja bukan arraynya
console.log(firstarr[6]);
console.log(firstarr);

//========== METHOD ARRAY ===========

// .length : menghitung jumlah item(s) suatu array

const arrFruits = ['Apel', 'Mangga', 'Nanas'];
console.log(arrFruits.length);

// .incluides : mengecek apakah suatu array memiliki item tertentu

const arrAlphabet = ['A','B','C','D','E'];
console.log(arrAlphabet.includes('A')); // true
console.log(arrAlphabet.includes('a')); //false

// .indexof : mengecek index suatu item didalam array
const arrCars = ["Honda","Wuling","Suzuki"];
console.log(arrCars.indexOf('Wuling'));
console.log(arrCars.indexOf('wuling'));
console.log(arrCars.indexOf('daihatsu'));

// .lastindexof : mengecek index terakhir dari suatu item di dalam array
const arrStadium = ['GBK','Pakansari','Gelora Bandung Lautan Api','GBK'];
console.log(arrStadium.lastIndexOf('GBK'));

// .push : menambahkan item baru di index terakhir
// .unshift : menambahkan item baru di index awal
// .pop : menghapus item di index terakhir
// .shift : menghapus item di index pertama
// .map : digunakan untuk membuat array baru dengan hasil dari memanggil fungsi tertentu pada setiap elemen array

const arrAnimals = ['Kucing','Anjing','Kelinci'];
arrAnimals.push('Ikan');
console.log(arrAnimals);
arrAnimals.unshift('Burung');
console.log(arrAnimals);

const arrStudent = ['Andi', 'Budi','Setyo'];

arrStudent.pop();
console.log(arrStudent);
arrStudent.shift();
console.log(arrStudent);

// .splice menambahkan atau menghapus item array
// .splice(indexawal, jumlah item yang dihapus,new item1,new item2,....)
const arrBrandLaptop = ['Asus','Acer','Lenovo','Dell'];
arrBrandLaptop.splice(2,1);
console.log(arrBrandLaptop);

const arrVegetable = ['Kol','Tomat', 'Wortel'];
arrVegetable.splice(1,1,'bayam','kangkung');
console.log(arrVegetable);

const arrBrandShoes = ['Nike','Adidas','Puma'];
arrBrandShoes.splice(2,0,'reebok');
console.log(arrBrandShoes);

//========== LOOPING ARRAY ===========
const fruits = ['Apel','Mangga','Nanas','Pisang','Durian','Pepaya','Semangka'];

for(let i =0; i < fruits.length;i++){ // 0 <= 6?TRUE ---> 1 <= 6?TRUE sampai index ke 6
    console.log(fruits[i]); //fruits[0] = Apel ---> fruits[1] = Mangga
}

for (let item of fruits){
    console.log(item);
}

//========== FUNCTION ===========

// Declarative function

    function greeting(){
        //code block
    }

//Expresion function

    // const message = function(){
    //     //code block
    // }
//Arrow function

    // const welcome = () =>{
    //     //code block
    // }


    const buah = ['Apel','Mangga','Pisang'];
    function LoopingBuah(){
        for(let item of buah){
            console.log(item);
        }
    }

    // call function
    LoopingBuah();

    //========== FUNCTION WITH PARAMETERS ===========

    function greet(username:string){
        console.log(`Hello, ${username}`);
    }

    greet('user');
    greet('hendra');
    greet('hendra cahya');

    function greetProfile(username:string, addres:string, hobi:string){
        console.log(`My Name is ${username}. My addres at ${addres}. My hobi is ${hobi}`);
    }
    greetProfile('Hendra','Trenggalek','Bermain Game');
    greetProfile('Hendra','Trenggalek','Bermain Bola');

    //========== FUNCTION WITH RETURN ===========

    function calculator(num1:number,num2:number){
        return num1 * num2;//menyimpan hasil eksekusinya saja dan tidak menampilkan hasilnya
    }
    const calculate = calculator(10,3);
    console.log(calculate);

    //FUNCTION SCOPE
    //segala sesuatu yang didalam function maka tidak bisa diakses atau diubah diluar function

    function welcomeMessage(){
        const templatemessage = 'Please welcome, user!';
        return templatemessage;
    }

    const templating = welcomeMessage();
    console.log(templating);