const mongoose = require ('mongoose')
const Promotion = require ('../models/Promotion.js')
const promotions = require('../data/promotions')
const Contact = require ('../models/Contact.js')
const contacts = require('../data/contacts')
const Package = require ('../models/Package.js')
const packages = require('../data/packages')
const User = require ('../models/User.js')
const users = require('../data/users')
const connectDB  = require ('../config/db.js')
const dotenv = require('dotenv')
dotenv.config()

connectDB()

const importData = async () => {
  try {

    
    //delete existing data
    await Promotion.deleteMany()
    await Contact.deleteMany()
    await Package.deleteMany()
    await User.deleteMany()

    //add new data
    
    await User.insertMany(users)
    //await Promotion.insertMany(promotions)
    //await Contact.insertMany(contacts)
    //await Package.insertMany(packages)

    console.log('Data Imported!')
    process.exit()
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    
    await Promotion.deleteMany()
    await Contact.deleteMany()
    await Package.deleteMany()
    //await User.deleteMany()
  
    console.log('Data Destroyed!')
    process.exit()
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
