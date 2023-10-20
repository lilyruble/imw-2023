let name = "Peter";
let size = 10;
let letter = "h"
let colorPalette = ["red", "green", "blue", "purple", "orange", "yellow"];
//console.log(colorPalette[1]);

for (let step = 0; step < 100; step++) {
    let textBox = document.createElement("p");
    textBox.innerHTML = "Ah" + letter;

    // if (step < 50) {
    //     textBox.innerHTML = "HIIII";
    // } else {
    //     textBox.innerHTML = "BYE";
    // }

    textBox.style.fontSize = size + "px";
    textBox.style.color = colorPalette[step % colorPalette.length]
    document.body.appendChild(textBox);
    size++;
    letter += "h";
}





//Click Button to change doc color
document.querySelector("button").addEventListener("click", function () {
    document.body.style.backgroundColor = "green";
    console.log("Clicked on button");
})

let texts = document.querySelectorAll("p");

for (let step = 0; step < texts.length; step++) {
    texts[step].addEventListener("click", function () {
        console.log(this.innerHTML.length);
        this.innerHTML = this.innerHTML.length;

    })
}






console.log(texts[2]);





