//LATIHAN 1 
//SOAL 1 -> MENCARI NILAI TERENDAH,NILAI TERTINGGI DAN RATA RATA DENGAN MEMAKAI SORT DAN TANPA SORT

function FindValueSort(arr:number[]){
    arr.sort((a,b) => a - b);
    const lowest = arr[0];
    const highest = arr[arr.length -1];
    let average = arr.reduce((total,num) => total + num) / arr.length;
    
    return [lowest,highest,average.toFixed(2)];
}

const number1 = [12, 5, 23, 18, 4, 45, 32];
console.log(FindValueSort(number1));


function FindValue(arr:number[]){
    let lowest = arr[0];
    let highest = arr[0];
    let sum = arr[0];

    for(let i = 1; i < arr.length;i++){
        if(arr[i] > highest){
            highest = arr[i];
        }
        if(arr[i] < lowest){
            lowest = arr[i];
        }
        sum = sum + arr[i];
    }
        let average = sum / arr.length;

    return [lowest,highest,average.toFixed(2)];
}

const number2 = [12, 5, 23, 18, 4, 45, 32];
console.log(FindValue(number2));

// SOAL 2 -> MERANGKAI KATA KATA MENJADI SEBUAH KALIMAT DAN SETIAP KATA DIPISAH PAKAI , DAN KATA TERAKHIR DIPISAH PAKAI AND

function concatArray(text:string[]){
    let valueAkhir = text.pop();
    let sisavalue = text.join(" , ") + " and " + valueAkhir;
    return sisavalue;
}
const arr = ["apple", "banana", "cherry", "date"];
console.log(concatArray(arr));

// SOAL 3 -> MENGAMBIL ARRAY TERKECIL KEDUA

function lowestArray(arr:number[]){
    arr.sort((a,b) => a - b);
    let result = arr[1];
    return result;
}
const lowest = [5, 3, 1, 7, 2, 6];
console.log(lowestArray(lowest));
