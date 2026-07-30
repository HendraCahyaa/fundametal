//versi js
const message ="hello";

//versi ts
const message2:string = "hello word";

//===========string built in method===========

const nama:string  = "BudiB World";
const nama2:string  = "Ucok";

console.log(nama.toLowerCase());
console.log(nama.toUpperCase());
console.log(nama.replace("B", "P"));
console.log(nama.replaceAll("B", "P"));
console.log(nama.concat(" ").concat(nama2));
console.log(nama + " " + nama2);
console.log(nama.slice(0, 3));
console.log(nama.split(""));

//===========TEMPLATE LITERAL / TEMPLATE STRING ===========

const welcome:string ="Welcome";
const nama3:string = "Jack";

console.log(welcome + " " + nama3);
console.log(`${welcome} ${nama3}`);

//=========== NUMBER BUILT IN METHOD ===========

const angka:string = "4000";
const angka2:number =3000;

console.log(Number(angka));
console.log(parseInt(angka));

//=========== STRING CONVERSION ===========

const angka3:number =2000;
console.log(String(angka3));
console.log(angka3.toString());

//=========== BOOLEAN CONVERSION ===========

console.log(Boolean(100));
console.log(Boolean(-100));
console.log(Boolean(0));
console.log(Boolean("Budi"));
console.log(Boolean(" "));
console.log(Boolean(""));

//=========== DATE ===========

const now = new(Date);
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth()+ 1);
console.log(now.getDate());
console.log(now.getMinutes());
console.log(now.getHours());

//=========== BASIC OPERATOR ===========
/*
    + -> penambahan
    - -> pengurangan
    * -> perkalian
    / -> pembagian
    % -> modulo (sisa bagi)
    ** -> pangkat
*/

console.log(5 + 2);
console.log(5 - 2);
console.log(5 * 2);
console.log(10 / 2);
console.log(11 % 2);
console.log(3 ** 2);

//=========== MODIFY INPLACE ===========

let n: number =4;

n +=2; // n = n + 2;

console.log(n);

//=========== INCREMENT & DECREMENT ===========

let counter: number =1;

counter++;
console.log(counter);

counter--;
console.log(counter);

//=========== COMPARISON OPERATOR ===========

/*
    ==
    ===
    <
    >
    <=
    >=
*/
// console.log(2 == "2"); pengecekan di valeunya saja
// console.log(2 === "2"); pengecekan di value dan tipe data
console.log(2 < 5);
console.log(5 < 5);
console.log(5 > 2);
console.log(10 <= 10);
console.log(1 >= 3);

//=========== MATH ===========

console.log(Math.ceil(4.2)); //membulatkan angka keatas
console.log(Math.floor(4.8)); //membulatkan angka kebawah

console.log(Math.round(4.7)); //membulatkan angka ke bilangan bulat terdekat
console.log(Math.round(4.3)); //membulatkan angka ke bilangan bulat terdekat

console.log(Math.max(4, 3, 10, 11, 13, 20, 100, 250)); //menghasilkan angka terbesar dari sekumpulan angka
console.log(Math.min(4, 3, 10, 11, 13, 20, 100, 250)); //menghasilkan angka terkecil dari sekumpulan angka

console.log(Math.abs(-300)); //menghilangkan tanda negatif
console.log(Math.random()); //menghilangkan angka acak antara 0 dan 1
console.log(Math.floor(Math.random() * 100 + 1)); // angka random 1 - 100

const min:number = 12;
const max:number = 30;

console.log(Math.floor(Math.random() * (max - min + 1) - min));