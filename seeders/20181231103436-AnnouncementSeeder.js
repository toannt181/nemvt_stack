'use strict';
const faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    const list = Array(10).fill(1).map(() => ({
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraph(),
      created_at: faker.date.past(),
      updated_at: faker.date.past(),
    }))
    return queryInterface.bulkInsert('announcements', list)
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('announcements', null, {});
  }
};
