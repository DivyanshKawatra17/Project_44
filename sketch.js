var bg, bgImg


function preload(){
bgImg = loadImage("assets/bg1.jpg")

}

function setup(){

//background image
bg=createSprite(0,0,30000,20000)
bg.addImage(bgImg);





}

function draw() {
  
  background("bg");
      
          
          

          
   
        drawSprites();
        
}