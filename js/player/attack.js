const attackSettings = {

    phase1Duration: 8,
    phase2Duration: 8,

    phase1: {
        width: 22,
        height: 44,
        offsetX: 0,
        offsetY: 10,
        color: "white"
    },

    phase2: {
        width: 25,
        height: 34,
        offsetX: 22,
        offsetY: 18,
        color: "white"
    }

};

Player.prototype.attack = function(){

    if(this.attackTimer > 0){
        this.attackTimer--;
    }

    if(this.attackPhase > 0){

        this.attackPhaseTimer--;

        if(
            this.attackPhase === 1 &&
            this.attackPhaseTimer <= 0
        ){

            this.attackPhase = 2;
            this.attackPhaseTimer = attackSettings.phase2Duration;

        }

        if(
            this.attackPhase === 2 &&
            this.attackPhaseTimer <= 0
        ){

            this.attackPhase = 0;

        }

        if(this.attackPhase > 0){

            this.checkAttackHit();

        }

        return;
    }

    if(!mouse.leftPressed) return;

    mouse.leftPressed = false;

    if(this.attackTimer > 0) return;

    this.attackPhase = 1;

    this.attackPhaseTimer =
        attackSettings.phase1Duration;

    this.attackHitEnemies = [];

    this.attackTimer = this.attackCooldown;

};

Player.prototype.getAttackHitbox = function(){

    if(this.attackPhase === 1){

        const s = attackSettings.phase1;

        return {
            x: this.direction === 1
                ? this.x + this.width + s.offsetX
                : this.x - s.offsetX - s.width,

            y: this.y + s.offsetY,

            width: s.width,
            height: s.height
        };
    }


    if(this.attackPhase === 2){

        const s = attackSettings.phase2;

        return {
            x: this.direction === 1
                ? this.x + this.width + s.offsetX
                : this.x - s.offsetX - s.width,

            y: this.y + s.offsetY,

            width: s.width,
            height: s.height
        };
    }


    return null;
};

Player.prototype.checkAttackHit = function(){

    const hitbox = this.getAttackHitbox();

    if(!hitbox) return;


    for(const enemy of enemies){

        if(enemy.dead) continue;


        const hit =
            hitbox.x < enemy.x + enemy.width &&
            hitbox.x + hitbox.width > enemy.x &&
            hitbox.y < enemy.y + enemy.height &&
            hitbox.y + hitbox.height > enemy.y;


        if(
            hit &&
            !this.attackHitEnemies.includes(enemy)
        ){

            enemy.takeDamage(50);

            this.attackHitEnemies.push(enemy);

        }

    }

};