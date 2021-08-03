//funtion gets factorial of num
//throws error if argument is under 0 or over 12

function factorial(n){
  
    if(n>12||n<0){
      throw new RangeError("The argument must be between 0 and 12.")
    }
    
    let x =1
    for(let i=1;i<=n;i++){
      x*=i
    }
    return x
  }