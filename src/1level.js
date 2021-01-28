import Ball from './ball';

export default class Level1 extends Ball {
    constructor(params) {
        super(params);

        this.countBalls = params.countBalls;
        this.balls = [];
    }
}
