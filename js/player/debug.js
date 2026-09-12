Player.prototype.debug = function(){

    console.log(this.x,this.y);

}

Player.prototype.drawDebug = function(ctx){
        `X: ${Math.round(this.x)} | Y: ${Math.round(this.y)}`
}
