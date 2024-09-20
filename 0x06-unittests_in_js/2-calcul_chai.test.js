import { expect } from 'chai';
import calculator from './2-calcul.js' 

describe('calculation', () => {
  it("should add two rounded numbers and give the correct output", () => {
    expect(calculator('SUM', 2.1, 3.1)).to.equal(5);
    expect(calculator('SUBTRACT',3.7, 9)).to.equal(5);
    expect(calculator("DIVIDE",8, 4.4)).to.equal(2);
    expect(calculator("DIVIDE",8, 0.2)).to.equal("Error");
  });
});
