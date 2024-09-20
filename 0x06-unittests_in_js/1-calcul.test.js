const assert = require("assert");
const calculator = require("./1-calcul.js")

describe('calculation', () => {
  it("should add two rounded numbers and give the correct output", () => {
    assert.equal(calculator(2.1, 3.1, 'SUM'), 5);
    assert.equal(calculator(3.7, 9, "SUBTRACT"), 5);
    assert.equal(calculator(8, 4.4, "DIVIDE"), 2);
    assert.equal(calculator(8, 0.2, "DIVIDE"), "Error");
  });
});
