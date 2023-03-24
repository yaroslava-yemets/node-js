const getAll = require("./getAll");
const updateProducts = require("./updateProducts");

async function updateById(id, data) {
  const allProducts = await getAll();
  const index = allProducts.findIndex((p) => p.id === id);

  if (index < 0) return null;

  allProducts.splice(index, 1, { ...data, id });

  await updateProducts(allProducts);

  return allProducts[index];
}

module.exports = updateById;
