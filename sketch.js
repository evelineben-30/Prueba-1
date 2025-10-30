let POSX;
let POSY;
let diam;
let rad;
let velX;
let velY;

function setup() {
    creativeCanvas(windowWidth, windowHeigth);
    diam = random(50, 300);
    rad = diam /2;

    POSX = random(rad, width - rad);
    POSY = random(rad, height - rad);


    velX = random (-5, 5);
    velY = random (-5, 5);
    }

function draw() {
background(150);

if(POSX > width - rad || POSX < rad){
    velX = velX * -1;
}

if(POSY > height - rad || POSY < rad){
    velY = velY * -1;
}

POSX += velX;
POSY += velY;


circle( POSX, POSY, diam);
}
