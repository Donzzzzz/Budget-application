const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve("This is the result");
    reject("Wrong");
  }, 3000);
});

console.log("before");

promise
  .then(data => {
    console.log(`1: ${data}`);
  })
  .catch(e => {
    console.log(e);
  });

console.log("after");
