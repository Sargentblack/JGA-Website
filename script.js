// Garden Calculator with improved UI and image analysis
function gardenCalculator() {
  const df = (value) => `R${value.toFixed(2)}`;

  const output = document.getElementById("output");
  output.textContent = ""; // Clear previous output

  const print = (text) => {
    output.textContent += text + "\n";
  };

  // Get values from form inputs
  const length = parseFloat(document.getElementById("gardenLength").value);
  const width = parseFloat(document.getElementById("gardenWidth").value);
  const selectedPlant = document.getElementById("plantSelect").value;
  const fenceYesNo = document.getElementById("fenceYesNo").value;
  const fenceTypeIndex = parseInt(document.getElementById("fenceType").value);

  // Validate inputs
  if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
    print("Please enter valid garden dimensions.");
    return;
  }

  const area = length * width;
  print("Garden Area: " + area.toFixed(2) + " sq. meters.");

  const plantOptions = {
    "Cabbage": { spacing: 0.45, time: "3-4 months", soil: "Well-drained, fertile" },
    "Potatoes": { spacing: 0.3, time: "3-4 months", soil: "Loose, well-drained" },
    "Spinach": { spacing: 0.1, time: "6-8 weeks", soil: "Moist, nutrient-rich" },
    "Carrots": { spacing: 0.06, time: "2-3 months", soil: "Sandy, stone-free" },
    "Maize (Mealies)": { spacing: 0.3, time: "3-4 months", soil: "Fertile, well-drained" },
    "Pumpkin": { spacing: 1.5, time: "3-4 months", soil: "Rich, well-drained" },
    "Onion": { spacing: 0.125, time: "3-4 months", soil: "Fertile, well-drained" },
    "Beetroot": { spacing: 0.125, time: "2-3 months", soil: "Loose, well-drained" },
    "Tomatoes": { spacing: 0.75, time: "2-3 months", soil: "Fertile, well-drained" }
  };

  const growthInstructions = {
    "Cabbage": `1. Choose a sunny spot with well-drained soil.\n2. Sow seeds indoors 4-6 weeks before the last frost or direct sow outdoors.\n3. Space seedlings 30-60 cm apart.\n4. Water regularly, especially during dry periods.\n5. Harvest when heads are firm and mature.`,
    "Potatoes": `1. Select a sunny location with loose, well-drained soil.\n2. Plant seed potatoes about 15 cm deep and 30 cm apart.\n3. As shoots emerge, hill the soil around them to encourage more potato growth.\n4. Water regularly, especially when tubers are forming.\n5. Harvest when the foliage starts to die back.`,
    "Spinach": `1. Plant in a sunny or partially shaded area with well-drained soil.\n2. Sow seeds directly in the ground, about 1 cm deep and 5-10 cm apart.\n3. Keep the soil consistently moist.\n4. Harvest outer leaves as needed or cut the whole plant.\n5. Spinach prefers cooler weather.`,
    "Carrots": `1. Choose a sunny spot with loose, stone-free soil.\n2. Sow seeds directly in the ground, about 1 cm deep and 2-5 cm apart.\n3. Thin seedlings to about 5-7 cm apart.\n4. Water regularly and avoid excessive nitrogen fertilizer.\n5. Harvest when roots are of a desired size and color.`,
    "Maize (Mealies)": `1. Select a sunny location with fertile, well-drained soil.\n2. Sow seeds directly in the ground, about 2-3 cm deep and in blocks for good pollination.\n3. Water regularly, especially during tasseling and ear development.\n4. Harvest when silks have turned brown and kernels are plump.`,
    "Pumpkin": `1. Plant in a sunny location with rich, well-drained soil.\n2. Sow seeds in hills, about 2-3 cm deep, with several seeds per hill.\n3. Thin to the strongest 2-3 seedlings per hill.\n4. Water deeply and regularly.\n5. Harvest when the skin is hard and the stem is dry.`,
    "Onion": `1. Choose a sunny spot with well-drained, fertile soil.\n2. Plant sets about 2-3 cm deep and 10-15 cm apart, or sow seeds thinly.\n3. Water regularly, especially during bulb formation.\n4. Harvest when the tops start to turn yellow and fall over.`,
    "Beetroot": `1. Plant in a sunny location with loose, well-drained soil.\n2. Sow seeds directly in the ground, about 1-2 cm deep and 5-10 cm apart.\n3. Thin seedlings to about 10-15 cm apart.\n4. Water regularly.\n5. Harvest when roots are of a desired size.`,
    "Tomatoes": `1. Select a sunny spot with well-drained, fertile soil.\n2. Start seeds indoors 6-8 weeks before the last frost or purchase seedlings.\n3. Transplant seedlings when they are strong enough, spacing them 60-90 cm apart.\n4. Water regularly and provide support like 'stakes' or 'cages' as they grow.\n5. Harvest when fruits are fully colored and slightly soft to the touch.`
  };

  const plantData = plantOptions[selectedPlant];
  print(`\nYou have selected: ${selectedPlant}\nSpacing: ${plantData.spacing} meters\nEstimated Growth Time: ${plantData.time}\nRecommended Soil: ${plantData.soil}\n\n--- Planting Guide for ${selectedPlant} ---\n${growthInstructions[selectedPlant]}`);

  const perimeter = 2 * (length + width);
  print("\nGarden Perimeter: " + perimeter.toFixed(2) + " meters.");

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

  if (fenceYesNo === "Y") {
    if (fenceTypeIndex >= 0 && fenceTypeIndex <= 7) {
      const [fenceType, costPerMeter] = fenceOptions[fenceTypeIndex];
      const fencingCost = perimeter * costPerMeter;
      print(`\nEstimated Fencing Cost of ${fenceType} is ${df(fencingCost)}`);
    } else {
      print("Invalid fence type selected.");
    }
  }

  if (plantData.spacing > 0) {
    const plantsPerRow = Math.floor(length / plantData.spacing);
    const numberOfRows = Math.floor(width / plantData.spacing);
    const estimatedPlants = plantsPerRow * numberOfRows;
    print(`\nEstimated number of ${selectedPlant} that can fit: ${estimatedPlants}`);
  } else {
    print("Could not estimate the number of plants due to missing spacing information.");
  }
}

