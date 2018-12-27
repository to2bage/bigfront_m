const name = process.env.NODE_ENV === "production" ? "prod" : "dev";
const { dev } = require(`./${name}.js`);
console.log(dev);

// import { dev } from "./dev.js";      // import 和 require()返回的都是一个对象
// import { ${name} } from `./${name}.js`;  // import 不能用`${name}`
// console.log("ff=>", dev);

exports.env_func = require(`./${name}.js`);

// module.exports = require(`./${name}.js`);