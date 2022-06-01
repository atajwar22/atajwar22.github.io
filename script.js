let quoteOTD = document.querySelector("#quoteOTD");
fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let i = Math.floor(Math.random() * 1644);
    let quote = data[i].text;
    let author = data[i].author;
    if (data[i].author == "null") {
      data[i].author = "Unknown";}
    let p = document.createElement("p");
    p.innerHTML = '"' +  quote + '"' + " - " + author;
    quoteOTD.appendChild(p);
   // console.log(p);


  });
  

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
