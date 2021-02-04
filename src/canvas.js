export default class Canvas {
    constructor() {
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');

        this.resizeCanvas();
        this.canvas.style.cursor = 'none';
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
}
