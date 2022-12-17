const fastify = require('fastify')({ logger: true });

const loadRoutes = require('./routes');

const start = async () => {
  try {
    await fastify.register(require('@fastify/redis'), {
      host: '0.0.0.0',
      port: 6379,
    });
    loadRoutes(fastify);
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
