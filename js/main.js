console.log("JavaScript File is linked");

//variables
const labels = document.querySelectorAll(".label");
const targetZones = document.querySelectorAll(".target-zone");
const resetBtn = document.querySelector("#reset-btn");
let currentDraggedElement = null;

//Bug B
labels.forEach(label => {
  label.dataset.originalParent = "label-box"; 
});

//functions

function dragStart() {
    console.log("Drag Start Called");
    currentDraggedElement = this;
    console.log(currentDraggedElement);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();

    this.classList.remove("highlight");

// Bug A 
  if (this.children.length > 0) {
    return;
  }

  if (!currentDraggedElement) {
    return;
  }

  this.appendChild(currentDraggedElement);

  this.classList.add("dropped");

  currentDraggedElement = null;
}

//Bug B
function resetGame() {
  const labelBox = document.querySelector("#label-box");

  labels.forEach(label => {
    labelBox.appendChild(label);
  });

  targetZones.forEach(zone => {
    zone.classList.remove("highlight");
    zone.classList.remove("dropped");
  });

  currentDraggedElement = null;
}

//Event listeners

labels.forEach(label => {
    label.addEventListener("dragstart", dragStart);
});

targetZones.forEach(target => {
    target.addEventListener("dragover", dragOver);
    target.addEventListener("drop", drop);
});

    zone.addEventListener("dragenter", () => {
    zone.classList.add("highlight");
  });

    zone.addEventListener("dragleave", () => {
    zone.classList.remove("highlight");
  });

//Bug B
resetBtn.addEventListener("click", resetGame);