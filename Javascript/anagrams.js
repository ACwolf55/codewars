function anagrams(word1,word2){

    if(word1.length !== word2.length){
      return false
    }
    
    else{
      let w1 = word1.toLowerCase().split('').sort()
    
      let w2 = word2.toLowerCase().split('').sort()
    
      const letters = []
    
      for(let i=0; i<w2.length;i++){
        if(w1[i]===w2[i]){
          letters.push(w1[i])
        }
    
        if(letters.length === w1.length){
          return true
        }
      }
    
    }
    
    }