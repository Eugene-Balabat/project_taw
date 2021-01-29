import Canvas from './canvas';
import Starter from './starter';
// import Level1 from './1level';

// const level1 = new Level1({ countBalls: 3 });
const canvas = new Canvas();
const starter = new Starter();

starter.createStareter();

window.addEventListener(
    'resize',
    () => {
        canvas.resizeCanvas();
    },
    false
);
