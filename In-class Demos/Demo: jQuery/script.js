console.log("hello")

for (let step = 0; step < 1000; step++) {
    let blocks = '<div class="block" style="width:100vw; height: 10px; border: 2px solid black;">';
    $("body").append(blocks);
}

console.log(".block");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

console.log(getRandomInt(255));

$(".block").each(function () {
    $(this).on("mouseenter", function () {
        $(this).css("background-color", "rgb(" + getRandomInt(255) + "," + getRandomInt(255) + "," + getRandomInt(255) + ")");
    });

    $(this).on("click", function () {
        // console.log("clicked");
        $(this).addClass("no-width");
    })

})