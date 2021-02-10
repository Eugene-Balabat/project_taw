import Level1 from './1level';

const level1 = new Level1({ countBalls: 1 });

setInterval(() => {
    const params = {
        speed: level1.speed,
        route: level1.route,
        balls: level1.balls,
    };

    level1.movingBall.correctPosY(params);

    if (level1.movingBall.ismoving) {
        level1.ctx.clearRect(0, 0, level1.canvas.width, level1.canvas.height);

        level1.reDrawBalls();
        level1.createStarter();

        level1.movingBall.pushing(params);
    } else if (
        level1.movingBall.posX !== level1.centerX &&
        level1.movingBall.posY !== level1.centerY
    )
        level1.addBall();
}, 10);

level1.canvas.addEventListener(
    'mousemove',
    (event) => {
        level1.calcAngle(event, level1.ballradius);

        level1.ctx.clearRect(0, 0, level1.canvas.width, level1.canvas.height);

        level1.reDrawBalls();

        level1.createStarter();

        level1.movingBall.drawBall();
    },
    false
);

level1.canvas.addEventListener(
    'click',
    (event) => {
        if (!level1.movingBall.ismoving && event.clientY < level1.centerY) {
            level1.route = Math.atan2(
                event.clientY - level1.centerY,
                event.clientX - level1.centerX
            );
            level1.movingBall.ismoving = true;
        }
    },
    false
);

level1.canvas.addEventListener(
    'resize',
    () => {
        level1.canvas.width = window.innerWidth;
        level1.canvas.height = window.innerHeight;

        level1.ctx.clearRect(0, 0, level1.canvas.width, level1.canvas.height);

        level1.reDrawBalls();

        level1.createStarter();

        level1.movingBall.drawBall();
    },
    false
);
