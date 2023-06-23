/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s: string): string {
    
    let hour: string|number = parseInt(s[0]+s[1])
    let timeArr = [...s]
    if(s[8]=='P'){
        timeArr.splice(8,2)
                if((s[0]=='1' && s[1]=='2')==false){
           hour+=12
          hour = hour.toString()
        let hourArr = hour.split("")
         timeArr.splice(0,2)
        timeArr.unshift(hourArr[0],hourArr[1])  
              }
   
    }else{
        timeArr.splice(8,2)  
              if(s[0]=='1' && s[1]=='2'){
        timeArr.splice(0,2)
        timeArr.unshift('00')
              }
          } 
    let time = timeArr.join("")
console.log(time)
  return time

}