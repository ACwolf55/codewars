function isIsogram(str){

    let lower = str.toLowerCase()

    let wordArr = lower.split('')

    let letters = [0]   
for(let i=0;i<wordArr.length;i++){
    for(let j = i+1;j<wordArr.length;j++){
        if(wordArr[i]===wordArr[j]){
          letters.push(letters[j])

        }
    }
  }
  if(str===null){
    return true
  }
  else if(letters.length===1){
    return true
  }
    
  else{
    return false
  }
}