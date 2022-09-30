const numList = prompt("Enter a list of numbers separated by ', '");
const numArray = numList.split(", ");
console.log(numArray);
let minNum = numArray[0];
let maxNum = numArray[0];

numArray.forEach(function (num) {
  if (num < minNum) {
    minNum = num;
  } else if (num > maxNum) {
    maxNum = num;
  } else {
    minNum = minNum;
  }
});

let minAndMax = [minNum, maxNum];
console.log(minAndMax);
