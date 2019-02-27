module.exports = {
    smallerNumber(set, num) {
        var arr = [...set];

        arr.sort((a, b) => a - b);

        return arr[num - 1] || null;
    }
}