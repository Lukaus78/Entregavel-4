fibonacci = [0, 1]
numeroContagem = prompt("Digite um numero")
for (i = 2; i < numeroContagem; i++) {
    fibonacci.push(fibonacci[(i - 1)] + fibonacci[(i - 2)])
}
alert(fibonacci)

test('Os primeiros 2 numeros do fibonacci', () => {
    expect(fibonacci(1).toMatchObject([0,1]))
})

test('Os primeiros 5 numeros do fibonacci', () => {
    expect(fibonacci(4).toMatchObject([0,1,1,2,3,5]))
})
