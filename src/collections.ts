// ================= Задача 5 =================
// Дано список з віком учнів. Підрахувати скільки разів кожне значення
// зустрічається у списку і максимальне.

const ages: number[] = [12, 15, 12, 17, 15, 15, 18, 18];

const ageMap = new Map<number, number>();

for (const age of ages) {
  ageMap.set(age, (ageMap.get(age) ?? 0) + 1);
}

document.write("<h2>Задача 5</h2>");

for (const [age, count] of ageMap) {
  document.write(`${age}: ${count}<br>`);
}

const maxAge = Math.max(...ages);
document.write(`Максимальне значення: ${maxAge}<br>`);

// ================= Задача 6 =================
// Підрахувати кількість книг для кожного автора.

type Book = {
  title: string;
  year: number;
  author: string;
};

const books: Book[] = [
  { title: "Book 1", year: 2000, author: "Author 1" },
  { title: "Book 2", year: 2005, author: "Author 2" },
  { title: "Book 3", year: 2010, author: "Author 1" },
  { title: "Book 4", year: 2015, author: "Author 3" },
  { title: "Book 5", year: 2020, author: "Author 2" },
];

const booksByAuthor = new Map<string, number>();

for (const book of books) {
  booksByAuthor.set(book.author, (booksByAuthor.get(book.author) ?? 0) + 1);
}

document.write("<h2>Задача 6</h2>");

for (const [author, count] of booksByAuthor) {
  document.write(`${author}: ${count}<br>`);
}

// ================= Задача 7 =================
// Підрахувати для кожного клієнта кількість відвідувань.

const visits: string[] = ["ivan", "olga", "ivan", "petro", "olga", "ivan"];

const visitsMap = new Map<string, number>();

for (const login of visits) {
  visitsMap.set(login, (visitsMap.get(login) ?? 0) + 1);
}

document.write("<h2>Задача 7</h2>");

for (const [login, count] of visitsMap) {
  document.write(`${login}: ${count}<br>`);
}

// ================= Задача 8 =================
// Підрахувати кількість різних факультетів,
// та кількість студентів кожного з курсів.

type Student = {
  fullName: string;
  course: number;
  faculty: string;
};

const students: Student[] = [
  { fullName: "Ivan Petrenko", course: 1, faculty: "IT" },
  { fullName: "Olga Shevchenko", course: 2, faculty: "Math" },
  { fullName: "Petro Ivanov", course: 1, faculty: "IT" },
  { fullName: "Anna Kovalenko", course: 3, faculty: "Physics" },
  { fullName: "Maria Bondar", course: 2, faculty: "Math" },
];

const faculties = new Set<string>();
const coursesMap = new Map<number, number>();

for (const student of students) {
  faculties.add(student.faculty);
  coursesMap.set(student.course, (coursesMap.get(student.course) ?? 0) + 1);
}

document.write("<h2>Задача 8</h2>");
document.write(`Кількість різних факультетів: ${faculties.size}<br>`);

for (const [course, count] of coursesMap) {
  document.write(`Курс ${course}: ${count} студентів<br>`);
}

// ================= Задача 9 =================
// Підрахувати кількість входжень кожного показу температур.
// Заокруглити вверх значення та підрахувати кількість різних показів.

const temperatures: number[] = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9];

const temperatureMap = new Map<number, number>();

for (const temp of temperatures) {
  const roundedTemp = Math.ceil(temp);
  temperatureMap.set(roundedTemp, (temperatureMap.get(roundedTemp) ?? 0) + 1);
}

document.write("<h2>Задача 9</h2>");

for (const [temp, count] of temperatureMap) {
  document.write(`${temp}: ${count}<br>`);
}

document.write(`Кількість різних показів: ${temperatureMap.size}<br>`);

// ================= Задача 10 =================
// Скільки студентів з історії також відвідують математику.
// Скільки всього студентів відвідують хоча б один гурток.

const mathStudents: string[] = ["Ivan", "Olga", "Petro", "Anna"];
const historyStudents: string[] = ["Petro", "Anna", "Maria", "Oleh"];

const mathSet = new Set(mathStudents);
const historySet = new Set(historyStudents);

let bothCount = 0;

for (const student of historySet) {
  if (mathSet.has(student)) {
    bothCount++;
  }
}

const allStudents = new Set([...mathSet, ...historySet]);

document.write("<h2>Задача 10</h2>");
document.write(`Відвідують і історію, і математику: ${bothCount}<br>`);
document.write(`Відвідують хоча б один гурток: ${allStudents.size}<br>`);
