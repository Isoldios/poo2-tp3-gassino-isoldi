const Foco = require("../src/Foco");
const Letrero = require("../src/Letrero");

test("La intensidad del foco sin modificar debe ser 0",()=>{
    const foco=new Foco();
    expect(foco.intensidad).toBe(0);
});

test("La cantidad de luces prendidas solo declarando el letrero son 0",()=>{
    const letrero=new Letrero();
    expect(letrero.totalEncendidas()).toBe(0);
});

test("La cantidad de luces prendidas luego de encender un cuadrado",()=>{
    const letrero=new Letrero();
    letrero.encenderLuces([0,0],[1,1]);
    expect(letrero.totalEncendidas()).toBe(4);
});

test("La cantidad de luces prendidas luego de subirle la intensidad de un cuadrado a 2",()=>{
    const letrero=new Letrero();
    letrero.encenderLuces([0,0],[1,1]);
    letrero.encenderLuces([0,0],[1,1]);
    expect(letrero.totalEncendidas()).toBe(4);
});