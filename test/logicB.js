var expect = require("chai").expect;
var logicB = require("../src/js/logicB");

describe("Logic B Counter", function() {
  describe("Counter", function() {
    it("One False", function() {
      var counter = logicB();
      expect(counter(false)).to.equal(1);
    });
  });
});
