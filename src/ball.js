import Canvas from './canvas';

export default class Ball extends Canvas {
    constructor(params) {
        super(params);

        this.posX = params.posX;
        this.posY = params.posY;

        this.routX = params.routX;
        this.routY = params.routY;

        this.ballRadius = params.ballRadius;

        this.ctx = this.canvas.getContext('2d');
    }

    drawBall() {
        this.ctx.beginPath();
        this.ctx.arc(this.posX, this.posY, this.ballRadius, 0, Math.PI * 2);
        this.ctx.fillStyle = '#0095DD';
        this.ctx.fill();
        this.ctx.closePath();
    }

    draw() {}
}
