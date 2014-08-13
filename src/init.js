
var Game = {
  
  canvas: null,
  ctx: null,
  init: function() {
    Game.canvas = document.getElementsByTagName('canvas')[0];
    Game.ctx = Game.canvas.getContext('2d');
    Game.resize();
  },
  resize: function() {

  }
};

window.addEventListener('load', Game.load, false);
window.addEventListener('resize', Game.resize, false);
