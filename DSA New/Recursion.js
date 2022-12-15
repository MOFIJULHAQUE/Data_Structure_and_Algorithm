
let count=0;
function recursion(number){
if(count > number){
    return;
}

console.log("Counter is :- ",count);
count++
recursion(number);

}
recursion(5);