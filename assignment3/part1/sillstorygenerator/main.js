// Name: Afoma Egwuatu 
// Date: 2nd April, 2024
// Description: The Javascript code to make the silly story generator dynamic


// Complete variable and function definition
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// Assigned variables 


// Event listener and partial function definition
randomize.addEventListener('click', result);

function result() {

  const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
  const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
  const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

  const storyText = `It was 94 fahrenheit outside, so ${randomValueFromArray(insertX)} went for a walk. When they got to ${randomValueFromArray(insertY)}, they stared in horror for a few moments, then ${randomValueFromArray(insertZ)}. Bob saw the whole thing, but was not surprised — ${randomValueFromArray(insertX)} weighs 300 pounds, and it was a hot day.`;

  let newStory = storyText;

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace(/Bob/g, name);
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(300 * 0.071429); // 1 pound = 0.071429 stones
    const temperature = Math.round((94 - 32) * (5 / 9)); // Fahrenheit to Celsius conversion

    newStory = newStory.replace('94 fahrenheit', `${temperature} centigrade`);
    newStory = newStory.replace('300 pounds', `${weight} stone`);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}




