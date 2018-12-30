'use strict';
const faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    const list = Array(100).fill(1).map(() => ({
      name: faker.name.findName(),
      code: faker.random.number(),
      pic_name: faker.name.jobTitle(),
      created_at: new Date(),
      updated_at: new Date(),
    }))
    return queryInterface.bulkInsert('customers', list)
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('customers', null, {});
  }
};
