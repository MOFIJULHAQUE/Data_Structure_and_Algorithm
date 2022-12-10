//condition:----(1) check the length of both strings
//              (2) {h:1,e:1,l:2,o:1}   for 'hello' string

function isAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }
  let count = {};
  for (let elements of string1) {
    count[elements] = (count[elements] || 0) + 1; //for h :(0+1=1)
    //for e :(0+1=1)
    //for l :(0+1=1)
    //for l :(1+1=2)
    //for h :(0+1=1)
    // console.log(count[elements]);
    // console.log(count);
  }

  for (let items of string2) {
    if (!count[items]) {
      return false;
    }
    count[items] -= 1;
  }
  return true;
}
const result = isAnagram("hello", "lolhe");
console.log(result);
