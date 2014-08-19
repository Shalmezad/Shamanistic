var Player = {
  s: 20,
  t: 5,
  x: 20,
  y: 20,
  destX: 20,
  destY: 20,
  draw: function(ctx)
  {
    diffX = Player.destX - Player.x;
    diffY = Player.destY - Player.y;
    if(diffX > 1) diffX = 1;
    if(diffX < -1) diffX = -1;
    if(diffY > 1) diffY = 1;
    if(diffY < -1) diffY = -1;
    Player.x += diffX;
    Player.y += diffY;
    //Draw seeker
    ctx.fillStyle="#dd0000";
    ctx.fillRect(Player.destX, Player.destY, Player.t,Player.t);
    //Draw player
    ctx.fillStyle="#ffff33";
    ctx.fillRect(Player.x,Player.y,Player.s,Player.s);
  }
};

var Game = {
  canvas: null,
  ctx: null,
  width: null,
  height: null,
  mouseIsDown: false,
  init: function() {
    Game.ctx = Game.canvas.getContext('2d');
    Game.canvas.addEventListener('mousedown', Game.mouseDown, false);
    Game.canvas.addEventListener('mouseup', Game.mouseUp, false);
    Game.canvas.addEventListener('mousemove', Game.mouseMove, false);
    Game.resize();
    Game.update();
  },
  resize: function() {
    Game.width = window.innerWidth;
    Game.height = window.innerHeight;
    Game.canvas.style.height= Game.height + 'px';
    Game.canvas.style.width= Game.width + 'px';
    Game.canvas.width = Game.width;
    Game.canvas.height = Game.height;
    window.setTimeout(function(){window.scrollTo(0,1);},1);
  },
  drawBackground: function() {
    Game.ctx.fillStyle="#222222";
    Game.ctx.fillRect(0,0,Game.width,Game.height);
  },
  update: function() {
    requestAnimFrame(Game.update);
    Game.drawBackground();
    Player.draw(Game.ctx);
  },
  mouseDown:function(event) {
    Game.mouseIsDown = true;
    Player.destX = event.clientX;
    Player.destY = event.clientY;
  },
  mouseUp:function(event){Game.mouseIsDown=false;},
  mouseMove:function(event) {
    if(!Game.mouseIsDown)return;
    Player.destX = event.clientX;
    Player.destY = event.clientY;
  }
};

Game.canvas = document.getElementsByTagName('canvas')[0];
window.requestAnimFrame=(function(){
  return window.requestAnimationFrame ||
         window.webkitRequestAnimationFrame ||
         window.mozRequestAnimationFrame ||
         window.oRequestAnimationFrame ||
         window.msRequestAnimationFrame ||
         function(callback){
           window.setTimeout(callback, 1000/60);
         }
})();
window.addEventListener('load', Game.init, false);
window.addEventListener('resize', Game.resize, false);
