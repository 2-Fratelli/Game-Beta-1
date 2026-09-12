Player.prototype.collectItems = function(){

    for(let i = items.length - 1; i >= 0; i--){

        const item = items[i];

        const hit =
            this.x < item.x + item.width &&
            this.x + this.width > item.x &&
            this.y < item.y + item.height &&
            this.y + this.height > item.y;

        if(!hit) continue;

        if(inventory[item.type] === undefined){
            inventory[item.type] = 0;
        }

        inventory[item.type]++;

        items.splice(i, 1);

        console.log("ITEM RECOGIDO:", item.type);
        console.log("INVENTARIO:", inventory);
    }
};