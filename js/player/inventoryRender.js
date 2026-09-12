const inventorySprites = {
    paper: new Image(),
    plastic: new Image(),
    metal: new Image()
};

inventorySprites.paper.src = "assets/items/paper.png";
inventorySprites.plastic.src = "assets/items/plastic.png";
inventorySprites.metal.src = "assets/items/metal.png";


Player.prototype.drawInventory = function(ctx){

    const slotSize = 60;
    const spacing = 5;

    const x = 30;
    const y = 110;

    const types = [
        "paper",
        "plastic",
        "metal"
    ];

    for(let i = 0; i < types.length; i++){

        const slotX = x + i * (slotSize + spacing);

        const radius = 10;

        ctx.fillStyle = "rgba(0, 0, 0, 0.65)";

        ctx.beginPath();

        ctx.roundRect(
            slotX,
            y,
            slotSize,
            slotSize,
            radius
        );

        ctx.fill();

        ctx.strokeStyle = "white";
        ctx.lineWidth = 3;

        ctx.beginPath();

        ctx.roundRect(
            slotX,
            y,
            slotSize,
            slotSize,
            radius
        );

        ctx.stroke();

        const type = types[i];

        const quantity = inventory[type] || 0;

        const sprite = inventorySprites[type];

        if(sprite.complete){

            ctx.drawImage(
                sprite,
                slotX + 10,
                y + 7,
                40,
                40
            );
        }

        ctx.fillStyle = "white";

        ctx.font = "bold 16px Arial";

        ctx.textAlign = "right";

        ctx.fillText(
            "×" + quantity,
            slotX + slotSize - 5,
            y + slotSize - 6
        );

        ctx.textAlign = "left";
    }
};