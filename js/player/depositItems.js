Player.prototype.depositItems = function(){

    if(!ePressed) return;

    for(const container of level.containers){

        const playerHit =
            this.x < container.x + container.width &&
            this.x + this.width > container.x &&
            this.y < container.y + container.height &&
            this.y + this.height > container.y;

        if(!playerHit) continue;

        const type = container.type;

        if(inventory[type] <= 0){
            return;
        }

        inventory[type]--;

        depositedItems.push(type);

        console.log("OBJETO DEPOSITADO:", type);
        console.log("INVENTARIO:", inventory);
        console.log("DEPOSITADOS:", depositedItems);

        checkLevelCompletion();

        return;
    }
};