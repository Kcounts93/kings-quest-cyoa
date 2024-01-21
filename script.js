let gameState = {
  character: null,
  location: "intro",
};

// PATH RENDER
function render() {
  const storySection = document.getElementById("story-section");
  const decisionSection = document.getElementById("decision-section");
  const imageSection = document.getElementById("image-section");

  // Clear previous content
  storySection.innerHTML = "";
  decisionSection.innerHTML = "";
  imageSection.innerHTML = "";

  // Render based on game state
  switch (gameState.location) {
    // main screen
    case "intro":
      renderIntro(storySection, decisionSection, imageSection);
      break;
    // Character Choice
    case "start":
      renderStart(storySection, decisionSection, imageSection);
      break;
    //   River crossing
    case "riverCrossing":
      renderRiverCrossing(storySection, decisionSection, imageSection);
      break;
    //   Enchanted Forest
    case "enchantedForest":
      renderEnchantedForest(storySection, decisionSection, imageSection);
      break;
    //   Evil Forces
    case "evilForces":
      renderEvilForces(storySection, decisionSection, imageSection);
      break;
    case "victoryOverEvil":
      renderVictoryOverEvil(storySection, decisionSection, imageSection);
      break;
    //   Restart
    case "gameOver":
      renderGameOver(storySection, decisionSection, imageSection);
      break;
    // Dragon Peaks
    case "dragonPeaks":
      renderDragonPeaks(storySection, decisionSection, imageSection);
      break;
    // Dragon Cave
    case "dragonCave":
      renderDragonCave(storySection, decisionSection, imageSection);
      break;
    // Dragon Peaks Game Over
    case "perishedInCold":
      renderPerishedInCold(storySection, decisionSection, imageSection);
      break;
    // Dragon Peaks Success
    case "shelteredPath":
      renderShelteredPath(storySection, decisionSection, imageSection);
      break;
    // Swingbridge
    case "swingingBridge":
      renderSwingingBridge(storySection, decisionSection, imageSection);
      break;
    // Bridge Fall
    case "bridgeRisk":
      renderBridgeRisk(storySection, decisionSection, imageSection);
      break;
    // Game Completion
    case "finalCastle":
      renderFinalCastle(storySection, decisionSection, imageSection);
      break;
    // Cases for other decision points go here...
    default:
      break;
  }
}
// GAME INTRO
function renderIntro(storySection, decisionSection, imageSection) {
  // Set Intro
  storySection.innerHTML = `
        <img src="images/king.png">
        <h1>Welcome to The King's Quest</h1>
        <h3>You are in the ancient realm of Eldoria, a land of magic, mystery, and adventure. <br><br>The king of Eldoria has summoned you to deliver an urgent message to the ruler of a neighboring kingdom, Elvador. The message is a plea for help, as a dark force is threatening your land. 
        <br><br>
        Click to begin your perilous journey...
        </h3>
    `;

  // Start Game button
  const startButton = document.createElement("button");
  startButton.innerText = "Start Game";
  startButton.classList.add("start-button"); // Assign a unique class
  startButton.onclick = () => {
    gameState.location = "start";
    render();
  };
  decisionSection.appendChild(startButton);
}
// CHOOSE YOUR CHARACTER
function renderStart(storySection, decisionSection, imageSection) {
  // Story text
  storySection.innerHTML =
    "<h2>Choose your character:</h2><h3>Regardless of your choice, your journey begins at the break of dawn. You must traverse dangerous lands to deliver the message that could save Eldoria.</h3>";

  // Container for all characters
  const allCharactersContainer = document.createElement("div");
  allCharactersContainer.classList.add("all-characters-container");

  // Character data
  const characters = [
    { name: "Lorien, the Skilled Archer", imgSrc: "images/lorien.png" },
    { name: "Thane, the Brave Knight", imgSrc: "images/thane.png" },
    { name: "Eldrin, the Mystical Wizard", imgSrc: "images/eldrin.png" },
  ];

  /// Character selection containers, images, and buttons
  characters.forEach((character) => {
    const charContainer = document.createElement("div");
    charContainer.classList.add("character-container");

    const image = document.createElement("img");
    image.src = character.imgSrc;
    image.alt = character.name;
    image.classList.add("character-image");
    image.onclick = () => selectCharacter(character);
    charContainer.appendChild(image);

    const button = document.createElement("button");
    button.innerText = character.name;
    button.classList.add("character-select-button");
    button.onclick = () => selectCharacter(character);
    charContainer.appendChild(button);

    allCharactersContainer.appendChild(charContainer);
  });

  decisionSection.appendChild(allCharactersContainer);
}

