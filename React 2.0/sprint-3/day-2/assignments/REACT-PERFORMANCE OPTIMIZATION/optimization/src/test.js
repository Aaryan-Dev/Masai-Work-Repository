// what is the algorithm to write the sum of fibonacci series -> Dynamic Programming

// it checks if the output is present for that particular input, if yes, return that, else calculate and store it for future use.
const memoFunc = (func) => {
  const cache = {};
  return (input) => {
    return cache[input] || (cache[input] = func(input));
  };
};

const fibonacci = memoFunc((n) => {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
});

console.time("T1");
console.log(fibonacci(5000));
console.timeEnd("T1");

//If I get some input, I will check if I already have the value,
//If yes, then return it, else calculate and then store it.
