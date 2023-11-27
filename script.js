/* Assignment 04: Finishing a Todo List App
 *
 *
 *
 */

//
// Variables
//

// Constants
const appID = 'app';

const christmas = [];

const christList = document.querySelector('.christmas-items');
const christForm = document.querySelector('.add-item');
const christName = document.querySelector('#item-name');

// DOM Elements
const appContainer = document.getElementById(appID);

//
// Functions
//

// Add a heading to the app container
function inititialise() {
  // If anything is wrong with the app container then end
  if (!appContainer) {
    console.error('Error: Could not find app container');
    return;
  }

  // Create an h1 and add it to our app
  const h1 = document.createElement('h1');
  h1.innerText = headingText;
  appContainer.appendChild(h1);

  // Init complete
  console.log('App successfully initialised');
}

function addChristmasItem(event) {
  event.preventDefault();
  const itemName = christName.value;
  items.push(itemName);
  renderList();
  christForm.reset();
}

function deleteChristmasItem(listItem, i) {
  christmas.splice(i, 1);
  renderList();
}

function renderList() {
  while (christList.firstChild) {
    christList.removeChild(itemList.firstChild);
  }

  for (let i = 0; i < christmas.length; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = christmas[i];

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      deleteChristmasItem(listItem, i);
    });

    listItem.appendChild(deleteButton);

    if (i === christmas.length - 1) {
      listItem.classList.add('new-item-annimate');
    }

    christList.appendChild(listItem);
  }
}
//
// Inits & Event Listeners
//
inititialise();

christForm.addEventListener('submit', addChristmasItem);

renderList();
