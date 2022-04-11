'use strict';

module.exports = {
  up : (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'employees', 'businessId', {type: Sequelize.INTEGER}
    )
  },

  down : (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'employees', 'businessId'
    )
  }
};
