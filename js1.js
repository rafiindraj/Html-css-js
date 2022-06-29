// Expected Result = 7
// Direction : Find median of this array
const input = [8, 7, 7, 9, 5, 4, 2, 9];
var x =0

function result(input) {
  // Your Code Here
  for(let i= 0;i < input.length; i++){
    x += input[i];
  }
  return x/input.length
}

console.log(result(input));