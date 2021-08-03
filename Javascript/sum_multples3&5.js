//get sum of all multiples of 3 & 5 within a number
//multiples of 3 & 5 (duplicates) such as 15, 30 are only added once
//ex. findSum(31) = 225 = (3+5+6+9+10+12+15+18+20+21+24+25+27+30) 

function findSum(n) {
  
    let threesNum = Math.floor(n/3)
    let fivesNum = Math.floor(n/5)
  
    let threes = 0
    let fives = 0
  
    let threeMult = []
    let fiveMult = []
  
    for(let i=0;i<threesNum;i++){
      threes += 3
      threeMult.push(threes)
    }
  
     for(let i=0;i<fivesNum;i++){
      fives += 5
      if(fives%3!==0){
        threeMult.push(fives)
      }
    }
  
    let mults = threeMult.concat(fiveMult)
   
    let sum = mults.reduce((a,b)=> a+b,0)
  
    return sum
  }