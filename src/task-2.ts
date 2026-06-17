class Product {
  name: string;
  price: number;
  quantity: number;

  constructor(name: string, price: number, quantity: number) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

class Shop {
  products: Product[];

  constructor(products: Product[]) {
    this.products = products;
  }

  [Symbol.iterator](): Iterator<string> {
    let index = 0;
    const products = this.products;

    return {
      next(): IteratorResult<string> {
        if (index < products.length) {
          const product = products[index++];

          return {
            value: `${product.name} - ${product.price * product.quantity} грн`,
            done: false,
          };
        }

        return {
          value: undefined as any,
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
