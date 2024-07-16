import java.util.Arrays;

public class SortString{
  public String sortGiftCode(String code){
    char[] chars = code.toCharArray();
    
    Arrays.sort(chars);
  return String.valueOf(chars);
  }
}