import Canvas from './canvas';

export default class Starter extends Canvas {
    constructor() {
        super();

        this.maxlenght = 100;
        this.speed = 3;

        this.centerX = window.innerWidth / 2;
        this.centerY = window.innerHeight - 40;

        this.route = Math.atan2(
            window.innerHeight / 2 - this.centerY,
            window.innerWidth / 2 - this.centerX
        );

        this.maxY = this.centerY + Math.sin(this.route) * this.maxlenght;
        this.maxX = this.centerX + Math.cos(this.route) * this.maxlenght;
    }

    createStarter() {
        this.ctx.beginPath();

        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = 'black';
        this.ctx.setLineDash([7, 16]);

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
