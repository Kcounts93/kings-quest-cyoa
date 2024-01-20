let gameState = {
  character: null,
  location: "intro",
};

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
    // character choice
    case "start":
      renderStart(storySection, decisionSection, imageSection);
      break;

    // Cases for other locations and decision points...
    default:
      break;
  }
}

function renderIntro(storySection, decisionSection, imageSection) {
  // Set introduction text
  storySection.innerHTML = `
        <img src="images/king.png">
        <h1>Welcome to The King's Quest</h1>
        <p>You are in the ancient realm of Eldoria, a land of magic, mystery, and adventure. <br><br>The king of Eldoria has summoned you to deliver an urgent message to the ruler of a neighboring kingdom. The message is a plea for help, as a dark force is threatening your land. 
        <br><br>
        Click to begin your perilous journey...
        </p>
    `;

  // Create the Start Game button
  const startButton = document.createElement("button");
  startButton.innerText = "Start Game";
  startButton.classList.add("start-button"); // Assign a unique class
  startButton.onclick = () => {
    gameState.location = "start";
    render();
  };
  decisionSection.appendChild(startButton);
}

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
    { name: "Eldrin, the Tactical Wizard", imgSrc: "images/eldrin.png" },
  ];

  /// Character selection containers, images, and buttons
  characters.forEach((character) => {
    const charContainer = document.createElement("div");
    charContainer.classList.add("character-container");

    const image = document.createElement("img");
    image.src = character.imgSrc;
    image.alt = character.name;
    image.classList.add("character-image");
    image.onclick = () => selectCharacter(character); // Allow image click to select character
    charContainer.appendChild(image);

    const button = document.createElement("button");
    button.innerText = character.name;
    button.onclick = () => selectCharacter(character);
    charContainer.appendChild(button);

    allCharactersContainer.appendChild(charContainer);
  });

  decisionSection.appendChild(allCharactersContainer);
}

function selectCharacter(character) {
  gameState.character = character.name;
  gameState.location = "nextState"; // Update based on game logic
  render();
}

// Initial render
render();
