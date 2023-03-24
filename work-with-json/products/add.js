const { v4 } = require("uuid");
const getAll = require("./getAll");
const updateProducts = require("./updateProducts");

async function add(data) {
  const allProducts = await getAll();
  const newProduct = { ...data, id: v4() };

  allProducts.push(newProduct);
  await updateProducts(allProducts);

  return newProduct;
}

module.exports = add;
