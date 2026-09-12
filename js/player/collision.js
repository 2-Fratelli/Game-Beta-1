Player.prototype.horizontalCollisions = function(){

    const hitboxX = this.x + this.hitboxOffsetX;
    const hitboxY = this.y + this.hitboxOffsetY;

    for(const platform of level.platforms){

        const overlap =
            hitboxX < platform.x + platform.width &&
            hitboxX + this.hitboxWidth > platform.x &&
            hitboxY < platform.y + platform.height &&
            hitboxY + this.hitboxHeight > platform.y;

        if(!overlap) continue;

        if(this.velX > 0){
            this.x = platform.x - this.hitboxWidth - this.hitboxOffsetX;
        }
        else if(this.velX < 0){
            this.x = platform.x + platform.width - this.hitboxOffsetX;
        }
    }
}

Player.prototype.verticalCollisions = function(){

    const hitboxX = this.x + this.hitboxOffsetX;
    const hitboxY = this.y + this.hitboxOffsetY;

    this.onGround = false;

    for(const platform of level.platforms){

        const overlap =
            hitboxX < platform.x + platform.width &&
            hitboxX + this.hitboxWidth > platform.x &&
            hitboxY < platform.y + platform.height &&
            hitboxY + this.hitboxHeight > platform.y;

        if(!overlap) continue;

        const previousHitboxY =
            hitboxY - this.velY;

        if(
            this.velY > 0 &&
            previousHitboxY + this.hitboxHeight <= platform.y &&
            hitboxY + this.hitboxHeight >= platform.y
        ){

            this.y =
                platform.y -
                this.hitboxHeight -
                this.hitboxOffsetY;

            this.velY = 0;

            this.onGround = true;

            continue;
        }

        if(
            this.velY < 0 &&
            previousHitboxY >= platform.y + platform.height &&
            hitboxY <= platform.y + platform.height
        ){

            this.y =
                platform.y +
                platform.height -
                this.hitboxOffsetY;

            this.velY = 0;

            continue;
        }
    }
};

Player.prototype.worldLimits = function() {

    if (this.x < 0) {
        this.x = 0;
    }

    if (this.x + this.width > level.world.width) {
        this.x = level.world.width - this.width;
    }
}