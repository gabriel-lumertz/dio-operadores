// primeira solução

function verifica(string) {
    if(!string) return

    return string.split('').reverse().join('') === string
}

console.log(verifica('gato'))

// segunda solução

function verifica2(string) {
    if (!string) return 'string inexistente'

    for(let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length - 1 - i]) {
            return false
        }
    }
    return true
}

console.log(verifica2('abba'))