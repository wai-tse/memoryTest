var expect = require("chai").expect;
var logicB = require("../src/js/logicB");

describe("Logic B Counter", function() {
  describe("Counter", function() {
    it("False", function() {
      var counter = logicB();
      expect(counter(false)).to.equal(1);
    });
  });

  describe("Counter", function() {
    it("False False", function() {
      var counter = logicB();
      counter(false);
      expect(counter(false)).to.equal(2);
    });
  });

  describe("Counter", function() {
    it("False False True", function() {
      var counter = logicB();
      counter(false);
      counter(false);
      expect(counter(true)).to.equal(3);
    });
  });

  describe("Counter", function() {
    it("False False True False False", function() {
      var counter = logicB();
      counter(false);
      counter(false);
      counter(true);
      counter(false);
      expect(counter(false)).to.equal(5);
    });
  });

  describe("Counter", function() {
    it("False True", function() {
      var counter = logicB();
      counter(false);
      expect(counter(true)).to.equal(0);
    });
  });

  describe("Counter", function() {
    it("False False True True", function() {
      var counter = logicB();
      counter(false);
      counter(false);
      counter(true);
      expect(counter(true)).to.equal(0);
    });
  });

  describe("Counter", function() {
    it("True", function() {
      var counter = logicB();
      expect(counter(true)).to.equal(0);
    });
  });
});
