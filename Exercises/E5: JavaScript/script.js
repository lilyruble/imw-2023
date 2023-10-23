
//Solution for Loop//
let name = "loop";


let loopcontainer = document.querySelector('#loopContainer')
for (let step = 0; step < 10; step++) {
    let textBox = document.createElement("p");
    textBox.innerHTML = name
    loopcontainer.appendChild(textBox);
}


// Solution for Interaction Color//

const colorBtns = document.querySelectorAll(".colors");

for (const colorBtn of colorBtns) {
    colorBtn.addEventListener("click", function () {
        interactionContainer.style.backgroundColor = getComputedStyle(colorBtn).backgroundColor;
    })
}

//Solution for Condition//

let position = document.getElementById("conditionContainer");
let square = document.getElementById("square");

position.addEventListener('mousemove', color);

function color(e) {
    if (e.offsetY > 300) {
        square.style.backgroundColor = "lightred";
    } else {
        square.style.backgroundColor = "lightpurple";
    }
}

//Solution for Increase

const content = document.getElementById("increaseText");
let text = 20;
function Increase() {
    if (text < 120) {
        text++;
        content.style.fontSize = text + "px";
    }
}

setInterval(Increase, 1000);


//Solution for Input
const textLength = document.getElementById("text-length");
const submitBtn = document.getElementById("submit");
const inputText = document.getElementById("inputText");
submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const charCount = inputText.value.length;
    textLength.textContent = charCount;
})



//Solution for Console//
console.log("Wooohoooo I finished my assignment!")