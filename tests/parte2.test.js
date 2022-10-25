const Foco = require("../src/Foco");

test("La intensidad del foco sin modificar debe ser 0",()=>{
    const foco=new Foco();
    expect(foco.intensidad).toBe(0);
})