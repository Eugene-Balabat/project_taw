export default class Canvas {
    constructor() {
        this.canvas = document.getElementById('myCanvas');
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
}
