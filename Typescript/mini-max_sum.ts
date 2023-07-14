// Output Format

// Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

// Sample Input

// 1 2 3 4 5
// or
// 5 5 5 5 5

// Sample Output

// 10 14







function miniMaxSum(arr: number[]): void {

  let lowInt = 0
  let highInt = 0

  highInt = Math.min(...arr)
  lowInt = Math.max(...arr)

  function sum(int: number){
  let sum =0
  let sumArr = arr.filter( num => num != int)
    if(sumArr.length<5){
      while(sumArr.length<4){
        sumArr.push(int)
      }
    }
  sumArr.forEach( num => {
  sum += num;
})
    return sum
  } 
  
let  lowSum = sum(lowInt)
let  highSum = sum(highInt)
  
console.log(lowSum + " " + highSum)
}

const arr = [5,5,5,5,5]

  miniMaxSum(arr)