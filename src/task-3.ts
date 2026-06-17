function* generateEvenNumbers(count: number): Generator<number> {
  let i = 0;

  while (i < count) {
    const number = Math.floor(Math.random() * 101);

    if (number % 2 === 0) {
      yield number;
      i++;
    }
  }
}
