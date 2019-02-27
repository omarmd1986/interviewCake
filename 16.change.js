
const denominations = [100, 50, 20, 10, 5, 1, 0.25, 0.10, 0.05, 0.01];

var change = function (totalCost, amountProvided, index = 0) {
    if (amountProvided < totalCost) {
        throw new Error('Amount provided insuficient');
    }

    let result = calculate(amountProvided - totalCost);
};

var calculate = function (change, index = 0) {

    if(change === 0.0){
        return [];
    }

    for (let i = index; i < denominations.length; i++) {
        const element = denominations[i];
        
    }

};