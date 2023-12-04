// Mouse Animation
// https://www.youtube.com/watch?v=XdHXOzNubxc&t=188s&ab_channel=TheWebnuts-OnlineTutorials
Splitting();

let cursor = document.querySelector('.cursor'),
    cursorText = cursor.querySelectorAll('.char');

// Split characters and animate in a circle
function rounded(radius) {

    for (let i = 0; i < cursorText.length; i++) {
        let rotation = i * (360 / cursorText.length);
        gsap.set(cursorText[i], {
            transformOrigin: `0px ${radius}px`,
            x: radius,
            rotate: rotation
        });
        gsap.set(cursor, { transformOrigin: "center center", rotation: 0, width: radius * 2, height: radius * 2 })

    }

    let rotate = gsap.timeline({ repeat: -1 })
    rotate.to(cursor, { rotation: 360, duration: 5, ease: "none", })
}

let radius = 70

// Mouse Movement function - How and where it can move
function cursorMove(e) {
    var mouseX = e.pageX
    mouseY = e.pageY
    tl = gsap.timeline();
    tl.to(cursor, {
        duration: 0.5,
        x: mouseX - radius,
        y: mouseY - radius,
        ease: Expo.ease
    })
}

function init() {
    rounded(radius);
    window.addEventListener('mousemove', cursorMove);
}

window.addEventListener("load", function () {
    init();
})

// Change Text Content on Hover

// $(document).ready(function () {
//     $("#readings").hover(function () {
//         $(this).html("Readings-Readings");
//     }, function () {
//         $(this).html("Lily's-Index-Page");
//     });
// });

$(document).ready(function () {
    $("#readings").hover(
        function () {
            $(this).html("Readings - Readings -");
        },
        function () {
            $(this).html("Lily's - Index - Page - ");
        }
    );
});
