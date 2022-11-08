const Item = require('./item.js')

describe(Item, () => {
    
    test('item is valid', () => {
        const newItem = new Item ("PS5",499, "Gaming Console", "Electronics", "https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$")
        expect(newItem.title).toEqual("PS5");
        expect(newItem.price).toEqual(499);
        expect(newItem.description).toEqual("Gaming Console");
    });
});

