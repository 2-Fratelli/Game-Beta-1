Enemy.prototype.attack = function(){

    const overlap =

        this.x < player.x + player.width &&
        this.x + this.width > player.x &&
        this.y < player.y + player.height &&
        this.y + this.height > player.y;

    if(overlap){

        player.takeDamage(this.damage);

    }

}