function selectCharacter(character) {
  gameState.character = character.name;
  gameState.location = "riverCrossing"; // Update based on game logic
  render();
}
// RIVER CROSSING DECISION
function renderRiverCrossing(storySection, decisionSection, imageSection) {
  // Set story for river crossing
  storySection.innerHTML = `
      <img src="images/river.png" />
      <h2>The River Crossing</h2>
      <h3>The path leads you to the Whispering River, which is known for its treacherous currents and mystical creatures.</h3>
    `;

  // Clear decisionSection for new screen
  const clearAndProceed = (handler) => {
    decisionSection.innerHTML = "";
    storySection.innerHTML = ""; //  clear the story section
    imageSection.innerHTML = ""; //  clear the image section
    handler();
  };

  // Option 1 button
  const option1Button = document.createElement("button");
  option1Button.innerText = "→ Attempt to find a safe crossing point";
  option1Button.classList.add("option-button");
  option1Button.onclick = () => clearAndProceed(handleOption1);
  decisionSection.appendChild(option1Button);

  // Option 2 button
  const option2Button = document.createElement("button");
  option2Button.innerText =
    "→ Try to convince a local fisherman to take you across";
  option2Button.classList.add("option-button");
  option2Button.onclick = () => clearAndProceed(handleOption2);
  decisionSection.appendChild(option2Button);

  // Option 3 button
  const option3Button = document.createElement("button");
  option3Button.innerText =
    "→ Use your character's unique skill in hopes it gets you across";
  option3Button.classList.add("option-button");
  option3Button.onclick = () => clearAndProceed(handleOption3);
  decisionSection.appendChild(option3Button);
}

function handleOption1() {
  const storySection = document.getElementById("story-section");
  storySection.innerHTML += `
      <img src="images/tree-river.png" alt="tree over treacherous river" />
      <h3>You find a tree that has fallen over the river and you cross successfully. The mystical forest lies ahead.</h3>
    `;

  // Continue Adventure
  const continueButton = document.createElement("button");
  continueButton.innerText = "Continue Adventure";
  continueButton.classList.add("continue-button"); // Assign a unique class for styling if needed
  continueButton.onclick = () => {
    gameState.location = "enchantedForest"; // Update to the next location
    render();
  };
  storySection.appendChild(continueButton);
}

function handleOption2() {
  const storySection = document.getElementById("story-section");
  storySection.innerHTML += `
  <img src="images/fisherman-river.png" alt="fisherman in treacherous river" />
  <h3>The local fisherman agrees to take you across. <br>The enchanted forest lies ahead.</h3>
`;

  // continue adventure
  const continueButton = document.createElement("button");
  continueButton.innerText = "Continue Adventure";
  continueButton.classList.add("continue-button"); // Assign a unique class for styling if needed
  continueButton.onclick = () => {
    gameState.location = "enchantedForest"; // Update to the next location
    render();
  };
  storySection.appendChild(continueButton);
}

