// You are given a string whose size is stored in a variable with the nameN, stored in a variable with the namestr

// You have to print all the characters in the string, which are present at odd indexes

// For example, consider the string stored instr = "nrupul", and the value stored inN = 6, then the output will be

// r
// p
// l
// The characters stored at odd positions arer - index 1,p - index 3,l - index 5, hence they are printed, each character on a new line
// Note : The indexing in the string starts from 0

function charAtOddPos(N, str) {
  if (N == str.length) {
    return;
  }

  if (N % 2 !== 0) {
    console.log(str[N]);
  }
  charAtOddPos(N + 1, str);
  //complete the rest of the function
}
