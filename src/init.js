
var Game = {
  
  canvas: null,
  ctx: null,
  init: function() {
    Game.ctx = Game.canvas.getContext('2d');
    Game.ctx.fillStyle="#FF0000";
    Game.ctx.fillRect(20,20,100,100);
    Game.resize();
  },
  resize: function() {
    Game.canvas.style.height= window.innerHeight+'px';
    Game.canvas.style.width= window.innerWidth+'px';
    window.setTimeout(function(){window.scrollTo(0,1);},1);
  }
};

Game.canvas = document.getElementsByTagName('canvas')[0];
window.addEventListener('load', Game.init, false);
window.addEventListener('resize', Game.resize, false);
