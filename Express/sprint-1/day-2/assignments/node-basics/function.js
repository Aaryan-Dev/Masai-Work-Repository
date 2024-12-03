const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const div = (a, b) => a / b;
const mul = (a, b) => a * b;
const random = (Math.random() * 10).toFixed(0);
const sin = (a) => Math.sin(a);
const cos = (a) => Math.cos(a);
const tan = (a) => Math.tan(a);

module.exports = { add, sub, div, random, sin, cos, tan, mul };

// or
// module.exports = [add, sub, div, random, sin, cos, tan];
// have to import the array method in the same order
