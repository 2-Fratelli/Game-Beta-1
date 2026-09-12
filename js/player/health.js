Player.prototype.takeDamage = function(amount){

    if(this.invulnerable) return;

    this.health -= amount;

    if(this.health < 0){
        this.health = 0;
    }

    this.invulnerable = true;
    this.invulnerableTime = 60;

    if(this.health <= 0){

        this.die();
    
    }

}

Player.prototype.updateHealth = function(){

    if(this.invulnerable){

        this.invulnerableTime--;

        if(this.invulnerableTime <= 0){

            this.invulnerable = false;

        }

    }

}

Player.prototype.checkHazards = function(){

    for(const platform of level.platforms){

        if(platform.class !== "hazard") continue;

        const overlapX =
            this.x + this.width > platform.x &&
            this.x < platform.x + platform.width;

        const touchingTop =
            this.velY >= 0 &&
            this.y + this.height >= platform.y &&
            this.y + this.height - this.velY <= platform.y;

        if(overlapX && touchingTop){

            this.takeDamage(platform.damage);
            
        }

    }

}

Player.prototype.die = function(){

    this.health = this.maxHealth;

    this.x = level.spawn.x;
    this.y = level.spawn.y;

    this.velX = 0;
    this.velY = 0;

}
