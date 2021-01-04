//sprites to drink
var tow,tow_i;
var gost,gost_i;
var dr,dr_i,drgroup;
var rst,rst_i,rstgroup;
var invb,invbgroup;

//sound to creep you out
var boo;

//gmstvrbl
var gmst = "play"

// pre the load
function preload () {
  tow_i=loadImage("tower.png")
  gost_i=loadImage("ghost-standing.png")
  dr_i=loadImage("door.png")
  rst_i=loadImage("climber.png")
   
  // groups making 
  drgroup = new Group()
  rstgroup = new Group()
  invbgroup = new Group()

//sound
  
  boo = loadSound("spooky.wav")

}

function setup () {
  
  createCanvas(600,600)
  tow = createSprite (300,300)
  tow.addImage("towthepow",tow_i)
  tow.velocityY=1
  
  gost = createSprite (300,300)
  gost.addImage("hjgfdhg",gost_i)
  gost.scale = 0.4
}

function draw () {
  background ("navy")
  if (gmst==="play"){
    if (tow.y > 600){
    tow.y = 300
    
  }
  
  if (keyDown("left")) {
    
    gost.x=gost.x-2
  
  }
  
  if (keyDown("right")) {
    
    gost.x=gost.x+2
  
  }
  
  if (keyDown("space")) {
    
    gost.velocityY = -5
  
  }
  
   gost.velocityY =  gost.velocityY+0.9  
  
  if ( rstgroup.isTouching (gost) ) {
    gost.velocityY = 0
  }
  
  if (invbgroup.isTouching(gost)||gost.y>600) {
    gost.destroy();
    gmst = "end"
    
  }
  
  
  idk();
  drawSprites();
    
    
  }
  
  if (gmst==="end"){
    text ("YOU ARE DED HE HE",300,300);
    
  }
  
}

function idk () {
  
  if (frameCount%240===0){
    dr=createSprite(200,-50) 
    dr.addImage("igyfj5yj",dr_i)
    dr.velocityY=1
    dr.x=Math.round (random(120,400))
    dr.lifetime = 700
    drgroup.add(dr)
    
   rst=createSprite(200,10) 
    rst.addImage("ij",rst_i)
    rst.velocityY=1
   rst.x=dr.x
    rst.lifetime = 700
    rstgroup.add(rst)
    
    invb=createSprite(200,15) 
   invb.velocityY=1
   invb.x=dr.x
    invb.lifetime = 700
    invbgroup.add(invb)
    invb.width=rst.width
    invb.height=2
    invb.debug=true
    
    gost.depth=dr.depth;
    gost.depth=gost.depth+1
  
  
  }
  
  
  
   
  
  
  
}






