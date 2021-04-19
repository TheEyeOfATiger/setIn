const setIn = require("../src/setIn");

console.log(setIn({}, "x", "y", "z", 1));
console.log(setIn({ x: { a: "b" } }, "x", "y", "z", 1));
console.log(setIn({ x: { a: "b" } }, "x", "a", 1));
