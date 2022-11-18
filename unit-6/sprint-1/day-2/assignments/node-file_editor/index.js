// os method

const osWhatever = require("os");

// console.log(os.version);
// console.log(os.cpus());
// console.log(osWhatever.cpus()[0]);

// read, delete, create, rename, list method
const whatever = require("fs");

console.log("start");
///
/** for text file */
const data = whatever.readFileSync("./text.txt", {
  encoding: "ascii",
});
///
// to call the function at the very last
// whatever.readFile(
//   "./text.txt",
//   {
//     encoding: "ascii",
//   },
//   (err, data) => {
//     console.log(data);
//   }
// );

///
console.log(data);
console.log("end");
///
/** for .js file */
// const data = whatever.readFileSync("./file.js", { encoding: "uft-8" });
///

// npm method
const checkEven = require("is-even");
console.log(checkEven(7));
