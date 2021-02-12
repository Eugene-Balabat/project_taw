import Starter from './starter';
import Ball from './ball';
import Spawn from './spawn';

export default class Level1 extends Starter {
    constructor(params) {
        super(params);

        this.countBallsOnLine = params.countBallsOnLine;
        this.lines = params.numOfLines;

        this.ballradius = this.canvas.width / this.countBallsOnLine / 2;

        this.spawn = new Spawn({
            ballradius: this.ballradius,
            countBallsOnLine: params.countBallsOnLine,
            lines: this.lines,
        });

        this.movingBall = new Ball({
            centerX: this.centerX,
            centerY: this.centerY,

            routeX: 1,

            ballradius: this.ballradius,

            ismoving: false,
        });

        this.balls = this.spawn.spawnBalls();
    }

    addBall() {
        this.balls.push(this.movingBall);

        this.movingBall = new Ball({
            centerX: this.centerX,
            centerY: this.centerY,

            routeX: 1,

            ballradius: this.ballradius,

            ismoving: false,
        });

        this.createStarter();
        this.reDrawBalls();

        this.movingBall.drawBall();
    }

    reDrawBalls() {
        this.balls.forEach((element) => {
            element.drawBall();
        });
    }
}
