import java.util.Map;
import java.util.HashMap;


public class SumListNoDuplicates{
  
    public static int sumNoDuplicates(int[] arr){
     Map<Integer, Integer> countMap = new HashMap<>();
  int sum = 0 ;
  for( int number : arr){
    countMap.put(number, countMap.getOrDefault(number,0)+1);
  }

  for(Map.Entry<Integer,Integer> entry : countMap.entrySet() ){
    if(entry.getValue()==1){
      sum += entry.getKey();
    }
  }

  return sum;
    }
  
}
