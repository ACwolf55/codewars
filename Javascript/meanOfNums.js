function getAverage(marks){
    let sum = marks.reduce((total, el) => total + el)
    return Math.floor(sum/marks.length)
   }

   