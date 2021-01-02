function preload() {
    this.load.image('good','/image/index.jpg');

}

function create() {
    this.add.circle(100,200,90,0xff0000);
    this.add.text(100,150,"Welcome");
    this.add.image(100,100,'good');
    
}


const config = {
    height: 500,
    width: 250,
    backgroundColor: "0x0000ff",
    type: Phaser.AUTO,
    scene: {
        create,
        preload
    }
}

const game = new Phaser.Game(config);