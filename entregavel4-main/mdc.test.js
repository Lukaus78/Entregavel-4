function MDC() {
    let mdc
    num = prompt('Digite dois numeros pra saber seu MDC').split(' ')
    for (i = 0; i < num.length; i++) {
        num[i] = parseInt(num[i])
    }
    a = num[0]
    b = num[1]

    if (a < b) {
        c = a
        a = b
        b = c
    }

    for (i = 1; i < a; i++) {
        if (a % i == 0 && b % i == 0) {
            mdc = i;
        }
    }

    return(mdc)
}

test("MDC entre 5 e 10", () => {
    expect((MDC(5,10)).toMatchObject(5))
})

test("MDC entre 1 e 10", () => {
    expect((MDC(1,10)).toMatchObject(1))
})