function handleOption3() {
  const storySection = document.getElementById("story-section");
  const characterSkill = {
    "Lorien, the Skilled Archer": {
      description:
        "Lorien uses arrows and a piece of leather to create a makeshift zipline. The mystical forest lies ahead.",
      img: "images/lorien-river.png",
    },
    "Thane, the Brave Knight": {
      description:
        "Thane powers through the current on the back of his horse. The mystical forest lies ahead.",
      img: "images/knight-river.png",
    },
    "Eldrin, the Mystical Wizard": {
      description:
        "Eldrin casts a spell to calm the waters and walks through. The mystical forest lies ahead.",
      img: "images/wizard-river.png",
    },
  };
  const skillData = characterSkill[gameState.character];
  storySection.innerHTML += `
      <img src="${skillData.img}" alt="Skill Image" />
      <h3>${skillData.description}</h3>
    `;

  // Continue Adventure button
  const continueButton = document.createElement("button");
  continueButton.innerText = "Continue Adventure";
  continueButton.classList.add("continue-button");
  continueButton.onclick = () => {
    gameState.location = "enchantedForest"; // Update to the next location
    render();
  };
  storySection.appendChild(continueButton);
}
// ENCHANTED FOREST
function renderEnchantedForest(storySection, decisionSection, imageSection) {
  storySection.innerHTML = `
              <img src="images/enchanted-forest.png" alt="enchanted forest with paths" />
              <h1>The Enchanted Forest</h1>
              <h3>The forest is dense and its paths are misleading. Many have entered, few have returned. Choose your path...
              </h3>
          `;

  // Option 1 (Left Path) button
  const option1Button = document.createElement("button");
  option1Button.innerText = "→ Take the right path";
  option1Button.classList.add("option-button");
  option1Button.onclick = () => {
    gameState.location = "evilForces";
    render();
  };
  decisionSection.appendChild(option1Button);

  // Option 2 (Right Path) button
  const option2Button = document.createElement("button");
  option2Button.innerText = "→ Take the left path";
  option2Button.classList.add("option-button");
  option2Button.onclick = () => {
    gameState.location = "dragonPeaks";
    render();
  };
  decisionSection.appendChild(option2Button);
}

// EVIL FORCES ENCOUNTER
function renderEvilForces(storySection, decisionSection, imageSection) {
  storySection.innerHTML = `
        <img src="images/enchanted-evil.png" alt="Evil Forces" />
        <h2>Uh oh...</h2>
        <h3>You have run into the evil forces that have taken over the forest!
        Do you proceed to fight?</h3>
    `;

  decisionSection.innerHTML = "";

  // Fight button with 50/50 chance of success or failure
  const fightButton = document.createElement("button");
  fightButton.innerText = "→ Fight!";
  fightButton.classList.add("option-button");
  fightButton.onclick = () => {
    // 75% chance of winning or losing the fight
    gameState.location = Math.random() < 0.7 ? "victoryOverEvil" : "gameOver";
    render();
  };
  decisionSection.appendChild(fightButton);

  // Run button
  const runButton = document.createElement("button");
  runButton.innerText = "→ Run!";
  runButton.classList.add("option-button");
  runButton.onclick = () => {
    gameState.location = "dragonPeaks";
    render();
  };
  decisionSection.appendChild(runButton);
}

// VICTORY OVER EVIL FORCES SCENE

function renderVictoryOverEvil(storySection, decisionSection, imageSection) {
  storySection.innerHTML = `
      <img src="images/victory.png" alt="Victory" />
      <h2>Success!</h2>
      <p>You defeated the evil forces! The forest is safe for now thanks to your bravery.</p>
  `;

  decisionSection.innerHTML = "";

  // Continue Journey button
  const continueButton = document.createElement("button");
  continueButton.innerText = "Continue Journey";
  continueButton.classList.add("continue-button");
  continueButton.onclick = () => {
    gameState.location = "dragonPeaks"; // Update to the next location
    render();
  };
  decisionSection.appendChild(continueButton);
}

