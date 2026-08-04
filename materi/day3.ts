// =========== IF STATEMENT ============
/*
    if(kondisi){
    code block
    }

*/

const age:number = 17;

if(age <= 17){
    console.log("Anda bisa buat KTP");
}

// =========== ELSE STATEMENT ============
//backup plan dari if statement

const age1:number = 20;

if(age1 <= 17){
    console.log("Anda bisa buat KTP");
}else{
    console.log("Anda belum bisa buat KTP");
}

// =========== ELSE IF STATEMENT ============

const grade:string = "A";
if(grade === "A"){
    console.log("Nilai bagus");
}else if(grade === "B"){
    console.log("Nilai lumayan");
}else if(grade === "C"){
    console.log("Nilai buruk");
}else{
    console.log("Nilai tidak diketahui");
}

// =========== SWITCH CASE ============
/*
switch(value){
    case "value 1":
        code
        break;
    case "value 2":
        code
        break;
    case "value 3":
        code
        break;
}
*/

const day:string ="senin";

switch(day){
    case "senin":
        console.log("Hari senin");
        break;
    case "selasa":
        console.log("Hari selasa");
        break;
    case "rabu":
        console.log("Hari rabu");
        break;
    default :
    console.log("Hari tidak ditemukan");
    break;
}

// =========== LOGICAL OPERATOR ============
// && -> and
// || -> or
// ! -> not

// OR -> kalau ada salah satu nilai true akan menghasilkan nilai true

const car:string = "BMW";
if(car === "BMW" || car === "mercy"){
    console.log("mobil jerman");
}else{
    console.log("Mobil jepang");
}

//AND ->harus keduanya yang menghasilkan nilai true agar menghasilkan nilai true

const umur:number = 19;
const sim:boolean = true;
if(umur >= 17 && sim === true){
    console.log("Boleh bawa kendaraan");
}else{
    console.log("Belum boleh bawa kendaraan")
}

//NOT -> membalikkan nilai boolean

const isSunny:boolean =true;
const isRainning:boolean = !false;

console.log(isRainning);
console.log(isSunny);

const input:string ="12345";
if(!input){
    console.log("Test");
}else{
    console.log("Test 2");
}

// =========== TERNARY OPERATOR ============
//shortcut untuk if else condition
//condition ? true : false

const str:string = "Test";
if(str === "javascript"){
    console.log("Javascript");
}else{
    console.log("Not javascript");
}

console.log(str === "javascript" ? "Javascript" : "not javascript");



console.log(str === "javascript" ? "Javascript" : str === "typescript" ? "typescript" : "not found");

// =========== LOOP STATEMENT ============
//rangkaian instruksi yang dilakukan berulang kali hingga kondisinya tidak terpenuhi

//type loop : for loop, while loop,do while loop

//FOR LOOP -> mempunyai 3 statement
//statement 1 : menginisialisasi variabel dari looping itu sendiri
//statement 2 : mendefine kondisi dari looping tersebut
//statement 3 : kode yang dieksekusi diakhir iterasi

/*
for(statement1;statement2;statement3){
    code block yang diulang
}
*/

for(let i = 0;i < 10;i++){
    console.log("hello word");
}

//WHILE LOOP
let i:number = 0;

while(i < 10){
    console.log("hello word")
    i++;
}

//DO WHILE LOOP

let count:number = 1;

do{
    console.log("Ini iterasi ke : " + count);
    count++;
}while(count <= 5);

//perbedaan while loop dengan do while loop adalah :
//while loop : melakukan pengecekan diawal dan jika pengecekan bernilai false maka code block tidak akan dicetak
//do while loop : melakukan pengecekan di akhir dan jika pengecekan bernilai false maka code block akan dicetak satu kali 


// =========== BREAK ============
//untuk menghentikan loop

let num:number = 0;

while(true){
    console.log("num : " + num);

    if(num >= 5 ){
        break;
    }
    num++;
}

//CONTINUE
//melakukan skip looping

for(let i = 0; i < 5;i++){
    if(i === 2){
        continue;
    }
    console.log(i);
}