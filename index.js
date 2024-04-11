window.onload = () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = innerWidth;
    canvas.height = innerHeight;
}

class Pixel {
    constructor(x, y, id) {
        this.position = {
            x,
            y
        }
        this.id = id;
        this.width = 1;
        this.height = 1;
    }

    draw() {
        ctx.fillStyle = "#E3FEF7";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}

const onePx = new Pixel(50, 50, 0);
onePx.draw();
