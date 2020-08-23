const http = require("http");
const port = 5000;

const dbConnection = true;

if (!dbConnection) process.exit(1);

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.end(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>NodeJs</title>
            </head>
            <body>
                <h1>Welcome to my First Node App</h1>
            </body>
            </html>
            `);
      break;
    case "/admin":
      res.end(`Welcome to admin pagepage`);
      break;
    case "/user":
      res.end(`Welcome to user pagepage`);
      break;
    default:
      res.end(`Page Not Found`);
      break;
  }
});

server.listen(port, () => {
  console.log(`Server is now listening on port ${port}`);
});
