import Canvas from './canvas';

export default class Starter extends Canvas {
    constructor() {
        super();

        this.posX = window.innerWidth / 2;
        this.posY = window.innerHeight - 40;

        this.ballradius = 12;

        this.ctx = this.canvas.getContext('2d');
    }

    createStareter() {
        this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

        this.ctx.beginPath();
        this.ctx.arc(this.posX, this.posY, 13, 0, Math.PI * 2);
        this.ctx.fillStyle = '#0095DD';
        this.ctx.fill();
        this.ctx.closePath();
    }
}
