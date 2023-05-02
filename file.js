const fs = require('fs')

fs.readFile('./test/blog.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data);
})