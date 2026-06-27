class PhoneNumber {
  number: string;

  constructor(number: string) {
    this.number = number;
  }

  [Symbol.toPrimitive](hint: string): string {
    if (hint === "string") {
      if (this.number.startsWith("050")) return "MTC";
      if (this.number.startsWith("096")) return "Kyivstar";

      return "Невідомий оператор";
    }

    return this.number;
  }
}

const phone1 = new PhoneNumber("0501234567");
const phone2 = new PhoneNumber("0965557788");
const phone3 = new PhoneNumber("0991112233");

console.log(String(phone1)); // MTC
console.log(String(phone2)); // Kyivstar
console.log(String(phone3)); // Невідомий оператор
