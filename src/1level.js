import Starter from './starter';
import Ball from './ball';
import Spawn from './spawn';

export default class Level1 extends Starter {
    constructor(params) {
        super(params);

        this.countBallsOnLine = params.countBallsOnLine;
        this.lines = params.numOfLines;

        this.colors = ['#0095DD', '#FFA500', '#008000', '#808080', '#B22222'];

        this.ballradius = this.canvas.width / this.countBallsOnLine / 2;

        this.spawn = new Spawn({
            ballradius: this.ballradius,

            countBallsOnLine: params.countBallsOnLine,
            lines: this.lines,

            colors: this.colors,
        }).spawnBalls();

        this.movingBall = new Ball({
            centerX: this.centerX,
            centerY: this.centerY,

            colorBall: this.colors[
                Math.floor(Math.random() * (this.colors.length - 0)) + 0
            ],

            routeX: 1,

            ballradius: this.ballradius,

            ismoving: false,
        });

        this.balls = this.spawn.staticBalls;
        this.maxYLine = this.spawn.maxPosY;

        this.reDrawBalls();
    }

    drawMaxLine() {
        this.ctx.beginPath();

        this.ctx.lineWidth = 3;
        this.ctx.strokeStyle = 'black';
        this.ctx.setLineDash([
            `${Math.floor(this.canvas.height * (0.8 / 100))}`,
            `${Math.floor(this.canvas.height * (2.3 / 100))}`,
        ]);

        this.ctx.moveTo(0, this.maxYLine);
        this.ctx.lineTo(this.canvas.width, this.maxYLine);

        this.ctx.stroke();
        this.ctx.closePath();
    }

    addBall() {
        this.balls.push(this.movingBall);

        this.movingBall = new Ball({
            centerX: this.centerX,
            centerY: this.centerY,

            colorBall: this.colors[
                Math.floor(Math.random() * (this.colors.length - 0)) + 0
            ],

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

        this.drawMaxLine();
    }
}
