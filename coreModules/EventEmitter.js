const { EventEmitter } = require("events");

const myEmitter = new EventEmitter();

// listener
myEmitter.on("greeting", (name) => {
  console.log(`"Hello" ${name}`);
});

myEmitter.on("greeting", () => {
  console.log(`"Hello" `);
});

// emitter
myEmitter.emit("greeting", "Ak");

const http = require("http");

const server = http.createServer();

server.on("listening", () => {
  setImmediate(() => console.log("Server is Listening Now"));
});

server.on("listening", () => {
  console.log("Server is listening Now again");
});
server.listen(3000);
