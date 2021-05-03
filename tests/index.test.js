const { it, expect } = require("@jest/globals");
const { describe } = require("yargs");

describe("Sample Text", () => {
  it("should test that true === true", () => {
    expect(true).toBe(true);
  });
});
