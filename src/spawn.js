import Ball from './ball';

export default class Spawn extends Ball {
    constructor(params) {
        super(params);

        this.ballRadius = params.ballradius;
        this.targetCountBalls = params.countBallsOnLine;
        this.countLines = params.lines - 1;

        this.posY = this.ballRadius;
        this.posX = this.ballRadius;

        this.deffPosX = 0;

        this.countBalls = 0;
        this.staticBalls = [];
    }

    addBall(posX) {
        this.staticBalls.push(
            new Ball({
                centerX: posX,
                centerY: this.posY,

                routeX: 1,

                ballradius: this.ballRadius,

                ismoving: false,
            })
        );
    }

    setNewLine() {
        this.posY += this.ballRadius * 2;
        this.posX = this.ballRadius;

        this.countLines -= 1;
        this.countBalls = 0;

        this.deffPosX = 0;
    }

    correctPositions() {
        if (this.posX < this.deffPosX + this.ballRadius) {
            this.posX += 0.1;
            return this.correctPositions();
        }

        this.deffPosX = this.posX + this.ballRadius;

        return this.posX;
    }

    spawnBalls() {
        if (this.countBalls < this.targetCountBalls) {
            this.addBall(this.correctPositions());
            this.countBalls += 1;
            return this.spawnBalls();
        }

        if (this.countLines) {
            this.setNewLine();

            return this.spawnBalls();
        }

        return this.staticBalls;
    }
}
