import amqp, { ConsumeMessage } from 'amqplib';

const amqpHost = 'amqp://localhost';

try {
    const connection = await amqp.connect(amqpHost);
    const channel = await connection.createChannel();

    const queue = 'hello';
    channel.assertQueue(queue, {
        durable: false
    });

    console.log(' [*] Waiting for messages in %s. To exit press CTRL+C', queue);
    channel.consume(queue, (msg: ConsumeMessage | null) => {
        if (msg) {
            console.log(' [x] Received %s', msg.content.toString());
        }
    }, { noAck: true });
}
catch (error) {

}