import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092'],
});

const producer = kafka.producer();

(async () => {
  await producer.connect();
  await producer.send({
    topic: 'meu-topico',
    messages: [
      { value: 'Olá, Kafka!' },
      { value: 'Esta é outra mensagem.' },
    ],
  });
  console.log('Mensagens enviadas!');
  await producer.disconnect();
})();