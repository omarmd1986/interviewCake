var lib = require('./8.longest.seq/index');

const s1 = 'ABAZDCJDJJNWIUEUNJCJJNJHDJHWJNEOCNWI', s2 = 'BACBAD';

console.time('recursive')
const r = lib.longest(s1, s2);
console.timeEnd('recursive')
console.log(r);

console.time('iterative')
const r2 = lib.longestSeq(s1, s2);
console.timeEnd('iterative')

console.log(r2);
/*
console.log('---------')

var x = [
    'omar',
    'om',
    'omd',
    'milena',
    'mile'
];

console.log(x.sort((a,b) => (a.length === b.length) ? 0 : b.length - a.length)[0]);

console.log('--------------')

var parts = ['shoulders', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes'];

console.log(lyrics);

console.log('-----------')

function f(x,y,z) {
    console.log(x, y, z);
}
var args = [1,2,3]
f(...args)*/