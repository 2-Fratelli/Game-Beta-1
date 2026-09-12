class Camera {

    constructor() {

        this.x = 0;
        this.y = 0;

        this.zoom = 2;

        this.offsetY = 25;

    }

    update(player) {

        this.x = player.x - canvas.width / (2 * this.zoom);

        if (this.x < 0) {
            this.x = 0;
        }

        const maxX = level.world.width - canvas.width / this.zoom;

        if (this.x > maxX) {
            this.x = maxX;
        }

        this.y = player.y - canvas.height / (2 * this.zoom) + this.offsetY;

        if (this.y < 0) {
            this.y = 0;
        }

        const maxY = level.world.height - canvas.height / this.zoom;

        if (this.y > maxY) {
            this.y = maxY;
        }

    }

}