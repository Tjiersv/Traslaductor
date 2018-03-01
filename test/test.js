const expect = require('chai').expect
const traslaductor = require('..').default

describe('#traslaductor', function () {
    
    it('Si la palabra termina con "ar", se le quitan esas dos letras', function (){
        const traslation = traslaductor("Programar") 
        expect(traslation).to.equal("Program")
    })
    it('Si la palabra inicia con "z", se le añade "pe" al final de la palabra', function (){
        const traslation = traslaductor("Zorro")
        const traslation2 = traslaductor("Zarpar")
        expect(traslation).to.equal("Zorrope")   
        expect(traslation2).to.equal("Zarppe")   
    })
    it('Si la palabra traducida tiene más de 10 letras, se debe dividir a la mitad y unir por un guion', function (){
        const traslation = traslaductor("Paralelepipedo")
        expect(traslation).to.equal("Paralel-epipedo")
    })
    it('Si la palabra original es un palíndromo, ninguna regla cuenta y la palabra se devuelve igual intercalando mayusculas y minusculas', function (){
        const traslation = traslaductor("Sometemos")
        expect(traslation).to.equal("SoMeTeMoS")
    })
    
})