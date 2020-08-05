let quoteOTD = document.querySelector("#quoteOTD");
fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let i = Math.floor(Math.random() * 1644);
    let quote = data[i].text;
    let author = data[i].author;
    if (author == "null") {
      author = "John Doe";}
    let p = document.createElement("p");
    p.innerHTML = '"' +  quote + '"' + " - " + author;
    quoteOTD.appendChild(p);
   // console.log(p);


  });
  
let guitarPic = document.querySelector("#guitarPic")
let guitar = document.querySelector("#guitar");
let hoverText = document.createTextNode("Yes, I know my hair was terrible, and NO, that is not my dad!");

function onPic() {
   guitar.appendChild(hoverText);
   guitar.style.color = "#F2B880";
   guitar.style.textAlign = "center";
   guitar.style.display = "inline-block";
}
function outPic() {
    guitar.style.display = "none";
}

guitarPic.addEventListener("mouseover", onPic);
guitarPic.addEventListener("mouseout", outPic);

//BUTTON HOVER EFFECT
let button = document.querySelector("button");
function mouseOver() {
  button.style.backgroundColor = "#D8DBE2";
  button.style.borderColor = "#FFF9A5";
}
function mouseOut() {
  button.style.backgroundColor = "white";
  button.style.borderColor = "black";
}
button.addEventListener("mouseover", mouseOver);
button.addEventListener("mouseout", mouseOut);