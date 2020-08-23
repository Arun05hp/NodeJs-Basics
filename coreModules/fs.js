const { opendir, stat, open, readFile, writeFile } = require("fs");

const { promisify } = require("util");

const dir = promisify(opendir);
const getStat = promisify(stat);
const read = promisify(readFile);
// dir("./")
//   .then(async (dir) => {
//     for await (let dirent of dir) {
//       console.log(dirent.name);
//     }
//   })
//   .catch();

// getStat("./coreModules/EventEmitter.js")
//   .then((stat) => console.log(stat))
//   .catch((err) => console.log(err));

// open("./coreModules/EventEmitter.js", (err, fd) => {
//   if (err) return console.log(err);
//   read(fd, "utf8")
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// });

writeFile("./text.txt", "Hello", (err) => console.log(err));
