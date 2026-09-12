function drawContainers(){

    if(!level.showContainers) return;
    
    for(const container of level.containers){

        ctx.fillStyle = "#555";

        ctx.fillRect(
            container.x,
            container.y,
            container.width,
            container.height
        );

        ctx.fillStyle = "#333";

        ctx.fillRect(
            container.x - 5,
            container.y - 8,
            container.width + 10,
            8
        );

        ctx.fillStyle = "white";
        ctx.font = "12px Arial";
        ctx.textAlign = "center";

        ctx.fillText(
            container.type,
            container.x + container.width / 2,
            container.y + container.height + 18
        );

        ctx.textAlign = "left";
    }
}