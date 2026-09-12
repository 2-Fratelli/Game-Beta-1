const keys = {};
let ePressed = false;
let enterPressed = false;
let deviceMode = null;

window.addEventListener("keydown", (e) => {

    keys[e.code] = true;

    if(e.code === "KeyE" && !e.repeat){
        ePressed = true;
    }

    if(e.code === "Enter" && !e.repeat){
        enterPressed = true;
    }

});

window.addEventListener("keyup", (e) => {

    keys[e.code] = false;

});

const mouse = {
    left: false,
    leftPressed: false
};


window.addEventListener("mousedown", (e) => {

    if(e.button === 0){

        mouse.left = true;
        mouse.leftPressed = true;

    }

});


window.addEventListener("mouseup", (e) => {

    if(e.button === 0){

        mouse.left = false;

    }

});

const deviceSelection =
    document.getElementById("deviceSelection");

const computerButton =
    document.getElementById("computerButton");

const mobileButton =
    document.getElementById("mobileButton");

const mobileControls =
    document.getElementById("mobileControls");

computerButton.addEventListener("click", () => {

    deviceMode = "computer";

    deviceSelection.style.display = "none";

    mobileControls.style.display = "none";

    startGame();

});

mobileButton.addEventListener("click", () => {

    deviceMode = "mobile";

    deviceSelection.style.display = "none";

    mobileControls.style.display = "flex";

    startGame();

});

function setupTouchButton(buttonId, keyCode){

    const button =
        document.getElementById(buttonId);

    if(!button) return;


    button.addEventListener("touchstart", (e) => {

        e.preventDefault();

        keys[keyCode] = true;

    });


    button.addEventListener("touchend", (e) => {

        e.preventDefault();

        keys[keyCode] = false;

    });


    button.addEventListener("touchcancel", (e) => {

        e.preventDefault();

        keys[keyCode] = false;

    });

}

setupTouchButton("leftButton", "KeyA");
setupTouchButton("rightButton", "KeyD");

setupTouchButton("jumpButton", "Space");

const attackButton = document.getElementById("attackButton");

attackButton.addEventListener("pointerdown", (e) => {

    e.preventDefault();

    mouse.left = true;
    mouse.leftPressed = true;

});

attackButton.addEventListener("pointerup", (e) => {

    e.preventDefault();

    mouse.left = false;

});

attackButton.addEventListener("pointercancel", (e) => {

    e.preventDefault();

    mouse.left = false;

});

const interactButton =
    document.getElementById("interactButton");


if(interactButton){

    interactButton.addEventListener("touchstart", (e) => {

        e.preventDefault();

        ePressed = true;

    });

}