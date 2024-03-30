import fs from 'fs';
import chalk from 'chalk';

function extraiLinks(texto) {
    // abaixo ogm significa g-global e m-multilinha
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({
        [captura[1]]: captura[2]
    }))
    return resultados;
}

function trataErro(erro) {
    console.log(erro)
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
}

// async/await
async function pegaArquivo(caminhoDoArquivo) {
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        console.log(extraiLinks(texto));
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


export default pegaArquivo;
