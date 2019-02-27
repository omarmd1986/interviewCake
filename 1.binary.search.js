const words = [
    'undulate',
    'xenoepist',
    'asymptote', // <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
    'ptolemaic',
    'retrograde',
    'supplant',
];

var lib = require('./1.binary.search/1.rotate.point');

console.time('they');
console.log(lib.findRotationPoint(words));
console.timeEnd('they');

var rotate = new lib.findRotatePointRec(words);
console.time('my');
console.log(rotate.findIndex());
console.timeEnd('my');