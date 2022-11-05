// Select color input
let color = document.getElementById("colorPicker")
// Select size input
let height = document.getElementById("inputWidth")
let width = document.getElementById("inputHeight")
let btnSubmit = document.getElementById("sizePicker")
let table = document.getElementById("pixelCanvas")
let h2element = document.querySelector("body")
let defaultColor = h2element.style.backgroundColor;

color.addEventListener('click', function() {
  console.log(color.value);
})

document.addEventListener('DOMContentLoaded', function () {
  console.log(color, height, width)
})

// When size is submitted by the user, call makeGrid()
table.createTBody();
btnSubmit.addEventListener('submit', function(e) {
  e.preventDefault();
  table.createTBody();
  table.firstChild.remove();
  makeGrid();

})

function makeGrid() {
  for (let i = 0; i < height.value; i++) {
    let row = table.insertRow();
    for (let j = 0; j < width.value; j++) {
      let cell = row.insertCell();
      cell.addEventListener('click', function(e) {
        defaultColor = cell.style.backgroundColor;
        if (cell.style.backgroundColor != color.value) {
          cell.style.backgroundColor = color.value;
        } else{
          if (cell.style.backgroundColor == color.value) {
          cell.style.backgroundColor = defaultColor;
          }
        }

      })
      //let data = i + "" + j;
      //cell.innerHTML = data;
    }
  }
}
