module.exports = {
    pairs(arr, k) {
        // unique values less than K
        arr = [...new Set(arr.filter(a => a < k))];

        var result = [];

        for (let index = 0; index < arr.length; index++) {
            for (let j = index + 1; j < arr.length; j++) {
                if (arr[index] + arr[j] === k) {
                    result = [...result, [arr[index], arr[j]]];
                }
            }
        }

        return result;
    }
}