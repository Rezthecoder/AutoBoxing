import java.util.ArrayList;

public class Auto {
    public static void main(String[] args) {
        ArrayList<Integer> newArrayList = new ArrayList<>();
        for(int i =0; i<=10; i++){
       newArrayList.add(i);

        }
        for(int i =0; i<=10; i++){
            System.out.println( i + "--->" +newArrayList.get(i).intValue());
        }


    }




}
