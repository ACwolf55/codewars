public class LetterCounter {
    public static int strCount(String str, char letter) {
      int count = 0;
      for(char c:str.toCharArray()){
        if(c==letter){
          count++;
        }
  }
  return count;
    }
  }