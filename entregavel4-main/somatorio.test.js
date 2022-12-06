numeros = []
somatorio = 0
var input = prompt('Digite numeros a serem somados')
numeros = input.split(' ')
for (i = 0; i < numeros.length; i++) numeros[i] = parseInt(numeros[i])
for (i = 0; i < numeros.length; i++) somatorio = somatorio + numeros[i]
alert('Somatorio = ' + somatorio)

test('Somatorio entre 2 e 5 e igual a 7', () => {
    expect((2+7).toMatchObject(7))
})

test('Somatorio entre 3 e 7 e igual a 10', () => {
    expect((3+7).toMatchObject(10))
})
