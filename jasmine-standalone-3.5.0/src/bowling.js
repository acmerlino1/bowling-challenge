var Bowling = function() {
  this.score = 0
  this.rollOne = function(pins){
    this.score += pins;
  };
  this.rollTwo = function(pins){
    this.score += pins;
  };
}