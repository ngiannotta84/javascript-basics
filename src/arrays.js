const getNthElement = (index, array) => 
{
return array[index];

}

function arrayToCSVString(array) {
return array.join (",");
};

const csvStringToArray = string => {
return string.split (",");
};

const addToArray = (element, array) => { 
array.push(element)
};

function addToArray2(element, array) {

}

const removeNthElement = (index, array) => {
array.splice(index,1)};

const numbersToStrings = numbers => {
let taskname = numbers.map((number) =>number.toString())
return taskname
};

const uppercaseWordsInArray = strings => { 
let myarray1 = strings.map((item)=>item.toUpperCase())
return myarray1
};

const reverseWordsInArray = strings => {
};

const onlyEven = numbers => { 
let myarray2 = numbers.filter((number)=>number%2==0);
return myarray2
};

const removeNthElement2 = (index, array) => {
let myarray3 = array.filter( item => item !== array[index])
return myarray3;};

const elementsStartingWithAVowel = strings => {
  // your code here
};

const removeSpaces = string => {
  // your code here
};

const sumNumbers = numbers => {
  // your code here
};

const sortByLastLetter = strings => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
