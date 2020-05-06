const singleBookCost = 8;
const bundleDiscountsArray = [0,0.05,0.10,0.20,0.25];
const costsReducer = (accumulator, currentValue) => accumulator + currentValue * singleBookCost * (1 - bundleDiscountsArray[currentValue - 1]);

module.exports = function(array = []) {
    const booksToBuy = [...array];

    let bundles = [];
    
    while(booksToBuy.length > 0){
        // extract how many unique books.
        const uniqueBooks = [... new Set(booksToBuy)];

        // add the number of different books in the bundle.
        bundles.push(uniqueBooks.length);

        uniqueBooks.forEach(value => {
            booksToBuy.splice(booksToBuy.indexOf(value), 1);
        });
    }

    return bundles.reduce(costsReducer, 0);
}