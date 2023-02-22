// npm install --save-dev jest
//run npx jest to test

const shipCapacity = require("../shipCapacity.js");

describe("shipCapacity", () => {
  it("should return the correct capacity for the given example input 1", () => {
    const weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const days = 5;
    expect(shipCapacity(weights, days)).toBe(15);
  });

  it("should return the correct capacity for the given example input 2", () => {
    const weights = [3, 2, 2, 4, 1, 4];
    const days = 3;
    expect(shipCapacity(weights, days)).toBe(6);
  });

  it("should return the correct capacity for the given example input 3", () => {
    const weights = [1, 2, 3, 1, 1];
    const days = 4;
    expect(shipCapacity(weights, days)).toBe(3);
  });

  it("should return the correct capacity when there is only one package", () => {
    const weights = [10];
    const days = 1;
    expect(shipCapacity(weights, days)).toBe(10);
  });

  it("should return the correct capacity when all packages have the same weight", () => {
    const weights = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
    const days = 5;
    expect(shipCapacity(weights, days)).toBe(4);
  });

  it("should return the correct capacity when the maximum capacity is the sum of all package weights", () => {
    const weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const days = 1;
    expect(shipCapacity(weights, days)).toBe(55);
  });
});
