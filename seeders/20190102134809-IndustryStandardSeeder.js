'use strict';
const sequel = require('sequelize')
const script = require('../sample/script')

module.exports = {
  up: (queryInterface, Sequelize) => {
    script()
    return Promise.resolve()
  },

  down: (queryInterface, Sequelize) => {
    return Promise.resolve()
  }
};
