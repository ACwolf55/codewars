//traffic light switch case exmaple


function updateLight(current) {
  
    switch (current){
        case 'green':
          return 'yellow'
          break;
        
        case 'red':
          return 'green'
          break;
        
        case 'yellow':
          return 'red'
      
        
    }
  
  }