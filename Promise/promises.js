

// const p1 = new Promise((resolve, reject) =>{
//     const num = Math.ceil((Math.random() * 10));
//     console.log("here", num)
//     if(num==2) {
//         resolve("success")
//     } else {
//         reject("Error while processing")
//     }
// })

const p1 = new Promise((resolve, reject)=>{
    setTimeout(() => resolve('Promise p1 resolved!'), 1000);
})

const p2 = new Promise((resolve, reject)=>{
    setTimeout(()=> resolve("Promise p2 resolved"), 2000)
})

const p3 = new Promise((resolve, reject)=>{
    setTimeout(()=> reject("Promise p3 resolved"), 3000)
})

Promise.all([p1, p2, p3]).then((result)=>{
    console.log("all promise resolved \n", result);
}).catch((err)=>{
    console.log(err)
});

Promise.allSettled([p1, p2, p3]).then((result)=>{
    console.log("all Settled  promise resolved \n", result);
})