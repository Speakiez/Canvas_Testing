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
        this.pixelwidth = 2;
    }

    draw() {
        ctx.fillStyle = "#E3FEF7";
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.pixelwidth, 0, Math.PI * 2, false)
        ctx.fill();
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

pixelPositions.forEach(({ x, y }) => {
    const pixel = new Pixel(x, y);
    pixel.draw();
});

const mouse = {
    x: 0,
    y: 0
};

canvas.addEventListener("mousemove", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
    const pixel = new Pixel(mouse.x, mouse.y);
    pixel.draw();
});
