const productsOperations = require("./products");

const invokeProductsAction = async (action, data) => {
  switch (action) {
    case "getAll":
      const products = await productsOperations.getAll();
      break;

    // Add text to the end of file
    case "add":
      await fs.appendFile(filePath, data);
      break;

    // Delete all text and write new text
    case "replace":
      await fs.writeFile(filePath, data);
      break;

    default:
      throw new Error("Unknown action");
  }
};
