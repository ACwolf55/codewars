//get the sum of the square of each number



function squareSum(numbers){
  
    let num = 0
  numbers.forEach(el => {num += Math.pow(el,2)})
  return num
  }

squareSum([1,2,2])

//squareSum([1,2,2]) === 9