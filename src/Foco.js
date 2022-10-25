function Foco() {
    this.intensidad= 0;
    
    this.encender=function(){
        if(this.intensidad<10)
            this.intensidad++;
    }
    this.apagar=function(){
        if(this.intensidad>0)
            this.intensidad--;
    }
    this.cambiar=function(){
        this.intensidad+=2;
    }
    // this.encendido = false;
    
    // this.encender=function(){
    //     this.encendido=true;
    // }
    // this.apagar=function(){
    //     this.encendido=false;
    // }
    // this.cambiar=function(){
    //     this.encendido=!this.encendido;
    // }
}

module.exports=Foco;