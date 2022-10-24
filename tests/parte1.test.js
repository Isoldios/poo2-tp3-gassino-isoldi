const Letrero = require("../src/Letrero");

test("Cuantas luces hay encendidas",()=>{
    const letrero = new Letrero();
    expect(letrero.totalEncendidas()).toBe(0);
});

test("Cuantas luces hay encendidas luego de encender 1",()=>{
    const letrero = new Letrero();
    letrero.encenderLuces();
    expect(letrero.totalEncendidas()).toBe(1);
});