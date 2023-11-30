/* Assignment 04: Finishing a Todo List App
 *
 *
 *
 */

// Variables
const inputBox = document.getElementById("item-name");
const form = document.getElementById("form-results");
const deletedCounter = document.createElement("p");
let deletedCount = parseInt(localStorage.getItem("deletedCount")) || 0; // initialize the completed count
let completedCount = parseInt(localStorage.getItem("completedCount")) || 0; // initialize the completed count

// Functions
function addTask (){
  if(inputBox.value === ''){
    alert("You must write something");
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    form.appendChild(li);
    
    let tempButton = document.createElement("button");
    tempButton.textContent = "x";
    li.appendChild(tempButton);

    li.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }
  inputBox.value = "";
  saveData();
}

// Check mark
form.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    if (e.target.classList.contains("checked")) {
      completedCount++; // increment the completed count
    } else {
      completedCount--; // decrement the completed count
    }
    saveData();
  }
  else if(e.target.tagName === "BUTTON"){
    e.target.parentElement.remove();
    deletedCount++;
    saveData();
  }
}, false);

// Update the completed count when an item is unchecked
form.addEventListener("transitionend", function(e) {
  if (e.target.tagName === "LI" && !e.target.classList.contains("checked")) {
    completedCount--; // decrement the completed count
    saveData();
  }
});

// Update the completed count every second
setInterval(function() {
  document.getElementById("completed-count").innerHTML = `Total Completed items: ${completedCount}`;
}, 500);

setInterval(function() {
  document.getElementById("deleted-count").innerHTML = `Total Deleted items: ${deletedCount}`;
}, 500);

function saveData(){
  localStorage.setItem("data", form.innerHTML);
  localStorage.setItem("completedCount", completedCount);
  localStorage.setItem("deletedCount", deletedCount);
}
function showData(){
  form.innerHTML = localStorage.getItem("data");
}
showData();
