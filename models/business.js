'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Business extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Business.hasMany(models.Employee, {
        foreignKey: 'businessId'
      })
      Business.hasOne(models.Address, {
        foreignKey: 'businessId'
      })
    }
  }
  Business.init(
    {
      name: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Business',
      tableName: 'businesses'
    }
  )
  return Business
}
