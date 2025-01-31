public class StringReverse {
    /**
     * Task: return the reverse of a string.
     * There are multiple good ways to solve this problem.
     *
     * You could do some math to grab characters from the end of the String using a typical for loop.
     * For instance, you could use build a String by writing a for loop that decrements rather than increments, grabbing
     * characters from the String starting from the end.
     * You could also look into the methods provided by StringBuilder.
     *
     * @param str a String.
     * @return the reverse of str.
     */
    public String reverse(String str){
        //lets do this just array
        //declare char array length of string
        char[] reverse = new char[str.length()];
        int arrIndex = 0;
        //reverse loop string fill in arry
        for(int i = str.length()-1;i>=0;i--){
            reverse[arrIndex] = str.charAt(i);
            arrIndex++;
        }
        return new String(reverse);

    }
}
