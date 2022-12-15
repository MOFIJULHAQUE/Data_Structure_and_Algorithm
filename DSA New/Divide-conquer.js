//Sorting with Binary search
//array= [1,2,3,4,5,6,8,9,10,12,19]
//number = 8;
//mid = min + max / 2
//if mid < number ==> min=mid+1
//if mid < number ==> min=mid+1
//else ==>mid

function searchAlgo(array, number) {
  let min = 0;
  let max = array.length - 1;
  while (min <= max) {
    let mid = Math.floor((min + max) / 2);

    if (array[mid] < number) {
      min = mid + 1;
    } else if (array[mid] > number) {
      max = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}
const result = searchAlgo([1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 19], 8);
console.log(result);


// let arr= [1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 19];
// let min = 0;
// let max = arr.length - 1;
// let mid = min+max/2
// console.log(arr[mid]);





 