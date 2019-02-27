function sortByPriceAscending(jsonString) {
    let arr = JSON.parse(jsonString);

    arr.sort((a, b) => {
        if (a.price == b.price) {
            return a.name > b.name;
        }
        return parseInt(a.price) > parseInt(b.price);
    });

    return JSON.stringify(arr);
}

console.log(sortByPriceAscending('[{"name":"eggs","price":1},{"name":"coffee","price":9.99},{"name":"rice","price":4.04}]'));