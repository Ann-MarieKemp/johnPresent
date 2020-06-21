export default class Level1 extends Phaser.Scene {
  constructor() {
    super({ key: 'Level1' });
  }
  preload() {
    this.load.image('desertSky', '/src/assets/level1/Desert_Background_1.png');
    this.load.image('desertSky2', '/src/assets/level1/Desert_Background_2.png');
    this.load.image('desertSky3', '/src/assets/level1/Desert_Background_3.png');
    this.load.atlas({
      key: 'kitties_sprites',
      textureURL: '/src/assets/level1/kittySprites.png',
      atlasURL: '/src/assets/level1/kittySprites.JSON',
    });
  }
  create() {
    this.desertSky = this.add
      .image(0, 0, 'desertSky')
      .setOrigin(0, 0)
      .setScale(4, 4, 2);
    this.desert2 = this.add.image(400, 390, 'desertSky2');
    this.desert2.setScale(2, 2);
    this.desert3 = this.add.image(400, 390, 'desertSky3');
    this.desert3.setScale(2, 2);
    this.cotton = this.add
      .sprite(100, 100, 'kitties_sprites', 'kittyJSON-36.png')
      .setScale(2, 2);
    const frameNames = [
      { key: 'kitties_sprites', frame: 'kittyJSON-36.png' },
      { key: 'kitties_sprites', frame: 'kittyJSON-37.png' },
      ,
      { key: 'kitties_sprites', frame: 'kittyJSON-38.png' },
      ,
      { key: 'kitties_sprites', frame: 'kittyJSON-39.png' },
      ,
      { key: 'kitties_sprites', frame: 'kittyJSON-40.png' },
      ,
      { key: 'kitties_sprites', frame: 'kittyJSON-41.png' },
    ];
    this.anims.create({
      key: 'cottonRight',
      frames: frameNames,
      frameRate: 10,
      repeat: -1,
    });

    this.cotton.anims.play('cottonRight');
  }
  update() {}
}
