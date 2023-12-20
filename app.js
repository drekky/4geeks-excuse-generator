const whoArray = ["I", "My pet", "My friend", "A mysterious stranger"];
const actionArray = ["forgot to", "had to", "couldn't", "chose not to"];
const whatArray = ["set my alarm", "attend the meeting", "finish my homework", "go to the gym"];
const whenArray = ["this morning", "yesterday", "last night", "a few minutes ago"];

function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function generateExcuse() {
  const who = getRandomElement(whoArray);
  const action = getRandomElement(actionArray);
  const what = getRandomElement(whatArray);
  const when = getRandomElement(whenArray);

  const excuseElement = document.getElementById('excuse');
  excuseElement.textContent = `${who} ${action} ${what} ${when}.`;

}