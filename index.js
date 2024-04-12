const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

class Pixel {
    constructor(x, y, id) {
        this.position = {
            x,
            y
        }
        this.id = id;
        this.width = 5;
        this.height = 5;
    }

    draw() {
        ctx.fillStyle = "#E3FEF7";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}

const pixelPositions = [
    { x:50, y:50 },
    { x:100, y:100 },
    { x:150, y:150 },
    { x:200, y:200 },
    { x:250, y:250 },
    { x:300, y:300 },
    { x:350, y:350 },
    { x:400, y:400 },
    { x:450, y:450 },
    { x:500, y:500 }
];

const pixels = {};

pixelPositions.forEach(({x, y}, id) => {
    pixels[id] = new Pixel(x, y, id);
    pixels[id].draw();
});

