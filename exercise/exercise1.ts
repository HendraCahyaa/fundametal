//LATIHAN 1 -> CEK ANGKA GENAP ATAU GANJIL
const num1:number = 6;
console.log(num1 % 2 === 0 ? `${num1} adalah angka genap` : `${num1} adalah angka ganjil`);

//LATIHAN 2 -> CEK ANGKA PRIMA ATAU BUKAN ANGKA PRIMA
const prima:number = 7;
let isprime:boolean =true;
if(prima < 2){
    console.log(prima + " : bukan angka prima");
}else{
    for(let i = 2; i < prima;i++){
        if(prima % i === 0){
            isprime = false;
            break;
        }
    }
    if(isprime === false){
        console.log(prima + " : bukan angka prima");
    }else{
        console.log(prima + " : angka prima");
    }
}

//LATIHAN 3 -> MENJUMLAHKAN ANGKA 1 SAMPAI N
const num2:number = 5;
let hasil:number = 0;
for(let i = 1; i <= num2;i++){
    hasil = hasil + i;
    
}console.log(`jumlah angka dari 1 sampai ${num2} adalah : ${hasil}`);


//LATIHAN 4 -> MENGHITUNG FAKTORIAL DARI SEBUAH ANGKA
const num3:number = 5;
let hasil1:number = 1;
for(let i = 1; i <= num3;i++){
    hasil1 = hasil1 * i;
    
}console.log(`faktorial angka dari 1 sampai ${num3} adalah : ${hasil1}`);

//latihan 5 -> MENCARI NILAI FIBONACCI KE-N
let nextnum:number = 0;
let num4:number = 0;
let num5:number = 1;
const fibonacci:number = 15;
for(let i = 1; i < fibonacci;i++){
    nextnum = num4 + num5;
    num4 = num5;
    num5 = nextnum;
}console.log(nextnum);
