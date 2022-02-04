class ContaBancaria {
    constructor(agencia, numero, tipo, saldo) {
        this.agencia = agencia
        this.numero = numero
        this.tipo = tipo
        this.saldo = 0
    }

    get saldo() {
        return this.saldo
    }

    set saldo(valor) {
        this._saldo = valor
    }

    sacar(valor) {
        if( valor > this._saldo) {
            return 'Operacao negada'
        }
        this._saldo = this._saldo - valor

        return this._saldo
    }

    depositar(valor) {
        this._saldo = this._saldo + valor

        return this._saldo
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero)
        this.tipo = 'conta corrente'
        this.cartaoCredito = cartaoCredito
    }

    get cartaoCredito() {
        return this._cartaoCredito
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero)
        this.tipo = 'conta poupanca'
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero)
        this.tipo = 'conta universitaria'
    }

    sacar(valor) {
        if(valor > 500) {
            return 'Operacao negada'
        }
        this._saldo = this._saldo - valor
    }
}