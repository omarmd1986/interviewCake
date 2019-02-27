var Point = require('./11.x.close.point/point');
var lib = require('./11.x.close.point/index');

var arr = [
    new Point(1,2),
    new Point(3,-1),
    new Point(2,1),
    new Point(2,3)
];

var closer = lib.closerXPoint(arr, new Point(2, 2), 2);

console.log(closer);