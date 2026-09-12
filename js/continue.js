function continueFromInfo(){

    if(gameState !== "info"){
        return;
    }

    if(currentLevelIndex === lastLevel){

        window.location.href =
            "https://2-fratelli.github.io/Website-Beta-1/";

    }else{

        nextLevel();

    }

}

function getContinueButton(){

    const designWidth = 1280;
    const designHeight = 720;

    const buttonWidth = 360;
    const buttonHeight = 80;

    const buttonX =
        (designWidth - buttonWidth) / 2;

    const buttonY =
        panelY + panelHeight + 28;

    return {
        x: buttonX,
        y: buttonY,
        width: buttonWidth,
        height: buttonHeight
    };
}

addEventListener("pointerdown", (e) => {

    if(gameState !== "info"){
        return;
    }

    if(!continueButton){
        return;
    }

    const rect =
        canvas.getBoundingClientRect();

    const screenX =
        e.clientX - rect.left;

    const screenY =
        e.clientY - rect.top;

    const designWidth = 1280;
    const designHeight = 720;

    const scale = Math.min(
        canvas.width / designWidth,
        canvas.height / designHeight
    );

    const offsetX =
        (canvas.width - designWidth * scale) / 2;

    const offsetY =
        (canvas.height - designHeight * scale) / 2;

    const x =
        (screenX - offsetX) / scale;

    const y =
        (screenY - offsetY) / scale;

    if(
        x >= continueButton.x &&
        x <= continueButton.x + continueButton.width &&
        y >= continueButton.y &&
        y <= continueButton.y + continueButton.height
    ){

        continueFromInfo();

    }

});