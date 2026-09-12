Enemy.prototype.horizontalCollision = function(){

    for(const platform of level.platforms){

        const overlap =

            this.x < platform.x + platform.width &&
            this.x + this.width > platform.x &&
            this.y < platform.y + platform.height &&
            this.y + this.height > platform.y;

        if(!overlap) continue;

        if(this.velX > 0){

            this.x = platform.x - this.width;

        }

        else if(this.velX < 0){

            this.x = platform.x + platform.width;

        }

    }

}

Enemy.prototype.verticalCollision = function(){

    this.onGround = false;

    for(const platform of level.platforms){

        const overlap =

            this.x < platform.x + platform.width &&
            this.x + this.width > platform.x &&
            this.y < platform.y + platform.height &&
            this.y + this.height > platform.y;

        if(!overlap) continue;

        if(
            this.velY > 0 &&
            this.y + this.height - this.velY <= platform.y
        ){

            this.y = platform.y - this.height;

            this.velY = 0;

            this.onGround = true;

        }

    }

}