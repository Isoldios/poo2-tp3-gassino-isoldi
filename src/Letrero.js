function Letrero(){
    this.totalEncendidas= function(){
        return 0;
    }
    this.encenderLuces = function(cord1, cord2){
        var cantidad = (cord2[0]-cord1[0]+1)*(cord2[1]-cord1[1]+1);
        this.totalEncendidas= function(){
            return cantidad;
        }
    }
}

module.exports = Letrero;