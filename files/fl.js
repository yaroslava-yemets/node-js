const fs = require('fs/promises');

const file = '../base/main.mjs';

(async (fileName) => {
    const file = await fs.readFile(fileName, 'utf8');

    // Create folder
    await fs.mkdir('./temp', { recursive: true })

    // Create file
    await fs.writeFile('./temp/temp.js', `${file} 
    console.log('Hello word')`)

    console.log('file', file);
})(file)