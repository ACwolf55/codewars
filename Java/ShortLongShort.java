public class ShortLongShort {
    public static String solution(String a, String b) {
     StringBuilder comboString = new StringBuilder();
      if(a.length()>b.length()){
        comboString.append(b).append(a).append(b);
      }else{
      comboString.append(a).append(b).append(a);
      }
        return comboString.toString();
    }
}
