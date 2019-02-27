const array = [
    'undulate',
    'xenoepist',
    'asymptote',
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
    'ptolemaic',
    'ptolemaic',
    'retrograde',
    'supplant',
];

var distints = function (arr) {
    let set = new Set(arr);
    return (set.size === arr.length);
};

var distints2 = function (arr) {

    for (var i = 0, max = arr.length; i < max; i++) {
        for (var j = 0, max = arr.length; j < max; j++) {
            if (arr[i] === arr[j] && i !== j) {
                return false;
            }
        }
    }

    return true;
};

console.time('uno')
console.log(distints(array));
console.log(distints2(array));
console.timeEnd('uno');