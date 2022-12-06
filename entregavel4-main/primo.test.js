primo = true
function ePrimo(num) {
    for (i = 2; i < num; i++) {
        if (num % i == 0) {
            primo = false
            break
        }
    }
    if (primo) {
        alert('E primo')
    }
    else {
        alert('Nao e primo')
    }
}

var numero = prompt('Digite um numero para saber se ele e primo')
ePrimo(numero)

test('Numero 3 e primo', () => {
    expect(ePrimo(3).toMatchObject(true))
})

test('Numero 4 nao e primo', () => {
    expect(ePrimo(4).toMatchObject(true))
})
