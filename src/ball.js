import Canvas from './canvas';

export default class Ball extends Canvas {
    constructor(params) {
        super(params);

        this.posX = params.centerX;
        this.posY = params.centerY;

        this.routeX = params.routeX;

        this.ballRadius = params.ballradius;

        this.ismoving = params.ismoving;
    }

    drawBall() {
        this.ctx.beginPath();
        this.ctx.arc(this.posX, this.posY, this.ballRadius, 0, Math.PI * 2);
        this.ctx.fillStyle = '#0095DD';
        this.ctx.fill();
        this.ctx.closePath();
    }

    correctPosY(params) {
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
            params.speed -= 0.1;
            this.correctPosY(params);
        }
    }

    getDistance(params, inc) {
        return Math.sqrt(
            (this.posX +
                Math.cos(params.route) * this.routeX * params.speed -
                params.balls[inc].posX) **
                2 +
                (this.posY +
                    Math.sin(params.route) * params.speed -
                    params.balls[inc].posY) **
                    2
        );
    }

    checkMergerBalls(params, inc, state) {
        if (state) {
            if (inc === params.balls.length) {
                return this.checkMergerBalls(
                    params,
                    (inc = 0),
                    (state = false)
                );
            }

            if (
                Math.floor(this.getDistance(params, inc)) <
                Math.floor(this.ballRadius + params.balls[inc].ballRadius)
            ) {
                params.speed -= 0.1;
                return this.checkMergerBalls(params, inc, state);
            }
        } else if (!state) {
            if (inc === params.balls.length) return params.speed;

            if (
                Math.floor(this.getDistance(params, inc)) ===
                Math.floor(this.ballRadius + params.balls[inc].ballRadius)
            ) {
                this.ismoving = false;
                return params.speed;
            }
        }

        return this.checkMergerBalls(params, (inc += 1), state);
    }

    push(params) {
        this.posY += Math.sin(params.route) * params.speed;
        this.posX += Math.cos(params.route) * this.routeX * params.speed;
    }

    pushing(params) {
        if (params.balls.length)
            params.speed = this.checkMergerBalls(params, 0, true);

        if (
            this.posX + Math.cos(params.route) * this.routeX * params.speed >=
                this.canvas.width - this.ballRadius ||
            this.posX + Math.cos(params.route) * this.routeX * params.speed <=
                this.ballRadius
        )
            this.routeX *= -1;

        this.push(params);

        this.drawBall();
    }
}
