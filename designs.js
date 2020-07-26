// When size is submitted by the user, call makeGrid()

function makeGrid(event){

  event.preventDefault();
  // takes height and width input ans stores their values
  var height = document.querySelector("#inputHeight").value;
  var width = document.querySelector("#inputWidth").value;
  var table = document.querySelector("table");
  for (var x = 0; x<height; x++){
    var newRow = table.insertRow(x);
    for (var y = 0; y<width; y++){
      var newColoumn = newRow.insertCell(y);
      newColoumn.classList.add("td");
    }
  }
}
// painting the grids when clicked
document.querySelector("table").addEventListener("click",function(event){
  event.preventDefault();
  console.log(event);
  const color = document.querySelector("#colorPicker").value;
  var coloring=event.path[0];
  if(coloring.classList[0]==="td"){
    coloring.style.backgroundColor = color;
  }
});


//making of grid whenit is submitted
var submit = document.querySelector(".submit");
submit.addEventListener("click",makeGrid);

//deleting the existing grid
var newButton = document.querySelector(".restart");
newButton.addEventListener("click",function(event){
  event.preventDefault();
  document.querySelector("table").innerHTML = "";
})
