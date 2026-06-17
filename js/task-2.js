//Задача 2. Дано Shop  -- клас, що містить список товарів (масив об’єктів класу Product
// (назва, ціна, кількість одиниць). Додати можливість ітератора до класу Shop, щоб при
//  ітеруванні для кожного елемента виводився рядок «товар-загальна вартість»
const Student = {
  name: "Alina",
  group: "TS-23",
  marks: [4, 3, 3, 5],

  [Symbol.iterator]() {
    let index = 0;
    let marks = this.marks;

    return {
      next() {
        if (index < marks.length) {
          return {
            value: marks[index++],
            done: false,
          };
        }

        return {
          done: true,
        };
      },
    };
  },
};

for (const mark of Student) {
  console.log(mark);
}
