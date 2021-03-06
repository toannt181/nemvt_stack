'use strict';
const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = await bcrypt.hash('123456', 10)
    return queryInterface.bulkInsert('users', [
      {
        email: 'admin@example.com',
        password,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        email: 'nguyen.trong.toan@framgia.com',
        password,
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
