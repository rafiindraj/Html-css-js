// Expected result : [[1, 3, 5, 7, 9], [2, 4, 6, 8, 10]]
// Direction : Return nested array first is odd value and second is even array from the array number
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var odd = []
var even = []
var nested = []

function result(number) {
  // Your Code Here
  odd = number.filter((_, i) => i % 2 === 1)
  even = number.filter((_, i) => i % 2 === 0)
  nested.push(even)
  nested.push(odd)
  
  return nested
}

console.log(result(number));