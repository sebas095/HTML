function Heroe(imagen,animaciones){
	Kinetic.Sprite.call(this);
	this.setWidth(40);
	this.setHeight(70);
	this.attrs.image = imagen;
	this.setAnimations(animaciones);
	this.setAnimation('caminar');
	this.estaSaltando = false;
	this.direccion = true;
	this.vx = 15;
	this.vy = 0;
	this.limiteDer = 0;
	this.limiteTope = 0;
	this.direccion = 1;
	this.contador = 0;
	this.attrs.frameRate = 10;
	this.caminar = function(){
		if(this.direccion) this.move(this.vx,0);
		else{
			this.attrs.drawFunc = function (a){
				var b=this.attrs.animation,c=this.attrs.index,d=this.attrs.animations[b][c],e=a.getContext(),f=this.attrs.image;
				f&&e.drawImage(f,d.x,d.y,d.width,d.height,0,0,d.width,d.height)
			};
			this.setScale({x:1});
			this.direccion = true;
		}
		if(this.getX() > this.limiteDer)
			this.move(this.limiteDer - this.getX(),0);
	}
	this.retroceder = function(){
		if(!this.direccion)	this.move(-15,0);
		else{
			this.attrs.drawFunc = function (a){
				var b=this.attrs.animation,c=this.attrs.index,d=this.attrs.animations[b][c],e=a.getContext(),f=this.attrs.image;
				f&&e.drawImage(f,d.x,d.y,d.width,d.height,-d.width,0,d.width,d.height)
			};
			this.setScale({x:-1});
			this.direccion = false;
		}
		if(this.getX() < 0)
			this.move(-this.getX(),0);
	}
	this.saltar = function(){
		this.estaSaltando = true;
		if(this.vy <= 2){
			this.setAnimation('saltarFrames');
			this.vy = -20;
			this.contador++;
			this.afterFrame(10,function(){
				this.estaSaltando = false;
				this.setAnimation('estatico');
			});
		}

	}
	this.aplicarGravedad = function(gravedad,vRebote){
		this.vy += gravedad;
		this.move(0,this.vy);
		if((this.getY() + this.getHeight()) > this.limiteTope){
			this.setY(this.limiteTope - this.getHeight());
			this.vy = 0;
			this.contador = 0;
		}
	}
}

Heroe.prototype = Object.create(Kinetic.Sprite.prototype);