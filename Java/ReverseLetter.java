public class ReverseLetter {
    public static String reverseLetter(final String str) {
        StringBuilder onlyChar = new StringBuilder();
      
       for(char c : str.toCharArray()){
         if(Character.isLetter(c)){
           onlyChar.append(c);
         }
         
       }
      return onlyChar.reverse().toString();
    }
}




