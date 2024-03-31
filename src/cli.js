import chalk from "chalk";
import fs from 'fs';
import pegaArquivo from "./index.js";
import listaValidada from "./http-validacao.js";

// abaixo executando o comando node src/cli.js ./arquivos/texto.md o process.argv pega o caminho passado
const caminho = process.argv;

function imprimeLista(valida, resultado, identificador = '') {

    if (valida) {
        console.log(
            chalk.yellow('lista validada'),
            chalk.black.bgGreen(identificador),
            listaValidada(resultado));
    } else {
        console.log(
            chalk.yellow('lista de links'),
            chalk.black.bgGreen(identificador),
            resultado);
    }



}

async function processaTexto(argumentos) {
    const caminho = argumentos[2];
    // abaixo é executado no comando npm run cli:valida
    const valida = argumentos[3] === '--valida';

    try {
        fs.lstatSync(caminho);
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.log('arquivo ou diretório não existe');
            return;
        }
    }

    if (fs.lstatSync(caminho).isFile()) {
        const resultado = await pegaArquivo(caminho);
        imprimeLista(valida, resultado)
    } else if (fs.lstatSync(caminho).isDirectory()) {
        const arquivos = await fs.promises.readdir(caminho)
        arquivos.forEach(async (nomeDeArquivo) => {
            const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`);
            imprimeLista(valida, lista, nomeDeArquivo)
        })
    }
}

processaTexto(caminho);