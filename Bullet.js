export default class Bullet {

    constructor(x, y, speed, damage) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.damage = damage;

        this.width = 5;
        this.height = 15;
        this.color = "red";
    }

    //画一个子弹
    draw(ctx) {
        ctx.fillStyle = this.color;
        this.y -= this.speed;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    //如果一颗子弹击到敌人，使用enemy.takeDamage()方法给敌人扣血，然后返回true，没达到就返回false
    //怎么看一个子弹是否击中敌人，请看上面文档
    //碰撞测试 2d Collision 文档：https://developer.mozilla.org/zh-CN/docs/Games/Techniques/2D_collision_detection
    //！！！！！！！！！！！根据上方描述，在下方完成代码！！！！！！！！！！！！！！！
    collideWith(enemy) {
        if (enemy.x <= this.x + this.width &&
            enemy.x + enemy.width >= this.x &&
            enemy.y <= this.y + this.height &&
            enemy.y + enemy.height >= this.y) {
            enemy.takeDamage(this.damage);
            return true;
        }
        return false;
    }
}