import amqp from 'amqplib';

const amqpHost = 'amqp://localhost';

try {
    const connection = await amqp.connect(amqpHost);
    const channel = await connection.createChannel();

    const queue = 'hello';
    const message = 'Hello World';

    channel.assertQueue(queue, {
        durable: false
    });

    // send message
    channel.sendToQueue(queue, Buffer.from(message));
    console.log(' [x] Sent %s', message);

    // close the connection and exit
    setTimeout(() => {
        connection.close();
        process.exit(0);
    }, 1000);

}
catch (error) {
    console.log('Error: ', error);
}