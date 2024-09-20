const assert = require("assert");
const calculator = require("./0-calcul.js")

describe('calculation', () => {
  it("should add two rounded numbers and give the correct output", () => {
    assert.equal(calculator(2.1, 3.1), 5);
    assert.equal(calculator(3.7, 5), 9);
    assert.equal(calculator(2, 3), 5);
  });
});
