import Player from "./Player.js";
import Enemy from "./Enemy.js";
import BulletController from "./BulletController.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 550;
canvas.height = 600;

// 控制子弹还有查看是否击中敌人方块
const bulletController = new BulletController(canvas);

//创建一个玩家方块
const player = new Player(
    canvas.width / 2.2,
    canvas.height / 1.3,
    bulletController
);

//设置每个敌人
const enemies = [
    new Enemy(50, 20, "green", 5),
    new Enemy(150, 20, "red", 5),
    new Enemy(250, 20, "gold", 2),
    new Enemy(350, 20, "green", 2),
    new Enemy(450, 20, "gold", 10),
    new Enemy(50, 100, "green", 5),
    new Enemy(150, 100, "red", 5),
    new Enemy(250, 100, "gold", 2),
    new Enemy(350, 100, "green", 2),
    new Enemy(450, 100, "gold", 20),
];

//游戏主函数，会被setInterval方法循环执行
function gameLoop() {
    //给player玩家或者enemy敌人的方框加点特效
    setCommonStyle();
    //画出黑色背景，背景大小就是canvas.width, canvas.height
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //画子弹
    bulletController.draw(ctx);
    //画玩家
    player.draw(ctx);

    //画敌人方块：如果敌人被子弹打到，而且打到血没了，就删掉这个敌人方块, 其余情况就把敌人方块画上就好
    //！！！！！！！！！！！根据描述，在下方完成代码！！！！！！！！！！！！！！！
    enemies.forEach((enemy) => {
        if (bulletController.collideWith(enemy)) {
            if (enemy.health <= 0)
                enemies.splice(enemies.indexOf(enemy), 1);
        } else
            enemy.draw(ctx);
    });
}

//给player玩家或者enemy敌人的方框加点特效
function setCommonStyle() {
    ctx.shadowColor = "#d53";
    ctx.shadowBlur = 20;
    ctx.lineJoin = "bevel";
    ctx.lineWidth = 5;
}

setInterval(gameLoop, 1000 / 60);