import Starter from './starter';
import Ball from './ball';

export default class Level1 extends Starter {
    constructor(params) {
        super(params);
        this.ballradius = Math.floor(
            this.canvas.width * (1.2 / 100) + this.canvas.height * (1.2 / 100)
        );

        this.movingBall = new Ball({
            centerX: this.centerX,
            centerY: this.centerY,

            routeX: 1,

            ballradius: this.ballradius,

            ismoving: false,
        });

        this.countBalls = params.countBalls;
        this.balls = [];
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
