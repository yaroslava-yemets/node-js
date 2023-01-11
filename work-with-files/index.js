const fs = require("fs/promises");
const filePath = "./files/file.txt";

const fileOperation = async (filePath, action, data) => {
  switch (action) {
    case "read":
      const text = await fs.readFile(filePath, "utf8");
      console.log("text", text);
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

// fileOperation(filePath, "read");
// fileOperation(filePath, "add", "\nIn node.js project");
// fileOperation(filePath, "replace", "All text was replaced!");
