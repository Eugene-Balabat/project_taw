export default class Canvas {
    constructor() {
        this.canvas = document.getElementById('myCanvas');

        this.canvas.style.cursor = 'none';
        this.resizeCanvas();
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
}
