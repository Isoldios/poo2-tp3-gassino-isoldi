const Foco = require("./Foco");

function Letrero(){
    this.luces = new Array(100);
    for (i=0;i<100;i++){
        var lista=new Array(100);
        for (j=0;j<100;j++){
            lista[j]=new Foco();
        }
        this.luces[i]=lista;
    }

    this.validarParametros=function(cord1,cord2){
        if (cord2[0]>99 || cord2[1]>99 || cord1[0]<0 || cord1[1]<0){
            throw Error("Pasaste mal los parametros");
        }
    }

    this.ordenarCoordenadas=function(cord1,cord2){
        if (cord1[0]>cord2[0] || cord1[1]>cord2[1]){
            var aux0 =cord1[0];
            var aux1 =cord1[1];
            cord1[0]=cord2[0];
            cord1[1]=cord2[1];
            cord2[0]=aux0;
            cord2[1]=aux1;
        }
    }

    this.totalEncendidas= function(){
        var encendidas=0;
        this.luces.forEach(fila=>{
            fila.forEach(columna=>{
                if (columna.intensidad>0 && columna.intensidad<11)
                    encendidas++;
            });
        });
        return encendidas;
    }
    this.encenderLuces = function(cord1, cord2){
        this.ordenarCoordenadas(cord1,cord2);
        this.validarParametros(cord1,cord2)
        for (i=cord1[0];i<=cord2[0];i++){
            for (j=cord1[1];j<=cord2[1];j++){
                this.luces[i][j].encender();
            }
        }
    }

    // this.totalEncendidas= function(){
    //     var encendidas=0;
    //     this.luces.forEach(fila=>{
    //         fila.forEach(columna=>{
    //             if (columna.encendido==true)
    //                 encendidas++;
    //         });
    //     });
    //     return encendidas;
    // }
    
    // this.encenderLuces = function(cord1, cord2){
    //     this.ordenarCoordenadas(cord1,cord2);
    //     this.validarParametros(cord1,cord2)
    //     for (i=cord1[0];i<=cord2[0];i++){
    //         for (j=cord1[1];j<=cord2[1];j++){
    //             this.luces[i][j].encender();
    //         }
    //     }
    // }
    // this.apagarLuces = function(cord1, cord2){
    //     this.ordenarCoordenadas(cord1,cord2);
    //     this.validarParametros(cord1,cord2)
    //     for (i=cord1[0];i<=cord2[0];i++){
    //         for (j=cord1[1];j<=cord2[1];j++){
    //             this.luces[i][j].apagar();
    //         }
    //     }
    // }
    // this.cambiarEstado = function(cord1, cord2){
    //     this.ordenarCoordenadas(cord1,cord2);
    //     this.validarParametros(cord1,cord2)
    //     for (i=cord1[0];i<=cord2[0];i++){
    //         for (j=cord1[1];j<=cord2[1];j++){
    //             this.luces[i][j].cambiar();
    //         }
    //     }
    // }
}

module.exports = Letrero;