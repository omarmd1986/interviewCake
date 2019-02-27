var Movie = require('./movie');

module.exports = class Flight {
    constructor(duration, movies) {
        this.duration = duration;
        this.movies = movies;
    }

    /**
     * @returns boolean
     */
    isFixMovie() {

    }

    /**
     * @returns array[int]
     */
    findMovieFix(total = 2) {
        let result = [];
        let index = 0;

        while(result.length < total && index < this.movies.length){
            let index2 = index;
            while(index2 < this.movies)
            index++;
        }

        return result.length === total ? result : [];
    }
}