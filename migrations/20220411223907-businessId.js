'use strict';

module.exports = {
  up : (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'addresses', 'businessId', {type: Sequelize.INTEGER}
    )
  },

  down : (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'adresses', 'businessId'
    )
  }
};
