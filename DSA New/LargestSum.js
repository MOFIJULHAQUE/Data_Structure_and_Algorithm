//Largest sum array = [1,2,4,5,4,5,7,1,2,3,4,5,8,5,7,1] , num=4;
//condition :-(1) num > array --> error
//(2) no of iteration :--- (array.length - num )+1;

function LargestSum(array, num) {
  if (num > array) {
    throw new Error("num can't be grater then array");
  } else {
    let max = 0;
    for (let i = 0; i < array.length - num + 1; i++) {
      let temp = 0;
      for (let j = 0; j < num; j++) {
        temp += array[i + j];
      }
      if (temp > max) {
        max = temp;
      }
    }
    return max;
  }
}
const result = LargestSum([1, 2, 4, 5, 4, 5, 7, 1, 2, 3, 4, 5, 8, 5, 7, 41], 4);
console.log(result);
