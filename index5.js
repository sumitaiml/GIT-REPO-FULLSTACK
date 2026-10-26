"use strict";
const form = document.getElementById("armstrongForm");
const numberInput = document.getElementById("numberInput");
const result = document.getElementById("result");

// `const` stops us from reassigning the variable,
// but it still lets us change the contents of the array.
const fruits = ["apple", "banana"];
form.addEventListener("submit", function (event) {
  event.preventDefault();

console.log("Before push:", fruits);
  const n2 = Number(numberInput.value);
  let n1 = n2;
  let sum = 0;
  const d1 = String(n1).length;

fruits.push("mango");
fruits[0] = "orange";
  while (n1 > 0) {
    sum += (n1 % 10) ** d1;
    n1 = Math.floor(n1 / 10);
  }

console.log("After changes:", fruits);

// This would cause an error, so keep it commented out:
// fruits = ["grape"];

// Object.freeze prevents changes to the array itself.
const frozenFruits = Object.freeze(["apple", "banana"]);

try {
  frozenFruits.push("mango");
} catch (error) {
  console.log("Cannot change frozenFruits:", error.message);
}

console.log("Frozen array:", frozenFruits);
  if (sum === n2) {
    result.textContent = "Yes, " + n2 + " is an Armstrong number.";
  } else {
    result.textContent = "No, " + n2 + " is not an Armstrong number.";
  }
});