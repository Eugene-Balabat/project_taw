import Canvas from './canvas';

export default class Starter extends Canvas {
    constructor() {
        super();

        this.maxlenght = 150;

        this.speed = 7;

        this.centerX = this.canvas.width / 2;
        this.centerY = this.canvas.height - 40;

        this.route = Math.atan2(
            this.canvas.height / 2 - this.centerY,
            this.canvas.width / 2 - this.centerX
        );

        this.maxY = this.centerY + Math.sin(this.route) * this.maxlenght;
        this.maxX = this.centerX + Math.cos(this.route) * this.maxlenght;
    }

    createStarter() {
        this.ctx.beginPath();

        this.ctx.lineWidth = 3;
        this.ctx.strokeStyle = 'black';
        this.ctx.setLineDash([12, 15]);

        this.ctx.moveTo(this.centerX, this.centerY);
        this.ctx.lineTo(this.maxX, this.maxY);

        this.ctx.stroke();
        this.ctx.closePath();
    }

    calcAngle(event) {
        const angle = Math.atan2(
            event.clientY - this.centerY,
            event.clientX - this.centerX
        );

        this.maxY = this.centerY + Math.sin(angle) * this.maxlenght;
        this.maxX = this.centerX + Math.cos(angle) * this.maxlenght;
    }
}
