'use strict'
const faker = require('faker')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const businesses = [...Array(10)].map((_) => ({
      name: faker.company.companyName(),
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('businesses', businesses)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('businesses')
  }
}
