const getAll = require("./getAll");

async function getById(id) {
  const allProducts = await getAll();

  const product = allProducts.find((p) => p.id === id);

  if (!product) return null;

  return product;
}

module.exports = getById;
