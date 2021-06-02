function reverseWords(str) {
    let arr = []
    let strArr = str.split("")
  
    for(let i=strArr.length-1;i>=0;i--){
      arr.push(strArr[i])
    }
    let revrs= arr.join("")
    
    let revsArr = revrs.split(' ')
    console.log(revsArr)
  
   let revrs2 = []
    for(let i=revsArr.length-1;i>=0;i--){
      revrs2.push(revsArr[i])
    }
  
    return revrs2.join(' ')
  }