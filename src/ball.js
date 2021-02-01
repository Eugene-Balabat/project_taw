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
        if (
            this.posX + Math.cos(params.route) * this.routeX * params.speed >=
                window.innerWidth - this.ballRadius ||
            this.posX + Math.cos(params.route) * this.routeX * params.speed <=
                this.ballRadius
        )
            this.routeX *= -1;

        this.posY += Math.sin(params.route) * params.speed;
        this.posX += Math.cos(params.route) * this.routeX * params.speed;

        this.drawBall();
    }

    checkForPushing(params) {
        if (
            this.posY + Math.sin(params.route) * params.speed <=
            this.ballRadius - 0.1
        )
            this.ismoving = false;
        else {
            this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            this.pushing(params);
        }
    }
}
