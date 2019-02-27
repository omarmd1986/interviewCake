const string = 'geeks';

var sumCharCode = function (str) {
    let sum = 0;

    for (var i = 0, max = str.length; i < max; i++) {
        sum += str.charCodeAt(i);
    }

    return Math.floor((sum / str.length));
};

console.log(sumCharCode(string));