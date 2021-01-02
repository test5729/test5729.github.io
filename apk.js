function create() {
    this.add.circle(100,200,90,0xff0000)
}

const config = {
    height: 500,
    width: 250,
    backgroundColor: "0x0000ff",
    scene: {
        create
    }
}

const game = new Phaser.Game(config);