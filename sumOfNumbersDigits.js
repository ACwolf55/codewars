function sumDigits(number) {
    let str = (Math.abs(number)).toString().split('')
    
    let nums = str.map(el=> parseInt(el))
    
    return nums.reduce((a,b)=>a+b)
  } 

  //from e.mihaylin on codewars; must best solution I saw
  sumDigits = n => Math.abs(n).toString().split('').reduce((s, e) => s + +e, 0);