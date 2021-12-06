class Display{

    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            dividir: '%',
            multiplicar: 'x',
            restar: '-',
        }

    }        
    computar(tipo){
        this.tipoOperacion !== 'igual' && this.calculate();
        this.tipoOperacion = tipo
        this.valorAnterior = this.valorActual || this.valorAnterior
        this.valorActual = " ";
        this.printVal()
    }

    delete(){
        this.valorActual = this.valorActual.toString().slice(0,-1)
        this.printVal()
    }

    deleteAll(){
        this.valorActual = " "
        this.valorAnterior = " " 
        this.tipoOperacion = undefined
        this.printVal()
    }

    calculate(){
        const valorAnterior = parseFloat(this.valorAnterior)
        const valorActual = parseFloat(this.valorActual)

        if(isNan(valorActual) || isNan(valorAnterior)) return
        this.valorActual = this.calculadora[this.tipoOperacion](valorAnterior, valorActual)

    }

    agregarNumero(parametro) {
        if(parametro === '.' && this.valorActual.includes('.')) return 
        this.valorActual = this.valorActual.toString() + parametro.toString();
        this.printVal()
    }

    printVal() {
        this.displayValorActual.textContent = this.valorActual 
        //this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || 'pasa'}`
    }

}