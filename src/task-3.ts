function* generateEvenNumbers(count: number): Generator<number> {
  let i = 0;

  while (i < count) {
    const number = Math.floor(Math.random() * 50 + 1) * 2;
    yield number;
    i++;
  }
}

// Використання
for (const num of generateEvenNumbers(5)) {
  console.log(num);
}
