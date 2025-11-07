class Pelota{
constructor(){
    this.POSX;
    this.POSY;
    this.diam;
    this.rad;
    this.velX;
    this.velY;

    if (random(1) > 0.5) {
  this.color = color("#29dffbff");
} else {
  this.color = color("#e87cdff3"); 
}

    this.diam = random(40, 100);
    this.rad = this.diam /2;

    this.POSX = random(this.rad, width - this.rad);
    this.POSY = random(this.rad, height - this.rad);

    this.velX = random (-5, 5);
    this.velY = random (-5, 5);

    this.nuevoColor = color(random(20,40), random(15, 8), random(255));
} 

actualizar(){
    
            
        if(this.POSX > width - this.rad || this.POSX < this.rad){
            this.velX *= -1;
        }

        if(this.POSY > height - this.rad || this.POSY < this.rad){
            this.velY *= -1;
        }

        this.POSX += this.velX;
        this.POSY += this.velY;
}

visualizar(){
        fill(this.color);
        stroke("#4f086cff");
        strokeWeight(4);
        circle( this.POSX, this.POSY, this.diam);

        fill("#5321def3");
        noStroke();
       square(this.POSX, this.POSY, this.diam * 0.4);

            }  
}