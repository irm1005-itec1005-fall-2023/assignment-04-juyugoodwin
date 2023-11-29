/* Assignment 04: Finishing a Todo List App
 *
 *
 *
 */

//
// Variables
//

var list = document.querySelector("ul");
list.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  }
})

let deletedChristmasItems = 0;
let amountOfDeleted = document.querySelector("#number-deleted-items")

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

  // Init complete
  console.log('App successfully initialised');
}

function addChristmasItem(event) {
  event.preventDefault();
  const itemName = christName.value;
  christmas.push(itemName);
  console.log(itemName);
  renderList();
  christForm.reset();
}

function deleteChristmasItem(i) {
  christmas.splice(i, 1);
  deletedChristmasItems ++;
  renderList();
}

function renderList() {
  while (christList.firstChild) {
    christList.removeChild(christList.firstChild);
  }

  for (let i = 0; i < christmas.length; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = christmas[i];

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';
    deleteButton.addEventListener('click', () => {
      deleteChristmasItem(i);
    });

    listItem.appendChild(deleteButton);

    if (i === christmas.length - 1) {
      listItem.classList.add('new-item-annimate');
    }

    amountOfDeleted.textContent = ("Amount of deleted items: "+ deletedChristmasItems);

    christList.appendChild(listItem);
  }
}
//
// Inits & Event Listeners
//
inititialise();

christForm.addEventListener('submit', addChristmasItem);

renderList();
