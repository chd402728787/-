export default class Enemy {
    constructor(x, y, color, health) {
        this.x = x;
        this.y = y;
        this.color = color;
        //血槽的数字 
        this.health = health;
        this.width = 50;
        this.height = 50;
    }

    //画一个敌人方框
    //！！！！！！！！！！！根据上方描述，在下方完成代码！！！！！！！！！！！！！！！
    draw(ctx) {
        //如果血大于1滴，敌人方块颜色白色，如果血少于1滴，边框就用constructor里面的color变量颜色
        //！！！！！！！！！！！根据上方描述，在下方完成代码！！！！！！！！！！！！！！！
        if (this.health > 1)
            ctx.strokeStyle = "white";
        else
            ctx.strokeStyle = this.color;
        //画敌人的方块：坐标和边框长度都在constructor里面
        //！！！！！！！！！！！根据上方描述，在下方完成代码！！！！！！！！！！！！！！！
        ctx.fillStyle = this.color;
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.fillRect(this.x, this.y, this.width, this.height);
        //写每个敌人写上血槽的数字：黑色 25px Arial
        //！！！！！！！！！！！根据上方描述，在下方完成代码！！！！！！！！！！！！！！！
        ctx.fillStyle = "black";
        ctx.font = "25px Arial";
        ctx.fillText(this.health, this.x + 15, this.y + 35);
    }

    //敌人被击中就扣血
    takeDamage(damage) {
        this.health -= damage;
    }
}