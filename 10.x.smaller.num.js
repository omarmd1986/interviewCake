var lib = require('./10.x.smaller.num/index');

var set = new Set([1,3,2,3,2,5,46,6,7,4]);

var smaller = lib.smallerNumber(set, 3);

console.log(smaller)