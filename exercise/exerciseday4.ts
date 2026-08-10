//LATIHAN EXAMPLE
function segitiga(height:number){
for(let i =1; i<=height ;i++){
    let row:string="";
    for(let j =1 ; j<=i ;j++){
        row = row + j + " " ;
    }
    console.log(row);
}
}
segitiga(5);

//LATIHAN Example Array Pseudocode
function FindMAxValue(arr:number[]){
    let maxValue = arr[0]; //menganggap index ke 0 adalah angka terbesar terlebih dahulu
    for(let i = 1;i < arr.length;i++){
        if(arr[i] > maxValue){
            //perbarui maxvalue jika ada angka lebih besar dari index sebelumnya
            maxValue = arr[i];
        }
    }
    return maxValue;
}
const number = [10,39,72,54,97,111];
console.log(FindMAxValue(number));

//LATIHAN 1

    function segitiga1(height:number){
        let number = 1;
for(let i =1; i<=height ;i++){
    let row:string="";
    for(let j =1 ; j<=i ;j++){

        let formatNumber = number < 10 ? `0${number}` : `${number}`;
        row = row + formatNumber + " " ;

        number++;
    }
    console.log(row);
}
}
segitiga1(5);

//LATIHAN 2

function FizzBuzz(n:number){
    let arrayAwal:string[] = [];
    for(let i = 1; i <= n;i++){
        if(i % 3 === 0 && i % 5 === 0){
            arrayAwal.push ("FizzBuzz");
        }else if(i % 5 === 0){
            arrayAwal.push ("Buzz");
        }else if(i % 3 === 0 ){
            arrayAwal.push ("Fizz");
        }else{
            arrayAwal.push (i.toString());
        }
    }
    let hasilakhir:string = arrayAwal.join(" ")
    console.log(hasilakhir);
}
FizzBuzz(15);

//LATIHAN 3

function BMI(weight:number,height:number){
    let result = weight / (height/100)**2;

    let roundedResult = result.toFixed(2);//bulatkan angka dan tampilkan 2 angka dibelakang koma
    if(result <= 18.5){
        console.log(roundedResult + " Less weight");
    }
    else if(result <= 24.9){
        console.log(roundedResult +" ideal");
    }
    else if(result <= 29.9){
        console.log(roundedResult +" overweight");
    }
    else if(result <= 39.9){
        console.log(roundedResult +" very overweight");
    }
    else{
        console.log(roundedResult + " obesity");
    }
}
BMI(75,175);

//LATIHAN 4

function removeOdd(arr:number[]){
    return arr.filter(num => num % 2 === 0);
}
const angkaAwal = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
console.log(removeOdd(angkaAwal));

//LATIHAN 5

function toArray(str:string){
    return str.split(" ");
}

const teks:string = "Hello World";
console.log(toArray(teks));