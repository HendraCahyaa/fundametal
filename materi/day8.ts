function fetchData(){
    return new Promise((resolve,reject) => {
        const succes:boolean = true;

        if(succes){
            resolve("budi");
        }else{
            reject("Something went wrong");
        }
    });
}

fetchData()
.then((response)=> {
    console.log(response);
})
.catch((error) => {
    console.log(error);
});

function fetchUsers(){
    return fetch("https://jsonplaceholder.typicode.com/users");
}

fetchUsers()
.then((response)=>{
    if(!response.ok){
        throw new Error("Something went wrong");
    }
    return response.json();
})
.then((users) => {
    console.log(users);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("Promise selesai");
});

async function fetchUsers2(){
    try{
        //ini kalo berhasil
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        console.log(users);
    }catch(error){
        //ini kalo gagal
        console.log(error);
    }finally{
        //ini akan dijalankan paling terakhir
        console.log("promise selesai");
    }
}

fetchUsers2();

//JSON -> javascript object notation
const user ={
    nama:"budi",
    age:20,
};
const userJSON = JSON.stringify(user);
console.log(userJSON);
const parseJSON = JSON.parse(userJSON);
console.log(parseJSON);