let name = "Peter";
let size = 10;
let letter = "h"
let colorPalette = ["red", "green", "blue"];
console.log(colorPalette)

for (let step = 0; step < 100; step++) {
    let textBox = document.createElement("p");
    textBox.innerHTML = "Ah" + letter;
    textBox.style.fontSize = size + "px";
    document.body.appendChild(textBox);
    letter += "h";
}





//Click Button to change doc color
document.querySelector("button").addEventListener("click", function () {
    document.body.style.backgroundColor = "green";
    console.log("Clicked on button");
})