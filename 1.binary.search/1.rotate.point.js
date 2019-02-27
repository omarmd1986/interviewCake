
module.exports = {

    findRotationPoint: function (words) {
        const firstWord = words[0];

        let floorIndex = 0;
        let ceilingIndex = words.length - 1;

        while (floorIndex < ceilingIndex) {

            // Guess a point halfway between floor and ceiling
            const guessIndex = Math.floor(floorIndex + ((ceilingIndex - floorIndex) / 2));

            // If guess comes after first word or is the first word
            if (words[guessIndex] >= firstWord) {

                // Go right
                floorIndex = guessIndex;
            } else {

                // Go left
                ceilingIndex = guessIndex;
            }

            // If floor and ceiling have converged
            if (floorIndex + 1 === ceilingIndex) {

                // Between floor and ceiling is where we flipped to the beginning
                // so ceiling is alphabetically first
                break;
            }
        }

        return ceilingIndex;
    },

    findRotatePointRec: function (arr) {
        var arr = arr;

        var rotate = function (array, start, end) {

            start = (start || 0);
            end = (end || (array.length - 1));

            if (start >= end) {
                return -1;
            }

            let middle = Math.floor((start + ((end - start) / 2)));

            let word = array[middle];
            let prev = array[middle - 1];

            if (prev > word) {
                return middle;
            }

            if (word < array[start])
                return rotate(array, start, middle);

            return rotate(array, middle, end);
        };

        this.findRotate = function () {
            let index = rotate(arr);
            return arr[index];
        };

        this.findIndex = function () {
            return rotate(arr);
        };
    }

}
