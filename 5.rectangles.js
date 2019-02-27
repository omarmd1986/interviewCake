// import { Point } from "./5.rectangles/Point";
var Rectangle = require('./5.rectangles/Rectangle');

const rect1 = new Rectangle(1, 1, 6, 3);
const rect2 = new Rectangle(5, 2, 3, 6);
const rect3 = new Rectangle(2, 2, 3, 4);

let a = Rectangle.overlap(rect1, rect2);
console.log(a);
let b = Rectangle.intersection(rect1, rect2);
console.log(b);
let c = Rectangle.intersections([rect1, rect2, rect3]);
console.log(c);
let d = Rectangle.allintersections([rect1, rect2, rect3]);
console.log(d);