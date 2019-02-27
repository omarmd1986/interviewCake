function wrap(execute) {
    try {
        let result = execute();
        return function () {
            return result;
        };
    } catch (error) {
        return function () {
            return null;
        }
    }
}

var errorExec = wrap(function () {
    throw new Error('Error');
});

var resultExec = wrap(function () {
    return "Result";
});
console.log(errorExec && errorExec()); // Should output null
console.log(errorExec && resultExec()); // Should output "Result"