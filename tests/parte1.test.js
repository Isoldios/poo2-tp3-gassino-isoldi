const Letrero = require("../src/Letrero");

test("Cuantas luces hay encendidas",()=>{
    const letrero = new Letrero();
    expect(letrero.totalEncendidas()).toBe(0);
});

test("Cuantas luces hay encendidas luego de encender 9",()=>{
    const letrero = new Letrero();
    letrero.encenderLuces([5,5],[7,7]);
    expect(letrero.totalEncendidas()).toBe(9);
});

test("Cuantas luces hay encendidas luego de encender 9",()=>{
    const letrero = new Letrero();
    letrero.encenderLuces([15,15],[13,13]);
    expect(letrero.totalEncendidas()).toBe(9);
});

test("Cuantas luces hay encendidas luego de encender las mismas luces dos veces",()=>{
    const letrero = new Letrero();
    letrero.encenderLuces([3,3],[4,4]);
    letrero.encenderLuces([3,3],[4,4]);
    expect(letrero.totalEncendidas()).toBe(4);
});

test("Cuantas luces hay encendidas luego de encender una misma luz dos veces pero el resto se enciende",()=>{
    const letrero = new Letrero();
    letrero.encenderLuces([3,3],[4,4]);
    letrero.encenderLuces([5,5],[4,4]);
    expect(letrero.totalEncendidas()).toBe(7);
});

test("Cuantas luces hay encendidas luego de encender y apagar una luz",()=>{
    const letrero = new Letrero();
    letrero.encenderLuces([3,3],[4,4]);
    letrero.apagarLuces([3,3],[4,4]);
    expect(letrero.totalEncendidas()).toBe(0); 
});