"use strict";

describe("bowling", function() {
  var bowling;
  
  it("starts at 0 points", function() {
    var bowling = new Bowling;
    expect(bowling.score).toEqual(0);
  });

  it("accumulates points", function(){
    var bowling = new Bowling;
    bowling.rollOne(5)
    expect(bowling.score).toEqual(5);
  })
});