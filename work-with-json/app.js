const productsOperations = require("./products");

const invokeProductsAction = async ({ action, id, data }) => {
  switch (action) {
    case "getAll":
      return await productsOperations.getAll();

    case "getById":
      const product = await productsOperations.getById(id);
      console.log("product", product);
      return product;

    // Add object product to the json
    case "add":
      const newProduct = await productsOperations.add(data);
      console.log("newProduct", newProduct);
      return newProduct;

    case "updateById":
      const updatedProduct = await productsOperations.updateById(id, data);
      console.log("updatedProduct", updatedProduct);
      return updatedProduct;

    // // Delete all text and write new text
    // case "replace":
    //   await fs.writeFile(filePath, data);
    //   break;

    default:
      throw new Error("Unknown action");
  }
};

// invokeProductsAction({ action: "getAll" });
// invokeProductsAction({ action: "getById", id: "1" });

const data = { name: "Sugar", price: 12, location: "shelf" };
// invokeProductsAction({ action: "add", data });

const updateData = {
  name: "Meat",
  price: 23,
  location: "Refrigerator",
};
const updateId = "88c4dc43-0138-4e78-9d38-7043fbe9441c";
invokeProductsAction({ action: "updateById", data: updateData, id: updateId });
