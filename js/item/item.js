class Item {

    constructor(x, y, type){

        this.x = x;
        this.y = y;
        this.baseY = y;

        this.width = 32;
        this.height = 32;

        this.floatTime = Math.random() * Math.PI * 2;
        this.floatSpeed = 0.05;
        this.floatHeight = 8;

        this.type = type;

        this.sprite = new Image();

        this.sprite.src = `assets/items/${type}.png`;
    }

    update(){

        this.floatTime += this.floatSpeed;

        this.y =
            this.baseY +
            Math.sin(this.floatTime) * this.floatHeight;

    }

}