
var Player = {
  s: 20,
  t: 5,
  x: 20,
  y: 20,
  destX: 20,
  destY: 20,
  draw: function(ctx)
  {
    diffX = this.destX - this.x;
    diffY = this.destY - this.y;
    if(diffX > 1) diffX = 1;
    if(diffX < -1) diffX = -1;
    if(diffY > 1) diffY = 1;
    if(diffY < -1) diffY = -1;
    this.x += diffX;
    this.y += diffY;
    //Draw seeker
    ctx.fillStyle="#dd0000";
    ctx.fillRect(this.destX, this.destY, this.t,this.t);
    //Draw player
    ctx.fillStyle="#ffff33";
    ctx.fillRect(this.x,this.y,this.s,this.s);
  }
};

var Game = {
  canvas: null,
  ctx: null,
  width: null,
  height: null,
  tSize: 20,
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
    dX = Game.width / Game.tSize;
    dY = Game.height / Game.tSize;
    Game.ctx.fillStyle="#333333";
    for(i=0; i<dX; i++)
    {
      for(j=0; j<dY; j++)
      {
        if((i+j)%2==1)
        {
          Game.ctx.fillRect(i * Game.tSize, j * Game.tSize,Game.tSize, Game.tSize); 
        }
      } 
    }
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
