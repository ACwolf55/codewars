public class StringUtils {
  
    public static String toAlternativeString(String string) {
      
      StringBuilder alt = new StringBuilder(string.length());
      
      for(int i =0; i<string.length();i++){
        char c = string.charAt(i);
        if(Character.isUpperCase(c)){
          alt.append(Character.toLowerCase(c));
        }else{
          alt.append(Character.toUpperCase(c));
        }
      }
      
      return alt.toString();
    }
  }