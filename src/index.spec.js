const functions = require("./index")

// Describe para inicar bateria de testes
describe("Testes de funções", () =>{
    it("Should concat two strings", () =>{
        const result = functions.concat("Sarah","Sarah")
        expect(result).toBe("SarahSarah")
    })    
})