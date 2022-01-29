function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade`
}

const pessoa1 = {
    nome: 'maria',
    idade: 30
}

const pessoa2 = {
    nome: 'carla',
    idade: 26
}

const animal = {
    nome: 'fiona',
    idade: 5,
    raca: 'pug'
}

// usando call
console.log(calculaIdade.call(pessoa1, 30))

// usando apply
console.log(calculaIdade.apply(animal, [4]))