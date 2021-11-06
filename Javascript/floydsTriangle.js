// *Write a function to represent Floyd Triangle, given input is the number of rows of the Floyd triangle
// Example if the number of rows is 3
// Result:
// 1
// 2 3
// 4 5 6

const floydtriangle=(rows)=>{

    // let arr = [[1],[2,3],[4,5,6]]
    let arr = []
    let currentLine = 1
    let currentNum = 1
    let index = []
    
      while(arr.length<rows){
    
        while(index.length<currentLine){
        index.push(currentNum)
        currentNum ++
        }
    
      arr.push(index)
      index=[]
      console.log(arr[currentLine-1])
      currentLine++
      
      }
    }
    
    floydtriangle(4)