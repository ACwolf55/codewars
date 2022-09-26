function abbrevName(name){
    let brevArr = [name[0].toUpperCase(),'.']
    
      let nameArr = name.split('')
    
    for(let i=0;i<nameArr.length;i++){
        if(nameArr[i]==' '){
          brevArr.push(nameArr[i+1].toUpperCase())
        }
      }
      let brev = brevArr.join('')
      console.log(brev)
    
      return brev
    }