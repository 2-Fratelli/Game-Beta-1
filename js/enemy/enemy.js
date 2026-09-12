class Enemy{

    constructor(data){

        Object.assign(this,data);

        this.velX = 0;
        this.velY = 0;

        this.gravity = 0.8;

        this.onGround = false;

        this.dead = false;

        // Sprite
        this.sprite = new Image();
        this.sprite.src = data.sprite;

    }

    update(){

        if(this.dead) return;

        this.move();

        this.applyGravity();

        this.horizontalMove();

        this.verticalMove();

        this.attack();

    }

}