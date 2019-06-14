// import MQ Lib
var amqp = require('amqplib/callback_api');

function sendData(feedProvider) {
    amqp.connect('amqp://localhost:5672', function (error0, connection) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function (error1, channel) {
            if (error1) {
                throw error1;
            }

            var queue = "feedProviderReceiver";
            var data = JSON.stringify(feedProvider);
            var msg = data;

            channel.assertQueue(queue, {
                durable: false
            });
            channel.sendToQueue(queue, Buffer.from(msg));

            console.log(" [x] Sent %s", msg);
        });
        setTimeout(function () {
            connection.close();
            //process.exit(0);
        }, 500);
    });

}


module.exports = sendData