//Blocos estruturais até linha 9

//Incluindo uma biblioteca (do http)
const http = require('http');
const url = require('url'); //(from NPNJS)

//Definição do IP e porta onde o código será executado (endereço/url)
const hostname = '127.0.0.1';
const port = 3000;

//implementação da regra de negócios(assunto principal)
const server = http.createServer((req, res) => { //Cria servidor em que executa o bloco abaixo ao acessar o localhost 3000

    //Pegar a pergunta na url
    console.log(req.url); //impressão no PowerShell 
    //Verificar a pergunta e escolher uma resposta
    //Retornar a resposta escolhida

    res.statusCode = 200; //Código HTTP ("ok")
    res.setHeader('Content-Type', 'text/plain'); //código
    res.end('Hello, World LEIAA\n'); //impressão no navegador
})

//Bloco de sustentação (após toda a configuração acima, roda o servidor) -- EXECUÇÃO --
server.listen(port, hostname, () => {
    console.log(`Server running http://${hostname}:${port}/`);
});