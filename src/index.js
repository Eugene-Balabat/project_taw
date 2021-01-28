import Canvas from './canvas';
import Level1 from './1level';

// const level1 = new Level1({ countBalls: 3 });
const canvas = new Canvas();

canvas.resizeCanvas();

window.addEventListener(
    'resize',
    () => {
        canvas.resizeCanvas();
        // level1.callDraw();
    },
    false
);
