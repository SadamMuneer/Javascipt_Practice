const compareNumbers = (a, b) => {
  if (a < b) {
    return "B is greater";
  } else {
    return "A is greater";
  }
};

let a = 18;
let b = 20;
let result = compareNumbers(a, b);
console.log(result);
