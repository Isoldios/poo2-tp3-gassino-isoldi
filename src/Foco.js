function Foco() {
    this.encendido = false;
    
    this.encender=function(){
        this.encendido=true;
    }
    this.apagar=function(){
        this.encendido=false;
    }
    this.cambiar=function(){
        this.encendido=!this.encendido;
    }
}

module.exports=Foco;