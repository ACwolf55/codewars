export function betterThanAverage(classPoints: number[], yourPoints: number) : boolean {
    let sum = 0
  classPoints.forEach(a => sum += a);
  let avg = sum/classPoints.length
  if(yourPoints > avg){
  return true;
  }else{
    return false
  }
}