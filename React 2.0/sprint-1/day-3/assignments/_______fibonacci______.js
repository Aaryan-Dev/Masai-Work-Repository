// fibonacci series recursion

let position = 19;

function fibonacci(position) {
  if (position === 0) {
    return 0;
  }
  if (position === 1) {
    return 1;
  }

  return fibonacci(position - 1) + fibonacci(position - 2);
}

console.log(fibonacci(position));
