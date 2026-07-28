// array methods
const numbers = [10, 20, 30, 40, 50];
numbers.push(60); 
console.log("After push:", numbers); 
const lastItem = numbers.pop(); 
console.log("Popped item:", lastItem); 
const greaterThan25 = numbers.filter(num => num > 25);
console.log("Numbers > 25:", greaterThan25); 
const found = numbers.find(num => num > 25);
console.log("First number > 25:", found); 

// functions
function greetUser(name) {
  return `Hello, ${name}! Welcome back.`;
}
const greeting = greetUser("Amith");
console.log(greeting); 
const multiply = (a, b) => {
  return a * b;
};
const product = multiply(4, 5);
console.log("4 * 5 =", product); 
const addFive = num => num + 5;
console.log("10 + 5 =", addFive(10));




