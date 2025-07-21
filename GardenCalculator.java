import java.text.DecimalFormat;
import java.util.Scanner;

public class GardenCalculator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        DecimalFormat df = new DecimalFormat("R0.00");

        char fenceChoice = ' ';
        int plantChoice = 0;
        int fenceTypeChoice = 0;
        int estimatedPlants = 0;
        String fenceType = " ";
        String selectedPlant = " ";
        double plantSpacing = 0;
        double costPerMeter = 0;
        double plantsPerRow = 0;
        double numberOfRows = 0;
        double fencingCost = 0;
        String growthTime = " ";
        String growthInstructions = " "; 
        

        System.out.print("Enter garden length (m): ");
        double length = sc.nextDouble();

        System.out.print("Enter garden width (m): ");
        double width = sc.nextDouble();

        double area = length * width;
        System.out.println("Garden Area: " + area + " sq. meters.");

        do{
            System.out.println("\nAvailable Plants to Grow:\n1. Cabbage\n2. Potatoes\n3. Spinach\n4. Carrots\n5. Maize (Mealies)\n6. Pumpkin\n7. Onion\n8. Beetroot\n9. Tomatoes");
            
            System.out.print("\nEnter the number corresponding to the plant you'd like to grow: ");
            plantChoice = sc.nextInt();
            sc.nextLine();

            switch (plantChoice) {
                case 1:    
                    selectedPlant = "Cabbage";
                    plantSpacing = 0.45;
                    growthTime = "3-4 months";
                    break;
                case 2:
                    selectedPlant = "Potatoes";
                    plantSpacing = 0.30;
                    growthTime = "3-4 months";
                    break;
                case 3:
                    selectedPlant = "Spinach";
                    plantSpacing = 0.10;
                    growthTime = "6-8 weeks";
                    break;
                case 4:
                    selectedPlant = "Carrots";
                    plantSpacing = 0.06;
                    growthTime = "2-3 months";
                    break;
                case 5:
                    selectedPlant = "Maize (Mealies)";
                    plantSpacing = 0.30;
                    growthTime = "3-4 months";
                    break;
                case 6:
                    selectedPlant = "Pumpkin";
                    plantSpacing = 1.5;
                    growthTime = "3-4 months";
                    break;
                case 7:
                    selectedPlant = "Onion";
                    plantSpacing = 0.125;
                    growthTime = "3-4 months";
                    break;
                case 8:
                    selectedPlant = "Beetroot";
                    plantSpacing = 0.125;
                    growthTime = "2-3 months";
                    break;
                case 9:
                    selectedPlant = "Tomatoes";
                    plantSpacing = 0.75;
                    growthTime = "2-3 months";
                    break;
                default:
                    System.out.println("Invalid choice. Please select from the list.");
                    return;
            }
        } while (plantChoice>=1 && plantChoice<=9);

        System.out.println("\nYou have selected: " + selectedPlant);
        System.out.println("Spacing: " + plantSpacing + " meters");
        System.out.println("Estimated Growth Time: " + growthTime);
        System.out.println("\n--- Planting Guide for " + selectedPlant + " ---");

        switch (selectedPlant) {
           case "Cabbage":
                growthInstructions = "1. Choose a sunny spot with well-drained soil.\n"
                    + "2. Sow seeds indoors 4-6 weeks before the last frost or direct sow outdoors.\n"
                    + "3. Space seedlings 30-60 cm apart.\n"
                    + "4. Water regularly, especially during dry periods.\n"
                    + "5. Harvest when heads are firm and mature.";
                break;
            case "Potatoes":
                growthInstructions = "1. Select a sunny location with loose, well-drained soil.\n"
                    + "2. Plant seed potatoes about 15 cm deep and 30 cm apart.\n"
                    + "3. As shoots emerge, hill the soil around them to encourage more potato growth.\n"
                    + "4. Water regularly, especially when tubers are forming.\n"
                    + "5. Harvest when the foliage starts to die back.";
                break;
            case "Spinach":
                growthInstructions = "1. Plant in a sunny or partially shaded area with well-drained soil.\n"
                    + "2. Sow seeds directly in the ground, about 1 cm deep and 5-10 cm apart.\n"
                    + "3. Keep the soil consistently moist.\n"
                    + "4. Harvest outer leaves as needed or cut the whole plant.\n"
                    + "5. Spinach prefers cooler weather.";
                break;
            case "Carrots":
                growthInstructions = "1. Choose a sunny spot with loose, stone-free soil.\n"
                    + "2. Sow seeds directly in the ground, about 1 cm deep and 2-5 cm apart.\n"
                    + "3. Thin seedlings to about 5-7 cm apart.\n"
                    + "4. Water regularly and avoid excessive nitrogen fertilizer.\n"
                    + "5. Harvest when roots are of a desired size and color.";
                break;
            case "Maize (Mealies)":
                growthInstructions = "1. Select a sunny location with fertile, well-drained soil.\n"
                    + "2. Sow seeds directly in the ground, about 2-3 cm deep and in blocks for good pollination (e.g., 30 cm apart in rows 60-90 cm apart).\n"
                    + "3. Water regularly, especially during tasseling and ear development.\n"
                    + "4. Harvest when silks have turned brown and kernels are plump.";
                break;
            case "Pumpkin":
                growthInstructions = "1. Plant in a sunny location with rich, well-drained soil.\n"
                    + "2. Sow seeds in hills, about 2-3 cm deep, with several seeds per hill and hills spaced 1-2 meters apart.\n"
                    + "3. Thin to the strongest 2-3 seedlings per hill.\n"
                    + "4. Water deeply and regularly.\n"
                    + "5. Harvest when the skin is hard and the stem is dry.";
                break;
            case "Onion":
                growthInstructions = "1. Choose a sunny spot with well-drained, fertile soil.\n"
                    + "2. Plant sets about 2-3 cm deep and 10-15 cm apart, or sow seeds thinly.\n"
                    + "3. Water regularly, especially during bulb formation.\n"
                    + "4. Harvest when the tops start to turn yellow and fall over.";
                break;
            case "Beetroot":
                growthInstructions = "1. Plant in a sunny location with loose, well-drained soil.\n"
                    + "2. Sow seeds directly in the ground, about 1-2 cm deep and 5-10 cm apart.\n"
                    + "3. Thin seedlings to about 10-15 cm apart.\n"
                    + "4. Water regularly.\n"
                    + "5. Harvest when roots are of a desired size.";
                break;
            case "Tomatoes":
                growthInstructions = "1. Select a sunny spot with well-drained, fertile soil.\n"
                    + "2. Start seeds indoors 6-8 weeks before the last frost or purchase seedlings.\n"
                    + "3. Transplant seedlings when they are strong enough, spacing them 60-90 cm apart.\n"
                    + "4. Water regularly and provide support like 'stakes' or 'cages' as they grow.\n"
                    + "5. Harvest when fruits are fully colored and slightly soft to the touch.";
                break;
            default:
                growthInstructions = "No instructions available.";
        } 
        System.out.println(growthInstructions);

        double perimeter = 2 * (length + width);
        System.out.println("\nGarden Perimeter: " + perimeter + " meters.");

        System.out.println("Would you like a fence for your garden?(Y/N)");
        fenceChoice = sc.next().charAt(0);

        if(fenceChoice == 'y'||fenceChoice=='Y'){
            do{
                System.out.print("Which Type of fence would you like? \n1. Treated pine(R600 per metre) \n2. Tubular metal/Palisade(R900 per metre)  \n3. Slated pine(R1000 per metre) \n 4. Clear-view(R1500 per metre \n5. Hardwood(R1800 per metre) \n6. Hardwood with Sandstone accents(R3000) \n7. Wrought iron(R4500 per metre) \n8. Sandstone parameter wall(R5500)");
                fenceTypeChoice = sc.nextInt();

                switch (fenceTypeChoice){
                    case 1:
                        costPerMeter = 600;
                        fenceType = "Treated pine";
                        break;
                    case 2:
                        costPerMeter = 900;
                        fenceType = "Tubular metal/Palisade";
                        break;
                    case 3:
                        costPerMeter = 1000;
                        fenceType = "Slated pine";
                        break;
                    case 4:
                        costPerMeter = 1500;
                        fenceType = "Clear-view";
                        break;
                    case 5:
                        costPerMeter = 1800;
                        fenceType = "Hardwood";
                        break;
                    case 6:
                        costPerMeter = 3000;
                        fenceType = "Hardwood with Sandstone accents";
                        break;
                    case 7:
                        costPerMeter = 4500;
                        fenceType = "Wrought iron";
                        break;
                    case 8:
                        costPerMeter = 5500;
                        fenceType = "Sandstone parameter wall";
                        break;
                    default:
                        costPerMeter = 0;
                        fenceType = "Invalid fence type selected";           
                }
            } while(fenceTypeChoice<0 && fenceTypeChoice>8);
            
            fencingCost = perimeter * costPerMeter;
            System.out.println("Estimated Fencing Cost of "+ fenceType + "is" + df.format(fencingCost));
        }
        
        if (plantSpacing > 0) {
            plantsPerRow = Math.floor(length / plantSpacing);
            numberOfRows = Math.floor(width / plantSpacing);
            estimatedPlants = (int) (plantsPerRow * numberOfRows);

            System.out.println("Estimated number of " + selectedPlant + " that can fit: " + estimatedPlants);
        } else {
            System.out.println("Could not estimate the number of plants due to missing spacing information.");
        }
    }
}