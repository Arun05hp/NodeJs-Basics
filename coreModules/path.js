const path = require("path");

// console.log(__dirname);

// console.log(__filename);

// console.log(process.cwd());

// path
// const base = path.basename(__filename);
// const extension = path.extname(__filename);
// const parse = path.parse(__filename);
// console.log(base);
// console.log(extension);
// console.log(parse);

const { readFile } = require("fs");

readFile(
  path.join(process.cwd(), "async", "callback.js"),
  "utf8",
  (err, data) => {
    console.log(data);
  }
);
