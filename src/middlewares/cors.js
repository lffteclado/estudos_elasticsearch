function cors (req, res, next){
/*
O cabeçalho de resposta Access-Control-Allow-Origin determina se um recurso
pode ser compartilhado de acordo com a origem dada. Neste caso estamos compartilhando
os recursos com qualquer origem, mas se fosse necessário poderíamos compartilhá-los
com um endereço específico informando uma URL ou um padrão de URL:
 */
    res.header('Access-Control-Allow-Origin', '*');
/*
No contexto de uma requisição feita com controle de acesso HTTP,
o cliente deve utilizar um cabeçalho Access-Control-Request-Headers
para determinar quais cabeçalhos devem ser utilizados na requisição e,
em concordância, o servidor responde com o cabeçalho Access-Control-Allow-Headers.
Nesse caso os cabeçalho são Origin, X-Requested-With, Content-Type e Accept.
De acordo com a documentação do HTTP, Content-Type e Accept não são necessários nesta listagem,
mas uma vez que a documentação do Express recomenda a sua inclusão, faremos dessa forma:
*/
    res.header(
        'Acces-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );

    next();

}

module.exports = cors;