function test(){
    for(let i=0;i < 5;i++){
        for(let j=0;j < 5;i++){
            console.log("test");
        }
    }// o(n2)

for(let i=0;i < 5;i++){
        console.log("test");
    }// o(n)


    for(let i=0;i < 5;i++){
        for(let j=0;j < 5;i++){
            for(let k=0;k < 5;i++){
                console.log("test");
            }
        }
    }// o(n3)
}

//hash map 
const myMap = new Map();
myMap.set("Name","John");
myMap.set("Addres","Jakarta");
console.log(myMap.get("Name"));
console.log(myMap.has("Addres"));

myMap.delete("Addres");
console.log(myMap.has("Addres"));