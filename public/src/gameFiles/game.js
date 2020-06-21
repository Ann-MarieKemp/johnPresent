import Level1 from './level1.js';
import Intro from './Intro.js';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  resolution: window.devicePixelRatio,
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 500 },
    },
  },
  crossOrigin: 'anonymous',
  scene: [Intro, Level1],
};

const game = new Phaser.Game(config);
