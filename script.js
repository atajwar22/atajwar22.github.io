//let guitar = document.querySelector("#guitarPic");
//let hoverText = document.createTextNode("Yes, I know my hair was terrible, and no, that is not my dad.");

//function mouseOver() {
  // guitar.appendChild(hoverText);
   //guitar.style.color = "black";
   //guitar.style.textAlign = "center";
//}
//function mouseout() {
//    guitar.style.color = "transparent";
//}

//guitar.onmouseover = function() {mouseOver()};
//guitar.onmouseout = function() {mouseout()};

//BUTTON HOVER EFFECT
let button = document.querySelector("button");
function mouseOver() {
  button.style.backgroundColor = "white";
  button.style.borderColor = "#FFF9A5";
}
function mouseOut() {
  button.style.backgroundColor = "#DCE0D9";
  button.style.borderColor = "black";
}
button.addEventListener("mouseover", mouseOver);
button.addEventListener("mouseout", mouseOut);