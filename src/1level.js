import Starter from './starter';
import Ball from './ball';

export default class Level1 extends Ball {
    constructor(params) {
        super(params);

        this.countBalls = params.countBalls;
        this.balls = [];
    }

    addBall(ball) {
        this.balls.push(ball);
    }
}
