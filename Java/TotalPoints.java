public class TotalPoints {
  
    public static int points(String[] games) {
     int total = 0;
    for(String x : games){
     if(Character.getNumericValue(x.charAt(0)) > Character.getNumericValue(x.charAt(2)) ){
       total +=3;
     }else if(Character.getNumericValue(x.charAt(0)) < Character.getNumericValue(x.charAt(2)) ){
       total += 0;
     }else{ 
       total+=1;
       }
    }
  return total;
    }
}