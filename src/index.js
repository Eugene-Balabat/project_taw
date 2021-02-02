import Canvas from './canvas';
import Level1 from './1level';

const canvas = new Canvas();
const level1 = new Level1({ countBalls: 1 });

setInterval(() => {
    if (
        level1.movingBall.posY + Math.sin(level1.route) * level1.speed <=
        level1.movingBall.ballRadius
    )
        level1.movingBall.ismoving = false;

    if (level1.movingBall.ismoving) {
        level1.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

        level1.reDrawBalls();
        level1.createStarter();

        level1.movingBall.pushing({
            speed: level1.speed,
            route: level1.route,
        });
    } else if (
        level1.movingBall.posX !== level1.centerX &&
        level1.movingBall.posY !== level1.centerY
    )
        level1.addBall();
}, 10);

canvas.canvas.addEventListener(
    'mousemove',
    (event) => {
        level1.calcAngle(event);
        if (level1.maxY < level1.centerY) {
            level1.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            level1.movingBall.drawBall();

            level1.reDrawBalls();

            level1.createStarter();
            if (!level1.movingBall.ismoving) level1.movingBall.drawBall();
        }
    },
    false
);

canvas.canvas.addEventListener(
    'click',
    (event) => {
        if (!level1.movingBall.ismoving) {
            level1.route = Math.atan2(
                event.clientY - level1.centerY,
                event.clientX - level1.centerX
            );
            level1.movingBall.ismoving = true;
        }
    },
    false
);

window.addEventListener(
    'resize',
    () => {
        canvas.resizeCanvas();
    },
    false
);
