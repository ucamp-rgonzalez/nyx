const { nanoid } = require('nanoid');

module.exports = (fastify) => {
  fastify.get('/employees/:groupKey', async (request) => {
    const { groupKey } = request.params;
    return getEmployees(fastify, groupKey);
  });

  fastify.post('/employees/:groupKey', async (request) => {
    const { body: employee = {}, params } = request;
    const { groupKey } = params;
    const employees = await getEmployees(fastify, groupKey);
    employees.push({ ...employee, id: nanoid() });
    await updateEmployees(fastify, groupKey, employees);
    return {};
  });

  fastify.put('/employees/:groupKey/:id', async (request) => {
    const { body: employee = {}, params } = request;
    const { groupKey, id } = params;
    const employees = await getEmployees(fastify, groupKey);
    const index = employees.findIndex((e) => e.id === id);
    if (index !== -1) {
      employees[index].name = employee.name;
      employees[index].job = employee.job;
      await updateEmployees(fastify, groupKey, employees);
    }
    return {};
  });

  fastify.delete('/employees/:groupKey/:id', async (request) => {
    const { body: employee = {}, params } = request;
    const { groupKey, id } = params;
    const employees = await getEmployees(fastify, groupKey);
    const index = employees.findIndex((e) => e.id === id);
    if (index !== -1) {
      employees.splice(index, 1);
      await updateEmployees(fastify, groupKey, employees);
    }
    return {};
  });
};

async function updateEmployees(fastify, groupKey, employees) {
  const { redis } = fastify;
  await redis.set(groupKey, JSON.stringify(employees));
}

async function getEmployees(fastify, key) {
  const { redis } = fastify;
  const data = await redis.get(key);
  return JSON.parse(data) || [];
}
