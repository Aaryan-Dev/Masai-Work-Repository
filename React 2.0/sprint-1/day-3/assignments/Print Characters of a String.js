// You are given a string, whose size is stored in a variable with the nameN

// The string itself is stored in a variable with the name,str

// Print all the characters, stored instr, on a new line

// For example, if the value stored inN = 6, and the string isstr = "nrupul", then the required output will be

// n
// r
// u
// p
// u
// l

function printChar(N, str) {
  //write a recursive function to print all the characters of the string. The initial value of N = 0

  if (N === str.length) {
    return;
  }

  console.log(str[N]);
  printChar(N + 1, str);
}