// Toggle fence options based on user selection
function toggleFenceOptions() {
  const fenceYesNo = document.getElementById("fenceYesNo").value;
  const fenceOptions = document.getElementById("fenceOptions");
  
  if (fenceYesNo === "Y") {
    fenceOptions.style.display = "block";
    fenceOptions.style.animation = "fadeIn 0.5s ease-in";
  } else {
    fenceOptions.style.display = "none";
  }
}

// Image Upload and Analysis (Simulated)
function handleImageUpload(event) {
  const file = event.target.files[0];
  const preview = document.getElementById('uploadPreview');
  const output = document.getElementById('output');
  
  if (file) {
    const reader = new FileReader();
    
    reader.onload = function(e) {
      preview.src = e.target.result;
      preview.style.display = 'block';
      
      // Simulate image analysis
      output.textContent = "Analyzing garden image...\n";
      setTimeout(() => {
        output.textContent += "✓ Image analysis complete!\n";
        output.textContent += "✓ Estimated garden size: 25 sq. meters\n";
        output.textContent += "✓ Soil type detected: Loamy soil (ideal for most plants)\n";
        output.textContent += "✓ Recommended plants: Tomatoes, Carrots, Spinach\n";
        output.textContent += "✓ Sunlight exposure: Good (6-8 hours daily)\n\n";
        output.textContent += "Tip: Based on your soil type, consider adding compost for better yield.";
      }, 2000);
    };
    
    reader.readAsDataURL(file);
  }
}

