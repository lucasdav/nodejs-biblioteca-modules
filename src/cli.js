import chalk from "chalk";
import pegaArquivo from "./index.js";

// executando o comando node src/cli.js ./arquivos/texto.md o process.argv pega o caminho passado
const caminho = process.argv;

async function processaTexto(caminho) {
    const resultado = await pegaArquivo(caminho[2]);
    console.log(chalk.yellow('lista de links ', resultado));
}

processaTexto(caminho);