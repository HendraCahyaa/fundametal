//Soal 1 -> Excel Sheet Column Title to Number
function titleToNumber(columnTitle: string) {
    let result = 0;
    for (let i = 0; i < columnTitle.length; i++) {
    // charCodeAt('A') = 65, jadi dikurang 64 agar 'A' -> 1
    const charValue = columnTitle.charCodeAt(i) - 64;
    result = result * 26 + charValue;
    }
    return result;
}
console.log(titleToNumber("AB"));

//Soal 2 -> Mencari satu angka yang tidak berpasangan di mana angka lainnya muncul tepat dua kali.

function singleNumber(nums: number[]) {
  // reduce menggabungkan semua elemen menggunakan operasi XOR
  //nilai sama yang di xor akan menghasilkan 0
    return nums.reduce((acc, curr) => acc ^ curr, 0); 
}
console.log(singleNumber([1,1,2,2,3]));

//Soal 3 -> Memeriksa apakah dua string memiliki jumlah dan jenis huruf yang persis sama.

function isAnagram(str1: string, str2: string) {
    if (str1.length !== str2.length){ 
    return false;
    };
    // Mengubah string jadi array, urutkan alfabetis, lalu gabungkan kembali
    const normalize = (str: string) => str.split('').sort().join('');

    return normalize(str1) === normalize(str2);
}
console.log(isAnagram("anagram", "nagaram"));

//Soal 4 -> Menghitung berapa banyak cara memanjat n anak tangga jika sekali melangkah bisa 1 atau 2 tangga. 
function climbStairs(num: number) {
    if (num <= 2) {
    return num
    };

    let prev = 1;
    let curr = 2;

    for (let i = 3; i <= num; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
    }

    return curr;
}
console.log(climbStairs(5));

//Soal 5 -> Mencari elemen yang muncul lebih dari n/2 kali
function majorityElement(nums: number[]) {
    nums.sort((a, b) => a - b);
    //hitung hasil panjang array / 2 lalu dibulatkan ke bawah
    return nums[Math.floor(nums.length / 2)];
    // hasil Math.floor digunakan untuk mengambil nilai pada index ke x
}
console.log(majorityElement([2,2,1,1,1,2,2]));

//Soal 6 -> Konversi angka Romawi ke Angka Biasa.
function romanToInt(roman: string) {
    const romawi:any = {
    I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
    };

  return roman.split('').reduce((total, char, i, arr) => {
    const current = romawi[char];
    const next = romawi[arr[i + 1]];

    // Jika nilai karakter ini lebih kecil dari karakter setelahnya, kurangi
    if (next && current < next) {
      return total - current;
    }
    return total + current;
  }, 0);
}
console.log(romanToInt("MCMXCIV"));

//Soal 7 -> Membuat Segitiga Pascal sebanyak numRows baris
function generate(numRows: number): number[][] {
  const triangle: number[][] = [];

  for (let i = 0; i < numRows; i++) {
    // Buat baris berisi angka 1 sejumlah (i + 1)
    const row = new Array(i + 1).fill(1);

    // Isi bagian tengah baris
    for (let j = 1; j < i; j++) {
      row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }

    triangle.push(row);
  }

  return triangle;
}

console.log(generate(5));

//Soal 8 -> Mencari keuntungan maksimal dari beli dan jual saham dalam satu kali transaksi.
function maxProfit(prices: number[]): number {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (const price of prices) {
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
  }

  return maxProfit;
}

console.log(maxProfit([7,2,1,5]));

const a =[1,2,3];
const b =[...a];
b.push(4);
console.log(a);
console.log(4);