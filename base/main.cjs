const os = require('os');
const path = require('path')

// console.log(os.cpus());
// console.log(os.cpus().length);

// console.log(path.resolve('/foo/bar', './baz'));
// console.log(path.resolve('/foo/bar', '/tmp/file/'));
// console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'));

// console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));
// console.log(path.join('foo', 'bar'));

console.log(__filename);
console.log(__dirname);

// console.log(path.join(__dirname, '..', 'module', 'md.js'));

console.log(process.argv);
console.log(process.cwd());
process.on('exit', (code) => {
    console.log('code', code);
})

process.exit(202);

console.log('end');