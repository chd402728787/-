import Bullet from "./Bullet.js";

export default class BulletController {
    //射击一堆子弹
    bullets = [];
    //每个子弹之间来点延迟
    timerTillNextBullet = 0;

    constructor(canvas) {
        this.canvas = canvas;
    }

    //当玩家按下空格，这个射击方法被使用
    shoot(x, y, speed, damage, delay) {
        //确保子弹射出没有重叠
        if (this.timerTillNextBullet <= 0) {
            //在数组里增加子弹
            this.bullets.push(new Bullet(x, y, speed, damage));

            this.timerTillNextBullet = delay;
        }

        this.timerTillNextBullet--;
    }

    //画一串子弹：把数组里的子弹都画出来
    //！！！！！！！！！！！根据上方描述，在下方完成代码！！！！！！！！！！！！！！！
    draw(ctx) {
        this.bullets.forEach(bullet => {
            bullet.draw(ctx);
        });
    }

    //看一串子弹是否击中敌人，击中后，就把子弹消失掉
    collideWith(enemy) {
        //把子弹数组循环一下，看是否至少有子弹击中了敌人
        return this.bullets.some((bullet) => {
            if (bullet.collideWith(enemy)) {
                // 如果击中敌人，把击中敌人的子弹移除
                this.bullets.splice(this.bullets.indexOf(bullet), 1);
                return true;
            }
            return false;
        });
    }

}