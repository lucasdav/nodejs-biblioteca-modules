import pegaArquivo from "./index.js";

// executando o comando node src/cli.js ./arquivos/texto.md o process.argv pega o caminho passado
const caminho = process.argv;

pegaArquivo(caminho[2]);
