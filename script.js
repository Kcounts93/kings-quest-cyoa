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
    //   Restart
    case "gameOver":
      renderGameOver(storySection, decisionSection, imageSection);
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
        <p>You are in the ancient realm of Eldoria, a land of magic, mystery, and adventure. <br><br>The king of Eldoria has summoned you to deliver an urgent message to the ruler of a neighboring kingdom. The message is a plea for help, as a dark force is threatening your land. 
        <br><br>
        Click to begin your perilous journey...
        </p>
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
    "<h2>Choose your character:</h2><p>Regardless of your choice, your journey begins at the break of dawn. You must traverse dangerous lands to deliver the message that could save Eldoria.</p>";

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
      <p>The path leads you to the Whispering River, which is known for its treacherous currents and mystical creatures.</p>
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
  option1Button.innerText = "1) Attempt to find a safe crossing point";
  option1Button.classList.add("option-button");
  option1Button.onclick = () => clearAndProceed(handleOption1);
  decisionSection.appendChild(option1Button);

  // Option 2 button
  const option2Button = document.createElement("button");
  option2Button.innerText =
    "2) Try to convince a local fisherman to take you across";
  option2Button.classList.add("option-button");
  option2Button.onclick = () => clearAndProceed(handleOption2);
  decisionSection.appendChild(option2Button);

  // Option 3 button
  const option3Button = document.createElement("button");
  option3Button.innerText =
    "3) Use your character's unique skill in hopes it gets you across";
  option3Button.classList.add("option-button");
  option3Button.onclick = () => clearAndProceed(handleOption3);
  decisionSection.appendChild(option3Button);
}

function handleOption1() {
  const storySection = document.getElementById("story-section");
  storySection.innerHTML += `
      <img src="images/tree-river.png" alt="tree over treacherous river" />
      <p>You find a tree that has fallen over the river and you cross successfully. The mystical forest lies ahead.</p>
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
  <p>The local fisherman agrees to take you across. The mystical forest lies ahead.</p>
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
      <p>${skillData.description}</p>
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
              <p>The forest is dense and its paths are misleading. Many have entered, few have returned. Choose your path...
              </p>
          `;

  // Option 1 (Left Path) button
  const option1Button = document.createElement("button");
  option1Button.innerText = "1) Take the left path";
  option1Button.classList.add("option-button");
  option1Button.onclick = () => {
    gameState.location = "swingingBridge";
    render();
  };
  decisionSection.appendChild(option1Button);

  // Option 2 (Right Path) button
  const option2Button = document.createElement("button");
  option2Button.innerText = "2) Take the right path";
  option2Button.classList.add("option-button");
  option2Button.onclick = () => {
    gameState.location = "evilForces";
    render();
  };
  decisionSection.appendChild(option2Button);
}

// EVIL FORCES ENCOUNTER
function renderEvilForces(storySection, decisionSection, imageSection) {
  storySection.innerHTML = `
        <img src="images/enchanted-evil.png" alt="Evil Forces" />
        <h2>Uh oh...</h2>
        <p>You have run into the evil forces that have taken over the forest!
        Do you proceed to fight?</p>
    `;

  // Fight button
  const fightButton = document.createElement("button");
  fightButton.innerText = "Fight!";
  fightButton.classList.add("option-button");
  fightButton.onclick = () => {
    gameState.location = "gameOver";
    render();
  };
  decisionSection.appendChild(fightButton);

  // Run button
  const runButton = document.createElement("button");
  runButton.innerText = "Run!";
  runButton.classList.add("option-button");
  runButton.onclick = () => {
    gameState.location = "gameOver";
    render();
  };
  decisionSection.appendChild(runButton);
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

// Swinging Bridge

// Message Delivered
// Initial render
render();
