const importedSum = require("./myModule/sum");
const express = require("express");
const result = importedSum.sum(2, 2);

console.log(result);