// GAME RESTART
function renderGameOver(storySection, decisionSection, imageSection) {
  storySection.innerHTML = `
        <img src="images/ghost.png" alt="Ghost in the Forest" />
        <h2>Oh no! You have been taken over by the evil forces and are forever a ghost in the forest...</h2>
    `;

  // Restart button
  const restartButton = document.createElement("button");
  restartButton.innerText = "Restart";
  restartButton.classList.add("restart-button");
  restartButton.onclick = () => {
    gameState.location = "intro";
    render();
  };
  decisionSection.appendChild(restartButton);
}
// DRAGON PEAKS

function renderDragonPeaks(storySection, decisionSection, imageSection) {
  storySection.innerHTML = `
  
      <img src="images/dragon-peaks.png" alt="Dragon Peaks" />
      <h1>The Dragon Peaks</h1>
      <h3>The peaks are said to be home to ancient dragons, their silhouettes occasionally visible against the moonlit sky. <br><br>As you ascend the Dragon Peaks, the air grows thinner and a biting cold sets in. Snow blankets the rugged landscape, and howling winds threaten to knock you off your feet. </h3>
  `;

  decisionSection.innerHTML = "";

  // Option 1 button
  const option1Button = document.createElement("button");
  option1Button.innerText = "→ You see a cave in the distance. Seek refuge.";
  option1Button.classList.add("option-button");
  option1Button.onclick = () => {
    gameState.location = "dragonCave";
    render();
  };
  decisionSection.appendChild(option1Button);

  // Option 2 button
  const option2Button = document.createElement("button");
  option2Button.innerText = "→ You push onward and brave the snowstorm.";
  option2Button.classList.add("option-button");
  option2Button.onclick = () => {
    gameState.location = "perishedInCold";
    render();
  };
  decisionSection.appendChild(option2Button);

  // Option 3 button
  const option3Button = document.createElement("button");
  option3Button.innerText = "→ Find a sheltered path around the mountain.";
  option3Button.classList.add("option-button");
  option3Button.onclick = () => {
    gameState.location = "shelteredPath";
    render();
  };
  decisionSection.appendChild(option3Button);
}

// DRAGON CAVE SCENE
function renderDragonCave(storySection, decisionSection, imageSection) {
  storySection.innerHTML = `
      <img src="images/dragon-cave.png" alt="Dragon Cave" />
      <h1>The Dragon's Cave</h1>
      <p>Inside the cave, the howling winds give way to a deep silence. Before you stands a magnificent dragon, its scales glinting in the faint light. <br><br>In a twist of fate, you find understanding and kinship. The dragon agrees to aid you in your quest and offers you passage over the perilous peaks.</p>
  `;

  decisionSection.innerHTML = "";

  const continueButton = document.createElement("button");
  continueButton.innerText = "Continue Journey";
  continueButton.classList.add("continue-button");
  continueButton.onclick = () => {
    gameState.location = "swingingBridge"; // Update to the next location
    render();
  };
  decisionSection.appendChild(continueButton);
}

// PERISHED IN COLD SCENE
function renderPerishedInCold(storySection, decisionSection, imageSection) {
  storySection.innerHTML = `
      <img src="images/perished-in-cold.png" alt="Perished in Cold" />
      <h1>A Frigid End</h1>
      <p>The merciless cold of the Dragon Peaks claims another soul. Despite your valiant efforts, the storm proves too fierce, and you succumb to the icy grip of the mountain.</p>
  `;

  decisionSection.innerHTML = "";

  const restartButton = document.createElement("button");
  restartButton.innerText = "Restart Game";
  restartButton.classList.add("restart-button");
  restartButton.onclick = () => {
    gameState.location = "intro"; // Reset the game
    render();
  };
  decisionSection.appendChild(restartButton);
}

// SHELTERED PATH SCENE
function renderShelteredPath(storySection, decisionSection, imageSection) {
  storySection.innerHTML = `
      <img src="images/sheltered-path.png" alt="Sheltered Path" />
      <h1>A Safer Way</h1>
      <p>Your keen senses and intuition lead you to a sheltered path around the mountain. While it's a longer route, it's decidedly safer, shielding you from the worst of the elements.</p>
  `;

  decisionSection.innerHTML = "";

  const continueButton = document.createElement("button");
  continueButton.innerText = "Continue Journey";
  continueButton.classList.add("continue-button");
  continueButton.onclick = () => {
    gameState.location = "swingingBridge"; // Update to the next location
    render();
  };
  decisionSection.appendChild(continueButton);
}

