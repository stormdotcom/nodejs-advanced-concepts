

process.env.UV_THREADPOOL_SIZE = 1;

const crypto = require("crypto");

const start = new Date();

crypto.pbkdf2("a", "b", 279000, 512, "sha512", ()=> {
    console.log("1 :", Date.now()-start)
});


crypto.pbkdf2("a", "b", 279000, 512, "sha512", ()=> {
    console.log("2 :", Date.now()-start)
})

crypto.pbkdf2("a", "b", 279000, 512, "sha512", ()=> {
    console.log("3 :", Date.now()-start)
})

crypto.pbkdf2("a", "b", 279000, 512, "sha512", ()=> {
    console.log("4 :", Date.now()-start)
})

crypto.pbkdf2("a", "b", 279000, 512, "sha512", ()=> {
    console.log("5 :", Date.now()-start)
})