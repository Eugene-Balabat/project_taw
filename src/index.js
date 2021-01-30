import Canvas from './canvas';
import Starter from './starter';
// import Level1 from './1level';

// const level1 = new Level1({ countBalls: 3 });
const canvas = new Canvas();
const starter = new Starter();

starter.createStarter();

canvas.canvas.addEventListener(
    'mousemove',
    (event) => {
        starter.reDraw(event);
    },
    false
);

canvas.canvas.addEventListener(
    'click',
    () => {
        starter.pushBall();
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
