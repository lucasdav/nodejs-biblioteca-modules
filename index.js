import fs from 'fs';
import chalk from 'chalk';

function trataErro(erro) {
    console.log(erro)
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
}

// async/await
async function pegaArquivo(caminhoDoArquivo) {
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        console.log(chalk.green(texto))
    } catch (error) {
        trataErro(error)
    } finally {
        console.log(chalk.yellow('operação concluída'));
    }


}


//promessas com them()
// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = 'utf-8';
//     fs.promises
//         .readFile(caminhoDoArquivo, encoding)
//         .then((texto) => console.log(chalk.green(texto)))
//         .catch(trataErro)
// }


pegaArquivo('./arquivos/texto.md');

// \[[^[\]]*?\]

// \(https?:\/\/[^\s?#.].[^\s]*\)