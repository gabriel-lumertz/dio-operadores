const alunos = [
    {
        nome: 'joao',
        nota: '5',
        turma: '1b'
    },
    {
        nome: 'sofia',
        nota: '9',
        turma: '1b'
    },
    {
        nome: 'paulo',
        nota: '6',
        turma: '2c'
    },
    {
        nome: 'miguel',
        nota: '3',
        turma: '2c'
    },
]

function alunosAprovados(arr, media) {
    let aprovados =[]
    
    for(let i = 0; i < arr.length; i++) {

        const {nota, nome} = arr[i]

        if(nota >= media) {
            aprovados.push(nome)
        }
    }
    return aprovados
}

console.log(alunosAprovados(alunos, 6))