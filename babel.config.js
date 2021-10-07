// arquivo para a configuração do babel
// os comandos para a instalação das dependencias necessárias para a utilização dele são
// yarn add @babel/core @babel/cli @babel/preset-env @babel/preset-react babel-loader @babel/preset-typescript -D
// @babe/core diblioteca do babel, 99% das funcionalidades do babel estão nela
// @babel/cli para conseguir executar o babel através da linha de comando. com ele, podemos utilizar o yarn babel -h para comandos. com ele instalado, no terminal conseguiremos rodar os comandos do babel, então, rodar o comando para gerar o arquivo bundle.js, que contém as conversões que o babel fará, e também o webpack irá fazer as conversões dele nesse mesmo arquivo. rodamos yarn babel caminhoArquivoEntrada --out-file caminhoArquivoSaida, ficando yarn babel src src/index.jsx --out-file dist/bundle.js
// @babel/preset-env biblioteca do babel que identifica qual o ambiente que a minha aplicação está sendo executada para converter o código da melhor maneira possível
// @babel/preset-react para que não precisemos colocar import react from "react" em todos os arquivos jsx
// babel-loader faz a integração entre o babel e o webpack. a utilização do babel-loader acontece no arquivo do webpack
//@babel/preset-typescript dependencia do babel para utilização do typescript
//arquivos gerados pelo babel, por convenção levam o nome de bundle.js
//após as instalações das dependencias do babel, para criar o arquivo bundle digite yarn babel src/index.tsx --out-file dist/bundle.js

module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-typescript",
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
  ],
};
