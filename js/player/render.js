Player.prototype.draw = function(ctx){

    const sprite = this.getCurrentSprite();

    ctx.save();

    if(this.direction == -1){

        ctx.scale(-1,1);

        ctx.drawImage(

            sprite,

            -this.x - this.width,
            this.y,

            this.width,
            this.height

        );

    }

    else{

        ctx.drawImage(

            sprite,

            this.x,
            this.y,

            this.width,
            this.height

        );

    }

    ctx.restore();

}

Player.prototype.drawHealthBar = function(ctx){

    const x = 30;
    const y = 30;
    const width = 220;
    const height = 25;
    const radius = 12;

    ctx.shadowColor = "rgba(0,0,0,0.35)";
    ctx.shadowBlur = 12;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 4;

    ctx.fillStyle = "#444";

    ctx.beginPath();
    ctx.roundRect(x, y, width, height, radius);
    ctx.fill();

    ctx.shadowColor = "transparent";

    const gradient = ctx.createLinearGradient(
        x,
        y,
        x,
        y + height
    );

    gradient.addColorStop(0, "#8CFF66");
    gradient.addColorStop(0.5, "#52E63A");
    gradient.addColorStop(1, "#1FAF1A");

    ctx.fillStyle = gradient;

    ctx.beginPath();
    ctx.roundRect(
        x,
        y,
        width * (this.health / this.maxHealth),
        height,
        radius
    );
    ctx.fill();

    ctx.fillStyle = "rgba(255,255,255,0.30)";

    ctx.beginPath();

    ctx.roundRect(
        x + 2,
        y + 2,
        width * (this.health / this.maxHealth) - 4,
        height / 2 - 2,
        radius
    );

    ctx.fill();

    ctx.strokeStyle = "#111";
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.roundRect(x, y, width, height, radius);
    ctx.stroke();

    ctx.fillStyle = "white";
    ctx.font = "bold 16px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.fillText(
        `${this.health} / ${this.maxHealth}`,
        x + width / 2,
        y + height / 2
    );

}

Player.prototype.drawAttackCooldown = function(ctx){

    const width = 220;
    const height = 18;

    const x = 30;
    const y = 70;

    const radius = 9;

    const progress =
        1 - (this.attackTimer / this.attackCooldown);

    ctx.save();

    ctx.beginPath();

    ctx.roundRect(
        x,
        y,
        width,
        height,
        radius
    );

    ctx.fillStyle = "rgba(0, 0, 0, 0.65)";

    ctx.fill();

    if(progress > 0){

        ctx.beginPath();

        ctx.roundRect(
            x,
            y,
            width * progress,
            height,
            radius
        );

        ctx.fillStyle = "white";

        ctx.fill();

    }

    ctx.beginPath();

    ctx.roundRect(
        x,
        y,
        width,
        height,
        radius
    );

    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;

    ctx.stroke();

    if(progress > 0){

        ctx.beginPath();

        ctx.roundRect(
            x + 2,
            y + 2,
            Math.max(0, width * progress - 4),
            5,
            3
        );

        ctx.fillStyle = "rgba(255,255,255,0.45)"; 

        ctx.fill();

    }

    ctx.fillStyle = "black";
    ctx.font = "bold 14px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.fillText(
        "ATAQUE",
        x + width / 2,
        y + height / 2
    );

    ctx.restore();

}

Player.prototype.drawAttackHitbox = function(ctx){

    const hitbox = this.getAttackHitbox();

    if(!hitbox) return;


    const settings =
        this.attackPhase === 1
            ? attackSettings.phase1
            : attackSettings.phase2;


    ctx.fillStyle = settings.color;

    ctx.fillRect(
        hitbox.x,
        hitbox.y,
        hitbox.width,
        hitbox.height
    );

};