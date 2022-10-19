var box1, box2, box3
function setup() 
{
  createCanvas(400, 400);
  box1= new Box(100,100,40,50,3)
  box2= new Box(150,170,60,20,2)
  box3= new Box(250,90,30,60,4)
}

function draw() 
{
  background(220);
box1.show()
box1.move()
box2.show()
box2.move()
box3.show()
box3.move()
}

