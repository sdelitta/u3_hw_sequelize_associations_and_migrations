const { Business, Address, Employee } = require('./models')

const getAllBusinesses = async () => {
  try {
    const getBusinesses = await Business.findAll()
      return getBusinesses
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddress = async () => {
  try {
    const getAllAddresses = await Business.findAll({
      include: Address
      })
      return getAllAddresses
  } catch (error) {
    console.log(error)
  }
}

const getBusinessEmployees = async () => {
  try {
    const getAllEmployees = await Business.findAll({
      include: Employee
      })
      return getAllEmployees
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddressAndEmployee = async () => {
  try {
    const getAllAddressesAndEmployees = await Business.findAll({include: [Address, Employee]})
    return getAllAddressesAndEmployees
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getAllBusinesses,
  getBusinessAddress,
  getBusinessEmployees,
  getBusinessAddressAndEmployee
}