// SWINGING BRIDGE
function renderSwingingBridge(storySection, decisionSection, imageSection) {
  storySection.innerHTML = `
        <img src="images/bridge.png" alt="Swinging Bridge" />
        <h2>The Swinging Bridge</h2>
        <h3>You finally reach the outskirts of the kingdom, but the only way across the chasm is an old, swinging bridge. It looks unstable. You only have one option...</h3>
    `;

  // Option button to walk across the bridge
  const crossBridgeButton = document.createElement("button");
  crossBridgeButton.innerText = "- Attempt to cross the bridge";
  crossBridgeButton.classList.add("option-button");
  crossBridgeButton.onclick = () => {
    renderBridgeRisk(storySection, decisionSection, imageSection); // Go to the risk assessment of crossing the bridge
  };
  decisionSection.appendChild(crossBridgeButton);
}
// BRDIGE RISK
function renderBridgeRisk(storySection, decisionSection, imageSection) {
  // Clear previous content
  storySection.innerHTML = "";
  decisionSection.innerHTML = "";
  imageSection.innerHTML = "";
  // Randomly choose an outcome
  const outcome = Math.random() < 0.7 ? "success" : "fall"; // 50% chance for each outcome

  if (outcome === "fall") {
    // The player falls
    storySection.innerHTML = `
    <img src="images/bridgefall.png" alt="falling from bridge" />
            <h2>Uh oh...</h2>
            <h3>One of the bridge planks fell from underneath you... you fall to the chasm below.</h3>
        `;

    // Restart button
    const restartButton = document.createElement("button");
    restartButton.innerText = "Restart";
    restartButton.classList.add("restart-button");
    restartButton.onclick = () => {
      gameState.location = "intro"; // Update to the intro location
      render();
    };
    decisionSection.appendChild(restartButton);
  } else {
    // The player successfully crosses the bridge
    storySection.innerHTML = `
            <h2>You walk carefully in hopes you make it to the other side...</h2>
        `;

    // Continue Journey button
    const continueButton = document.createElement("button");
    continueButton.innerText = "Continue Journey";
    continueButton.classList.add("continue-button");
    continueButton.onclick = () => {
      gameState.location = "finalCastle"; // Update to the finalCastle location
      render();
    };
    decisionSection.appendChild(continueButton);
  }
}

// FINAL CASTLE
function renderFinalCastle(storySection, decisionSection, imageSection) {
  // Clear previous content
  storySection.innerHTML = "";
  decisionSection.innerHTML = "";
  imageSection.innerHTML = "";

  // Content for the final castle scene
  storySection.innerHTML = `
        <img src="images/king-castle.png" alt="Final Castle" />
        <h2>You made it to Elvador!</h2>
        <h3>You have made it through all the challenges and now stand before the grand castle. The guards recognize the urgency in your eyes and swiftly lead you to the king.</h3> 
    `;

  // Outcome description (you can customize this part based on the player's journey or choices)
  const outcomeText = document.createElement("h3");
  outcomeText.textContent =
    "The king listens intently and nods in understanding. Thanks to your bravery and swift actions, alliances are formed, and plans are set in motion to counter the looming threat. You have not just delivered a message; you have brought hope to a kingdom on the brink.";
  storySection.appendChild(outcomeText);

  // Restart button to play again
  const restartButton = document.createElement("button");
  restartButton.innerText = "Play Again";
  restartButton.classList.add("start-button");
  restartButton.onclick = () => {
    gameState.location = "intro"; // Reset the game
    render();
  };
  decisionSection.appendChild(restartButton);
}

// Initial render
render();
