
//Math Function for color Randomness
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

console.log("Hello World");


//Square function

$("#square").each(function () {
    $(this).on("click", function () {
        $("#square").on("click", function () {
            $(this).slideToggle("slow");
        });
        $(this).css("background-color", "rgb(" + getRandomInt(255) + ",0, 0 )");
    });
})

//Circle function

$("#circle").each(function () {
    $("#circle").on("click", function () {
        $(this).slideToggle("slow");
    });
    $(this).on("mouseenter", function () {
        $(this).css("background-color", "rgb(0," + getRandomInt(255) + ", 0 )");
    });
})


//Parallelogram Function

$("#parallelogram").each(function () {
    $(this).on("dblclick", function () {
        $(this).css("background-color", "rgb(0,0, " + getRandomInt(255) + " )");
    });
    $("#parallelogram").on("click", function () {
        $(this).slideToggle("slow");
    })
})






// $("#parallelogram").each(function (event) {
//     if (event.which === 8) {
//         $(this).on("keypress", function () {
//             $(this).css("background-color", "rgb(0,0, " + getRandomInt(255) + ")");
//         })
//     }
// })

