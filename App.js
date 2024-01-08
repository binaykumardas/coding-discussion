// using for loop
let arr = [1, 6, 8, 3, 3, 1, 1, 8, 10];

function checkDuplicateElement(arr) {
  let duplicateElemnt = [];
  for (const element1 in arr) {
    for (const element2 in arr) {
      if (element1 === element2) {
        continue;
      } else {
        if (arr[element1] === arr[element2]) {
          duplicateElemnt.push(arr[element1]);
        }
      }
    }
  }
  return [...new Set(duplicateElemnt)];
}
console.log("===>", checkDuplicateElement(arr));


// Using set method
function checkDuplicateElement(arr) {
    const newSet = new Set();
    const duplicateSet = new Set();
    for (let i = 0; i < arr.length; i++) {
        if (!newSet.has(arr[i])) {
            newSet.add(arr[i]);
        } else {
            duplicateSet.add(arr[i]);
        }
    }
   // return duplicateSet; // if you want result inside an object
    return [...new Set(duplicateSet)]; // if you want result inside an array
}
console.log("===>", checkDuplicateElement(arr));
 

    