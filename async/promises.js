const check = true;

const promise = new Promise((resolve, reject) => {
  if (!check) {
    resolve("done");
  } else {
    reject("undone");
  }
});

promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
