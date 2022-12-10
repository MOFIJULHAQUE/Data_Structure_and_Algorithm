//sum zero -----> problem 1
// //array = [-3,-2,-1,0,2,3,5]

// // this solution has O(N^2) i.e quadratic time complexity and it's not optimized solution

// function sumZero(array) {
//   for (let number of array) {
//     // n times
//     // console.log(number);
//     for (let j = 1; j < array.length; j++) {
//       // n times
//       if (number + array[j] === 0) {
//         return [number, array[j]];
//       }
//     }
//   }
// }
// const result = sumZero([-3, -2, -1, 0, 2, 3, 5]);
// console.log(result);

// //total time complexity :Quadratic( o(N^2))
//---------------------------------------------------------------------------------------------------------
//Optimized solution

function sumZero(array) {
  let left = 0;
  let right = array.length - 1;
  while(left < right){
    sum = array[left]+array[right];
    if(sum===0){
      return [array[left],array[right]];
    }else if(sum > 0 ){
    right--;
    }else{
      left++;
    }
  }
}
const result = sumZero([-3, -2, -1,3, 0, 2, 4, 5]);
console.log(result);
