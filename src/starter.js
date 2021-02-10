import Canvas from './canvas';

export default class Starter extends Canvas {
    constructor() {
        super();

        this.maxlenght = Math.floor(
            this.canvas.width * (7.1 / 100) + this.canvas.height * (7.1 / 100)
        );

        this.speed = 7;

        this.centerX = this.canvas.width / 2;
        this.centerY =
            this.canvas.height - Math.floor(this.canvas.height * (5 / 100));

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
        this.ctx.setLineDash([
            `${Math.floor(this.canvas.height * (0.8 / 100))}`,
            `${Math.floor(this.canvas.height * (2.3 / 100))}`,
        ]);

        this.ctx.moveTo(this.centerX, this.centerY);
        this.ctx.lineTo(this.maxX, this.maxY);

        this.ctx.stroke();
        this.ctx.closePath();
    }

    calcAngle(event, ballradius) {
        const angle = Math.atan2(
            event.clientY - this.centerY,
            event.clientX - this.centerX
        );

        const targetY = this.centerY + Math.sin(angle) * this.maxlenght;
        const targetX = this.centerX + Math.cos(angle) * this.maxlenght;

        const distance = Math.sqrt(
            (this.centerX - event.clientX) ** 2 +
                (this.centerY - event.clientY) ** 2
        );

        if (Math.floor(targetY) < this.centerY && distance > ballradius) {
            this.maxY = targetY;
            this.maxX = targetX;
        }
    }
}
