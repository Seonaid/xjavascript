var bracket = require('./bracket-push');

describe("bracket push", function() {
  it("checks for appropriate bracketing in a set of brackets", function() {
    expect(bracket("{}")).toEqual(true);
  });

  xit("returns false for unclosed brackets", function() {
    expect(bracket("{{")).toEqual(false);
  });

  xit("checks bracketing in more than one pair of brackets", function() {
    expect(bracket("{}[]")).toEqual(true);
  });

  xit("checks bracketing in nested brackets", function() {
    expect(bracket("{[]}")).toEqual(true);
  });

  xit("checks bracket closure with deeper nesting", function() {
    expect(bracket("{[)][]}")).toEqual(false);
  });

  xit("checks bracket closure in a long string of brackets", function() {
    expect(bracket("{[]([()])}")).toEqual(true);
  });
});
