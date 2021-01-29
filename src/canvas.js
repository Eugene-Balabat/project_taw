export default class Canvas {
    constructor() {
        this.canvas = document.getElementById('myCanvas');
        this.resizeCanvas();
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
}
