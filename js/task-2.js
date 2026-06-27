"use strict";
class Product {
    name;
    price;
    quantity;
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}
class Shop {
    products;
    constructor(products) {
        this.products = products;
    }
    [Symbol.iterator]() {
        let index = 0;
        const products = this.products;
        return {
            next() {
                if (index < products.length) {
                    const product = products[index++];
                    return {
                        value: `${product.name} - ${product.price * product.quantity} грн`,
                        done: false,
                    };
                }
                return {
                    value: undefined,
                    done: true,
                };
            },
        };
    }
}
// використання
const shop = new Shop([
    new Product("Молоко", 50, 10),
    new Product("Хліб", 20, 5),
    new Product("Сік", 30, 3),
]);
for (const item of shop) {
    console.log(item);
}
//# sourceMappingURL=task-2.js.map