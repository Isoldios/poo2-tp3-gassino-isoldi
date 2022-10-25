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