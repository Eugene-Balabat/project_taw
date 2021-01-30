import Canvas from './canvas';
import Ball from './1level';

export default class Starter extends Canvas {
    constructor() {
        super();

        this.centerX = window.innerWidth / 2;
        this.centerY = window.innerHeight - 40;

        this.targetX = window.innerWidth / 2;
        this.targetY = window.innerHeight / 2;

        this.ballradius = 12;
        this.maxlenght = 100;

        this.ball = new Ball();

        this.ctx = this.canvas.getContext('2d');

        this.createStarter(this.targetX, this.targetY);
    }

    createStarter(x, y) {
        this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

        this.ctx.beginPath();
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = 'black';
        this.ctx.setLineDash([7, 16]);
        this.ctx.moveTo(this.centerX, this.centerY);
        this.ctx.lineTo(x, y);
        this.ctx.stroke();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.arc(this.centerX, this.centerY, 13, 0, Math.PI * 2);
        this.ctx.fillStyle = '#0095DD';
        this.ctx.fill();
    }

    reDraw(event) {
        const angle = Math.atan2(
            event.clientY - this.centerY,
            event.clientX - this.centerX
        );

        const maxY = this.centerY + Math.sin(angle) * this.maxlenght;
        const maxX = this.centerX + Math.cos(angle) * this.maxlenght;

        if (maxY < this.centerY) this.createStarter(maxX, maxY);
    }
}
