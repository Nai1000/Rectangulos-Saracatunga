var rectangulo1;
var rectangulo2;

function setup() {
  createCanvas(800,400); 
  rectangulo1=createSprite(350,200,100,40); 
  rectangulo1.shapeColor="green"; 
  rectangulo2=createSprite(600,200,40,100); 
  rectangulo2.shapeColor="green"; 
}


  function draw() {
     background("#000157"); 
     rectangulo2.y=World.mouseY; 
     rectangulo2.x=World.mouseX; 
     if(rectangulo2.x-rectangulo1.x <= rectangulo2.width/2+rectangulo1.width/2 
      && rectangulo1.x-rectangulo2.x <= rectangulo2.width/2+rectangulo1.width/2
      && rectangulo2.y-rectangulo1.y <= rectangulo2.height/2+rectangulo1.height/2
      && rectangulo1.y-rectangulo2.y <= rectangulo2.height/2+rectangulo1.height/2) 
     { 
       rectangulo1.shapeColor="red"; rectangulo2.shapeColor="red"; 
      } 
      else
      {
      rectangulo1.shapeColor="green";
      rectangulo2.shapeColor="green";
      }
      drawSprites(); 
    }
