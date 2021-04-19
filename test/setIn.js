const setIn = require("../src/setIn");
var expect = require("chai").expect;

describe("test setIn fn: ", function () {
  it("it should return original object when missmatch no. of args", function () {
    // console.log(setIn({ x: { a: "b" } }, "x", "a", 1));
    const original = { x: { a: "b" } };
    const expected = { ...original };
    expect(setIn(original, "x", "a", 1)).to.deep.equal(expected);
  });

  it("it should create new x,y levels and set value for z key", function () {
    // console.log(setIn({}, "x", "y", "z", 1));
    const original = {};
    const expected = { ...original, x: { y: { z: 1 } } };
    expect(setIn(original, "x", "y", "z", 1)).to.deep.equal(expected);
  });

  it("it should create new y level and set value for z key", function () {
    // console.log(setIn({ x: { a: "b" } }, "x", "y", "z", 1));
    const original = { x: { a: "b" } };
    const expected = { x: { a: "b", y: { z: 1 } } };
    expect(setIn(original, "x", "y", "z", 1)).to.deep.equal(expected);
  });
});
