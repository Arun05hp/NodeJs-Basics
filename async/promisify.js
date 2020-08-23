const { readFile } = require("fs");
const { promisify } = require("util");

// readFile("F:\\NodeJs\\basics\\async\\callback.js", "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data);
// });

//promisify example
const read = promisify(readFile);

read("F:\\NodeJs\\basics\\async\\callback.js", "utf8")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
