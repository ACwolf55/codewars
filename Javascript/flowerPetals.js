function howMuchILoveYou(nbPetals) {
    let num = nbPetals
    
     while(num>6){
       num=num-6
     }
     
     console.log(num)
     switch(num) {
     case 1:
       return "I love you"
       
     case 2:
      return "a little"
      
           case 3:
       return "a lot"
       
     case 4:
       return "passionately"
       
           case 5:
       return "madly"
      
     case 6:
        return "not at all"
      
     default:
    return "doesnt work"
   } 
   
   }