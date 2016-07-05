// var addOne = function ....

function Human (options) {
  var options = options || {};
  this.cool = options.cool;
  if (this.cool === undefined){
    this.cool = false;
  };

  this.pet = function(dog){
    dog.status = 'happy';
  };
  this.feed = function(dog){
    dog.hungry = false
  }
};
export {Human};
