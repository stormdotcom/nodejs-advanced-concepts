function b() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("test");
    }, 2000);
  });
}

async function a() {
  console.log("inside a");

  const a = await b();
  console.log(a);
  console.log("ended");
}

a();
