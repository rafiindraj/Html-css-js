// Direction : For each value inside the array, get the next smallest prime number value greater than the input number, if input number is already prime return that input
// For example: Input: 4, Expected: 5, Input: 14, Expected: 17, Input: 2, Expected: 2
// Expected: [2, 5, 19, 23, 37, 89]
const number = [2, 4, 18, 20, 35, 84];
const answer = [];
var check = false

function result(number) {
  // Your Code Here
  for (const element of number){
    let N = element
    if(N==2){
        N=1
    }
    else if (N <= 1){
        N=2;
    }

	let prime = N;
	let found = false;
	while (!found) {
		prime++;
        
        if (prime <= 1) {
            check = false
        }
        else if (prime <= 3){
            check = true
        }
        else if (prime%2 == 0 || prime%3 == 0){
            check = false
        }
        for (let i=5; i*i<=prime; i=i+6)
            if (prime%i == 0 || prime%(i+2) == 0){
                check = false
            }
        
        check = true;
		if (check){
            found = true;
        }
			
	}

    answer.push(prime)
  }
 
  return answer
}

console.log(result(number));