/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author gabri
 */

import java.io.*;
import java.util.*;
public class main {

    public static String name;
    public static String[][] saveOutput; 
    public static double[][] averages;
    public static int outputCounter = 0;
    public static String[] names = {"2021.csv", "2022.csv", "2023.csv", "2024.csv", "2025.csv"};
    public static String[] names2 = {"2021", "2022", "2023.csv", "2024.csv", "2025.csv"};


    //public static HashMap<String, Double[]> carBrand = new HashMap<String, Double[]>();

    static String lookingFor = "12"; 
    
    public static void main(String[] args) {
        saveOutput = new String[1000][];
        averages = new double[5][];
        //Scanner filenameInput = new Scanner(System.in);
        //String filename = filenameInput.nextLine();
        File csvFile;
        Scanner CSVReader;
        
        
        for(int i = 0; i < 5; i++)
        {
            averages[i] = new double[5];
            try {
                csvFile = new File(names[i]);
                CSVReader = new Scanner(csvFile);
                
            } catch (Exception e) {
                return;
            }
            while(CSVReader.hasNext())
            {
                String wholeLine = CSVReader.nextLine();
                String[] parsed = wholeLine.split(",");
                
                
                if(parsed[5].equals(lookingFor))
                {
                    name = parsed[6];
                    //System.out.println(parsed[69]);
                    //saveOutput[outputCounter++] = parsed;
                    averages[i][0] += Double.parseDouble(parsed[1]);
                    averages[i][1] += Double.parseDouble(parsed[2]);
                    averages[i][2] += Double.parseDouble(parsed[3]);
                    averages[i][3] += Double.parseDouble(parsed[4]); 
                    averages[i][4]++;
                    //System.out.println(averages[0]); 

                }
            
        }

        }
        
        BufferedWriter output;

        try{
            output = new BufferedWriter(new FileWriter( name + ".csv"));
            for(int j = 0; j < 5; j++)
            {

                double[] a = averages[j];
                output.write(Integer.toString(2021 + j) + ",");
                for(int i = 0; i < 4; i++)
                {
                    output.write(String.format("%.2f",(a[i]/a[4])) + ",");
                }
                output.write('\n');
            }
            output.close();
        }catch(Exception e)
        {
            System.out.println("BROKE");
            return;
        }
        System.out.println("CUM");
    }
}
