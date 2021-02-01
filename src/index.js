import Canvas from './canvas';
import Starter from './starter';
import Level1 from './1level';

const canvas = new Canvas();
const level1 = new Level1({ countBalls: 1 });
const starter = new Starter();

setInterval(() => {
    if (starter.ball.ismoving) {
        starter.ball.checkForPushing({
            speed: starter.speed,
            route: starter.route,
        });
    }
}, 10);

canvas.canvas.addEventListener(
    'mousemove',
    (event) => {
        starter.reDraw(event);
    },
    false
);

canvas.canvas.addEventListener(
    'click',
    (event) => {
        starter.route = Math.atan2(
            event.clientY - starter.centerY,
            event.clientX - starter.centerX
        );

        starter.ball.routeX = 1;
        starter.ball.ismoving = true;
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
