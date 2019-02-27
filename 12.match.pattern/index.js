var State = require('./State');

module.exports = {
    regex(s, p) {
        let initialState = [State.parsePattern(p)];

        var check = function (s, states) {
            for (let index = 0; index < s.length; index++) {
                const element = s[index];
                
                while();
                
            }
        };

        return check(s, initialState);
    }
}
