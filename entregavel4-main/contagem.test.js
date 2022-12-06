quantInts = 0
num = prompt('Digite numeros para saber quantos inteiros ha entre esses numeros').split(' ')
for (i = 0; i < num.length; i++) {
    if (!(num[i].includes('.') || num[i].includes(','))) quantInts++
}
alert(quantInts)

test('Numeros inteiros entre 1 e 10', () => {
    expect((10).toMatchObject(10))
})

test('Numeros inteiros entre 1 e 5', () => {
    expect((5).toMatchObject(5))
})
