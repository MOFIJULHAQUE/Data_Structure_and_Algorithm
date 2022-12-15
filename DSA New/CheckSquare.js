//Check Square in two arrays

//O(N^2) complexity----------------------------this is not optimized condition-------------------------
// function isSquareCheck(array1, array2) {
//   for (let i = 0; i < array1.length; i++) {
//     let isSquare = false;
//     for (let j = 0; j < array2.length; j++) {
//       if (array1[i] * array1[i] === array2[j]) {
//         isSquare = true;
//       }
//       if (j === array2.length - 1) {// if j runs till the end of the j loop and square not found ...
//         if (!isSquare) {
//           return false;
//         }
//       }
//     }
//   }
//   return true;
// }
// const result = isSquareCheck([1, 2, 3, 4], [1, 19, 4, 16]);
// console.log(result);

//Optimized solution----------------------complexuty O(N) ----linear
function isSquareCheck(array1, array2) {
  let map1 = {};
  let map2 = {};
  for (let item1 of array1) {
    //loop running n times
    map1[item1] = (map1[item1] || 0) + 1;
    // console.log(map1);
  }
  //   console.log(map1);

  for (let item2 of array2) {
    //loop running n times
    map2[item2] = (map2[item2] || 0) + 1;
  }
  //   console.log(map2);

  for (let key in map1) {
    //loop running n times
    // console.log("key", key);
    if (!map2[key * key]) {
      //object key compare in terms of square
      return false;
    }
    if (map1[key] !== map2[key * key]) {  //object values compare in terms of square
      return false;
    }
  }
  return true;
}

const result = isSquareCheck([1, 2, 4, 3, 4], [1, 16, 9, 4, 16]);
console.log(result);