// Community Dashboard Functions
function addPost() {
  const postContent = document.getElementById("postContent").value;
  const postImageInput = document.getElementById("postImage");
  
  if (postContent.trim() === "" && !postImageInput.files[0]) {
    alert("Please write something or add an image to post.");
    return;
  }
  
  const postsContainer = document.getElementById("communityPosts");
  const postId = "post_" + Date.now();
  
  let imageHTML = "";
  if (postImageInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById(postId + '_image').src = e.target.result;
    };
    reader.readAsDataURL(postImageInput.files[0]);
    imageHTML = `<img class="post-image" id="${postId}_image" src="" alt="Post image">`;
  }
  
  const postHTML = `
    <div class="post-card" id="${postId}">
      <div class="post-header">
        <div class="post-avatar">U</div>
        <div>
          <strong>You</strong>
          <div class="post-time">Just now</div>
        </div>
      </div>
      <div class="post-content">${postContent}</div>
      ${imageHTML}
      <div class="post-actions">
        <button class="post-action" onclick="likePost('${postId}')">👍 Like</button>
        <button class="post-action" onclick="commentOnPost('${postId}')">💬 Comment</button>
        <button class="post-action" onclick="sharePost('${postId}')">🔄 Share</button>
        <button class="post-action" onclick="deletePost('${postId}')">🗑️ Delete</button>
      </div>
      <div class="post-likes" id="${postId}_likes">0 likes</div>
      <div class="post-comments" id="${postId}_comments"></div>
    </div>
  `;
  
  postsContainer.insertAdjacentHTML('afterbegin', postHTML);
  document.getElementById("postContent").value = "";
  postImageInput.value = "";
  
  // Add animation to new post
  const newPost = document.getElementById(postId);
  newPost.style.animation = "slideIn 0.5s ease-out";
}

function likePost(postId) {
  const likesElement = document.getElementById(postId + "_likes");
  const currentLikes = parseInt(likesElement.textContent) || 0;
  likesElement.textContent = (currentLikes + 1) + " likes";
  
  // Add visual feedback
  likesElement.style.color = "#2e7d32";
  likesElement.style.fontWeight = "bold";
  setTimeout(() => {
    likesElement.style.color = "";
    likesElement.style.fontWeight = "";
  }, 1000);
}

function commentOnPost(postId) {
  const comment = prompt("Enter your comment:");
  if (comment && comment.trim() !== "") {
    const commentsElement = document.getElementById(postId + "_comments");
    const commentHTML = `<div class="comment"><strong>You:</strong> ${comment}</div>`;
    commentsElement.insertAdjacentHTML('beforeend', commentHTML);
  }
}

function sharePost(postId) {
  alert("Post shared successfully!");
}

function deletePost(postId) {
  if (confirm("Are you sure you want to delete this post?")) {
    const postElement = document.getElementById(postId);
    postElement.style.animation = "fadeOut 0.5s ease-out";
    setTimeout(() => {
      postElement.remove();
    }, 500);
  }
}

// Market Functions
function addToCart(itemName, price) {
  // In a real application, this would add to a shopping cart
  alert(`Added ${itemName} to cart for ${price}`);
  
  // Visual feedback
  const button = event.target;
  const originalText = button.textContent;
  button.textContent = "✓ Added!";
  button.style.background = "linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%)";
  
  setTimeout(() => {
    button.textContent = originalText;
    button.style.background = "";
  }, 2000);
}

// Initialize page elements
document.addEventListener('DOMContentLoaded', function() {
  // Add CSS for fadeOut animation if not already present
  if (!document.querySelector('#dynamicStyles')) {
    const style = document.createElement('style');
    style.id = 'dynamicStyles';
    style.textContent = `
      @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-20px); }
      }
    `;
    document.head.appendChild(style);
  }
  
  // Initialize any page-specific functionality
  if (document.getElementById('fenceYesNo')) {
    toggleFenceOptions(); // Set initial state
  }
  
  // Add loading animation to images
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('load', function() {
      this.style.animation = 'fadeIn 0.5s ease-in';
    });
  });
});

