describe("stringCalculator.js", function() {
  it("should return 0 with empty string", function() {
    expect(calculator.add("")).toBe(0);
  });

  it('should return 1 if input is "1"', function() {
    expect(calculator.add("1")).toBe(1);
  });

  it('should return 9 if input is "4,5"', function() {
    expect(calculator.add("4,5")).toBe(9);
  });
});
