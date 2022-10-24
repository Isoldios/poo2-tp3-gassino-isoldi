const Letrero = require("../src/Letrero");

test("Cuantas luces hay encendidas",()=>{
    letrero = new Letrero();
    expect(letrero.totalEncendidas()).toBe(0);
});