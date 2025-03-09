import java.util.*;

class Anagrams{
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        String str1=sc.nextLine();
        String str2=sc.nextLine();
       if(isAnagram(str1, str2)){
         System.out.println("true");
       }else{
           System.out.println("false");
       }
        
    }
    public static boolean isAnagram(String str1, String str2){
        // to remove spaces & case senstivity
        str1 = str1.replaceAll("\\s", "").toLowerCase();
        str2 = str2.replaceAll("\\s", "").toLowerCase();
        char[] arr1=str1.toCharArray();
        char[]arr2=str2.toCharArray();
        Arrays.sort(arr1);
        Arrays.sort(arr2);
        return Arrays.equals(arr1, arr2);
    }
}
