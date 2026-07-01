

let num = 10;
let promise = new Promise((resolve,reject)=>{
    if(num%2 == 0){
        resolve("Even")
    }else{
        reject("Not Even")
    }
})

console.log(await promise)

//. In Promise - there are three states - pending, fullfiled , Rejected
// Pending - At starting of promise
// Fullfiled - If result will solved or fullfiled,
// Rejected  - 