export default class Player {
    constructor(x, y, bulletController) {
        this.x = x;
        this.y = y;
        this.bulletController = bulletController;
        this.width = 50;
        this.height = 50;
        //玩家移动的速度，每次上下左右坐标加减4
        this.speed = 4;
        //监听上下左右和空格按键是否被按下
        document.addEventListener("keydown", this.keydown);
        document.addEventListener("keyup", this.keyup);
        //上下左右和空格按键默认false，如果被按下就改成true
        this.upPressed = false;
        this.downPressed = false;
        this.leftPressed = false;
        this.rightPressed = false;
        this.shootPressed = false;
    }

    //画一个玩家方块，可以被上下左右移动和射击
    draw(ctx) {
        //移动玩家方块
        this.move();
        ctx.strokeStyle = "yellow";
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = "black";
        ctx.fillRect(this.x, this.y, this.width, this.height);
        //玩家射击
        this.shoot();
    }

    //射击
    shoot() {
        if (this.shootPressed) {
            const speed = 5;
            //防止射击出来的变成一条线，加一个延迟
            const delay = 7;
            //射击造成的伤害
            const damage = 1;
            // 子弹的位子
            const bulletX = this.x + this.width / 2;
            const bulletY = this.y;
            //依靠bulletController来发射一系列子弹，bulletController要在另外一个文件bulletController.js里定义
            this.bulletController.shoot(bulletX, bulletY, speed, damage, delay);
        }
    }

    //对玩家进行上下左右移动
    //每次移动的速度是加或者减掉变量speed
    //！！！！！！！！！！！根据上方描述，在下方完成代码！！！！！！！！！！！！！！！
    move() {
        if (this.upPressed)
            this.y -= this.speed;
        if (this.downPressed)
            this.y += this.speed;
        if (this.leftPressed)
            this.x -= this.speed;
        if (this.rightPressed)
            this.x += this.speed;
    }

    //查看上下左右和空格键是否被按下，如果是就设置成true
    //上、下、左、右、空格的e.code分别是"ArrowUp" "ArrowDown" "ArrowLeft" "ArrowRight" "Space"
    //如果被按下，把对应的上下左右变量改成true。对应的变量在constructor里面
    //！！！！！！！！！！！根据上方描述，在下方完成代码！！！！！！！！！！！！！！！
    keydown = (e) => {
        console.log(e);
        if (e.code == "ArrowUp") {
            this.upPressed = true;
        }
        if (e.code == "ArrowDown") {
            this.downPressed = true;
        }
        if (e.code == "ArrowLeft") {
            this.leftPressed = true;
        }
        if (e.code == "ArrowRight") {
            this.rightPressed = true;
        }
        if (e.code == "Space") {
            this.shootPressed = true;
        }
    };

    //查看上下左右和空格键是否被松开，如果是就设置成false
    //上、下、左、右、空格的e.code分别是"ArrowUp" "ArrowDown" "ArrowLeft" "ArrowRight" "Space"
    //如果被按下，把对应的上下左右变量改成false。对应的变量在constructor里面
    //！！！！！！！！！！！根据上方描述，在下方完成代码！！！！！！！！！！！！！！！
    keyup = (e) => {
        if (e.code == "ArrowUp") {
            this.upPressed = false;
        }
        if (e.code == "ArrowDown") {
            this.downPressed = false;
        }
        if (e.code == "ArrowLeft") {
            this.leftPressed = false;
        }
        if (e.code == "ArrowRight") {
            this.rightPressed = false;
        }
        if (e.code == "Space") {
            this.shootPressed = false;
        }
    };
}