var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost:5672', function (err, conn) {
    conn.createChannel(function (err, ch) {
        var q = 'push';
        var msg = 'envio de push 123!';
        ch.assertQueue(q, { durable: false });     
        ch.sendToQueue(q, new Buffer(msg));
        console.log(" [x] Sent %s", msg);
    });
    setTimeout(function () { conn.close(); process.exit(0) }, 500);
});


// Descricao das linhas

// 1: importação da biblioteca amqplib
// 3: conexão com o RabbitMQ
// 4: criação de um novo canal
// 5: nome do canal
// 6: msg default para ser enviada
// 7: passando o nome da fila para conexão do RabbitMQ
// 8: O RabbitMQ trabalha com Buffer, estou passando a msg para ele e para qual fila ela deve ser enviada