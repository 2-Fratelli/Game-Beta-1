const background = new Image();
background.src = level.background;

let gameStarted = false;
let backgroundLoaded = false;

infoImage.src = level.info.image;

background.onload = () => {

    level.world.width = background.width;
    level.world.height = background.height;

    backgroundLoaded = true;

    console.log(
        "Tamaño del mundo:",
        level.world.width,
        level.world.height
    );

};

function startGame(){

    if(gameStarted) return;

    if(!backgroundLoaded){

        setTimeout(startGame, 100);

        return;

    }

    gameStarted = true;

    backgroundMusic.play();

    gameLoop();

}

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const backgroundMusic = document.getElementById("backgroundMusic");

backgroundMusic.volume = 0.4;

window.addEventListener("keydown", () => {
    backgroundMusic.play();
}, { once: true });

function resizeCanvas() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);
window.addEventListener("orientationchange", resizeCanvas);

function resizeCanvas() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

const player = new Player();
const camera = new Camera();

const enemies = [];

for(const enemyData of level.enemies){

    enemies.push(

        new Enemy(enemyData)

    );

}

const items = [];

function update(){

    if(gameState === "info"){

        if(enterPressed){
    
            if(currentLevelIndex === lastLevel){
    
                window.location.href = "https://2-fratelli.github.io/Website-Beta-1/";
    
            }else{
    
                nextLevel();
    
            }
    
        }
    
        enterPressed = false;
        return;
    }


    if(gameState !== "playing"){
        return;
    }


    player.update();

    camera.update(player);


    for(const enemy of enemies){
        enemy.update();
    }


    for(const item of items){
        item.update();
    }
}

function drawPlatforms(){

    if(!level.showPlatforms) return;

    for(const p of level.platforms){

        ctx.fillStyle = "rgba(255,0,0,0.35)";

        ctx.fillRect(

            p.x,
            p.y,
            p.width,
            p.height

        );

        ctx.strokeStyle = "red";
        ctx.lineWidth = 2;

        ctx.strokeRect(

            p.x,
            p.y,
            p.width,
            p.height

        );

        ctx.fillStyle = "white";
        ctx.font = "16px Arial";
        ctx.fillText(
            p.name,
            p.x + 5,
            p.y - 8
        );
    }

}

function draw(){

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.save();

    ctx.scale(camera.zoom, camera.zoom);
    
    ctx.translate(-camera.x, -camera.y);
    
    if(background.complete){

        ctx.drawImage(
            background,
            0,
            0,
            background.width,
            background.height
        );
    
    }

    drawPlatforms();

    drawContainers();

    for(const enemy of enemies){

        enemy.draw(ctx);

    }

    for(const item of items){

        item.draw(ctx);
    
    }

    player.draw(ctx);

    player.drawAttackHitbox(ctx);

    ctx.restore();

    player.drawHealthBar(ctx);
    player.drawAttackCooldown(ctx);
    player.drawInventory(ctx);

    if(gameState === "info"){
        drawLevelCompleteScreen();
    }
}

function gameLoop(){

    update();

    draw();

    requestAnimationFrame(gameLoop);

}