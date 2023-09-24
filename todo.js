var btn = document.getElementsByTagName('button')[0];
var ul = document.querySelector("ul");
var input = document.querySelector(".searchbar input");

function createListItem() {
  var li = document.createElement("li");
  var deleteButton = document.createElement("button");
  li.appendChild(document.createTextNode(input.value));
  
  deleteButton.textContent = "Del";
  deleteButton.classList.add("delete-button");
  deleteButton.addEventListener("click", function () {
    ul.removeChild(li);
    delet.classList.add(deleteButton.textContent);
      });
  

  li.appendChild(deleteButton);
  ul.appendChild(li);
  input.value = "";}

function inputLength() {
  return input.value.length;
}

function addListItemOnClick() {
  if (inputLength() !== 0) {
    createListItem();
  }
}

btn.addEventListener("click", addListItemOnClick);

input.addEventListener("keypress", function (event) {
  if (inputLength() !== 0 && event.keyCode === 13) {
    createListItem();
  }
});

// done class toggle

ul.addEventListener("click", function (event) {
  var clickedElement = event.target;
  if (clickedElement.tagName === "LI") {
    clickedElement.classList.toggle("done");
  }
});

var deleteButtons = document.querySelectorAll(".delete-button");

// Add event listeners to delete buttons on existing items only
for (var i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener("click", function () {
    var listItem = this.parentElement;
    ul.removeChild(listItem);
  });
}


document.addEventListener("DOMContentLoaded", function () {
    const showButton = document.getElementById("show-tooltip");
    const tooltip = document.getElementById("tooltip-popup");
    
    showButton.addEventListener("click", toggleTooltip);
    
    function toggleTooltip() {
        tooltip.classList.toggle("show");
    }
});
