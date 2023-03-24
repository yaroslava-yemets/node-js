const fs = require("fs/promises");
const productsPath = require("./productsPath");

async function updateProducts(products) {
  const productsString = JSON.stringify(products);

  await fs.writeFile(productsPath, productsString);
}

module.exports = updateProducts;
