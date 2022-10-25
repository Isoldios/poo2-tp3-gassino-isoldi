function Foco() {
    this.encendido = false;
    
    this.encender=function(){
        this.encendido=true;
    }
    this.apagar=function(){
        this.encendido=false;
    }
}

module.exports=Foco;