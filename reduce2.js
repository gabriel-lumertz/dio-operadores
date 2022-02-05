const lista = [
    {
        name: 'sabao',
        preco: 30
    },
    {
        name: 'cereal',
        preco: 12
    },
    {
        name: 'toalha',
        preco: 30
    }
]

const saldoDisponivel = 100

function calculasaldo(saldoDisponivel, lista) {
    return lista.reduce(function (prev, current) {
        return prev - current.preco
    }, saldoDisponivel)
}

console.log(calculasaldo(saldoDisponivel, lista))