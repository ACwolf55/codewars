public class ArrayMean {
    
    public static double findAverage(int[] nums) {
        int sum = 0;
        for (int number : nums) {
            sum += number;
        }
        return (double) sum / nums.length;
    }

    public static void main(String[] args) {
        // Example usage
        int[] numbers = {7,8,55,2,15};
        double average = findAverage(numbers);

        System.out.println("Average: " + average);
    }
}