function Enemigo(x,y,imagen){
	Kinetic.Image.call(this);
	this.setWidth(60);
	this.setHeight(60);
	this.setX(x);
	this.setY(y);
	this.contador = 0;
	this.setImage(imagen);
	this.aleatorio = function(inferior, superior){
		var posibilidades = superior - inferior;
		var random = Math.random()*posibilidades;
		random = Math.floor(random);
		return parseInt(inferior) + random;
	}
	this.mover = function(){
		this.contador++;
		this.setX(this.getX() + Math.sin(this.contador * Math.PI/50)*5);
	}
}

Enemigo.prototype = Object.create(Kinetic.Image.prototype);