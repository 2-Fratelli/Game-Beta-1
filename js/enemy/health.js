Enemy.prototype.takeDamage = function(amount){

    this.health -= amount;

    if(this.health <= 0){

        this.health = 0;
        this.dead = true;

        const item = new Item(
            this.x + this.width / 2 - 8,
            this.y + this.height / 2 - 8,
            this.dropItem
        );

        items.push(item);

        console.log("ITEM CREADO:", item);
        console.log("TIPO:", item.type);
        console.log("TOTAL ITEMS:", items.length);

    }

}

