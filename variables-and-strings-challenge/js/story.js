function getUserInput(promptMessage) {
  return prompt(promptMessage);
}

function createStoryMessage(name, bodyPart, musicalInstrument) {
  return `<p>${name} uses his ${bodyPart} to play the ${musicalInstrument} </p>`;
}

function displayStory(storyMessage) {
  document.querySelector('main').innerHTML = storyMessage;
}

function main() {
  //declare variables and capture input
  const name = getUserInput('Provide a name:');
  const bodyPart = getUserInput('Provide an body part:');
  const musicalInstrument = getUserInput('Provide a musical instrument:');

  //combine input with other words and create the story
  const storyMessage = createStoryMessage(name, bodyPart, musicalInstrument);
  
  //display the story
  displayStory(storyMessage);
}

main();
