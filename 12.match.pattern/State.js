module.exports = class State {

    constructor(holder) {
        this._holder = holder;
        this._end = false;
        this._require = 1;
        this._states = [];
    }

    set holder(value) {
        this._holder = value;
    }

    get holder() {
        return this._holder;
    }

    set require (value) {
        this._require = value;
    }

    get require() {
        return this._require;
    }

    set end(value) {
        this._end = value;
    }

    get end () {
        return this._end;
    }

    set next (nextState) {
        this._states.push(nextState);
    }

    move (char) {
        let _states = this._states.filter(element => {
            return (element.holder === char || element.holder === '.' || element.require === 0);
        })
        return _states;
    }

    static parsePattern(p) {
        let currentState = null;

        let initialState = new State();

        let prevState = initialState;

        for (let index = 0; index < p.length; index++) {
            const holder = p[index];
            
            if(holder === '*'){
                currentState.next = currentState;
                currentState.require = 0;
            } else {
                currentState = new State(holder);
                prevState.next = currentState;
                prevState = currentState;
            }
        }

        currentState.end = true;

        return initialState;
    }
};