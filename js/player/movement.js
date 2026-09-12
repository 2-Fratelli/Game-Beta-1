Player.prototype.input = function(){

    this.velX = 0;

    if(keys["KeyA"]){

        this.velX = -this.speed;
        this.direction = -1;

    }

    if(keys["KeyD"]){

        this.velX = this.speed;
        this.direction = 1;

    }

}

Player.prototype.jump = function(){

    if(keys["Space"] && this.onGround){

        this.velY = this.jumpForce;
        this.onGround = false;

    }

}

Player.prototype.applyGravity = function(){

    this.velY += this.gravity;

}

Player.prototype.moveHorizontal = function(){

    this.x += this.velX;

    this.horizontalCollisions();

}

Player.prototype.moveVertical = function(){

    this.y += this.velY; 

    this.verticalCollisions();

}