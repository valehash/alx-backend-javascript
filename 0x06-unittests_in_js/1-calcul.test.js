const assert = require("assert");
const calculator = require("./1-calcul.js")

describe('calculation', () => {
  it("should add two rounded numbers and give the correct output", () => {
    assert.equal(calculator('SUM', 2.1, 3.1), 5);
    assert.equal(calculator('SUBTRACT',3.7, 9), 5);
    assert.equal(calculator("DIVIDE",8, 4.4), 2);
    assert.equal(calculator("DIVIDE",8, 0.2), "Error");
  });
});
