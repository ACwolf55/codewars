function chineseZodiac(year){

    // ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig']
    // ['Wood', 'Fire', 'Earth', 'Metal', 'Water']
    
      let animalNum = 0
    
      let elementNum = 0
    
      let elementSwitch = false
    
      for(let i = 1924;i<=year;i++){
        
        if(animalNum==11 || i==1924){
          animalNum = 0
        }else{
         animalNum +=1
        }
    
        if(elementNum==4 && elementSwitch==true|| i==1924){
          elementNum=0
          elementSwitch=false
        }else{
          
          if(elementNum==4){
              elementSwitch=true
          }
          if(i%2==0){
            elementNum++
          }
      
      }
    
    //   console.log(elements[elementNum] + ' ' + animals[animalNum],elementNum,elementSwitch )
    // w/ codewars got Exit code 137 - means that too much output was printed to the console
      }
    
      return elements[elementNum] + ' ' + animals[animalNum]
    
    }