const { Business, Address, Employee } = require('./models')

const getAllBusinesses = async () => {
  try {
    const b = await Business.findAll()
    //  Should find all businesses
    return b
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddress = async () => {
  try {
    const b = await Business.findAll({ include: [Address] })
    // Should find all businesses and their associated address
    return b
  } catch (error) {
    console.log(error)
  }
}

const getBusinessEmployees = async () => {
  try {
    const b = await Business.findAll({ include: [Employee] })
    // Should find all businesses with and associated employees
    return b
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddressAndEmployee = async () => {
  try {
    const b = await Business.findAll({ include: [Address, Employee] })
    //  Find all businesses and include the address and empoyees
    // The address shoudl come before the employee
    return b
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
