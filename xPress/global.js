const { log } = require("console")

global.setTimeout(() => {
    console.log('in the Timeout');
}, 3000)

const int = setInterval(() => {
    console.log("node Interval");
    clearInterval(int,)
}, 1000);

console.log(__dirname);
console.log(__filename);