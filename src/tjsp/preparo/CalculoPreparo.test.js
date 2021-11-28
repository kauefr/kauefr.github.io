import CalculoPreparo from './CalculoPreparo';

test('default constructor', () => {
    expect(new CalculoPreparo()).toBeTruthy();
})

test('property definitions', () => {
    const obj = new CalculoPreparo();
    expect(obj.parcelaMinima).toBeDefined();
    expect(obj.ufesp).toBeDefined();
    expect(obj.parcelaMaxima).toBeDefined();
    expect(obj.valorDaCausa).toBeDefined();
    expect(obj.valorDaCondenacao).toBeDefined();
    expect(obj.taxaInicial).toBeDefined();
    expect(obj.taxaPreparo).toBeDefined();
    expect(obj.sentencaCondenatoria).toBeDefined();
    expect(obj.custasIniciais).toBeDefined();
    expect(obj.custasPreparo).toBeDefined();
})

test('custom constructor', () => {
    let obj;
    expect(obj = new CalculoPreparo({ valorDaCausa: 123 })).toBeTruthy();
    expect(obj.valorDaCausa).toBe(123);
})

test('copy constructor', () => {
    const objA = new CalculoPreparo({ valorDaCausa: 123 });
    const objB = new CalculoPreparo(objA);
    expect(objA).toEqual(objB);
})

test('with method', () => {
    const objA = new CalculoPreparo({ valorDaCausa: 123 });
    const objB = new CalculoPreparo().with({ valorDaCausa: 123 });
    expect(objA).toEqual(objB);
})

test('valores mínimos das custas', () => {
    const obj = new CalculoPreparo({ valorDaCausa: 0, valorDaCondenacao: 0 });
    expect(obj.custasIniciais).toBe(obj.parcelaMinima);
    expect(obj.custasPreparo).toBe(obj.parcelaMinima);
})

test('valores máximos das custas', () => {
    const obj = new CalculoPreparo({ valorDaCausa: 99999999999, valorDaCondenacao: 99999999999 });
    expect(obj.custasIniciais).toBe(obj.parcelaMaxima);
    expect(obj.custasPreparo).toBe(obj.parcelaMaxima);
})

test('custas são recalculadas', () => {
    let obj = new CalculoPreparo({ valorDaCausa: 0, valorDaCondenacao: 0 });
    const custasIniciais = obj.custasIniciais;
    const custasPreparo = obj.custasPreparo;
    obj.valorDaCausa = 9999999;
    obj.valorDaCondenacao = 9999999;
    expect(custasIniciais).not.toBe(obj.custasIniciais);
    expect(custasPreparo).not.toBe(obj.custasPreparo);
})