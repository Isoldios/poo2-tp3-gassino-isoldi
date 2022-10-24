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

