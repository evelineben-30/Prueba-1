class Pelota{
Pelota(){
    this.POSX;
    this.POSY;
    this.diam;
    this.rad;
    this.velX;
    this.velY;

    this.diam = random(50, 300);
    this.rad = this.diam /2;

    this.POSX = random(this.rad, width - this.rad);
    this.POSY = random(this.rad, height - this.rad);


    this.velX = random (-5, 5);
    this.velY = random (-5, 5);
}
    
actualizar(){
        if(this.POSX > width - this.rad || this.POSX < this.rad){
        this.velX = this.velX * -1;
        }

        if(this.POSY > height - this.rad || this.POSY < this.rad){
        this.velY = this.velY * -1;
        }

        this.POSX += velX;
        this.POSY += velY;
}

visualizar(){
        fill("#9124ffff");
        stroke("#4f086cff");
        strokeWeight(4);
        circle( this.POSX, this.POSY, this.diam);
    }  
}