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


// SOAL 4 -> MENJUMLAHKAN KEDUA ARRAY

function SumArray(arr1:number[], arr2:number[]){
    let result:number[] = [];
    for(let i = 0; i < arr1.length;i++){
        let total = arr1[i] + arr2[i];
        result.push(total);
    }
    return result;
}
const array1 = [1,2,3];
const array2 =[3,2,1];
console.log(SumArray(array1,array2));

 function SumArrayWithMethod(num1:number[], num2:number[]){
    return num1.map((number,index) => number + num2[index]);
    
}
    console.log(SumArrayWithMethod(array1,array2));

//SOAL 5 -> MENAMBAHKAN ELEMEN BARU DI ARRAY
    function addnewElement(arr:number[], newElement:number){

        if(arr.includes(newElement) === false){
            arr.push(newElement);
        }
        return arr;
    }
    const addnum = [1,2,3,4,5];
    const elemenBaru:number  = 10;
    console.log(addnewElement(addnum,elemenBaru));

//EXERCISE 2
//SOAL 1 -> MENJUMLAHKAN DATA YANG HANYA BERUPA ANGKA

    function SumNumber(arr:any[]){
        let total = 0;

        for(let i = 0; i < arr.length;i++){
            if(typeof arr[i] === 'number'){
                total = total + arr[i];
            }
        }
        return total;
    }
    const anyArray = ["3", 1, "string", null, false, undefined, 2,5];
    console.log(SumNumber(anyArray));

// SOAL 2 -> MEMASUKKAN ANGKA SAMPAI BATAS MAKSIMAL 

function MaxNum(maxSize:number,...num:number[]){
    num = num.slice(0,maxSize);
    return num;
}
const sizeMax = 5;
console.log(MaxNum(sizeMax,1,2,3,4,5,6,7,8,9));

// SOAL 3 -> MENGGABUNGKAN 2 ARRAY

function GabungArray(arr1:number[],arr2:number[]){
    return arr1.concat(arr2);
}
const combine1 = [1,2,3];
const combine2 = [4,5,6];
console.log(GabungArray(combine1,combine2));

// SOAL 4 -> MENCARI NILAI NILAI DUPLIKAT LALU MENGEMBALIKAN KE ARRAY BARU

function findDuplicate(arr1:number[]){
    let angkaUnik:number[] = [];
    let HasilDuplikat:number[] = [];
    for(let i = 0; i < arr1.length;i++){
        if(angkaUnik.includes(arr1[i]) === true){
            if(HasilDuplikat.includes(arr1[i]) === false){
               HasilDuplikat.push(arr1[i])
            }
        }else{
            angkaUnik.push(arr1[i]);
        }
    }
    return angkaUnik;
}
const DuplicatArray = [1, 2, 2, 2, 3, 3, 4, 5, 5];
console.log(findDuplicate(DuplicatArray));

// SOAL 5 -> MENCARI ANGKA YANG TIDAK ADA DI ARRAY KEDUA DAN YANG TIDAK ADA DI ARRAY PERTAMA

function FindNumber(arr1:number[], arr2:number[]){
    let result:number[] = [];

    for(let i = 0; i < arr1.length;i++){
        if(arr2.includes(arr1[i]) === false){
            result.push(arr1[i]);
        }
    }
    for(let i = 0; i < arr2.length;i++){
        if(arr1.includes(arr2[i]) === false){
            result.push(arr2[i]);
        }
    }
    return result;
}
const ArrayNum1 =  [1, 2, 3, 4, 5];
const ArrayNum2 =  [3, 4, 5, 6, 7];
console.log(FindNumber(ArrayNum1,ArrayNum2));

// LATIHAN 3
// SOAL 1 -> MENGAMBIL NILAI DENGAN TIPE DATA PRIMITIF SAJA
    function DataPrimitif(arr1:any[]){
        let result:any[] = [];

        for(let i = 0; i < arr1.length;i++){
            if(typeof arr1[i] !== 'object'  && typeof arr1[i] !== 'function'){
                result.push(arr1[i])
            }
        }
        return result;
    }
const arrayMixed = [1, [], undefined, {}, "string", {}, []]
console.log(DataPrimitif(arrayMixed));

// SOAL 2 -> PENJUMLAHAN ANGKA YANG DUPLIKAT

function TambahDuplikat(arr1:number[]){
    let angkaDuplikat:number[] = [];
    let HasilDuplikat:number[] = [];
    let result =0;
    for(let i = 0; i < arr1.length;i++){
        if(angkaDuplikat.includes(arr1[i]) === true){
            if(HasilDuplikat.includes(arr1[i]) === false){
               HasilDuplikat.push(arr1[i])
            }
        }else{
            angkaDuplikat.push(arr1[i]);
        }
    }
    for(let j = 0; j < arr1.length;j++){
        if(HasilDuplikat.includes(arr1[j]) === true){
            result = result + arr1[j];
        }
    }
    return result;
}
const DuplicatNumber = [10, 20, 40, 10, 50, 30, 10, 60, 10];
console.log(TambahDuplikat(DuplicatNumber));

// SOAL 3 -> GAME BATU GUNTING KERTAS

function GameBatuGuntingKertas(player:string){
    let item = ["Batu","Gunting","Kertas"];
    let random = Math.floor(Math.random() * item.length);
    let bot = item[random];

    if(player === bot){
        return `Player : ${player} VS Bot : ${bot} = Seri`;
    }
    else if(player === 'Batu' && bot === "Gunting" || player === 'Gunting' && bot === "Kertas" || player === 'Kertas' && bot === "Batu"){
        return `Player : ${player} VS Bot : ${bot} = Player Menang`;
    }else{
        return `Player : ${player} VS Bot : ${bot} = Player Kalah`;
    }
}
console.log(GameBatuGuntingKertas('Batu'));