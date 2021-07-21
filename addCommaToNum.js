function groupByCommas(n) {
    let str = n.toString().split('')
    for(let i=str.length-3;i>0;i=i-3){
      let arr = str.splice(i, 0, ',')
      }
    return str.join('')
  }