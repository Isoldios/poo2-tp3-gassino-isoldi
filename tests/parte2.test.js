const Foco = require("../src/Foco");

test("La intensidad del foco sin modificar debe ser 1",()=>{
    const foco=new Foco();
    expect(foco.intensidad).toBe(1);
})