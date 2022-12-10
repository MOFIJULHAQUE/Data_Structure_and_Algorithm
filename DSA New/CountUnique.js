//count unique numbers from an array => array = [1,2,2,4,4,5,5,6,6,8,9,9]
//condition :-
//(1)array must be sorted
//(2)i=0,j=1(from first two element)
//(3)array[i]!==array[j] then
//   i++;
//   array[i]=array[j];

function CountUniqueNumber(array) {
  if (array.length > 0) {
    let i = 0;
    for (let j = 1; j < array.length; j++) {
        if(array[i]!==array[j]){
            i++;
            array[i]=array[j];
        }
    }
    return i+1;
  } else {
    throw new Error("Array is empty");
  }
}
const result = CountUniqueNumber([1,2,2,4,4,6,5,5,,8,9,9,10,10,12,12]);
console.log(result)
