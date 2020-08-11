function getTheLenght() {
  var arr = ["I", "love", "coding", "damn", "!"];
  if (arr.length == 4) {
    return true;
  } else {
    return arr[2];
  }
}
console.log(getTheLenght());

function remove(str) {
  return str.join(" ");
}
console.log(remove(["I", "love", "coding", "damn", "!"]));

var array = [2, 12, 18, 14, 80, 0, 1];
var array2 = [17, 3, 21, 10];

function arraySort() {
  var arrayMerged = array.concat(array2);
  var sortedArray = arrayMerged.sort(
    (smallestNum, biggestNum) => smallestNum - biggestNum
  );
  return sortedArray;
}
console.log(arraySort());

function numbersGreaterThanTen() {
  var numbers = arraySort();
  var numbersGreaterThan10 = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
      numbersGreaterThan10.push(numbers[i]);
    }
  }
  return numbersGreaterThan10;
}
console.log(numbersGreaterThanTen());