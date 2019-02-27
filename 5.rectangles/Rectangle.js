var Point = require('./Point');

module.exports = class Rectangle {
    constructor(leftx, bottomy, width, height) {
        this.leftx = leftx;
        this.bottomy = bottomy;
        this.width = width;
        this.height = height;
    }

    /**
     * 
     * @type Point
     */
    get topLeft() {
        return new Point(this.leftx, this.bottomy + this.height);
    }

    /**
     * 
     * @type Point
     */
    get bottomRight() {
        return new Point(this.leftx + this.width, this.bottomy);
    }

    /**
     * 
     * @type int
     */
    get area() {
        return this.width * this.height;
    }

    /**
     * 
     * @param {Rectangle} rect1
     * @param {Rectangle} rect2
     * @returns {Boolean}
     */
    static overlap(rect1, rect2) {
        if (rect1.bottomRight.x < rect2.topLeft.x || rect1.topLeft.x > rect2.bottomRight.x) {
            return false;
        }

        if (rect1.topLeft.y < rect2.bottomRight.y || rect1.bottomRight.y > rect2.topLeft.y) {
            return false;
        }

        return true;
    }

    /**
     * 
     * @param {Rectangle} rect1
     * @param {Rectangle} rect2
     * @returns {Rectangle}
     */
    static intersection(rect1, rect2) {
        if (false === Rectangle.overlap(rect1, rect2)) {
            return null;
        }

        let leftx = 0, bottomy = 0, width = 0, height = 0;

        leftx = Math.max(rect1.leftx, rect2.leftx);
        bottomy = Math.max(rect1.bottomy, rect2.bottomy);

        let rightx = Math.min(rect1.bottomRight.x, rect2.bottomRight.x);
        let topy = Math.min(rect1.topLeft.y, rect2.topLeft.y);

        width = rightx - leftx;
        height = topy - bottomy;

        return new Rectangle(leftx, bottomy, width, height);
    }

    /**
     * 
     * @param {array} arr
     * @returns {array}
     */
    static intersections(arr) {
        let result = [];

        for (var i = 0, max = arr.length; i < max; i++) {
            for (var j = i + 1, maxj = arr.length; j < maxj; j++) {
                let _in = Rectangle.intersection(arr[i], arr[j]);
                result.push(_in);
            }
        }

        return result;
    }

    /**
     * 
     * @param {array} arr
     * @returns {null|Rectangle}
     */
    static allintersections(arr) {
        if (arr.length === 0) {
            return null;
        }

        let result = arr[0];

        for (var i = 1, max = arr.length; i < max; i++) {
            result = Rectangle.intersection(result, arr[i]);

            if (null === result) {
                return null;
            }
        }

        return result;
    }
}

// export default Rectangle;