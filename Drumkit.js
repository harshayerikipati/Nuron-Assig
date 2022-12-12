var numberOfButtons =
    document.querySelectorAll(".button").length;

for (var j = 0; j < numberOfButtons; j++) {

    document.querySelectorAll(".button")[j]
        .addEventListener("click", function () {

            var buttonStyle = this.innerHTML;
            sound(buttonStyle);
            animation(buttonStyle);
        });
}

document.addEventListener("keypress", function (event) {
    sound(event.key);
    animation(event.key);
});


function sound(key) {
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "a":
            var kick = new Audio("sounds/kick.mp3");
            kick.play();
            break;

        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "d":
            var tom1 = new Audio("sounds/tom1.mp3");
            tom1.play();
            break;

        case "j":
            var tom2 = new Audio("sounds/tom1.mp3");
            tom2.play();
            break;

        case "k":
            var tom3 = new Audio("sounds/tom2.mp3");
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio("sounds/tom4.mp3");
            tom4.play();
            break;

        default: console.log(key);
    }
}
function animation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("animation");

    setTimeout(function () {
        activeButton.classList.remove("animation");
    }, 100);
}