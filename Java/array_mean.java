public class GrassHopper {
    
    public static int findAverage(int[] nums) {
        int sum = 0;
        for(int number: nums) {
        sum+=number;
        }
        return sum/nums.length;
    }
}