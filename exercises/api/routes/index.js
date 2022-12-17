function loadRoutes(fastify) {
  require('./employees')(fastify);
}

module.exports = loadRoutes;
