Enemy.prototype.move = function(){

    this.velX = this.speed * this.direction;

    if(this.x <= this.patrolLeft){

        this.direction = 1;

    }

    if(this.x + this.width >= this.patrolRight){

        this.direction = -1;

    }

}

Enemy.prototype.applyGravity = function(){

    this.velY += this.gravity;

}

Enemy.prototype.horizontalMove = function(){

    this.x += this.velX;

    this.horizontalCollision();

}

Enemy.prototype.verticalMove = function(){

    this.y += this.velY;

    this.verticalCollision();

}