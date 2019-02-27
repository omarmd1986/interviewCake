module.exports = {

    longest(s1, s2, indexS1 = 0) {
        s1 = s1.slice(indexS1);
        if (s1 === '') { return ''; }

        var result = '', seq = '', indexS2 = 0;

        for (const char of s1) {
            if (indexS2 === s2.length) { break; }
            const index = s2.indexOf(char, indexS2);
            if (index >= 0) {
                seq = `${seq}${char}`
                indexS2 = index + 1;
            }
        }

        result = this.longest(s1, s2, indexS1 + 1);

        return seq.length > result.length ? seq : result;
    },

    longestSeq(s1, s2, prepareFn = null) {
        var result = '';

        var longest = function (s1, s2) {
            let index = 0;
            let found = '';

            s1Loop: for (i = 0; i < s1.length; i++) {
                const s1Ele = typeof prepareFn === 'function' ? prepareFn(s1[i]) : s1[i];
                s2Loop: for (let j = index; j < s2.length; j++) {
                    const s2Ele = typeof prepareFn === 'function' ? prepareFn(s2[j]) : s2[j];
                    if (s1Ele === s2Ele) {
                        found = `${found}${s1Ele}`
                        index = ++j;
                        break s2Loop;
                    }
                }
            }

            return found;
        };

        for (let index = 0; index < s1.length; index++) {
            var tmp = s1.slice(index, s1.length);
            if (result.length >= tmp.length) {
                break;
            }
            var seq = longest(tmp, s2);
            result = seq.length > result.length ? seq : result;
        }

        return result;
    }
}