import CalculoPreparo from './CalculoPreparo';

test('constructor', () => {
    expect(new CalculoPreparo()).toBeTruthy();
})

//Properties
test('ufesp exists', () => {
    expect(new CalculoPreparo().ufesp).toBeDefined();
})

test('parcelaMinima exists', () => {
    expect(new CalculoPreparo().parcelaMinima).toBeDefined();
})

test('parcelaMaxima exists', () => {
    expect(new CalculoPreparo().parcelaMaxima).toBeDefined();
})

test('valorDaCausa exists', () => {
    expect(new CalculoPreparo().valorDaCausa).toBeDefined();
})

test('valorDaCondenacao exists', () => {
    expect(new CalculoPreparo().valorDaCondenacao).toBeDefined();
})

test('taxaInicial exists', () => {
    expect(new CalculoPreparo().taxaInicial).toBeDefined();
})

test('taxaPreparo exists', () => {
    expect(new CalculoPreparo().taxaPreparo).toBeDefined();
})

test('sentencaCondenatoria exists', () => {
    expect(new CalculoPreparo().sentencaCondenatoria).toBeDefined();
})
