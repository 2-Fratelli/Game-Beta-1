Item.prototype.draw = function(ctx){

    if(this.sprite.complete){
        ctx.drawImage(
            this.sprite,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }
};