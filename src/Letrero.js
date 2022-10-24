function Letrero(){
    this.totalEncendidas= function(){
        return 0;
    }
    this.ordenarCoordenadas=function(cord1,cord2){
        if (cord1[0]>cord2[0] || cord1[1]>cord2[1])
            var aux0 =cord1[0];
            var aux1 =cord1[1];
            cord1[0]=cord2[0];
            cord1[1]=cord2[1];
            cord2[0]=aux0;
            cord2[1]=aux1; 
    }
    this.encenderLuces = function(cord1, cord2){
        this.ordenarCoordenadas(cord1,cord2)
        var cantidad = (cord2[0]-cord1[0]+1)*(cord2[1]-cord1[1]+1);
        this.totalEncendidas= function(){
            return cantidad;
        }
    }
}

module.exports = Letrero;