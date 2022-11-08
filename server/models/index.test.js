const {sequelize} = require("/home/mtorresjr/inventory-app/server/db.js")
const {Item} = require("./index");

describe("Item model", () => {
    beforeAll(async () => {
        await sequelize.sync({force:true});
    });

    test("can create a new item", async () => {
        const testItem = await Item.create({
            title: "PS5",
            price: 499,
            description: "Gaming Console",
            category: "Electronics",
            image: "https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$"
        });
        expect(testItem.title).toBe("PS5");
        expect(testItem.price).toBe(499);
        expect(testItem.description).toBe("Gaming Console");
    });
});