let gameState = "playing";
let levelCompleted = false;
let continueButton = null;
let infoImage = new Image();

if(level.info && level.info.image){
    infoImage.src = level.info.image;
}

function roundedRect(ctx, x, y, width, height, radius){

    ctx.beginPath();

    ctx.roundRect(
        x,
        y,
        width,
        height,
        radius
    );

    ctx.closePath();
}

function checkLevelCompletion(){

    if(levelCompleted){
        return;
    }


    for(const type in level.requiredItems){

        const required =
            level.requiredItems[type];

        const deposited =
            depositedItems.filter(
                item => item === type
            ).length;


        if(deposited < required){
            return false;
        }
    }


    levelCompleted = true;

    gameState = "info";

    console.log("NIVEL COMPLETADO");

    return true;
}

function drawLevelCompleteScreen(){

    ctx.save();

    ctx.fillStyle = "rgba(5, 15, 25, 0.84)";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    ctx.restore();

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

    ctx.save();

    ctx.translate(
        offsetX,
        offsetY
    );

    ctx.scale(
        scale,
        scale
    );

    ctx.textAlign = "center";

    ctx.font =
        "32px 'Press Start 2P', Arial";

    ctx.fillStyle = "#07151F";

    ctx.fillText(
        "★ " + level.info.title + " ★",
        designWidth / 2 + 5,
        90 + 5
    );

    ctx.fillStyle = "#FFD54F";

    ctx.fillText(
        "★ " + level.info.title + " ★",
        designWidth / 2,
        90
    );

    ctx.fillStyle = "#FFD54F";

    ctx.fillRect(
        designWidth / 2 - 210,
        108,
        420,
        4
    );


    ctx.fillRect(
        designWidth / 2 - 225,
        106,
        8,
        8
    );

    ctx.fillRect(
        designWidth / 2 + 217,
        106,
        8,
        8
    );

    ctx.font = "20px Arial";

    ctx.fillStyle = "#FFFFFF";

    ctx.fillText(
        level.info.subtitle,
        designWidth / 2,
        140
    );

    const panelWidth = 1100;
    const panelHeight = 390;

    const panelX =
        (designWidth - panelWidth) / 2;

    const panelY = 170;

    const panelRadius = 18;

    roundedRect(
        ctx,
        panelX + 8,
        panelY + 8,
        panelWidth,
        panelHeight,
        panelRadius
    );

    ctx.fillStyle =
        "rgba(0,0,0,0.55)";

    ctx.fill();

    roundedRect(
        ctx,
        panelX,
        panelY,
        panelWidth,
        panelHeight,
        panelRadius
    );

    ctx.fillStyle = "#102A43";

    ctx.fill();

    roundedRect(
        ctx,
        panelX,
        panelY,
        panelWidth,
        panelHeight,
        panelRadius
    );

    ctx.strokeStyle = "#1976D2";

    ctx.lineWidth = 4;

    ctx.stroke();

    ctx.save();

    roundedRect(
        ctx,
        panelX,
        panelY,
        panelWidth,
        12,
        panelRadius
    );

    ctx.clip();

    ctx.fillStyle = "#1976D2";

    ctx.fillRect(
        panelX,
        panelY,
        panelWidth,
        12
    );

    ctx.restore();

    ctx.save();

    roundedRect(
        ctx,
        panelX,
        panelY + panelHeight - 12,
        panelWidth,
        12,
        panelRadius
    );

    ctx.clip();

    ctx.fillStyle = "#4CAF50";

    ctx.fillRect(
        panelX,
        panelY + panelHeight - 12,
        panelWidth,
        12
    );

    ctx.restore();

    const imageX =
        panelX + 30;

    const imageY =
        panelY + 35;

    const imageWidth = 430;
    const imageHeight = 300;

    const imageRadius = 12;

    roundedRect(
        ctx,
        imageX + 6,
        imageY + 6,
        imageWidth,
        imageHeight,
        imageRadius
    );

    ctx.fillStyle = "#07151F";

    ctx.fill();

    ctx.save();

    roundedRect(
        ctx,
        imageX,
        imageY,
        imageWidth,
        imageHeight,
        imageRadius
    );

    ctx.clip();


    if(
        infoImage.complete &&
        infoImage.naturalWidth > 0
    ){

        ctx.drawImage(
            infoImage,
            imageX,
            imageY,
            imageWidth,
            imageHeight
        );

    } else {

        ctx.fillStyle = "#263238";

        ctx.fillRect(
            imageX,
            imageY,
            imageWidth,
            imageHeight
        );

        ctx.fillStyle = "#FFFFFF";

        ctx.font = "18px Arial";

        ctx.textAlign = "center";

        ctx.fillText(
            "Cargando imagen...",
            imageX + imageWidth / 2,
            imageY + imageHeight / 2
        );
    }

    ctx.restore();

    roundedRect(
        ctx,
        imageX,
        imageY,
        imageWidth,
        imageHeight,
        imageRadius
    );

    ctx.strokeStyle = "#FFD54F";

    ctx.lineWidth = 4;

    ctx.stroke();

    const infoX =
        panelX + 500;

    const infoY =
        panelY + 35;

    const infoWidth =
        panelWidth - 530;

    roundedRect(
        ctx,
        infoX,
        infoY,
        infoWidth,
        62,
        12
    );

    ctx.fillStyle = "#FFD54F";

    ctx.fill();


    ctx.fillStyle = "#183B56";

    ctx.font =
        "22px 'Press Start 2P', Arial";

    ctx.textAlign = "left";

    ctx.fillText(
        level.info.question,
        infoX + 20,
        infoY + 35
    );

    ctx.font = "19px Arial";

    ctx.fillStyle = "#FFFFFF";

    let textY =
        infoY + 105;


    for(const line of level.info.text){

        ctx.fillText(
            line,
            infoX + 10,
            textY
        );

        textY += 31;
    }

    const tags =
        level.info.tags;

    const tagY =
        panelY + panelHeight - 78;

    let tagX =
        infoX + 10;


    for(const tag of tags){

        const tagWidth = 125;
        const tagHeight = 38;
        const tagRadius = 8;


        roundedRect(
            ctx,
            tagX,
            tagY,
            tagWidth,
            tagHeight,
            tagRadius
        );

        ctx.fillStyle = "#1976D2";

        ctx.fill();


        roundedRect(
            ctx,
            tagX,
            tagY,
            tagWidth,
            tagHeight,
            tagRadius
        );

        ctx.strokeStyle = "#FFFFFF";

        ctx.lineWidth = 2;

        ctx.stroke();


        ctx.fillStyle = "#FFFFFF";

        ctx.font =
            "bold 14px Arial";

        ctx.textAlign = "center";

        ctx.fillText(
            tag,
            tagX + tagWidth / 2,
            tagY + 20
        );


        tagX += tagWidth + 10;
    }

    const buttonWidth = 360;
    const buttonHeight = 80;

    const buttonX =
        (designWidth - buttonWidth) / 2;

    const buttonY =
        panelY + panelHeight + 28;

    continueButton = {
        x: buttonX,
        y: buttonY,
        width: buttonWidth,
        height: buttonHeight
    };

    const buttonRadius = 14;

    roundedRect(
        ctx,
        buttonX + 7,
        buttonY + 7,
        buttonWidth,
        buttonHeight,
        buttonRadius
    );

    ctx.fillStyle = "#07151F";

    ctx.fill();

    roundedRect(
        ctx,
        buttonX,
        buttonY,
        buttonWidth,
        buttonHeight,
        buttonRadius
    );

    ctx.fillStyle = "#16A34A";

    ctx.fill();

    roundedRect(
        ctx,
        buttonX,
        buttonY,
        buttonWidth,
        buttonHeight,
        buttonRadius
    );

    ctx.strokeStyle = "FFFFFF";

    ctx.lineWidth = 4;

    ctx.stroke();

    ctx.fillStyle = "#FFFFFF";

    ctx.font =
        "20px 'Press Start 2P', Arial";

    ctx.textAlign = "center";

    ctx.fillText(
        "▶  CONTINUAR",
        designWidth / 2,
        buttonY + 35
    );

    ctx.font =
        "12px 'Press Start 2P', Arial";

    ctx.fillText(
        "[ ENTER ]",
        designWidth / 2,
        buttonY + 62
    );

    ctx.restore();
}

function nextLevel(){

    console.log("PASANDO AL SIGUIENTE NIVEL");

    gameState = "playing";

    levelCompleted = false;
}
