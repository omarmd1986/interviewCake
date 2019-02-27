module.exports = class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    distance(p) {
        let tmp = Math.pow((p.x - this.x), 2) + Math.pow((p.y - this.y), 2);
        return Math.sqrt(tmp);
    }
};