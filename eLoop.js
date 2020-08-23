const { pbkdf2 } = require("crypto");
const start = Date.now();
const hash = () => {
  pbkdf2("pass", "salt", 10000, 1000, "sha256", () => {
    console.log("Hash", Date.now() - start);
  });
};
