module.exports = {
    closerXPoint(arr, vortex, closer) {
        if( arr.length < closer ) { return null; }
        
        var copy = arr.map(p => {
            let d = p.distance(vortex);
            return [d, p];
        });
        
        copy.sort((a,b) => a[0] - b[0]);

        return copy[closer - 1][1];
    }
}
