class Player {

    constructor() {

        this.maxHealth = 100;
        this.health = 100;

        this.invulnerable = false;
        this.invulnerableTime = 0;
    
        this.x = level.spawn.x;
        this.y = level.spawn.y;

        this.attackCooldown = 30;
        this.attackTimer = 0;

        this.attackPhase = 0;
        this.attackPhaseTimer = 0;

        this.attackHitEnemies = [];
    
        this.width = 64;
        this.height = 64;

        this.hitboxWidth = 40;
        this.hitboxHeight = 56;

        this.hitboxOffsetX = 12;
        this.hitboxOffsetY = 8;
    
        this.speed = 5;
        this.velX = 0;
        this.velY = 0;
    
        this.gravity = 0.8;
        this.jumpForce = -16;
        this.onGround = false;
    
        this.direction = 1;
    
        this.currentFrame = 0;
        this.frameTimer = 0;
        this.frameSpeed = 5;
    
        this.idle = null;
        this.runFrames = [];
    
        this.loadSprites();
    
    }

    update(){

        this.input();

        this.jump();

        this.applyGravity();

        this.moveHorizontal();

        this.moveVertical();

        this.worldLimits();

        this.checkHazards();

        this.updateHealth();

        this.attack();

        this.animate();

        this.collectItems();

        this.depositItems();

        ePressed = false;

    }

}