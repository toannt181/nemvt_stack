'use strict';
const faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    const list = Array(10).fill(1).map((_, i) => ({
      company_name: faker.company.companyName(),
      customer_id: i,
    }))
    return queryInterface.bulkInsert('companies', list)
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('companies', null, {});
  }
};
