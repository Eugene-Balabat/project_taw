import Canvas from './canvas';

export default class Ball extends Canvas {
    constructor(params) {
        super(params);

        this.posX = params.centerX;
        this.posY = params.centerY;

        this.routeX = params.routeX;

        this.ismoving = params.ismoving;

        this.ballRadius = 25;
    }

    drawBall() {
        this.ctx.beginPath();
        this.ctx.arc(this.posX, this.posY, this.ballRadius, 0, Math.PI * 2);
        this.ctx.fillStyle = '#0095DD';
        this.ctx.fill();
        this.ctx.closePath();
    }

    push(params) {
        this.posY += Math.sin(params.route) * params.speed;
        this.posX += Math.cos(params.route) * this.routeX * params.speed;
    }

    correctPosY(params) {
        const newparams = params;

        if (
            Math.floor(this.posY + Math.sin(params.route) * params.speed) ===
            Math.floor(this.ballRadius)
        ) {
            this.push(params);
            this.ismoving = false;
        } else if (
            Math.floor(this.posY + Math.sin(params.route) * params.speed) <
            Math.floor(this.ballRadius)
        ) {
            newparams.speed -= 0.1;
            this.correctPosY(newparams);
        }
    }

    checkMergerBalls(params, inc) {
        if (inc === params.balls.length) return params.speed;

        const distance = Math.sqrt(
            (this.posX +
                Math.cos(params.route) * this.routeX * params.speed -
                params.balls[inc].posX) **
                2 +
                (this.posY +
                    Math.sin(params.route) * params.speed -
                    params.balls[inc].posY) **
                    2
        );

        if (
            Math.floor(distance) <
            Math.floor(this.ballRadius + params.balls[inc].ballRadius)
        ) {
            params.speed -= 0.1;
            return this.checkMergerBalls(params, inc);
        }

        return this.checkMergerBalls(params, (inc += 1));
    }

    pushing(params) {
        params.speed = this.checkMergerBalls(params, 0);

        if (
            this.posX + Math.cos(params.route) * this.routeX * params.speed >=
                this.canvas.width - this.ballRadius ||
            this.posX + Math.cos(params.route) * this.routeX * params.speed <=
                this.ballRadius
        )
            this.routeX *= -1;

        for (let inc = 0; inc < params.balls.length; inc += 1) {
            const distance = Math.sqrt(
                (this.posX +
                    Math.cos(params.route) * this.routeX * params.speed -
                    params.balls[inc].posX) **
                    2 +
                    (this.posY +
                        Math.sin(params.route) * params.speed -
                        params.balls[inc].posY) **
                        2
            );

            if (
                Math.floor(distance) ===
                Math.floor(this.ballRadius + params.balls[inc].ballRadius)
            ) {
                this.ismoving = false;
                break;
            }
        }

        this.push(params);

        this.drawBall();
    }
}
