class Paper {
    constructor(x,y) {
        this.options={
            isStatic: false, 
            restitution:0.3,
            friction:0,
            density:1.2
        }

        this.image = loadImage("paper.png");
    }
}
