
const fruits = ["apple", "banana"];

console.log("Before push:", fruits);

fruits.push("mango");
fruits[0] = "orange";

console.log("After changes:", fruits);

const frozenFruits = Object.freeze(["apple", "banana"]);

try {
  frozenFruits.push("mango");
} catch (error) {
  console.log("Cannot change frozenFruits:", error.message);
}

console.log("Frozen array:", frozenFruits);
