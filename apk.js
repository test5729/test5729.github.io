function create() {
    this.add.circle(100,200,90,0xff0000);
    this.add.text(100,150,"Welcome");
}


const config = {
    height: 500,
    width: 250,
    backgroundColor: "0x0000ff",
    type: Phaser.AUTO,
    scene: {
        create
    }
}

const game = new Phaser.Game(config);