const path = require("path");

console.log("__dirname", __dirname);
const productsPath = path.join(__dirname, "../", "data", "products.json");

console.log("productsPath", productsPath);

module.exports = productsPath;
