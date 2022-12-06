function qs(vet) {
    quickSort(vet, 0, vet.length - 1);
}

function quickSort(vet, ini, fim) {
    var i = ini;
    var f = fim;
    var m = Math.floor((i + f) / 2);

    while (i < f) {
        while (vet[i] < vet[m])
            i++;

        while (vet[f] > vet[m])
            f--;

        if (i <= f) {
            var temp = vet[i];
            vet[i] = vet[f];
            vet[f] = temp;
            i++;
            f--;
        }
    }

    if (f > ini)
        quickSort(vet, ini, f);

    if (i < fim)
        quickSort(vet, i, fim);
}

arr = [2, 5, 3, 4, 11, 9]
alert('array antes do quicksort -> ' + arr)
qs(arr)
alert('array depois do quicksort -> ' + arr)

test('Teste 1 quicksort', () => {return true})
test('Teste 2 quicksort', () => {return true})

