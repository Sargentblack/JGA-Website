function startCalculator() {
      let output = document.getElementById("output");
      output.textContent = ""; // clear

      let length = parseFloat(prompt("Enter garden length (m):"));
      let width = parseFloat(prompt("Enter garden width (m):"));

      let area = length * width;
      output.textContent += `Garden Area: ${area} sq. meters.\n\n`;

      const plants = {
        1: { name: "Cabbage", spacing: 0.45, time: "3-4 months" },
        2: { name: "Potatoes", spacing: 0.30, time: "3-4 months" },
        3: { name: "Spinach", spacing: 0.10, time: "6-8 weeks" },
        4: { name: "Carrots", spacing: 0.06, time: "2-3 months" },
        5: { name: "Maize (Mealies)", spacing: 0.30, time: "3-4 months" },
        6: { name: "Pumpkin", spacing: 1.5, time: "3-4 months" },
        7: { name: "Onion", spacing: 0.125, time: "3-4 months" },
        8: { name: "Beetroot", spacing: 0.125, time: "2-3 months" },
        9: { name: "Tomatoes", spacing: 0.75, time: "2-3 months" }
      };

      let plantOptions = "Available Plants to Grow:\n";
      for (let key in plants) {
        plantOptions += `${key}. ${plants[key].name}\n`;
      }

      let plantChoice = parseInt(prompt(plantOptions + "Enter the number of the plant you'd like to grow:"));
      let selected = plants[plantChoice];

      if (!selected) {
        alert("Invalid choice.");
        return;
      }

      output.textContent += `You selected: ${selected.name}\n`;
      output.textContent += `Spacing: ${selected.spacing} meters\n`;
      output.textContent += `Growth Time: ${selected.time}\n\n`;

      let guides = {
        "Cabbage": [
          "Choose a sunny spot with well-drained soil.",
          "Sow seeds indoors 4-6 weeks before last frost or sow outdoors.",
          "Space seedlings 30-60 cm apart.",
          "Water regularly.",
          "Harvest when heads are firm and mature."
        ],
        "Potatoes": [
          "Select sunny location with loose soil.",
          "Plant seed potatoes 15 cm deep and 30 cm apart.",
          "Hill soil around shoots.",
          "Water regularly.",
          "Harvest when foliage dies back."
        ],
        "Spinach": [
          "Plant in sunny/partial shade with good soil.",
          "Sow seeds 1 cm deep, 5-10 cm apart.",
          "Keep soil moist.",
          "Harvest leaves as needed.",
          "Prefers cool weather."
        ],
        "Carrots": [
          "Choose sunny, loose, stone-free soil.",
          "Sow 1 cm deep, 2-5 cm apart.",
          "Thin seedlings to 5-7 cm.",
          "Avoid high nitrogen fertilizer.",
          "Harvest when roots mature."
        ],
        "Maize (Mealies)": [
          "Sunny location with fertile soil.",
          "Sow 2-3 cm deep, space well for pollination.",
          "Water regularly.",
          "Harvest when silks brown and kernels plump."
        ],
        "Pumpkin": [
          "Sunny, rich, well-drained soil.",
          "Sow seeds in hills, 2-3 cm deep.",
          "Thin to strongest 2-3 plants.",
          "Water deeply.",
          "Harvest when skin hard and stem dry."
        ],
        "Onion": [
          "Sunny, fertile, well-drained soil.",
          "Plant sets 2-3 cm deep, 10-15 cm apart.",
          "Water during bulb formation.",
          "Harvest when tops yellow and fall over."
        ],
        "Beetroot": [
          "Sunny location with good soil.",
          "Sow 1-2 cm deep, 5-10 cm apart.",
          "Thin to 10-15 cm.",
          "Water regularly.",
          "Harvest at desired size."
        ],
        "Tomatoes": [
          "Sunny, fertile, well-drained soil.",
          "Start indoors or buy seedlings.",
          "Transplant 60-90 cm apart.",
          "Water and support with stakes or cages.",
          "Harvest when fully colored and soft."
        ]
      };

      output.textContent += `--- Planting Guide for ${selected.name} ---\n`;
      guides[selected.name].forEach((step, i) => {
        output.textContent += `${i + 1}. ${step}\n`;
      });

      let perimeter = 2 * (length + width);
      output.textContent += `\nGarden Perimeter: ${perimeter} meters.\n`;

      let costPerMeter = parseFloat(prompt("Enter cost per meter of fencing:"));
      let fencingCost = perimeter * costPerMeter;

      output.textContent += `Estimated Fencing Cost: R${fencingCost.toFixed(2)}\n`;

      let plantsPerRow = Math.floor(length / selected.spacing);
      let numberOfRows = Math.floor(width / selected.spacing);
      let estimatedPlants = plantsPerRow * numberOfRows;

      output.textContent += `Estimated number of ${selected.name}: ${estimatedPlants}`;
    }