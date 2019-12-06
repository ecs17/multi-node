const opt = {
    base: {
        demand: true,
        alias: 'b'
    }, limit: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
.command('listar', 'Imprime en consola la tabla de multiplicar', opt)
.command('crear', 'Genera un archivo con la tasbla de multiplicar',opt)
.help().argv;

module.exports = {
    argv
}