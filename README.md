# what is a set in javascript?
- The Set object lets you store unique values of any type, whether primitive values or object references.
# How we can create a set in javascript?
- By using new keyword we can create a set in javascript. ex:- const a = new Set();


=========================================
let arr = [1, 6, 8, 3, 3, 1, 1, 8, 10];

function checkDuplicateElement(arr) {
  
  const newSet = new Set();
  const duplicateSet = new Set();
  for(let i=0; i< arr.length; i++) {
    if(!newSet.has(arr[i])) {
      newSet.add(arr[i]);
    } else {
      duplicateSet.add(arr[i]);
    }
  }
  console.log('newSet=>',duplicateSet);
  //console.log('newSet=>',newSet);
  // const newSet = new Set();
  // newSet.add(1);
  // console.log('new set 2=>',newSet.add(5));
  //   console.log('new set 2=>',newSet.add(5));
  // console.log('new set=>',newSet);
  
  
  
  
  // let duplicateElemnt = [];
  // for (const element1 in arr) {
  //   for (const element2 in arr) {
  //     if (element1 === element2) {
  //       continue;
  //     } else {
  //       if (arr[element1] === arr[element2]) {
  //         duplicateElemnt.push(arr[element1]);
  //       }
  //     }
  //   }
  // }
  // return [...new Set(duplicateElemnt)];
}

console.log("===>", checkDuplicateElement(arr));
