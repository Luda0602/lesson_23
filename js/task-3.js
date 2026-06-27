"use strict";
function* generateEvenNumbers(count) {
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
//# sourceMappingURL=task-3.js.map