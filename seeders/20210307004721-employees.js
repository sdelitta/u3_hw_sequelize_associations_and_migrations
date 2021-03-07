'use strict'
const { Business } = require('../models')
const faker = require('faker')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const b = await Business.findAll({ raw: true })
    const employees = [...Array(200)].map((_) => {
      let r = Math.floor(Math.random() * b.length)
      return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        businessId: b[r].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })
    await queryInterface.bulkInsert('employees', employees)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('employees')
  }
}
