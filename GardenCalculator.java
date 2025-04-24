import java.util.Scanner;

public class GardenCalculator {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);

        System.out.print("Enter garden length (m): ");
        double length = sc.nextDouble();

        System.out.print("Enter garden width (m): ");
        double width = sc.nextDouble();

        double area = length * width;
        System.out.println("Garden Area: " + area + " sq. meters.");

        System.out.println("\nAvailable Plants to Grow:");
        System.out.println("1. Cabbage");
        System.out.println("2. Potatoes");
        System.out.println("3. Spinach");
        System.out.println("4. Carrots");
        System.out.println("5. Maize (Mealies)");
        System.out.println("6. Pumpkin");
        System.out.println("7. Onion");
        System.out.println("8. Beetroot");
        System.out.println("9. Tomatoes");
        System.out.print("Enter the number corresponding to the plant you'd like to grow: ");
        int plantChoice = sc.nextInt();
        sc.nextLine();

        String selectedPlant = "";
        double plantSpacing = 0;
        String growthTime = ""; 

        if (plantChoice == 1) {
            selectedPlant = "Cabbage";
            plantSpacing = 0.45;
            growthTime = "3-4 months";
        } else if (plantChoice == 2) {
            selectedPlant = "Potatoes";
            plantSpacing = 0.30;
            growthTime = "3-4 months";
        } else if (plantChoice == 3) {
            selectedPlant = "Spinach";
            plantSpacing = 0.10;
            growthTime = "6-8 weeks";
        } else if (plantChoice == 4) {
            selectedPlant = "Carrots";
            plantSpacing = 0.06;
            growthTime = "2-3 months";
        } else if (plantChoice == 5) {
            selectedPlant = "Maize (Mealies)";
            plantSpacing = 0.30;
            growthTime = "3-4 months";
        } else if (plantChoice == 6) {
            selectedPlant = "Pumpkin";
            plantSpacing = 1.5;
            growthTime = "3-4 months";
        } else if (plantChoice == 7) {
            selectedPlant = "Onion";
            plantSpacing = 0.125;
            growthTime = "3-4 months";
        } else if (plantChoice == 8) {
            selectedPlant = "Beetroot";
            plantSpacing = 0.125;
            growthTime = "2-3 months";
        } else if (plantChoice == 9) {
            selectedPlant = "Tomatoes";
            plantSpacing = 0.75;
            growthTime = "2-3 months";
        } else {
            System.out.println("Invalid choice. Please select from the list.");
            return;
        }

        System.out.println("\nYou have selected: " + selectedPlant);
        System.out.println("Spacing: " + plantSpacing + " meters");
        System.out.println("Estimated Growth Time: " + growthTime);
        System.out.println("\n--- Planting Guide for " + selectedPlant + " ---");

        if (selectedPlant.equals("Cabbage")) {
            System.out.println("1. Choose a sunny spot with well-drained soil.");
            System.out.println("2. Sow seeds indoors 4-6 weeks before the last frost or direct sow outdoors.");
            System.out.println("3. Space seedlings 30-60 cm apart.");
            System.out.println("4. Water regularly, especially during dry periods.");
            System.out.println("5. Harvest when heads are firm and mature.");
        } else if (selectedPlant.equals("Potatoes")) {
            System.out.println("1. Select a sunny location with loose, well-drained soil.");
            System.out.println("2. Plant seed potatoes about 15 cm deep and 30 cm apart.");
            System.out.println("3. As shoots emerge, hill the soil around them to encourage more potato growth.");
            System.out.println("4. Water regularly, especially when tubers are forming.");
            System.out.println("5. Harvest when the foliage starts to die back.");
        } else if (selectedPlant.equals("Spinach")) {
            System.out.println("1. Plant in a sunny or partially shaded area with well-drained soil.");
            System.out.println("2. Sow seeds directly in the ground, about 1 cm deep and 5-10 cm apart.");
            System.out.println("3. Keep the soil consistently moist.");
            System.out.println("4. Harvest outer leaves as needed or cut the whole plant.");
            System.out.println("5. Spinach prefers cooler weather.");
        } else if (selectedPlant.equals("Carrots")) {
            System.out.println("1. Choose a sunny spot with loose, stone-free soil.");
            System.out.println("2. Sow seeds directly in the ground, about 1 cm deep and 2-5 cm apart.");
            System.out.println("3. Thin seedlings to about 5-7 cm apart.");
            System.out.println("4. Water regularly and avoid excessive nitrogen fertilizer.");
            System.out.println("5. Harvest when roots are of a desired size and color.");
        } else if (selectedPlant.equals("Maize (Mealies)")) {
            System.out.println("1. Select a sunny location with fertile, well-drained soil.");
            System.out.println("2. Sow seeds directly in the ground, about 2-3 cm deep and in blocks for good pollination (e.g., 30 cm apart in rows 60-90 cm apart).");
            System.out.println("3. Water regularly, especially during tasseling and ear development.");
            System.out.println("4. Harvest when silks have turned brown and kernels are plump.");
        } else if (selectedPlant.equals("Pumpkin")) {
            System.out.println("1. Plant in a sunny location with rich, well-drained soil.");
            System.out.println("2. Sow seeds in hills, about 2-3 cm deep, with several seeds per hill and hills spaced 1-2 meters apart.");
            System.out.println("3. Thin to the strongest 2-3 seedlings per hill.");
            System.out.println("4. Water deeply and regularly.");
            System.out.println("5. Harvest when the skin is hard and the stem is dry.");
        } else if (selectedPlant.equals("Onion")) {
            System.out.println("1. Choose a sunny spot with well-drained, fertile soil.");
            System.out.println("2. Plant sets about 2-3 cm deep and 10-15 cm apart, or sow seeds thinly.");
            System.out.println("3. Water regularly, especially during bulb formation.");
            System.out.println("4. Harvest when the tops start to turn yellow and fall over.");
        } else if (selectedPlant.equals("Beetroot")) {
            System.out.println("1. Plant in a sunny location with loose, well-drained soil.");
            System.out.println("2. Sow seeds directly in the ground, about 1-2 cm deep and 5-10 cm apart.");
            System.out.println("3. Thin seedlings to about 10-15 cm apart.");
            System.out.println("4. Water regularly.");
            System.out.println("5. Harvest when roots are of a desired size.");
        } else if (selectedPlant.equals("Tomatoes")) {
            System.out.println("1. Select a sunny spot with well-drained, fertile soil.");
            System.out.println("2. Start seeds indoors 6-8 weeks before the last frost or purchase seedlings.");
            System.out.println("3. Transplant seedlings when they are strong enough, spacing them 60-90 cm apart.");
            System.out.println("4. Water regularly and provide support like 'stakes' or 'cages' as they grow.");
            System.out.println("5. Harvest when fruits are fully colored and slightly soft to the touch.");
        }

        double perimeter = 2 * (length + width);
        System.out.println("\nGarden Perimeter: " + perimeter + " meters.");

        System.out.print("Enter the cost per meter of fencing: ");
        double costPerMeter = sc.nextDouble();

        double fencingCost = perimeter * costPerMeter;
        System.out.println("Estimated Fencing Cost: R" + fencingCost);

        if (plantSpacing > 0) {
            double plantsPerRow = Math.floor(length / plantSpacing);
            double numberOfRows = Math.floor(width / plantSpacing);
            int estimatedPlants = (int) (plantsPerRow * numberOfRows);
            System.out.println("Estimated number of " + selectedPlant + " that can fit: " + estimatedPlants);
        } else {
            System.out.println("Could not estimate the number of plants due to missing spacing information.");
        }
    }
}