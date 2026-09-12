Player.prototype.loadSprites = function(){

    this.idle = new Image();
    this.idle.src = "assets/player/idle.png";

    this.jumpSprite = new Image();
    this.jumpSprite.src = "assets/player/jump.png";

    this.runFrames = [];

    for(let i = 1; i <= 8; i++){

        const img = new Image();

        img.src = `assets/player/run/run${i}.png`;

        this.runFrames.push(img);

    }

}

Player.prototype.animate = function(){

    if(this.onGround && this.velX != 0){

        this.frameTimer++;

        if(this.frameTimer >= this.frameSpeed){

            this.frameTimer = 0;

            this.currentFrame++;

            if(this.currentFrame >= this.runFrames.length){

                this.currentFrame = 0;

            }

        }

    }

    else{

        this.currentFrame = 0;

    }

}

Player.prototype.getCurrentSprite = function(){

    if(!this.onGround){

        return this.jumpSprite;

    }

    if(this.velX != 0){

        return this.runFrames[this.currentFrame];

    }

    return this.idle;

}