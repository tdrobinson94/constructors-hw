function Dog (options) {
  var options = options || {};
  this.status = 'normal';
  this.color = options.color;
  this.hungry = options.hungry;
  if (this.hungry === undefined){
    this.hungry = true;
  };

  // if (options.hungry !== undefined) {
  //   this.hungry = options.hungry;
  // } else {
  //   this.hungry = true;
  // }
  //
  // this.hungry = (options.hungry === undefined) ? true : options.hungry;
};


export {Dog};