// Garden Calculator with improved UI and image analysis
function gardenCalculator() {
  const df = (value) => `R${value.toFixed(2)}`;

  const output = document.getElementById("output");
  output.innerHTML = ""; // Clear previous output

  // Get values from form inputs
  const length = parseFloat(document.getElementById("gardenLength").value);
  const width = parseFloat(document.getElementById("gardenWidth").value);
  const selectedPlant = document.getElementById("plantSelect").value;
  const fenceYesNo = document.getElementById("fenceYesNo").value;
  const fenceTypeIndex = parseInt(document.getElementById("fenceType").value);

  // Validate inputs
  if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
    output.innerHTML = `<div class="error-message">Please enter valid garden dimensions.</div>`;
    return;
  }

  const area = length * width;
  
  // Create beautiful garden plan output
  let planHTML = `
    <div class="garden-plan">
      <div class="plan-header">
        <h3>🌿 Your Garden Plan</h3>
        <div class="plan-date">Created on ${new Date().toLocaleDateString()}</div>
      </div>
      
      <div class="plan-grid">
        <div class="plan-card">
          <div class="plan-icon">📐</div>
          <div class="plan-details">
            <h4>Garden Dimensions</h4>
            <p>${length.toFixed(2)}m × ${width.toFixed(2)}m</p>
            <p class="plan-highlight">Area: ${area.toFixed(2)} sq. meters</p>
          </div>
        </div>
        
        <div class="plan-card">
          <div class="plan-icon">🌱</div>
          <div class="plan-details">
            <h4>Selected Plant</h4>
            <p class="plant-name">${selectedPlant}</p>
          </div>
        </div>
  `;

  const plantOptions = {
    "Cabbage": { spacing: 0.45, time: "3-4 months", soil: "Well-drained, fertile" },
    "Potatoes": { spacing: 0.3, time: "3-4 months", soil: "Loose, well-drained" },
    "Spinach": { spacing: 0.1, time: "6-8 weeks", soil: "Moist, nutrient-rich" },
    "Carrots": { spacing: 0.06, time: "2-3 months", soil: "Sandy, stone-free" },
    "Maize (Mealies)": { spacing: 0.3, time: "3-4 months", soil: "Fertile, well-drained" },
    "Pumpkin": { spacing: 1.5, time: "3-4 months", soil: "Rich, well-drained" },
    "Onion": { spacing: 0.125, time: "3-4 months", soil: "Fertile, well-drained" },
    "Beetroot": { spacing: 0.125, time: "2-3 months", soil: "Loose, well-drained" },
    "Tomatoes": { spacing: 0.75, time: "2-3 months", soil: "Fertile, well-drained" }
  };

  const growthInstructions = {
    "Cabbage": `1. Choose a sunny spot with well-drained soil.\n2. Sow seeds indoors 4-6 weeks before the last frost or direct sow outdoors.\n3. Space seedlings 30-60 cm apart.\n4. Water regularly, especially during dry periods.\n5. Harvest when heads are firm and mature.`,
    "Potatoes": `1. Select a sunny location with loose, well-drained soil.\n2. Plant seed potatoes about 15 cm deep and 30 cm apart.\n3. As shoots emerge, hill the soil around them to encourage more potato growth.\n4. Water regularly, especially when tubers are forming.\n5. Harvest when the foliage starts to die back.`,
    "Spinach": `1. Plant in a sunny or partially shaded area with well-drained soil.\n2. Sow seeds directly in the ground, about 1 cm deep and 5-10 cm apart.\n3. Keep the soil consistently moist.\n4. Harvest outer leaves as needed or cut the whole plant.\n5. Spinach prefers cooler weather.`,
    "Carrots": `1. Choose a sunny spot with loose, stone-free soil.\n2. Sow seeds directly in the ground, about 1 cm deep and 2-5 cm apart.\n3. Thin seedlings to about 5-7 cm apart.\n4. Water regularly and avoid excessive nitrogen fertilizer.\n5. Harvest when roots are of a desired size and color.`,
    "Maize (Mealies)": `1. Select a sunny location with fertile, well-drained soil.\n2. Sow seeds directly in the ground, about 2-3 cm deep and in blocks for good pollination.\n3. Water regularly, especially during tasseling and ear development.\n4. Harvest when silks have turned brown and kernels are plump.`,
    "Pumpkin": `1. Plant in a sunny location with rich, well-drained soil.\n2. Sow seeds in hills, about 2-3 cm deep, with several seeds per hill.\n3. Thin to the strongest 2-3 seedlings per hill.\n4. Water deeply and regularly.\n5. Harvest when the skin is hard and the stem is dry.`,
    "Onion": `1. Choose a sunny spot with well-drained, fertile soil.\n2. Plant sets about 2-3 cm deep and 10-15 cm apart, or sow seeds thinly.\n3. Water regularly, especially during bulb formation.\n4. Harvest when the tops start to turn yellow and fall over.`,
    "Beetroot": `1. Plant in a sunny location with loose, well-drained soil.\n2. Sow seeds directly in the ground, about 1-2 cm deep and 5-10 cm apart.\n3. Thin seedlings to about 10-15 cm apart.\n4. Water regularly.\n5. Harvest when roots are of a desired size.`,
    "Tomatoes": `1. Select a sunny spot with well-drained, fertile soil.\n2. Start seeds indoors 6-8 weeks before the last frost or purchase seedlings.\n3. Transplant seedlings when they are strong enough, spacing them 60-90 cm apart.\n4. Water regularly and provide support like 'stakes' or 'cages' as they grow.\n5. Harvest when fruits are fully colored and slightly soft to the touch.`
  };

  const plantData = plantOptions[selectedPlant];
  
  planHTML += `
        <div class="plan-card">
          <div class="plan-icon">📏</div>
          <div class="plan-details">
            <h4>Plant Spacing</h4>
            <p>${plantData.spacing} meters</p>
          </div>
        </div>
        
        <div class="plan-card">
          <div class="plan-icon">⏱️</div>
          <div class="plan-details">
            <h4>Growth Time</h4>
            <p>${plantData.time}</p>
          </div>
        </div>
      </div>
  `;

  // Calculate plant capacity
  if (plantData.spacing > 0) {
    const plantsPerRow = Math.floor(length / plantData.spacing);
    const numberOfRows = Math.floor(width / plantData.spacing);
    const estimatedPlants = plantsPerRow * numberOfRows;
    
    planHTML += `
      <div class="plan-highlight-card">
        <div class="plan-icon">🌿</div>
        <div class="plan-details">
          <h4>Estimated Plant Capacity</h4>
          <p class="plant-count">${estimatedPlants} ${selectedPlant} plants</p>
        </div>
      </div>
    `;
  }

  // Fencing calculation
  const perimeter = 2 * (length + width);
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

  if (fenceYesNo === "Y") {
    if (fenceTypeIndex >= 0 && fenceTypeIndex <= 7) {
      const [fenceType, costPerMeter] = fenceOptions[fenceTypeIndex];
      const fencingCost = perimeter * costPerMeter;
      
      planHTML += `
        <div class="plan-cost-card">
          <div class="plan-icon">💰</div>
          <div class="plan-details">
            <h4>Fencing Estimate</h4>
            <p>${fenceType}</p>
            <p class="cost">${df(fencingCost)}</p>
            <small>Perimeter: ${perimeter.toFixed(2)} meters</small>
          </div>
        </div>
      `;
    }
  }

  // Planting guide
  planHTML += `
      <div class="plan-guide">
        <h4>📋 Planting Guide for ${selectedPlant}</h4>
        <div class="guide-content">
          ${growthInstructions[selectedPlant].replace(/\n/g, '<br>')}
        </div>
      </div>
      
      <div class="plan-footer">
        <p>Happy gardening! 🌻</p>
      </div>
    </div>
  `;

  output.innerHTML = planHTML;
  
  // Show success popup
  showPopup();
}

// Popup functions
function showPopup() {
  const popup = document.getElementById("successPopup");
  popup.style.display = "block";
}

function closePopup() {
  const popup = document.getElementById("successPopup");
  popup.style.display = "none";
}

function clearResults() {
  document.getElementById("output").innerHTML = "";
}

// Close popup when clicking the X
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.close-popup').addEventListener('click', closePopup);
  
  // Close popup when clicking outside
  window.addEventListener('click', function(event) {
    const popup = document.getElementById("successPopup");
    if (event.target === popup) {
      closePopup();
    }
  });
});

// ... rest of your existing functions (toggleFenceOptions, handleImageUpload, community functions, etc.)
// Keep all the existing functions from your original script.js file
