

public static class Kata
{
    public static int GetVowelCount(string str)
    {
        int vowelCount = 0;

         foreach (char i in str)
     {
          if ( i== 'a'|| i=='i'||i=='u'||i=='e'||i=='o')
           { 
             vowelCount++ ;
             }
      }
  
        return vowelCount;
      }
}