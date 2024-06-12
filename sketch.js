function setup() {
    createCanvas(500, 600);
    background("green");
  }
  
  function draw() {
  
    stroke("blue");
    fill("yellow");
  
    // console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  