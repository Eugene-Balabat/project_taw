import Canvas from './canvas';

export default class Ball extends Canvas {
    constructor(params) {
        super(params);

        this.posX = params.centerX;
        this.posY = params.centerY;

        this.routeX = params.routeX;

        this.ismoving = params.ismoving;

        this.ballRadius = params.ballradius;
    }

    drawBall() {
        this.ctx.beginPath();
        this.ctx.arc(this.posX, this.posY, this.ballRadius, 0, Math.PI * 2);
        this.ctx.fillStyle = '#0095DD';
        this.ctx.fill();
        this.ctx.closePath();
    }

    pushing(params) {
        let { speed } = params;

        if (
            this.posX + Math.cos(params.route) * this.routeX * speed >=
                this.canvas.width - this.ballRadius ||
            this.posX + Math.cos(params.route) * this.routeX * speed <=
                this.ballRadius
        )
            this.routeX *= -1;

        for (let inc = 0; inc < params.balls.length; inc += 1) {
            const distance = Math.sqrt(
                (this.posX +
                    Math.cos(params.route) * this.routeX * speed -
                    params.balls[inc].posX) **
                    2 +
                    (this.posY +
                        Math.sin(params.route) * speed -
                        params.balls[inc].posY) **
                        2
            );

            if (
                Math.floor(distance) <
                Math.floor(this.ballRadius + params.balls[inc].ballRadius)
            ) {
                inc -= 1;
                speed -= 0.1;
            }
        }

        for (let inc = 0; inc < params.balls.length; inc += 1) {
            const distance = Math.sqrt(
                (this.posX +
                    Math.cos(params.route) * this.routeX * speed -
                    params.balls[inc].posX) **
                    2 +
                    (this.posY +
                        Math.sin(params.route) * speed -
                        params.balls[inc].posY) **
                        2
            );

            if (
                Math.floor(distance) ===
                Math.floor(this.ballRadius + params.balls[inc].ballRadius)
            ) {
                this.posY += Math.sin(params.route) * speed;
                this.posX += Math.cos(params.route) * this.routeX * speed;

                this.drawBall();
                this.ismoving = false;
                return;
            }
        }
        this.posY += Math.sin(params.route) * speed;
        this.posX += Math.cos(params.route) * this.routeX * speed;

        this.drawBall();
    }
}
