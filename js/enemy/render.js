Enemy.prototype.draw = function(ctx){
    if(this.dead) return;

    if(!this.sprite.complete) return;

    ctx.save();

    if(this.direction === -1){

        ctx.translate(this.x + this.width, this.y);
        ctx.scale(-1, 1);

        ctx.drawImage(
            this.sprite,
            0,
            0,
            this.width,
            this.height
        );

    }else{

        ctx.drawImage(
            this.sprite,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }

    ctx.restore();

    const barWidth = this.width;
    const barHeight = 6;

    ctx.fillStyle = "black";

    ctx.fillRect(
        this.x,
        this.y - 12,
        barWidth,
        barHeight
    );

    ctx.fillStyle = "red";

    ctx.fillRect(
        this.x,
        this.y - 12,
        barWidth * (this.health / this.maxHealth),
        barHeight
    );

}