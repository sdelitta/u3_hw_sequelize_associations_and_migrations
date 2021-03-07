'use strict'
const { Business } = require('../models')
const faker = require('faker')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const b = await Business.findAll({ raw: true })
    const addresses = [...Array(10)].map((_, i) => ({
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      businessId: b[i].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('addresses', addresses)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('addresses')
  }
}
