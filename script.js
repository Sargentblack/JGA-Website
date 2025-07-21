function gardenCalculator() {
  const df = (value) => `R${value.toFixed(2)}`;

  const length = parseFloat(prompt("Enter garden length (m): "));
  const width = parseFloat(prompt("Enter garden width (m): "));

  const area = length * width;
  alert("Garden Area: " + area.toFixed(2) + " sq. meters.");

  const plantOptions = [
    "Cabbage",
    "Potatoes",
    "Spinach",
    "Carrots",
    "Maize (Mealies)",
    "Pumpkin",
    "Onion",
    "Beetroot",
    "Tomatoes"
  ];

  let plantChoice;
  let selectedPlant = "";
  let plantSpacing = 0;
  let growthTime = "";
  let growthInstructions = "";

  do {
    const choice = prompt(
      "Available Plants to Grow:\n" +
        plantOptions.map((plant, i) => `${i + 1}. ${plant}`).join("\n") +
        "\n\nEnter the number corresponding to the plant you'd like to grow:"
    );
    plantChoice = parseInt(choice);

    if (plantChoice >= 1 && plantChoice <= 9) {
      selectedPlant = plantOptions[plantChoice - 1];
      switch (selectedPlant) {
        case "Cabbage":
          plantSpacing = 0.45;
          growthTime = "3-4 months";
          growthInstructions = `1. Choose a sunny spot with well-drained soil.\n2. Sow seeds indoors 4-6 weeks before the last frost or direct sow outdoors.\n3. Space seedlings 30-60 cm apart.\n4. Water regularly, especially during dry periods.\n5. Harvest when heads are firm and mature.`;
          break;
        case "Potatoes":
          plantSpacing = 0.3;
          growthTime = "3-4 months";
          growthInstructions = `1. Select a sunny location with loose, well-drained soil.\n2. Plant seed potatoes about 15 cm deep and 30 cm apart.\n3. As shoots emerge, hill the soil around them to encourage more potato growth.\n4. Water regularly, especially when tubers are forming.\n5. Harvest when the foliage starts to die back.`;
          break;
        case "Spinach":
          plantSpacing = 0.1;
          growthTime = "6-8 weeks";
          growthInstructions = `1. Plant in a sunny or partially shaded area with well-drained soil.\n2. Sow seeds directly in the ground, about 1 cm deep and 5-10 cm apart.\n3. Keep the soil consistently moist.\n4. Harvest outer leaves as needed or cut the whole plant.\n5. Spinach prefers cooler weather.`;
          break;
        case "Carrots":
          plantSpacing = 0.06;
          growthTime = "2-3 months";
          growthInstructions = `1. Choose a sunny spot with loose, stone-free soil.\n2. Sow seeds directly in the ground, about 1 cm deep and 2-5 cm apart.\n3. Thin seedlings to about 5-7 cm apart.\n4. Water regularly and avoid excessive nitrogen fertilizer.\n5. Harvest when roots are of a desired size and color.`;
          break;
        case "Maize (Mealies)":
          plantSpacing = 0.3;
          growthTime = "3-4 months";
          growthInstructions = `1. Select a sunny location with fertile, well-drained soil.\n2. Sow seeds directly in the ground, about 2-3 cm deep and in blocks for good pollination (e.g., 30 cm apart in rows 60-90 cm apart).\n3. Water regularly, especially during tasseling and ear development.\n4. Harvest when silks have turned brown and kernels are plump.`;
          break;
        case "Pumpkin":
          plantSpacing = 1.5;
          growthTime = "3-4 months";
          growthInstructions = `1. Plant in a sunny location with rich, well-drained soil.\n2. Sow seeds in hills, about 2-3 cm deep, with several seeds per hill and hills spaced 1-2 meters apart.\n3. Thin to the strongest 2-3 seedlings per hill.\n4. Water deeply and regularly.\n5. Harvest when the skin is hard and the stem is dry.`;
          break;
        case "Onion":
          plantSpacing = 0.125;
          growthTime = "3-4 months";
          growthInstructions = `1. Choose a sunny spot with well-drained, fertile soil.\n2. Plant sets about 2-3 cm deep and 10-15 cm apart, or sow seeds thinly.\n3. Water regularly, especially during bulb formation.\n4. Harvest when the tops start to turn yellow and fall over.`;
          break;
        case "Beetroot":
          plantSpacing = 0.125;
          growthTime = "2-3 months";
          growthInstructions = `1. Plant in a sunny location with loose, well-drained soil.\n2. Sow seeds directly in the ground, about 1-2 cm deep and 5-10 cm apart.\n3. Thin seedlings to about 10-15 cm apart.\n4. Water regularly.\n5. Harvest when roots are of a desired size.`;
          break;
        case "Tomatoes":
          plantSpacing = 0.75;
          growthTime = "2-3 months";
          growthInstructions = `1. Select a sunny spot with well-drained, fertile soil.\n2. Start seeds indoors 6-8 weeks before the last frost or purchase seedlings.\n3. Transplant seedlings when they are strong enough, spacing them 60-90 cm apart.\n4. Water regularly and provide support like 'stakes' or 'cages' as they grow.\n5. Harvest when fruits are fully colored and slightly soft to the touch.`;
          break;
      }
    } else {
      alert("Invalid choice. Please select from the list.");
      return;
    }
  } while (!(plantChoice >= 1 && plantChoice <= 9));

  alert(`\nYou have selected: ${selectedPlant}\nSpacing: ${plantSpacing} meters\nEstimated Growth Time: ${growthTime}\n\n--- Planting Guide for ${selectedPlant} ---\n${growthInstructions}`);

  const perimeter = 2 * (length + width);
  alert("Garden Perimeter: " + perimeter.toFixed(2) + " meters.");

  const fenceChoice = prompt("Would you like a fence for your garden? (Y/N):");
  let costPerMeter = 0;
  let fenceType = "";
  if (fenceChoice.toUpperCase() === "Y") {
    const fenceOptions = [
      ["Treated pine", 600],
      ["Tubular metal/Palisade", 900],
      ["Slated pine", 1000],
      ["Clear-view", 1500],
      ["Hardwood", 1800],
      ["Hardwood with Sandstone accents", 3000],
      ["Wrought iron", 4500],
      ["Sandstone parameter wall", 5500]
    ];
    const fenceTypeChoice = parseInt(prompt(
      "Which Type of fence would you like?\n" +
        fenceOptions.map((f, i) => `${i + 1}. ${f[0]} (R${f[1]} per metre)`).join("\n")
    ));

    if (fenceTypeChoice >= 1 && fenceTypeChoice <= 8) {
      [fenceType, costPerMeter] = fenceOptions[fenceTypeChoice - 1];
      const fencingCost = perimeter * costPerMeter;
      alert(`Estimated Fencing Cost of ${fenceType} is ${df(fencingCost)}`);
    } else {
      alert("Invalid fence type selected.");
    }
  }

  if (plantSpacing > 0) {
    const plantsPerRow = Math.floor(length / plantSpacing);
    const numberOfRows = Math.floor(width / plantSpacing);
    const estimatedPlants = plantsPerRow * numberOfRows;
    alert(`Estimated number of ${selectedPlant} that can fit: ${estimatedPlants}`);
  } else {
    alert("Could not estimate the number of plants due to missing spacing information.");
  }
}
