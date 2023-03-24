const fs = require("fs/promises");
const productsPath = require("./productsPath");

async function getAll() {
  const data = await fs.readFile(productsPath);
  const products = JSON.parse(data);
  console.table(products);

  return products;
}

module.exports = getAll;
