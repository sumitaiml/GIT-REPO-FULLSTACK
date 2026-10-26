let number = 153;
let originalNumber = number;
let sum = 0;
let digits = String(number).length;
while (number > 0) {
  let digit = number % 10;
  sum = sum + digit ** digits;
  number = Math.floor(number / 10);
}
if (sum === originalNumber) {
  console.log(originalNumber + " is an Armstrong number");
} else {
  console.log(originalNumber + " is not an Armstrong number");
}