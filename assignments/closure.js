// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function outer() {
  let outerVariable = 10;
  function inner() {
    let innerVariable = 40;
    console.log(outerVariable + innerVariable);
  }
  return inner;
}

// console.log(outer());
const y = outer();
console.log(y);

function sayHello() {
  let name = 'Ronald Cho';
  function slang() {
    // accessing myName outside this function using a closure
    console.log('What up buddy ' + name);
  }
  // calling slang inside sayHello()
  slang();
}
console.log(sayHello());

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  //   // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return () => (count = count + 1); // does not increase without the function
  //   // return () => ++count;
};
// const counter = () => {
//   let count = 0;

//   return () => ++count;
//   // Return a function that when invoked increments and returns a counter variable.
// };
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

console.log('########################################\n');
const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2
console.log(newCounter()); // 3
console.log(newCounter()); // 4
console.log('########################################\n');

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  return {
    increment: () => ++count, // increase one
    decrement: () => --count // decrease one
  };
};

const newCounterFactory = counterFactory();
console.log(newCounterFactory.increment()); // 1
console.log(newCounterFactory.decrement()); // 0
console.log(newCounterFactory.decrement()); // -1
