"use strict";

describe("bowling", function() {
  var bowling;
  
  it("starts at 0 points", function() {
    var bowling = new Bowling;
    expect(bowling.score).toEqual(0);
  });

  it("accumulates points after roll 1", function(){
    var bowling = new Bowling;
    bowling.roll(5);
    expect(bowling.score).toEqual(5);
  })

  it("accumulates points after roll 2",function() {
    var bowling = new Bowling;
    bowling.roll(5);
    bowling.roll(4);
    expect(bowling.score).toEqual(9);
  })
});